// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvf2D-V0l_3fyI9PUBxoev9PlAynxuyvw",
  authDomain: "my-youutube-clone.firebaseapp.com",
  projectId: "my-youutube-clone",
  storageBucket: "my-youutube-clone.appspot.com",
  messagingSenderId: "704928855423",
  appId: "1:704928855423:web:97fe3789873f327798564a",
  measurementId: "G-0NLS8B6M72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);