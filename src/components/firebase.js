import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 ...
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
