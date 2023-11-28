import React from "react";
import { Column } from "../../../base/Layout/columns";
import { RowBetween } from "../../../base/Layout/rows";
import IconButton from "../../../base/Buttons/IconButton";

export default function RecipeCard({ recipe, onEdit }) {
  return (
    <div className="flex flex-col max-w-4xl w-full border border-text-color rounded-4xl">
      <div className="relative">
        <img src={recipe.data().img} className="w-full h-64 object-cover rounded-t-4xl" />
        <div className="absolute bottom-0 flex justify-between w-full px-5 pt-8 pb-4 text-white bg-gradient-to-t from-black to-transparent">
          <h2>{recipe.data().name}</h2>
          <IconButton onClick={onEdit}>
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </IconButton>
        </div>
      </div>
      <Column className="p-5 space-y-2 w-full">
        <RowBetween className="space-x-5 items-start">
          <Column className="space-y-4 p-2 w-3/5">
            <h4>Preparation :</h4>
            <p className="italic text-sm px-2">{recipe.data().preparation}</p>
          </Column>
          <Column className="border-l space-y-4 border-text-light p-2 w-2/5">
            <h4>Ingredients :</h4>
            <ul className="list-disc px-4 text-sm">
              {recipe
                .data()
                .ingredients.sort((a, b) => (b.essential ? 1 : -1))
                .map((ingredient, k) => (
                  <li key={"ingredient_" + k}>
                    <p className={ingredient.essential ? "font-semibold" : ""}>{ingredient.name}</p>
                  </li>
                ))}
            </ul>
          </Column>
        </RowBetween>
      </Column>
    </div>
  );
}
