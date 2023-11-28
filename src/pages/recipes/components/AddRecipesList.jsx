import React, { useEffect, useState } from "react";
import GenericModal from "../../../base/Dialogs/GenericModal";
import Form from "../../../base/Forms/Form";
import { Column } from "../../../base/Layout/columns";
import FormInput from "../../../base/Forms/FormInput";
import { Row, RowEnd } from "../../../base/Layout/rows";
import FormTextarea from "../../../base/Forms/FormTextarea";
import OutlinedButton from "../../../base/Buttons/OutlinedButton";
import { UpdateDocument, createDocument } from "../../../helpers/FirestoreHelper";
import { addToastError } from "../../../base/Components/Toasts";
import FilledButton from "../../../base/Buttons/FilledButton";
import { GridCols3 } from "../../../base/Layout/grids";
import Checkbox from "../../../base/Forms/Checkbox";
import { getAllRecipes } from "../../../logic/RecipesLogic";

function getNewList() {
  return { name: "", description: "", recipes: [] };
}

export default function AddRecipesList({ open, setOpen, onCreated, list = undefined }) {
  const [newList, setNewList] = useState(list ? list.data() : getNewList());
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (recipes === null) {
      getAllRecipes().then(setRecipes);
    }
  }, [recipes]);

  async function handleSave() {
    setLoading(true);
    if (list != undefined) {
      await UpdateDocument("recipes_lists/" + list.id, { ...newList })
        .then(onCreated)
        .catch((err) => {
          addToastError(err.message);
          setLoading(false);
        });
    } else {
      await createDocument("recipes_lists", { ...newList }, false)
        .then(onCreated)
        .catch((err) => {
          addToastError(err.message);
          setLoading(false);
        });
    }
    setNewList(getNewList());
    setLoading(false);
    setOpen(false);
  }

  function changeValue(e) {
    setNewList({ ...newList, [e.target.id]: e.target.value });
  }

  function handleAddRecipe(recipe, selected) {
    let edit = { ...newList };
    if (selected) {
      edit.recipes.push(recipe.ref);
    } else {
      edit.recipes = edit.recipes.filter((r) => r.path !== recipe.ref.path);
    }
    setNewList(edit);
  }

  return (
    <GenericModal
      open={open}
      setOpen={setOpen}
      showFooter={false}
      loading={loading}
      title={list ? "Editer liste" : "Ajouter une nouvelle liste"}
    >
      <Form onSubmit={handleSave} className="flex flex-col justify-between h-full">
        <Column>
          <Row className="space-x-4 p-5">
            <h3>Informations</h3>
            <hr className="w-full" />
          </Row>
          <Column className="px-10 pb-5 space-y-10">
            <FormInput
              id="name"
              title={"Nom"}
              minLength={3}
              maxLength={40}
              required={true}
              placeholder="Repas lourdes..."
              value={newList.name}
              setValue={changeValue}
            />
            <FormTextarea
              id="description"
              title={"Description"}
              maxLength={650}
              required={true}
              placeholder="Une liste de recettes pour..."
              value={newList.description}
              setValue={changeValue}
            />
          </Column>
          <Row className="space-x-4 p-5">
            <h3>Recettes</h3>
            <hr className="w-full" />
          </Row>
          <GridCols3 className="h-full p-10">
            {recipes &&
              recipes.map((recipe) => (
                <Row key={"recipe_" + recipe.id} className="space-x-2">
                  <Checkbox
                    defaultSelected={newList.recipes.find((e) => e.id === recipe.id)}
                    onChange={(selected) => handleAddRecipe(recipe, selected)}
                  />
                  <p>{recipe.data().name}</p>
                </Row>
              ))}
          </GridCols3>
        </Column>
        <RowEnd className="p-5 border-t border-text-color space-x-2 ">
          <OutlinedButton onClick={() => setOpen(false)}>Annuler</OutlinedButton>
          <FilledButton type="submit">Enregistrer</FilledButton>
        </RowEnd>
      </Form>
    </GenericModal>
  );
}
