// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzgkoX3nvHU_YpvGKWcucdui84gyQxZYg",
  authDomain: "genius-car-services-a8da0.firebaseapp.com",
  projectId: "genius-car-services-a8da0",
  storageBucket: "genius-car-services-a8da0.appspot.com",
  messagingSenderId: "386426605141",
  appId: "1:386426605141:web:6767f2232f4e1e60304edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;