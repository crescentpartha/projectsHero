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
   - ___Step 1:___ Create a Firebase project and register your app
   - ___Step 2:___ Install the SDK and initialize Firebase

___Note:___ Highly recommended to use commands from the ___main website___!!! and Follow these ___11 Steps___ to use firebase.
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
  - ___Step 3:___ Access Firebase in your app
  - ___Step 4:___ Use a module bundler (webpack/Rollup) for size reduction

---

``` JavaScript
// In App.js

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

``` JavaScript
// In App.js

import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const auth = getAuth(app);

function App() {
  // Create google provider (Step-9)
  const provider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    // console.log('working');

    // To sign in with a pop-up window, call signInWithPopup: (step-10)
    signInWithPopup(auth, provider)
    .then( result => {
      const user = result.user;
      console.log(user);
    })
    .catch( error => {
      // console.log('error', error);
      console.error('error', error);
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
```

---

## 46.3 set Firebase configuration and initialize firebase auth

⫸ `Steps to use firebase:` (___Recommended to Follow these 11 Steps___)
1. ___Create a project___ on console.firebase.google.com
2. ___Register___ Web app in firebase
3. npm ___install___ firebase
4. ___copy___ firebase init with config from ___firebase project settings___ into a file called ___firebase.init.js___ in ___src folder___
5. ___export default app___ from ___firebase.init.js___
6. import ___getAuth___ from ___firebase/auth___ and create `const auth = getAuth(app);` in ___App.js___
7. import __app__ from ___firebase.init.js___ into your ___App.js___
8. ___turn on___ google authentication (___firebase > authentication > enable google sign-in___)
   - Authentication → Get Started → ___Google___ → ___Enable___ → give Project_name → Email Address (to receive issus's mail) → Save
   - One account per email address (___if___ you need to create multiple user with same email address)
9. Create ___google provider object___ and ___onClick Event Handler___ like `onClick={handleGoogleSignIn}` in a ___button___.
10. To ___sign in___ with ___a pop-up window___, call ___signInWithPopup___ with ___auth___ and ___provider___ parameters:
11. handle ___.then___ (if successful) and ___.catch___ error (if error)


## 56.4 Sign in with google, open google login popup

⫸ `Error Fixing:`

``` JavaScript
ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it’s running React 17. 
Learn more: https://reactjs.org/link/switch-to-createroot
```

- [Replacing render with createRoot](https://github.com/reactwg/react-18/discussions/5 "github.com")
- [How to Upgrade to React 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html "reactjs.org")
- [ReactDOM.render is no longer supported in React 18](https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18 "stackoverflow.com")

``` JavaScript
// Solution:

// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```

## 56.5 Recap google popup sign in process with 11 steps

## 56.6 Display logged in user info, Sign out, toggle sign in , sign out

``` JavaScript
// In App.js

// import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        // console.log('error', error);
        console.error('error', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        // Conditional Rendering: { condition ? true : false }
        user.email ? <button onClick={handleSignOut}>Sign Out</button>
        : <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }
      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
```

## 56.7 Implementation github login system

``` JavaScript
// In App.js

// import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        // console.log('error', error);
        console.error('error', error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        // Conditional Rendering: { condition ? true : false }
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        : 
        // To return multiple value use div-tag or fragment-tag(empty tag)
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }
      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
```

⫸ `One account per email address:`
- Github & Google email address is same
- We ___can't logged in___ with ___different logIn method___ by ___same email address___
- One email address, One account
- But, We can enable/allow, multiple accounts with the same email address 
  - It ___should not allows___ for actual application

⫸ `Add Authorized Domains:` (otherwise app doesn't work properly)

- __In Firebase:__
  - Authentication → Settings → Add Domain → `https://56-2simple-firebase-authentication-crescentpartha.netlify.app/` (It will be the home page)
- __In Github:__
  - Settings → Developer settings → OAuth Apps → Clicked on Application → General → Homepage-URL (`https://56-2simple-firebase-authentication-crescentpartha.netlify.app/`)

`Note:` Add domain in both ___Firebase & Github___. It is the ___Home page URL___.

## 56.8 Module Summary and display user info

## Quiz 56

1. What is ___Authentication___?
   - ___Verify the identity of a user___
2. What is ___Google analytics___? Why should you use it? (google it)
   - To know the ___website visitors___ and their ___usage pattern___
3. Which CSS style will you use ___to hide an element___ from the DOM? (do not forget CSS)
   - `display: none`
4. What is ___password hashing___? (Google it)
   - ___Store the password with encrypted text___ so that no one can understand
5. What is true about ___firebase config___?
   - It contains ___firebase cloud project___ related ___information___
   - It includes ___Secret___ and ___API Key___ for the project
   - You ___should not share your config___ with anyone
6. How would you ___initialize___ a firebase app with ___firebase config___ <br> `_____?___(firebaseConfig);`
   - ___initializeApp___
7. `import { signInWithPopup } from   ____? _____`
   - `'firebase/auth`
8. `signInWithPopup( ) Method receives _____, ____ as arguments.`
   - ___auth, provider___
9.  How will you ___access the name___ of the logged-in person information after successful login?
    - ___displayName___
``` JavaScript
signInWithPopup( auth , provider)
 .then(result => {
const { ___?____ } = res.user; 
 }
```
10. ___Which method___ will you call to ___logout a user___ from firebase? (Search in the documentation)
    - ___signOut___
``` JavaScript
const auth = getAuth();
_____?____(auth)
 .then(() =>  })
 .catch((error) => {
 });
```
11. We can ___implement Firebase authentication___ by using ______
    - ___Gmail Account___
    - ___Github___
    - ___Facebook Account___
12. Which one is true?
    - Firebase provides ___Hosting___
    - Firebase provides ___authentication___
    - Firebase provides ___database___
13. How will you ___access the email___ of the logged-in person information after successful login using firebase authentication?
    - ___res.user___
``` JavaScript
firebase.auth().signInWithPopup(provider)
.then(res => {
const { email } = _______?______;
console.log(email);
}
```
14. What do you need ___to connect___ your ___firebase___ application to the ___GitHub___ application? 
    - ___Client ID, Client Secret___
15. Where you can ___add sign-in providers___ in firebase? 
    - ___Authentication > Sign-in methods___

---

⫸ `Password Hashing:`
- Password hashing is used to ___verify the integrity of your password___, sent during login, against the ___stored hash___ so that your actual password never has to be stored.

⫸ `Firebase Config:`
- Dynamically ___control & change___ the ___behavior & appearance___ of your app ___without republishing___. Provide a different app experience to different segments on the fly.
- ___Firebase Remote Config___ is a ___cloud service___ that lets you change the behavior and appearance of your app ___without___ requiring users to ___download an app___ update.


# Module 57.5: Firebase Recap and Practice

## 57.5.0 Text Instruction 

> ___অথেনটিকেশন___ একটু ভালো করে প্রাকটিস করবে। অথার্ৎ সিম্পল ফায়ারবেজ দিয়ে ___গুগল, ফেইসবুক, গিটহাব এর লগইন সিস্টেম___ কিভাবে ___ইমপ্লিমেন্ট___ করবে। কিভাবে ___সাইন ইন মেথড enable___ করবে। প্রজেক্ট এ ___ওয়েব এপ যোগ___ করবে এবং সেই ওয়েব এপ এর জন্য ___ফায়ারবেজ কনফিগারেশন কপি___ করে নিয়ে আসবে। তারপর তোমার প্রজেক্টে এসে সেই কনফিগারেশন ___সেইভ___ করবে। প্রজেক্টে ___ফায়ারবেজ ইনস্টল___ করবে। ___লগইন বাটন ইমপ্লিমেন্ট___ করবে। <br /> `স্টেপ কিন্তু এই কয়টাই`। 

⫸ `স্টেপগুলা ফলো করো:-`
1. firebase এর authentication এ গিয়ে ___যে লগইন সিস্টেম___ ইমপ্লিমেন্ট করবে সেই প্রসেস ___এনাবেল___ করো। 
2. google ছাড়া অন্য কোন ___থার্ডপার্টি___ যদি হয় তাহলে তাদের ___developer ওয়েবসাইটে___ যাও। সেখানে গিয়ে ___app তৈরি___ করো। সেখানে ___app id আর সিক্রেট___ দেখতে পাবে। সেই থার্ড পার্টি এপ এর আইডি আর সিক্রেট ___ফায়ারবেজ এ এনে বসিয়ে দাও___
3. ফায়ারবেজ থেকে ___auth redirect url___ কপি করে ___থার্ডপার্টি app এর সেটিংসে___ বসিয়ে দাও। এইটা ইম্পরট্যান্ট। তাহলে ___লগইন সাকসেস___ হওয়ার পর বা ___ইউজার লগইন___ করার অনুমতি দেয়ার পর সেটা তোমার ওয়েবসাইট এ ___রিডাইরেক্ট হবে না___ বা লগিন হওয়ার পর তোমার ওয়েবসাইট এ ___আসবে না___। 
4. তোমার ওয়েবসাইট এ ___লগইন বাটন ক্রিয়েট___ করে সেটার ___ইভেন্ট হ্যান্ডলার___ এর মধ্যে ___firebase এর ডকুমেন্টেশন___ থেকে ___কোড এনে বসিয়ে দাও___। 
5. যদি ___লগইন সাকসেসফুল___ হয় তাহলে user এর ___স্টেট্ ডিক্লেয়ার___ করে সেটাকে ___দেখায় দাও___ বা ___ইউজ করতে পারো___। ___error খাইলে___ সেটাও দেখাতে পারো। 

> `সিস্টেম মোটামুটি এইটাই`। <br /> সিম্পল ___অথেন্টিকেশন___ যেকোন ওয়েব ডেভেলপার এর জন্য গুরুত্বপূর্ণ। মোটামুটি মাঝারি মানের সব ওয়েবসাইট এই ___লগইন সিস্টেম___ থাকেই। তাই আমি বলবো এই অংশটুকু তুমি কয়েকবার প্রাকটিস করো। এবং একটা প্রজেক্ট দিয়ে তোমার প্রাকটিস শেষ হয়ে গেলে ফায়ারবেজ আরেকটা প্রজেক্ট খুলে প্রাকটিস করো কোন কারণে তোমার ___ফায়ারবেজ একাউন্ট এর কোটা শেষ হয়ে গেলে___ (30 projects), আরেকটা জিমেইল দিয়ে আবার নতুন করে ফায়ারবেজ এর প্রজেক্ট খুলে সেইভাবে চেষ্টা করো। দেখবে ঠিকই ___জিনিসগুলো কন্ট্রোলে চলে আসছে___। 


## 57.5.1 Practice Firebase Authentication, Implement Facebook Authentication

⫸ `Steps to use firebase:` (___Recommended to Follow these 11 Steps___)

1. ___Create a project___ on console.firebase.google.com
2. ___Register___ Web app in firebase
3. ___npm install firebase___
4. ___copy___ firebase init with config from ___firebase project settings___ into a file called ___firebase.init.js___ in ___src folder___
5. ___export default app___ from ___firebase.init.js___
6. import ___getAuth___ from ___firebase/auth___ and create `const auth = getAuth(app);` in ___App.js___
   - Go to docs > Build > Authentication > Web > Get Started > ___Initialize Firebase Authentication___
7. import ___app___ from ___firebase.init.js___ into your ___App.js___
8. ___turn on___ Facebook authentication (___firebase > authentication > enable Facebook sign-in provider___)
   - Authentication > Get Started > ___Facebook___ > ___Enable___ > Paste (App ID & App Secret) > Copy (OAuth redirect URI) > Save
   - [developers.facebook.com](https://developers.facebook.com/) > Create App (App-name & email) > Create Test App (for locally development) > Set up (Facebook Login) > Web > Facebook Login → Settings (Valid OAuth Redirect URIs) > Paste (OAuth redirect URI) > ___Save changes___
   - Settings > Basic > Copy (App ID & App Secret (clicked Show)) > Paste in Configure Provider > ___Save___
   - One account per email address (___if___ you need to create multiple user with same email address by using multiple sign in methods)<br />It ___should not be used___ in real application.
9.  Create an instance of the ___Facebook provider object___ and ___onClick Event Handler___ like `onClick={handleFacebookSignIn}` in a ___button___.
    - Go to docs > Build > Authentication > Web > ___Facebook Login___
10. To ___sign in___ with ___a pop-up window___, call ___signInWithPopup___ with ___auth___ and ___provider___ parameters.
11. Handle ___.then___ (if successful) and ___.catch___ error (if error)

---

⫸ `Codes for Facebook Sign-in method Providers:`

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { FacebookAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const facebookProvider = new FacebookAuthProvider();

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        // Conditional Rendering: { condition ? true : false }
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        : 
        // To return multiple value use div-tag or fragment-tag(empty tag)
        <>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
        </>
      }
      <h2>Name: <span className='title-name'>{user.displayName}</span></h2>
      <p>I know your <b>email address:</b> <span className='title-email'>{user.email}</span></p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
```

⫸ `All Codes for Google, Github, and Facebook Sign-in methods Providers:`

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        // console.log('error', error);
        console.error('error', error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error(error);
    })
  }

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        // Conditional Rendering: { condition ? true : false }
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        : 
        // To return multiple value use div-tag or fragment-tag(empty tag)
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
        </>
      }
      <h2>Name: <span className='title-name'>{user.displayName}</span></h2>
      <p>I know your <b>email address:</b> <span className='title-email'>{user.email}</span></p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
```


