import React, { useEffect } from "react";
import { Column, ColumnCenter } from "../../base/Layout/columns";
import { useState } from "react";
import OutlinedCard from "../../base/Cards/OutlinedCard";
import { RowBetween } from "../../base/Layout/rows";
import SearchRounded from "../../base/Components/Search";
import { getAllLists } from "../../logic/RecipesLogic";
import AddRecipesList from "./components/AddRecipesList";
import { useNavigate } from "react-router-dom";
import { GridCols3 } from "../../base/Layout/grids";
import { auth, signInWithGoogle } from "../../helpers/AuthHelper";
import OutlinedButton from "../../base/Buttons/OutlinedButton";

export default function Dashboard({}) {
  const navigate = useNavigate();
  const [lists, setLists] = useState(null);
  const [addList, showAddList] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (lists === null) {
      getAllLists().then(setLists);
    }
  }, [lists]);

  return (
    <div className="mx-auto w-full space-y-10 max-w-2xl lg:max-w-7xl p-5 lg:p-10">
      <RowBetween className="">
        <SearchRounded onChange={setSearch} />
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
      </RowBetween>
      <GridCols3>
        {lists &&
          lists
            .filter((l) => l.data().name.toLowerCase().includes(search.toLowerCase()))
            .map((list, k) => (
              <div
                key={list.id}
                className="card hover:rounded-4xl cursor-pointer bg-secondary-color hover:bg-secondary-dark text-secondary-on h-52 hover:shadow transition-all duration-500"
                onClick={() => navigate("/recipes/" + list.id)}
              >
                <Column className="space-y-5">
                  <h1>{list.data().name}</h1>
                  <p className="text-base pr-10">{list.data().description}</p>
                </Column>
              </div>
            ))}
        {auth.currentUser && auth.currentUser.email === "dia.calvelo.nicolas@gmail.com" && (
          <OutlinedCard
            className="cursor-pointer group hover:rounded-4xl h-52 hover:shadow transition-all duration-500"
            onClick={() => showAddList(true)}
          >
            <ColumnCenter className="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 group-hover:h-14 group-hover:w-14 transition-all duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <h4>Créer liste</h4>
            </ColumnCenter>
          </OutlinedCard>
        )}
      </GridCols3>
      {addList && <AddRecipesList open={addList} setOpen={showAddList} onCreated={() => setLists(null)} />}
    </div>
  );
}
