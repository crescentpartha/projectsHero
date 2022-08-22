// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o",
  authDomain: "trivago-booking.firebaseapp.com",
  projectId: "trivago-booking",
  storageBucket: "trivago-booking.appspot.com",
  messagingSenderId: "766745666756",
  appId: "1:766745666756:web:13fe113c97e48e7097d591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;