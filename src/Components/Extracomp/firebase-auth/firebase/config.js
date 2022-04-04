// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";
// import "firebase/database";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDbFCDkfwkP22n0hIMsSvn-05aePebMgpk",
//   authDomain: "adarsh-iti-ramgarh-4c088.firebaseapp.com",
//   databaseURL: "https://adarsh-iti-ramgarh-4c088-default-rtdb.firebaseio.com",
//   projectId: "adarsh-iti-ramgarh-4c088",
//   storageBucket: "adarsh-iti-ramgarh-4c088.appspot.com",
//   messagingSenderId: "961498058631",
//   appId: "1:961498058631:web:d0575a319c246c9d0a0d22",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDSRIT1y5XHWij8FpZj5jAMav5W-fw0y_4",
  authDomain: "ardock-trial.firebaseapp.com",
  databaseURL: "https://ardock-trial-default-rtdb.firebaseio.com",
  projectId: "ardock-trial",
  storageBucket: "ardock-trial.appspot.com",
  messagingSenderId: "224739298858",
  appId: "1:224739298858:web:2c62151633c73793a2bd53",
};

const firebase = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
const auth = getAuth(firebase);
// const projectStorage = firebase.storage();
const projectStorage = getStorage(firebase);
// const projectFirestore = firebase.firestore();
const projectFirestore = getFirestore(firebase);

// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, projectStorage, projectFirestore, auth };

// export const auth = app.auth();
// export default app;
