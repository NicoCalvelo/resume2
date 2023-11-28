import { UpdateDocument, getCollection, getDocument, getDocumentReference } from "../helpers/FirestoreHelper";
import { arrayUnion } from "firebase/firestore";

export function getAllRecipes() {
  return new Promise(async (resolve, reject) => {
    let docs = await getCollection("recipes");

    resolve(docs);
  });
}

export function getAllLists() {
  return new Promise(async (resolve, reject) => {
    let docs = await getCollection("recipes_lists");

    resolve(docs);
  });
}

export function getList(listId) {
  return new Promise(async (resolve, reject) => {
    let list = await getDocument("recipes_lists/" + listId);

    let recipes = [];

    for (let index = 0; index < list.data().recipes.length; index++) {
      let recipe = await getDocument("", list.data().recipes[index]);
      recipes.push(recipe);
    }

    resolve({ list: list, recipes: recipes });
  });
}

export function addRecipeToList(listId, recipeId) {
  return new Promise(async (resolve, reject) => {
    let res = await UpdateDocument("recipes_lists/" + listId, {
      recipes: arrayUnion(getDocumentReference("recipes/" + recipeId)),
    });

    resolve(res);
  });
}
