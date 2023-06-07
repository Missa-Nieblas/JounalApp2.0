// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYdKq2JnvQUFDhokuFmqJ5Hk_XJyzIKMQ",
  authDomain: "react-proyecto-ba21b.firebaseapp.com",
  projectId: "react-proyecto-ba21b",
  storageBucket: "react-proyecto-ba21b.appspot.com",
  messagingSenderId: "108707825527",
  appId: "1:108707825527:web:3e788622c8923ae4ca0372"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );