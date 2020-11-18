import firebase from "firebase";
import { debounce } from "@material-ui/core";

const firebaseConfig = {
  apiKey: "AIzaSyCLRnhda24gFGi01Q-L4NOqiJEgALJArzA",
  authDomain: "facebook-clonee.firebaseapp.com",
  databaseURL: "https://facebook-clonee.firebaseio.com",
  projectId: "facebook-clonee",
  storageBucket: "facebook-clonee.appspot.com",
  messagingSenderId: "1064701324209",
  appId: "1:1064701324209:web:eba5b19b5aa7b6b8e4ab90",
  measurementId: "G-TYPX64LZKX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
