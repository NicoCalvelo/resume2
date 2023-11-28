import { app } from "../providers/FirebaseProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const auth = getAuth(app);
auth.languageCode = "fr";
const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        resolve(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject(error);
      });
  });
}

export function LogOut() {
  return new Promise((resolve, reject) => {
    signOut(auth).then(resolve).catch(reject);
  });
}
