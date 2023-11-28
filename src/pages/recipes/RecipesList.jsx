import React, { useEffect } from "react";
import { Column } from "../../base/Layout/columns";
import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import { Row, RowBetween, RowEnd } from "../../base/Layout/rows";
import SearchRounded from "../../base/Components/Search";
import { getList } from "../../logic/RecipesLogic";
import Spinner from "../../base/Components/Spinner";
import OutlinedButton from "../../base/Buttons/OutlinedButton";
import AddRecipe from "./components/AddRecipe";
import OutlinedIconButton from "../../base/Buttons/OutlinedIconButton";
import AddRecipesList from "./components/AddRecipesList";
import { useNavigate, useParams } from "react-router-dom";
import IconButton from "../../base/Buttons/IconButton";
import { auth, signInWithGoogle } from "../../helpers/AuthHelper";

export default function RecipesList({}) {
  const id = useParams().id;
  const navigate = useNavigate();
  const [list, setList] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [editList, showEditList] = useState(false);
  const [addRecipe, showAddRecipe] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (recipes === null || list === null) {
      getList(id).then((res) => {
        setList(res.list);
        setRecipes(res.recipes);
      });
    }
  }, [list, recipes]);

  return (
    <div className="mx-auto w-full space-y-10 max-w-2xl lg:max-w-7xl p-5 lg:p-10">
      <RowBetween className="">
        <Row className="space-x-2 w-full">
          <OutlinedIconButton onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </OutlinedIconButton>
          <SearchRounded onChange={setSearch} />
        </Row>
        {!auth.currentUser && (
          <OutlinedButton onClick={() => signInWithGoogle()} hasIcon={true}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <p>S'identifier</p>
          </OutlinedButton>
        )}
        {auth.currentUser && auth.currentUser.email === "dia.calvelo.nicolas@gmail.com" && (
          <RowEnd className="space-x-2">
            <IconButton tooltip="Paramètres" onClick={() => showEditList(true)}>
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </IconButton>
            <OutlinedButton hasIcon={true} onClick={() => showAddRecipe(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p>Ajouter recette</p>
            </OutlinedButton>
          </RowEnd>
        )}
      </RowBetween>
      <Column className="space-y-5 items-center w-full">
        {!recipes && <Spinner />}
        {recipes &&
          recipes
            .filter(
              (r) =>
                r.data().name.toLowerCase().includes(search.toLowerCase()) ||
                r.data().preparation.toLowerCase().includes(search.toLowerCase())
            )
            .map((r) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                onEdit={() => {
                  showAddRecipe(true);
                  setEditRecipe(r);
                }}
              />
            ))}
      </Column>
      {editList && (
        <AddRecipesList open={editList} setOpen={showEditList} onCreated={() => setList(null)} list={list} />
      )}
      {addRecipe && (
        <AddRecipe open={addRecipe} setOpen={showAddRecipe} onCreated={() => setRecipes(null)} recipe={editRecipe} />
      )}
    </div>
  );
}
