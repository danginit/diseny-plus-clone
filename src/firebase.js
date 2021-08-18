import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAMzLtZdldjyB_zp2o9n3upzz2Kvy1C-lA",
    authDomain: "disneyplus-clone-5793f.firebaseapp.com",
    projectId: "disneyplus-clone-5793f",
    storageBucket: "disneyplus-clone-5793f.appspot.com",
    messagingSenderId: "749082513015",
    appId: "1:749082513015:web:4a82c7c02a6a43c2dc8072",
    measurementId: "G-ZSGPGM82LN"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
    firebase.analytics();
  const provider = new firebase.auth. GoogleAuthProvider();
  const storage = firebase.storage();

export {auth, provider, storage};
export default db;