import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_oY2vagXja80UCcSXSBxN_d_VzvLbJ4A",
    authDomain: "linkedin-clone-930cd.firebaseapp.com",
    projectId: "linkedin-clone-930cd",
    storageBucket: "linkedin-clone-930cd.appspot.com",
    messagingSenderId: "754235102378",
    appId: "1:754235102378:web:f3c74d516d7159ba2d2cd3",
    measurementId: "G-CEE09B6HXX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };