# Module 52: Simple React Router Examples

## `52.1 Module Introduction, install React Router, Project Setup`

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

## `52.2 Create Simple Route and simple router setup`

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
// In App.js

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
        // fixed route or static route
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

## `52.3 Load Users, display users, dynamic link, use Navigate`

⫸ [Nested Routes](https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes "Nested Routes - reactrouter.com")
- This is one of the ___most powerful features___ of React Router.
- Routes can be ___nested inside one another___, and their ___paths will nest too___ (child inheriting the parent).
  - `"/invoices"`
  - `"/invoices/sent"`
  - `"/invoices/:invoiceId"` → ___dynamic___

⫸ __There is two system for__ ___(similar data, but show in different looks)___
- ___Nested Routes___
- ___Dynamic Route___ (General system)

``` JavaScript
// Reading URL Parameter | In Friend.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showFriendDetail}>{username}'s ID: {id}</button>
        </div>
    );
};

export default Friend;
```

## `52.4 Set Header, Nav, Create Link, display active route`

⫸ [Navigation:](https://reactrouter.com/docs/en/v6/getting-started/overview#navigation "Navigation - reactrouter.com") Use `Link` to let the user change the URL or `useNavigate` to do it yourself (like after form submissions):

``` JavaScript
// In Header.js

import React from 'react';
import { Link } from 'react-router-dom';
// import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy React Router website!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>
                {/* <CustomLink to="/about">About</CustomLink> */}
            </nav>
        </div>
    );
};

export default Header;
```

⫸ [Custom Active Link](https://reactrouter.com/docs/en/v6/examples/custom-link "Custom Link Example - reactrouter.com")
- This example demonstrates how to make a custom `<Link>` component to render something different when the link is "active" using the `useMatch()` and `useResolvedPath()` hooks.
- Then clicked on `Open in Stackblitz` to ___generate CustomLink___

``` JavaScript
// In CustomLink.js

import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? 'red' : 'black', textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && " (active)"} */}
        </div>
    );
}

export default CustomLink;
```

## `52.5 Recap Router, route, path, component, not found, link`

⫸ [Reviews:](https://reactrouter.com/docs/en/v6/getting-started/concepts#review "All Main Concepts put together")
- ___Install React Router dependencies___
- ___Follow 6 steps to use ReactRouter___
- ___Nested Routes___
- ___Reading URL Parameters___
- ___Navigation___
- ___Custom Active Link___

## `52.6 Create route with some fixed and some dynamic part`

⫸ __Dynamic Route:__
- Although `"teams/:teamId"` is dynamic. Here, ___teams___ → (___fixed___) & ___:teamId___ → (___changing___)

``` JavaScript
// Dynamic Route
<Route path="teams/:teamId" element={<Team />} />
// Static Route or Fixed Route → more specific match
<Route path="teams/new" element={<NewTeamForm />} />
```

⫸ [Configuring Routes:](https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes)
- In `'/friend/:friendId'` (here), `/friend/` is the ___fixed part___ & `:friendId` is the ___dynamic part___
- If ___fixed part is matched___, then it ___works___, does not matter ___what I write___ in the dynamic part like (partha, dodotail, anything).
- `:friendId` is called ___URL parameter___ or ___Route parameter___
- So, ___Route___ could have one ___fixed part___ & one ___dynamic part___

``` JavaScript
// In App.js

<Routes>
  <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
</Routes>
```

⫸ We can go another place as a __dynamic route__ by using ___Link___ or ___Button___

``` JavaScript
// In Friend.js

<div>
    <Link to={'/friend/' + id}>Show Detail</Link>
    <button onClick={showFriendDetail}>{username}'s ID: {id}</button>
</div>
```

⫸ [Reading URL Parameters:](https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters)
- ___Note that:___ the path segment `:friendId` and the param's key `params.friendId` match up.
- How to ___set dynamic route___ & ___access the parameter___ for ___certain route___ using `useParams();`
  - `useParams();` __gives__ us ___a object___, so we can ___destructuring___ it.
  - We need to put ___exact name___ like `friendId`, otherwise it doesn't work.

``` JavaScript
// In FriendDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  const {friendId} = useParams();
  // const params = useParams();
  return (
    <div>
      <h2>This is Detail of a Friend: {friendId}</h2>
      {/* <h2>This is Detail of a Friend: {params.friendId}</h2> */}
    </div>
  );
};

export default FriendDetail;
```

## `52.7 React route parameter and load data based on dynamic route`

⫸ __Uncaught TypeError: Cannot read properties of undefined (reading 'city')__
- When we set `useState({});` empty, then ___first time load___ it ___didn't find data___
  - For this reason, `{friend.name}` will be ___undefined___, but it won't create error.
  - For `{friend.address.city}`, you will get ___error___, because ___address is undefined___ and you find any value for city inside ___address (undefined)___
- `Solutions:` ___Add Spinner___ Or ___Optional Chaining (?.)___
  - ___Optional Chaining (?.)___ means if address value exists then try to find value for city.
  - if address value is undefined, then don't try to find value for city.
  - You can notice that, it ___updates after data loading___.

⫸ __So, we `set dynamic route` & `access the parameter` for certain route using `useParams();`__

``` JavaScript
// In FriendDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])

    return (
        <div>
            {<h2>This is Detail of a Friend: {friendId}</h2>}
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;
```

## `52.8 (advanced) Nested route with useEffect dependency Injection`

⫸ [Nested Routes:](https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes)
- Need to use `Outlet`

``` JavaScript
// In App.js

import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/friends' element={<Friends></Friends>}></Route> // Fixed or Static Route
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route> // Dynamic Route
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route> // Nested Route
        </Route>
      </Routes>
    </div>
  );
}

export default App;
```

``` JavaScript
// In Header.js

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/posts">Posts</Link>
        <CustomLink to="/posts">Posts</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
```

``` JavaScript
// In Posts.js

import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])
    return (
        <div>
            <h2>Every posts Facebook ever had: {posts.length}</h2>
            {
                posts.map(post => <Link 
                    key={post.id}
                    to={`/posts/${post.id}`}
                    >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;
```

``` JavaScript
// In PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [postId]);

    return (
        <div>
            <h2>This is Post Detail for: {postId}</h2>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;
```

## `52.9 Module Summary and Recap React Route for Rest Countries`

``` JavaScript
// In App.js

import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

``` JavaScript
// In Header.js

import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/countries">Countries</Link>
                <CustomLink to="/countries">Countries</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
```


``` JavaScript
// In Countries.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h2>Welcome to my World! {countries.length}</h2>
            {
                countries.map(country => <li>
                    <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                    </li>)
            }
        </div>
    );
};

export default Countries;
```

``` JavaScript
// In CountryDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    return (
        <div>
            <h2>Country Detail for: {countryName}</h2>
        </div>
    );
};

