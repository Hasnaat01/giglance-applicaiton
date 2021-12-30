import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCvKuQzlPYqzTcBs4NAvsNcHD5zqStEvgk",
  authDomain: "giglance-2ac73.firebaseapp.com",
  projectId: "giglance-2ac73",
  storageBucket: "giglance-2ac73.appspot.com",
  messagingSenderId: "1081189590672",
  appId: "1:1081189590672:web:756bdb6165a45b642c9a15",
};

const firebase = Firebase.initializeApp(config);
const db = firebase.firestore();
const { FieldValue } = Firebase.firestore;

export { firebase, db, FieldValue };
