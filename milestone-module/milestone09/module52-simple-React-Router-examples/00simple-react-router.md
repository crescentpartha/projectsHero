# Module 52: Simple React Router Examples

## 52.1 Module Introduction, install React Router, Project Setup

⫸ [React Router](https://reactrouter.com/ "React Router v6 | Click: Read the Docs → New to React Router?") - [Introduction](https://reactrouter.com/docs/en/v6/getting-started/tutorial "Getting Started - React Router")
- Go to `Email/setting` and enjoy the ___routing___ by clicking many ___nav items___
  - ___Set Route___
  - ___Set___ What actually show (___different components for different Route___)

> ___Using a bundler:___

``` Terminal
# create react app
npx create-react-app router-tutorial
```

> ___Then install React Router dependencies:___

``` Terminal
cd router-tutorial
npm install react-router-dom@6
```

## 52.2 Create Simple Route and simple router setup

> ___Once your project is set up and React Router is installed as a dependency, open the `src/index.js` in your text editor. Import `BrowserRouter` from `react-router-dom` near the top of your file and wrap your app in a `<BrowserRouter>`:___
- [go to main website for better understanding](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app "To import BrowserRouter and wrap your app in a <BrowserRouter>")
- `Ctrl + P` → ___search___ (__index.js__)
- `Alt + Shift + F` → for ___alignment___
- [<React.StrictMode> Or Strict Mode](https://reactjs.org/docs/strict-mode.html#:~:text=StrictMode%20is%20a%20tool%20for,not%20impact%20the%20production%20build. "StrictMode is a tool for highlighting potential problems in an application. Strict mode checks are run in development mode only; they do not impact the production build.")
  - StrictMode is a tool for highlighting potential problems in an application.
  - Strict mode checks are run in development mode only; they do not impact the production build.
- ___[StrictMode](https://reactjs.org/docs/strict-mode.html#warning-about-legacy-string-ref-api-usage "React.StrictMode - React StrictMode") currently helps with:___
  - Identifying components with unsafe lifecycles
  - Warning about legacy string ref API usage
  - Warning about deprecated findDOMNode usage
  - Detecting unexpected side effects
  - Detecting legacy context API
  - Ensuring reusable state

``` JavaScript
// In src/index.js

import * as React from "react";
import ReactDOM from "react-dom/client";

// 2(i). import BrowserRouter in index.js
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>

    // 2(ii). wrap the App component using BrowserRouter 
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);
```

> ___Now you can use React Router anywhere in your app! For a simple example, open `src/App.js` and replace the default markup with some routes:___

``` JavaScript
// In src/App.js

import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">

      // 3. declare the Routes
      <h1>Welcome to React Router!</h1>
      <Routes>
        // 4. write Route inside the Routes | 5. write the path & element inside Route | 6. write the component name inside element.
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}
```

⫸ `So, we need to follow 6 steps to use ReactRouter:`
1. react router ___install___ 
2. ___import___ BrowserRouter in index.js and ___wrap___ the App component using BrowserRouter 
3. ___declare___ the Routes
4. write ___Route___ inside the Routes
5. write the ___path___ & ___element___ inside Route
6. write the ___component name___ inside element.

⫸ [Uncaught Error: useRoutes() may be used only in the context of a <Router> component.](https://bobbyhadz.com/blog/react-useroutes-may-be-used-only-in-context-of-router "Fix the Error (Rare case)")

``` JavaScript
// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy React Router website!</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```
