import React, { useEffect, useState } from "react";
import GenericModal from "../../../base/Dialogs/GenericModal";
import Form from "../../../base/Forms/Form";
import { Column } from "../../../base/Layout/columns";
import FormInput from "../../../base/Forms/FormInput";
import { Row, RowBetween, RowEnd } from "../../../base/Layout/rows";
import FormTextarea from "../../../base/Forms/FormTextarea";
import OutlinedButton from "../../../base/Buttons/OutlinedButton";
import IconButton from "../../../base/Buttons/IconButton";
import { UpdateDocument, createDocument } from "../../../helpers/FirestoreHelper";
import { addToastError } from "../../../base/Components/Toasts";
import Switch from "../../../base/Forms/Switch";
import FilledButton from "../../../base/Buttons/FilledButton";
import { addRecipeToList } from "../../../logic/RecipesLogic";
import { useParams } from "react-router-dom";

function getNewRecipe() {
  return { name: "", img: "", portions: 1, preparation: "", ingredients: [getNewIngredient()] };
}

function getNewIngredient() {
  return { name: "", essential: false };
}

export default function AddRecipe({ open, setOpen, onCreated, recipe }) {
  const id = useParams().id;
  const [newRecipe, setNewRecipe] = useState(recipe && recipe.id ? recipe.data() : getNewRecipe());
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    if (recipe && recipe.id) {
      await UpdateDocument("recipes/" + recipe.id, { ...newRecipe })
        .then(onCreated)
        .catch((err) => {
          addToastError(err.message);
          setLoading(false);
        });
    } else {
      await createDocument("recipes", { ...newRecipe }, false)
        .then(async (res) => {
          if (id != undefined) await addRecipeToList(id, res.id);
          onCreated(res);
        })
        .catch((err) => {
          addToastError(err.message);
          setLoading(false);
        });
    }

    setNewRecipe(getNewRecipe());
    setLoading(false);
    setOpen(false);
  }

  function changeValue(e) {
    setNewRecipe({ ...newRecipe, [e.target.id]: e.target.value });
  }
  function changeIngredientValue(index, key, value) {
    setNewRecipe({
      ...newRecipe,
      ingredients: [
        ...newRecipe.ingredients.map((i, k) => {
          return index == k ? { ...i, [key]: value } : i;
        }),
      ],
    });
  }

  return (
    <GenericModal
      open={open}
      setOpen={setOpen}
      showFooter={false}
      loading={loading}
      title="Ajouter une nouvelle recette"
      actionButtonType="submit"
    >
      <Form onSubmit={handleSave}>
        <Row className="space-x-4 p-5">
          <h3>Informations</h3>
          <hr className="w-full" />
        </Row>
        <Column className="px-10 pb-5 space-y-10">
          <FormInput
            id="name"
            title={"Nom de la recette"}
            minLength={3}
            maxLength={40}
            required={true}
            placeholder="Guacamole..."
            value={newRecipe.name}
            setValue={changeValue}
          />
          <RowBetween>
            <Row className="space-x-2">
              <div
                className={
                  "h-20 w-28 rounded-xl flex justify-center items-center " +
                  (newRecipe.img == "" ? " border border-dashed border-text-color" : "")
                }
              >
                {newRecipe.img === "" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                )}
                {newRecipe.img != "" && <img src={newRecipe.img} className="w-full h-full object-cover rounded-2xl" />}
              </div>
              <FormInput
                id="img"
                title={"Image"}
                required={true}
                type="url"
                placeholder="https://images.unsplash..."
                value={newRecipe.img}
                setValue={changeValue}
              />
            </Row>
            <FormInput
              id="portions"
              title={"Nombre de portions"}
              min={1}
              required={true}
              type="number"
              value={newRecipe.portions}
              setValue={changeValue}
            />
          </RowBetween>
          <FormTextarea
            id="preparation"
            title={"Preparation de la recette"}
            maxLength={650}
            required={true}
            placeholder="Préchauffer le four à 200º. Ajouter l'huile dans une poêle..."
            value={newRecipe.preparation}
            setValue={changeValue}
          />
        </Column>
        <Row className="space-x-4 p-5">
          <h3>Ingredients</h3>
          <hr className="w-full" />
        </Row>
        <Column className="px-10 pb-5 space-y-10">
          {newRecipe.ingredients.map((ingredient, index) => (
            <RowBetween key={"ingredient_" + index} className="space-x-4">
              <FormInput
                title={"Ingredient " + index.toString()}
                minLength={3}
                maxLength={70}
                required={true}
                className="w-full"
                placeholder="1/2 oignon haché..."
                value={ingredient.name}
                setValue={(e) => changeIngredientValue(index, "name", e.target.value)}
              />
              <Switch
                label="Ingredient indispensable ?"
                className="w-3/5"
                selected={ingredient.essential}
                setSelected={(e) => changeIngredientValue(index, "essential", e)}
              />
              <IconButton
                tooltip="Supprimer"
                onClick={() =>
                  setNewRecipe({
                    ...newRecipe,
                    ingredients: [...newRecipe.ingredients.filter((i, k) => index != k)],
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </IconButton>
            </RowBetween>
          ))}
          <RowEnd>
            <OutlinedButton
              onClick={() =>
                setNewRecipe({
                  ...newRecipe,
                  ingredients: [...newRecipe.ingredients, getNewIngredient()],
                })
              }
            >
              Ajouter ingredient
            </OutlinedButton>
          </RowEnd>
        </Column>
        <RowEnd className="p-5 border-t border-text-color space-x-2 ">
          <OutlinedButton onClick={() => setOpen(false)}>Annuler</OutlinedButton>
          <FilledButton type="submit">Enregistrer</FilledButton>
        </RowEnd>
      </Form>
    </GenericModal>
  );
}
