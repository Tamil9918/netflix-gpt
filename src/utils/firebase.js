// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSafRpK5bwUrZyGqAS5legxOzcYhfcf-c",
  authDomain: "netflix-gpt-326da.firebaseapp.com",
  projectId: "netflix-gpt-326da",
  storageBucket: "netflix-gpt-326da.appspot.com",
  messagingSenderId: "937668093364",
  appId: "1:937668093364:web:9d83657e2d2dac02823ee1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
