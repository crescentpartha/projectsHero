# Module 56: Simple React Firebase authentication

## 56.1 Module Introduction, authentication vs Authorization

⫸ `Web Security Systems are based on a two-step process:`
- __Authentication:__
  - Ensure the ___user identity___
  - Telling the system ___who you are___ by providing ___username___ and ___password___
- __Authorization:__ 
  - ___Allows___ the user to ___access the various resources___ based on the user's identity
  - Determines their ___access rights___
  - ___What permissions___ do you have (___Admin___, ___Moderator___, ___User___)

⫸ `Authentication Solutions:`
- [Okta](https://www.okta.com/ "Okta is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications.")
  - [Okta Alternatives](https://www.gartner.com/reviews/market/user-authentication/vendor/okta/alternatives "Competitors and Alternatives to Okta")
- [Firebase](https://firebase.google.com/ "Backed by Google and trusted by millions of businesses around the world.")

## 56.2 Create firebase project and Install Firebase SDK

⫸ `Google Analytics:`
- A web analytics service
- Track the traffic of the website and create report
- It helps the user to determine the trend and pattern of visitor interaction with website.

⫸ `SDK - Software Development Kit:`
- It's a collection of software development tools in one package
- It helps to make easy our tasks to create a certain application. 

⫸ `Firebase SDK:`
- It makes easy our tasks to handle Authentication System by combining one or more than one sign-in methods.

⫸ `Firebase Authentication Steps:`
1. Go to docs → Build → Authentication → Web → Get Started
2. Clicked on → [install the Firebase JS SDK and initialize Firebase](https://firebase.google.com/docs/web/setup?authuser=0&hl=en#add-sdk-and-initialize "Add Firebase to your JavaScript project").<br>___Add Firebase to your JavaScript project___
   - Step 1: Create a Firebase project and register your app
   - Step 2: Install the SDK and initialize Firebase

___Note:___ Highly recommended to use commands from the main website!!!
``` JavaScript
// Install Firebase using npm: (Step-1)
npm install firebase
```

`Real Example` ___Firebase Initialization:___

``` JavaScript
// In src/firebase.init.js (Step-2)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAelu8_mP0dEuZQmPSXo6whVf0BbpYh_zI",
  authDomain: "reactfirebase-authentica-be741.firebaseapp.com",
  projectId: "reactfirebase-authentica-be741",
  storageBucket: "reactfirebase-authentica-be741.appspot.com",
  messagingSenderId: "589628173314",
  appId: "1:589628173314:web:a00daba7fdeaa99d6a8b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
```
---

`Demo` ___Firebase Initialization:___

``` JavaScript
// Initialize Firebase in your app and create a Firebase App object:
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```
After clicked `Firebase project configuration`:
``` JavaScript
var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};
```
   - Step 3: Access Firebase in your app
   - Step 4: Use a module bundler (webpack/Rollup) for size reduction

``` JavaScript
import logo from './logo.svg';
import './App.css';
// import app from firebase.init.js into your App.js (Step-6)
import app from './firebase.init';
import {getAuth} from 'firebase/auth';

// import getAuth from firebase/auth and create auth = getAuth(app); (Step-7)
const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
```
---

⫸ `Steps to use firebase:` (___Recommended to Follow___)
1. ___Create a project___ on console.firebase.google.com
2. ___install___ firebase
3. ___Register___ Web app in firebase
4. ___copy___ firebase init with config from ___firebase project settings___ into a file called ___firebase.init.js___
5. ___export default app___
6. import __app__ from ___firebase.init.js___ into your ___App.js___
7. import ___getAuth___ from ___firebase/auth___ and create `auth = getAuth(app);`
8. ___turn on___ google authentication
   - Authentication → Get Started → ___Google___ → ___Enable___ → give Project_name → Email Address (to receive issus's mail) → Save
   - One account per email address (___if___ you need to create multiple user with same email address)
9.  

