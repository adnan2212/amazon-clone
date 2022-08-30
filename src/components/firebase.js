import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgmpmr3ytdoy3oNYc1wzXeEjQoW7V_XmY",
  authDomain: "clone-a030c.firebaseapp.com",
  projectId: "clone-a030c",
  storageBucket: "clone-a030c.appspot.com",
  messagingSenderId: "98914052925",
  appId: "1:98914052925:web:d4ccc6e7e9546bcbaa3354",
  measurementId: "G-255Z438MS1",
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
