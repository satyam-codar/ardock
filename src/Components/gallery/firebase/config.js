import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/database";
// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyB_xF9Wr3IW-YhLUSQ9Ba4BjsssMcjrwnc",
//   authDomain: "adarsh-iti-ramgarh.firebaseapp.com",
//   databaseURL: "https://adarsh-iti-ramgarh-default-rtdb.firebaseio.com",
//   projectId: "adarsh-iti-ramgarh",
//   storageBucket: "adarsh-iti-ramgarh.appspot.com",
//   messagingSenderId: "794703026537",
//   appId: "1:794703026537:web:388bd55b134ee78b78c5f8",
// };

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDbFCDkfwkP22n0hIMsSvn-05aePebMgpk",
//   authDomain: "adarsh-iti-ramgarh-4c088.firebaseapp.com",
//   databaseURL: "https://adarsh-iti-ramgarh-4c088-default-rtdb.firebaseio.com",
//   projectId: "adarsh-iti-ramgarh-4c088",
//   storageBucket: "adarsh-iti-ramgarh-4c088.appspot.com",
//   messagingSenderId: "961498058631",
//   appId: "1:961498058631:web:d0575a319c246c9d0a0d22",
// };

// Initialize Firebase

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

const firebaseConfig = {
  apiKey: "AIzaSyDbFCDkfwkP22n0hIMsSvn-05aePebMgpk",
  authDomain: "adarsh-iti-ramgarh-4c088.firebaseapp.com",
  databaseURL: "https://adarsh-iti-ramgarh-4c088-default-rtdb.firebaseio.com",
  projectId: "adarsh-iti-ramgarh-4c088",
  storageBucket: "adarsh-iti-ramgarh-4c088.appspot.com",
  messagingSenderId: "961498058631",
  appId: "1:961498058631:web:d0575a319c246c9d0a0d22",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, projectStorage, projectFirestore, auth, timestamp };

// export const auth = app.auth();
// export default app;
