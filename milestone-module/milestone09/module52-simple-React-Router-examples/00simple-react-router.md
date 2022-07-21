# Module 52: Simple React Router Examples

## 52.1 Module Introduction, install React Router, Project Setup

⫸ [React Router](https://reactrouter.com/ "React Router v6 | Click: Read the Docs → New to React Router?") - [Introduction](https://reactrouter.com/docs/en/v6/getting-started/tutorial "Getting Started - React Router")
- Go to `Email/setting` and enjoy the ___routing___ by clicking many ___nav items___
  - ___Set Route___
  - ___Set___ What actually show (___different components for different Route___)

___Using a bundler:___

``` Terminal
# create react app
npx create-react-app router-tutorial
```

___Then install React Router dependencies:___

``` Terminal
cd router-tutorial
npm install react-router-dom@6
```

___Once your project is set up and React Router is installed as a dependency, open the `src/index.js` in your text editor. Import `BrowserRouter` from `react-router-dom` near the top of your file and wrap your app in a `<BrowserRouter>`:___
- [go to main website for better understanding](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app "To import BrowserRouter and wrap your app in a <BrowserRouter>")
- `Ctrl + P` → __search__ (___index.js___)
- `<React.StrictMode>` → 

``` JavaScript
// Only none commented code should be added & commented code is still remain in the file.

/* import * as React from "react";
import ReactDOM from "react-dom/client"; */

import { BrowserRouter } from "react-router-dom";

/* import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode> */

    <BrowserRouter>
      <App />
    </BrowserRouter>

/*   </React.StrictMode>
); */
```



