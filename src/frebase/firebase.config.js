// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApZ90Ej4l8474BEm73m-aupEmGl6nLRfc",
  authDomain: "dragon-news-f1cb9.firebaseapp.com",
  projectId: "dragon-news-f1cb9",
  storageBucket: "dragon-news-f1cb9.firebasestorage.app",
  messagingSenderId: "956959301682",
  appId: "1:956959301682:web:215c0dc7f9f734e1875c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;