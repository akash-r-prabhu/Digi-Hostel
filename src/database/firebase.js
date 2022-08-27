import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//get user email
// import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn6n8CLxVlxknm0U5IQCMf-qSbEoZ1gU8",
  authDomain: "digihostel-c5c23.firebaseapp.com",
  projectId: "digihostel-c5c23",
  storageBucket: "digihostel-c5c23.appspot.com",
  messagingSenderId: "151035159115",
  appId: "1:151035159115:web:fcd00b7287455f982e63ce",
  measurementId: "G-PTZ22KB8LY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export const serverStamp = firebase.firestore.Timestamp;
export default db;
