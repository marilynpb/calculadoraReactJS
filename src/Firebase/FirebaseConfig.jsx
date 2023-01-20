// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGF2x0RcFqi5fW-53ddX7vTRCbpBaC3rY",
  authDomain: "calcu-glumy-app.firebaseapp.com",
  projectId: "calcu-glumy-app",
  storageBucket: "calcu-glumy-app.appspot.com",
  messagingSenderId: "639850978866",
  appId: "1:639850978866:web:32135ba392edd7a5be262b",
  measurementId: "G-CRJT6GXL52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);