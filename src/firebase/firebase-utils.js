/* This is importing the firebase library. */
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
/* The configuration of the firebase app. */

const config = {
  apiKey: "AIzaSyD0Qc0xRmw9hdcedMM6ItGXWagYA7z5rE0",
  authDomain: "sk-clothing-df1c6.firebaseapp.com",
  projectId: "sk-clothing-df1c6",
  storageBucket: "sk-clothing-df1c6.appspot.com",
  messagingSenderId: "177523584213",
  appId: "1:177523584213:web:8d9cf1d8345abcbbe5465c",
  measurementId: "G-YVR8F9MDYD",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
