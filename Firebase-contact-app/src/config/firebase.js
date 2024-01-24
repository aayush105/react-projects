// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLp-J6O3BvuZZNNNRJBps5pgoE4Kz7tBU",
  authDomain: "fir-contact-app-e3582.firebaseapp.com",
  projectId: "fir-contact-app-e3582",
  storageBucket: "fir-contact-app-e3582.appspot.com",
  messagingSenderId: "688755171423",
  appId: "1:688755171423:web:22f16a75b7debded57fbea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);