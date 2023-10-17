// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSTlynvT9l1JtrGK-JyvVTfisz9cDJjVw",
  authDomain: "techbd-shop.firebaseapp.com",
  projectId: "techbd-shop",
  storageBucket: "techbd-shop.appspot.com",
  messagingSenderId: "64473322004",
  appId: "1:64473322004:web:9edc4aa64b0af5d3ec8d01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;