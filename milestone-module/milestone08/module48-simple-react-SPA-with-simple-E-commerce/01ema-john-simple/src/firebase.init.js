// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEEn3hXpXPHuSx5-aSM0WrkEgwgAgF9Rw",
  authDomain: "ema-john-simple-447ad.firebaseapp.com",
  projectId: "ema-john-simple-447ad",
  storageBucket: "ema-john-simple-447ad.appspot.com",
  messagingSenderId: "970018855125",
  appId: "1:970018855125:web:65a34172d9259878dfea5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;