export default CountryDetail;
```

## `52.10 Quiz`

1. What does a __404 mean__ to a web developer? (google it)
   - ___The page or path you are trying to access in not available___
2. Why will you __need a router__ for your app?
   - ___So that you can show a specific component based on the current route___
3. How will you __import a Routes from  React Router Dom__?
   - `import {Routes} from "react-router-dom";`
4. which __property will you set__ on the Route __to match with the url__? <br> `<Route  __?_ = ”/profile” element={<Profile />}`
   - ___path___
5. `<Route path=" __?__" element={<NotFound />} />` <br> What will you write if you want __to show the NotFound component__ if your __route parameter does not match__ any?
   - `*`
6. `<Route path = "/about" element={ <About />} / > ` <br> `<Route path =" * " element={< NotFound />} />` <br> If you hit  `http://localhost:3000/abut` which  component will you see?
   - `<NotFound />` ___Or___ `<NotFound></NotFound>`
7. How will you __set a dynamic part__ (___path parameter___) named id, under the user route? <br> `<Route path = "__?__" ></ Route >`
   - `/user/:id`
8. Which __router hook__ will you use __to get dynamic parameters from a URL__?
   - ___useParams___
9.  __useParams hook__ returns _______.
    - ___an object___
10. `http://localhost:3000/user/7` <br> `<Route path="/user/:id" element={<BlogPost />}` <br> How will you __get the value of the dynamic part__(7) from a URL named id?
    - `const { id } = useParams();`
11. We need to __wrap__ our <App /> component inside index.js with ___?____
    - ___BrowserRouter___
12. Does the __page reload__ when we __navigate to another route__?
    - ___No___


