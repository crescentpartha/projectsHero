# Module 58: React Auth Integration and Private Route

## 58.1 Module Introduction and Basic Project Setup

⫸ `Basic Project Setup:`
- ___Create React App___
- Create a ___Firebase project___ and ___Register___ my app
- Install the ___SDK___ and ___initialize Firebase___
  - Install Firebase & Firebase Setup
- Install ___React Router___ & React Router ___Setup___
- Create basic ___Components___ such as Home, Header, Login, NotFound
- ____redirects___ file added
- Create ___markdown___ file for documentation
- ___CSS style___ added

## 58.2 Create useFirebase hook for shared authentication

⫸ `If we want to share one special thing with multiple components:` (___2 options___)

> If there are ___no relation___, then we ___can't use props___. <br /> We have ___2 options to pass data___ with ___sibling or random components___:

1. Use ___Context API___
   - Create ___Custom Hook___ to share data with multiple components.
2. ___Simple System___

> [6 Ways to Share and Reuse React Components](https://blog.bitsrc.io/6-ways-to-share-and-reuse-react-components-6d80e2fd16cd)

---

⫸ `Destructuring:`
1. ___Array Destructuring___ 
   - Array destructuring is ___position wise___. 
   - It is hard to maintain, because it is very ___sensitive about position___. 
   - We need to ___destructure almost everything___.

``` JavaScript
const [x, y, z, p, q, r] = [45, 89, 65, 12, 23, 56, 87, 22];
console.log(p); // 12
```

2. ___Object Destructuring___ 
   - Object destructuring is ___non-position wise___. So, it is ___easy to maintain___. 
   - It can ___destructure only one___ thing.

``` JavaScript
const {age} = {name: 'john', id: 223, age: 24, subject: 'IT'};
console.log(age); // 24
```

> That's way we ___should return data___ as a ___object___ rather than ___array___.

---

⫸ `How to create Object by Shorthand:`

``` JavaScript
// How to create Object by Shorthand
const [x, y, z, p, q, r] = [45, 89, 65, 12, 23, 56, 87, 22];
console.log(p); // 12
console.log(x); // 45

{x:x, y:y} // {x: 45, y: 89}

// shorthand of creating object
{x, y} // {x: 45, y: 89}
```

## 58.3 Add Google Sign-in using custom hook with on State Change

⫸ `Create Custom Hook that include Google Sign-In methods and return data as a Object:`

``` JavaScript
// In useFirebase.js

import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
        .then( result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch( error => {
            console.error(error);
        })
    }

    return {
        user, 
        setUser, 
        signInWithGoogle
    };
}

export default useFirebase;
```

⫸ `Conditional Rendering according to user.uid And destructuring from Custom Hook called useFirebase():`

``` JavaScript
// In Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user.uid
                    ?
                    <button>Sign Out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
```

> Problem is that `Login` header link ___doesn't change___ to `Sign Out` button after ___Google Sign-In___

## 58.4 Implement Sign out and display user logged in User name

> `Solution is:` ___Get the currently signed-in user___ <br /> The recommended way to get the current user is by setting an observer on the Auth object: <br /> &nbsp;&nbsp;&nbsp;&nbsp; Set `onAuthStateChanged` inside the `useEffect`, It ___set the state change___ only ___one time___. <br /> <br /> ___signInWithGoogle___ can be ___trigger___ when ___Google Sign In___ button is ___clicked___. <br />That time signInWithGoogle ___function called___ and signInWithGoogle ___triggered___. <br /> <br /> We ___didn't manually tell___ that ___observe___ it or ___state change___. <br /> ___Only one time___ we need to ___tell___ that ___set the state___ if user is changed almost similar to ___API call___. <br /> <br /> Users ___value changed in 2 ways___. <br /> &nbsp;&nbsp; 1. User Login <br /> &nbsp;&nbsp; 2. User Sign Out

⫸ `Implement onAuthStateChanged methods and signOut methods:`

``` JavaScript
// In useFirebase.js

import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        // console.log('signing in soon');
        signInWithPopup(auth, googleProvider)
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
        .then( () => {})
    }

    // Only one time we need to tell that set the state if user is changed (Result: toggle LogIn to SignOut)
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    return {
        user, 
        setUser, 
        handleSignOut,
        signInWithGoogle
    };
}

export default useFirebase;
```

⫸ `Used Optional Chaining and display user-name:`

``` JavaScript
// In Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                    ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
```

## 58.5 Explore and Install React Firebase Hooks

⫸ [useHooks - useAuth](https://usehooks.com/useAuth/ "useAuth - usehook.com | They basically create a context API and pass the auth info to the authContext and share with every components.")
- A very common scenario is you have ___a bunch of components___ that need to ___render different___ depending on whether the ___current user is logged in___ and sometimes call ___authentication methods___ like ___signin___, ___signout___, ___sendPasswordResetEmail___, etc.
- `useAuth hook` that enables any component to get the ___current auth state___ and ___re-render___ if it changes.
- They basically create a ___context API___ and pass the ___auth info___ to the ___authContext___ and share with every components.
- But this is ___harder option___ (`useAuth`), there are other ___easier option___ available (`react-firebase-hooks`).

⫸ [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks "React Hooks for Firebase - GitHub | To use it, we need to install it first | Follow the link")

⫸ `ShortCut:` "___Select word___ + `Ctrl + Shift + F`" → It tells us, we use this word in ___how many files___.

## 58.6 Use React Firebase Hook to manage user authentication

⫸ We use ___react-firebase-hooks___ library rather than ___useFirebase()___ hook, because it is easier to implementation ___firebase authentication___ and ___much more___.
- [Social Login Example](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#full-example-9 "Follow the link and implement Social Media Login system.")

⫸ Replace ___useFirebase___ custom hook by ___react-firebase-hooks___ library: (it is ___easier to implement___)

``` JavaScript
// In Login.js

import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please Login Now!!!</h3>
            <div style={{margin: '20px'}}>
                {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
```

⫸ Replace ___useFirebase___ custom hook by ___react-firebase-hooks___ library: (it is ___easier to implement___)

``` JavaScript
// In Header.js

import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                    ?
                    // <button onClick={handleSignOut}>Sign Out</button>
                    <button onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
```

⫸ Replace ___useFirebase___ custom hook by ___react-firebase-hooks___ library: (it is ___easier to implement___)

``` JavaScript
// In Home.js

import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Home = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is Home</h2>
            <p>Current user is: {user ? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;
```

⫸ Replace ___useFirebase___ custom hook by ___react-firebase-hooks___ library: (it is ___easier to implement___)

``` JavaScript
// Products.js

import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Knock knock!! who is there</h2>
            <h5>{user ? user.displayName : 'Vooooooooooot'}</h5>
        </div>
    );
};

export default Products;
```

## 58.7 Introduction to Protected Route and Require Auth

⫸ [React-Router > Authentication:](https://reactrouter.com/docs/en/v6/examples/auth#preview "This example demonstrates how to restrict access to routes to authenticated users")

⫸ `Wrap the component with RequireAuth component:` (___which component___ need to be ___authenticate___) - (___Create Protected Route___)
- ___Login is mandatory___, if we ___wrap___ any component by ___RequireAuth___
- Otherwise, it ___Navigate or Redirect___ us to ___Login page___, but ___save___ the ___current location___ we were
- If any ___user Login___, then the user ___can access___ those ___wrapped component___ (which are ___wrapped by RequireAuth___)

``` JavaScript
// In App.js

// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

⫸ `Create RequireAuth Component:` (___Create Protected Route___)
- if any user ___doesn't login___ but ___want to access___ those component which are ___wrapped by RequireAuth___, then ___Redirect___ them to ___login page___

``` JavaScript
// In RequireAuth.js

import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
```

## 58.8 Module Summary and Implement Auth Redirect

⫸ `Implement Authentication Redirect:`

``` JavaScript
// In Login.js

import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let location = useLocation();
    let navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( () => {
            navigate(from, {replace: true});
        })
    }
    return (
        <div>
            <h3>Please Login Now!!!</h3>
            <div style={{margin: '20px'}}>
                {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
                {/* <button onClick={() => signInWithGoogle()}>Google Sign In</button> */}
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
```

`Some Notes:`
- We try to use ___react-firebase-hooks___
- ___Protected Route___ | ___Private Route___ | ___Required Auth___ (same)

`Some Examples:`
- `Facebook`
  - without login, we ___can't use anything___
- `YouTube`
  - without login, we can ___watch videos___
  - But we can't ___like & comment___ any videos and ___subscribe___ any channel
- `Amazon`
  - without login, we can ___see products___ and ___add to cart___
  - But we need to login, when ___clicked___ on ___Buy Now___ button
- `booking.com`
  - without login, we can ___do anything___
  - But we need to login, when we are `trying to book` ___Flight___, ___Hotel___, ___Car___ etc.
- `Some Routes shows only for Logged in users`
  - Example is given below


⫸ `Create some Route only shows for Logged in User:` (like ___VIP___)

``` JavaScript
// In Header.js

import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user && <>
                        <Link to="/vig">VIP</Link>
                    </>
                }
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        // <button onClick={handleSignOut}>Sign Out</button>
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
```

## Quiz 58

1. Which one is ___not true___?
   - [ ] getElementsByClassName will return an array of dom elements
   - [ ] Use appendChild to add element to an existing element
   - [x] ___querySelectorAll___ will return ___a node___
   - [ ] With async function we will use await
2. What is ___wrong with this code___? (see documentation)
   - [ ] No Error
   - [ ] It should be signInWithPopUp
   - [ ] Google doesn't have Auth Provider
   - [x] ___Auth variable___ will give an ___error___
``` JavaScript
const auth = getAuth ;
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
 .then((result) => {
    const user = result.user;
})
```
3. Which one is ___not true___?
   - [ ] Grid layout is a two dimensional layout
   - [ ] Flexbox is one directional layout
   - [ ] Float can be left or right
   - [x] CSS box model ___does not include___ border
4. what is the proper name of the operator to ___write an if-else in one line___ using the question mark (?) and a colon(:)?
   - ___Ternary operator___
5. which one is ___not a html5 element___ (google it)
   - [ ] aside
   - [ ] bdi
   - [x] ___canva___
   - [ ] nav
6. Sign Out ___receives___ ________ as an ___argument___. (see documentation)
   - [x] ___auth___
   - [ ] user
   - [ ] app secret
   - [ ] nothing
``` JavaScript
signOut(__?__).then(() => {
     // Sign-out successful.
    }).catch((error) => {
    // An error happened.
         });
```
7. ___Which method___ will you call if you want ___Github Sign In___?(see documentation) <br /> const provider = _______?_______
   - [ ] GithubAuthProvider()
   - [ ] new GithubProvider()
   - [ ] new Github()
   - [x] ___new GithubAuthProvider()___
8. Which is ___true___ about the ___Context API___?
   - [ ] Context is designed to share data that can be considered "global" for a tree of React components
   - [ ] We can pass data to two sibling component
   - [ ] It solves the lifting state up issue
   - [x] ___All of the above___
9.  What will be the ___value of the rest___?
    - [ ] { name: "Fakibaaz", job: "Practice kom kora", address: "janina" }
    - [ ] { name: "Fakibaaz", address: "janina" }
    - [x] ___{ name: "Fakibaaz", job: "Practice kom kora" }___
    - [ ] { job: "Practice kom kora", address: "janina" }
``` JavaScript
const student = { name : “Fakibaaz”, job: “Practice Kom Kora” , address: “janina” }
     const {address , … rest } = student
```
10.  Suppose you have a ___Component___ name called ___AuthContext___ that receives ___children as props___. What is the correct way to show it?
     - [ ] const AuthContext = (props) => <div> {props.children} </div>
     - [ ] const AuthContext = ({children}) => <div> {children} </div>
     - [x] ___1 & 2___
     - [ ] Neither of them
11.  We can ___implement Firebase authentication___ by using ______
     - [ ] Gmail Account
     - [ ] Github
     - [ ] Facebook Account
     - [ ] ___All of the above___

---

⫸  `Notes:`
- ___`getElementsByClassName` method:___
  - The getElementsByClassName method of Document interface returns ___an array-like object of all child elements which have all of the given class name(s)___. When called on the document object, the ___complete document is searched___, including the ___root node___.
  - The getElementsByClassName() method returns ___a collection of elements with a specified class name(s)___. The getElementsByClassName() method returns ___an HTMLCollection___.
- ___`querySelectorAll()` method:___
  - The querySelectorAll() method returns ___all elements that matches a CSS selector(s)___. The querySelectorAll() method returns ___a NodeList___.
- Can we use `await for async function`?
  - ___Async/await___ helps you write ___synchronous-looking___ JavaScript code that works ___asynchronously___. 
  - ___Await___ is in an ___async function to ensure___ that ___all promises___ that are ___returned___ in the function are ___synchronized___.
  - Use of async and await ___enables the use of ordinary try / catch blocks around asynchronous code___.
  - The ___await keyword___ is only ___valid inside async functions___ within regular JavaScript code. If you use it outside of an async function's body, you will get a ___SyntaxError___.

