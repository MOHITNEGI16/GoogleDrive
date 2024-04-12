// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYd5gH_E3qQQ91eBUbRKQFFl1N6oqBr1o",
  authDomain: "drive-5ec93.firebaseapp.com",
  projectId: "drive-5ec93",
  storageBucket: "drive-5ec93.appspot.com",
  messagingSenderId: "399147929680",
  appId: "1:399147929680:web:417457d909110ab2ef4155",
  measurementId: "G-7YC7NJXXDT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, googleProvider }



 