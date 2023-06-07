// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjtP6Yd7ynE1jnlZBjYaYGLokGTzP38sk",
  authDomain: "react-530c5.firebaseapp.com",
  projectId: "react-530c5",
  storageBucket: "react-530c5.appspot.com",
  messagingSenderId: "96014471662",
  appId: "1:96014471662:web:b48911ac9b4adccb64feff"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );