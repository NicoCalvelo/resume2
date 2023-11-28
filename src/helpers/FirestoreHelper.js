import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  getFirestore,
  updateDoc,
  addDoc,
  query,
  where,
  limit,
  orderBy,
  startAt,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../providers/FirebaseProvider";

const db = getFirestore(app);

export async function getCollectionReference(collectionName) {
  return new Promise(async (resolve, reject) => {
    let col = await collection(db, collectionName);
    resolve(col);
  });
}
export async function getCollection(collectionName) {
  return new Promise(async (resolve, reject) => {
    await getDocs(collection(db, collectionName))
      .then((res) => resolve([...res.docs]))
      .catch((err) => reject(err));
  });
}

export async function getQuery(q) {
  return new Promise(async (resolve, reject) => {
    await getDocs(q)
      .then((res) => resolve([...res.docs]))
      .catch((err) => reject(err));
  });
}

export async function getDocumentsWhere(collectionName, field, operator, value, docsLimit = null, startAfter) {
  return new Promise(async (resolve, reject) => {
    let add = [];
    if (docsLimit) add.push(limit(docsLimit));
    if (startAfter) add.push(startAfter(startAfter));

    let q = query(collection(db, collectionName), where(field, operator, value), ...add);

    await getDocs(q)
      .then((res) => resolve([...res.docs]))
      .catch((err) => reject(err));
  });
}
export async function searchDocumentByValue(collectionName, field, search, convertReponse = true) {
  return new Promise(async (resolve, reject) => {
    if (search === "") return resolve([]);
    let q = query(collection(db, collectionName), orderBy(field), startAt(search), limit(5));

    let res = await getDocs(q).catch((err) => reject(err));
    if (convertReponse) {
      let docs = [];
      for (let index = 0; index < res.docs.length; index++) {
        const doc = res.docs[index];
        let e = doc.data();
        e.id = doc.id;
        e.path = doc.ref.path;
        docs.push(e);
      }
      resolve(docs);
    } else resolve([...res.docs]);
  });
}

export async function getDocument(path, ref) {
  return new Promise(async (resolve, reject) => {
    await getDoc(ref ? ref : getDocumentReference(path))
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export async function deleteDocument(path, ref) {
  return new Promise(async (resolve, reject) => {
    await deleteDoc(ref ? ref : getDocumentReference(path))
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export async function createDocument(path, data, merge = true) {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, path), data, { merge: merge }).then(resolve).catch(reject);
  });
}

export async function setDocument(path, data, merge = true) {
  return new Promise((resolve, reject) => {
    setDoc(getDocumentReference(path), data, { merge: merge }).then(resolve).catch(reject);
  });
}

export async function UpdateDocument(path, data) {
  return new Promise(async (resolve, reject) => {
    let ref = getDocumentReference(path);
    await updateDoc(ref, data).then(resolve).catch(reject);
  });
}

export function getDocumentReference(path) {
  if (path[0] !== "/") path = "/" + path;
  return doc(db, path);
}
