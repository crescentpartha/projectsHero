Table of Contents
---

- [Module 48: Simple React SPA with Simple E-commerce](#module-48-simple-react-spa-with-simple-e-commerce)
  - [48.1 Module Introduction, site resource, figma](#481-module-introduction-site-resource-figma)
  - [48.2 Header Component, logo position, set nav menu](#482-header-component-logo-position-set-nav-menu)
  - [48.3 Shop Component, component layout, display data](#483-shop-component-component-layout-display-data)
  - [48.4 Product Component, component layout, display data](#484-product-component-component-layout-display-data)
  - [48.5 Style Product Cart, style debug and button position](#485-style-product-cart-style-debug-and-button-position)
  - [48.6 (advanced) set eventhandler, pass eventhandler to Child](#486-advanced-set-eventhandler-pass-eventhandler-to-child)
  - [48.7 (advanced) Cart state setup, update cart and total on click](#487-advanced-cart-state-setup-update-cart-and-total-on-click)
  - [48.8 Install external packages, react-fontawesome, display icon](#488-install-external-packages-react-fontawesome-display-icon)
  - [48.9 Simple React SPA module summary](#489-simple-react-spa-module-summary)
  - [48.10 (Bonus) Deploy Simple React website to Netlify](#4810-bonus-deploy-simple-react-website-to-netlify)
  - [Quiz 48](#quiz-48)
- [Module 49: (advanced) Cart calculation, Save and Retrieve cart](#module-49-advanced-cart-calculation-save-and-retrieve-cart)
  - [49.1 Module Introduction and simple ema-john recap](#491-module-introduction-and-simple-ema-john-recap)
  - [49.2 Run Github clone react project, Create Cart Component](#492-run-github-clone-react-project-create-cart-component)
    - [`Run Github clone react Project:`](#run-github-clone-react-project)
    - [`Access the Github clone react Project:`](#access-the-github-clone-react-project)
    - [`Create Cart Component:`](#create-cart-component)
  - [49.3 Calculate shopping cart price, shipping and tax with toFixed](#493-calculate-shopping-cart-price-shipping-and-tax-with-tofixed)
    - [`Calculate shopping cart price:`](#calculate-shopping-cart-price)
  - [49.4 Setting the cart data on the localStorage for future retrieve](#494-setting-the-cart-data-on-the-localstorage-for-future-retrieve)
    - [`Setup cart data`](#setup-cart-data)
    - [`Use fakedb.js in Shop.js file`](#use-fakedbjs-in-shopjs-file)
  - [49.5 (advanced) Load cart from local storage, find product](#495-advanced-load-cart-from-local-storage-find-product)
  - [49.6 (advanced) Display local storage cart to the UI](#496-advanced-display-local-storage-cart-to-the-ui)
  - [49.7 (super advanced) Handle quantity from storage to cart](#497-super-advanced-handle-quantity-from-storage-to-cart)
  - [49.8 (advanced) Add to the cart with quantity and explanation](#498-advanced-add-to-the-cart-with-quantity-and-explanation)
  - [49.9 Module summary, deploy, code recap](#499-module-summary-deploy-code-recap)
  - [Quiz 49](#quiz-49)
- [Module 52: ema-john with router and custom hook](#module-52-ema-john-with-router-and-custom-hook)
  - [53.0 Text Instruction](#530-text-instruction)
    - [`Follow the five Steps to set-up the React-Router`](#follow-the-five-steps-to-set-up-the-react-router)
  - [53.1 Install React router and implement simple router setup](#531-install-react-router-and-implement-simple-router-setup)
    - [`Install React Router dependencies:`](#install-react-router-dependencies)
    - [`Connect the URL:`](#connect-the-url)
    - [`Replace the default markup with some routes:`](#replace-the-default-markup-with-some-routes)
    - [`Create your route components & Link them in Header.js file:`](#create-your-route-components--link-them-in-headerjs-file)
  - [53.2 Recap React Router setup and intro to order review page](#532-recap-react-router-setup-and-intro-to-order-review-page)
  - [53.3 Write useState and useEffect in a different file and import it (Custom Hook)](#533-write-usestate-and-useeffect-in-a-different-file-and-import-it-custom-hook)
    - [`Product Load in different outside file:`](#product-load-in-different-outside-file)
    - [`Create a Custom Hook without dependency:`](#create-a-custom-hook-without-dependency)
    - [`JavaScript function usually return only one element:`](#javascript-function-usually-return-only-one-element)
    - [`Use a Custom Hook:`](#use-a-custom-hook)
  - [53.4 Create useCart with products dependency and use it](#534-create-usecart-with-products-dependency-and-use-it)
    - [`Create a Custom Hook with dependency:`](#create-a-custom-hook-with-dependency)
    - [`Use a Custom Hook:`](#use-a-custom-hook-1)
  - [53.5 Create review page structure and Display Shopping cart](#535-create-review-page-structure-and-display-shopping-cart)
    - [`Adding a CSS Modules Stylesheet:`](#adding-a-css-modules-stylesheet)
  - [53.6 Implement Review Item style with a lot of flex](#536-implement-review-item-style-with-a-lot-of-flex)
    - [`Ternary Operation:` (___if name length is greater than 20___)](#ternary-operation-if-name-length-is-greater-than-20)
    - [`Implement ReviewItem style:`](#implement-reviewitem-style)
  - [53.7 More style of Review item and apply Remove Item handler](#537-more-style-of-review-item-and-apply-remove-item-handler)
    - [`Add Remove Item Handler:` (___handleRemoveProduct___)](#add-remove-item-handler-handleremoveproduct)
    - [`More style added in ReviewItem:`](#more-style-added-in-reviewitem)
  - [53.8 Make Data consistent across UI and explore children props](#538-make-data-consistent-across-ui-and-explore-children-props)
    - [`Children Props:`](#children-props)
  - [53.9 Module Summary, use navigate and recap custom hook](#539-module-summary-use-navigate-and-recap-custom-hook)
    - [`useNavigate()`](#usenavigate)
  - [Quiz 53](#quiz-53)
- [Module 59: Private Route with Ema-John](#module-59-private-route-with-ema-john)
  - [59.1 Module Introduction firebase setup and git clone](#591-module-introduction-firebase-setup-and-git-clone)
    - [`If Clone any React Project:` (___Need to follow some steps___)](#if-clone-any-react-project-need-to-follow-some-steps)
    - [`Authentication Steps or Auth_steps:`](#authentication-steps-or-auth_steps)
    - [`Firebase Hosting/Deploy Steps:` (for ___1st time___) (not mandatory right now!)](#firebase-hostingdeploy-steps-for-1st-time-not-mandatory-right-now)
    - [`Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)](#firebase-hostingdeploy-steps-for-2ndmultiple-times)
  - [59.2 Create Login component and style Login form](#592-create-login-component-and-style-login-form)
  - [59.3 Style sign up component and access email, password using handler](#593-style-sign-up-component-and-access-email-password-using-handler)
  - [59.4 Install React firebase hook implement create user](#594-install-react-firebase-hook-implement-create-user)
  - [59.5 Implement Login and redirect user after login](#595-implement-login-and-redirect-user-after-login)
  - [59.6 Create Require Auth and Navigate from location](#596-create-require-auth-and-navigate-from-location)
    - [`Create RequireAuth component`](#create-requireauth-component)
    - [`Wrap Inventory component by RequireAuth component for restricted access`](#wrap-inventory-component-by-requireauth-component-for-restricted-access)
    - [`Redirected to the expected location`](#redirected-to-the-expected-location)
    - [`Conditional Rendering to toggle Login and Sign Out button`](#conditional-rendering-to-toggle-login-and-sign-out-button)
  - [59.7 Implement Sign out and Create a shipment form](#597-implement-sign-out-and-create-a-shipment-form)
    - [`Implement Sign Out from firebase/auth`](#implement-sign-out-from-firebaseauth)
    - [`Change navigate notFound to shipment route`](#change-navigate-notfound-to-shipment-route)
    - [`Wrap Shipment component by RequireAuth component for restricted access`](#wrap-shipment-component-by-requireauth-component-for-restricted-access)
    - [`Create Shipment component like SignUp component`](#create-shipment-component-like-signup-component)
  - [59.8 Module Summary and list to implement auth](#598-module-summary-and-list-to-implement-auth)
    - [`Make Email field readOnly and set value={user?.email}`](#make-email-field-readonly-and-set-valueuseremail)
  - [59.9 (bonus video) Host your react app to firebase](#599-bonus-video-host-your-react-app-to-firebase)
    - [`Firebase Hosting/Deploy Steps:` (for ___1st time___) (not mandatory right now!)](#firebase-hostingdeploy-steps-for-1st-time-not-mandatory-right-now-1)
    - [`Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)](#firebase-hostingdeploy-steps-for-2ndmultiple-times-1)
  - [Quiz 59](#quiz-59)
    - [`Some Notes:`](#some-notes)
- [Module 67: Pagination and Load Data by filter](#module-67-pagination-and-load-data-by-filter)
  - [67.1 (Conceptual) Node vs Express, Set simple ema-john server](#671-conceptual-node-vs-express-set-simple-ema-john-server)
    - [`Resources`](#resources)
    - [`Basic Server Setup Steps`](#basic-server-setup-steps)
      - [`Create Directory`](#create-directory)
      - [`Create package.json file`](#create-packagejson-file)
      - [`Install Express, CORS, MongoDB, dotenv`](#install-express-cors-mongodb-dotenv)
      - [`Install nodemon` (one time for each computer)](#install-nodemon-one-time-for-each-computer)
      - [`Modify scripts of package.json file`](#modify-scripts-of-packagejson-file)
      - [`Steps for Express/Node server` (in index.js)](#steps-for-expressnode-server-in-indexjs)
      - [`Set middleware`](#set-middleware)
      - [`import and configure dotenv:`](#import-and-configure-dotenv)
      - [`Set .gitignore for node project`](#set-gitignore-for-node-project)
      - [`Create a .env file in the root of your project`](#create-a-env-file-in-the-root-of-your-project)
      - [`Run Node server or Backend server`](#run-node-server-or-backend-server)
  - [67.2 (Conceptual) HTTP Method, Get VS POST, Connect MongoDB](#672-conceptual-http-method-get-vs-post-connect-mongodb)
    - [`Resources`](#resources-1)
    - [`Create New Project`](#create-new-project)
    - [`Setup Database Access` (Add new Database User)](#setup-database-access-add-new-database-user)
    - [`Setup Network Access` (Add IP Address)](#setup-network-access-add-ip-address)
    - [`Create a database` (Create Cluster)](#create-a-database-create-cluster)
    - [`Setup Quickstart` (Create new User & Add new IP)](#setup-quickstart-create-new-user--add-new-ip)
    - [`Enable Atlas Security Quickstart in Side-bar`](#enable-atlas-security-quickstart-in-side-bar)
    - [`Connect to Database`](#connect-to-database)
      - [`Without Modification`](#without-modification)
      - [`With Modification`](#with-modification)
  - [67.3 Add data from JSON to database and load on the UI](#673-add-data-from-json-to-database-and-load-on-the-ui)
    - [`Resources` (CSP - Content Security Policy)](#resources-csp---content-security-policy)
    - [`Create Database and Collection` (Add My Own Data)](#create-database-and-collection-add-my-own-data)
    - [`Insert Data from JSON to MongoDB Database`](#insert-data-from-json-to-mongodb-database)
      - [`Keyboard Shortcut`](#keyboard-shortcut)
      - [`Pasted Data Sample`](#pasted-data-sample)
      - [`Original Data Sample from Database`](#original-data-sample-from-database)
    - [`All product's data Load form Database` (GET Method)](#all-products-data-load-form-database-get-method)
    - [`Modified Client-side Code` (Particular Section)](#modified-client-side-code-particular-section)
    - [`Full Code Example` (Server-Side)](#full-code-example-server-side)
  - [67.4 Introduction to pagination and pagination concept](#674-introduction-to-pagination-and-pagination-concept)
    - [`Pagination Concept`](#pagination-concept)
    - [`My Own Resources` (About Pagination)](#my-own-resources-about-pagination)
  - [67.5 (Interesting) get page count and Create pagination button](#675-interesting-get-page-count-and-create-pagination-button)
    - [`Pagination Theory`](#pagination-theory)
    - [`How many products have in the database` (___Product Count___ from Server-Side)](#how-many-products-have-in-the-database-product-count-from-server-side)
    - [`Explain array of total pages` (In Console)](#explain-array-of-total-pages-in-console)
    - [`Create Pagination Button` (___Product Count___ & ___Pages Count___ in Client-Side)](#create-pagination-button-product-count--pages-count-in-client-side)
    - [`Pagination Button Style`](#pagination-button-style)
  - [67.6 Set Page and Size state and send search query to server](#676-set-page-and-size-state-and-send-search-query-to-server)
    - [`Resources`](#resources-2)
    - [`Set Page state and Size state - Send search query to server-side`](#set-page-state-and-size-state---send-search-query-to-server-side)
    - [`Conditional CSS Style for Pagination Selected Button`](#conditional-css-style-for-pagination-selected-button)
  - [67.7 (Interesting) Load data based on the page number and size (no of products)](#677-interesting-load-data-based-on-the-page-number-and-size-no-of-products)
    - [`Fix the warning` (cursor.count)](#fix-the-warning-cursorcount)
    - [`Modified Code` (get all products data (json format) from database according to page_number & product_size) (___page & size___)](#modified-code-get-all-products-data-json-format-from-database-according-to-page_number--product_size-page--size)
    - [`Modified Code` (product count: How many products have in the database) (___Fix deprecatedWarning___)](#modified-code-product-count-how-many-products-have-in-the-database-fix-deprecatedwarning)
  - [67.8 (Advanced) Use Post to load some products using keys](#678-advanced-use-post-to-load-some-products-using-keys)
    - [`Resources`](#resources-3)
    - [`Use post to get products by ids`](#use-post-to-get-products-by-ids)
    - [`Modified useCart.js hook`](#modified-usecartjs-hook)
    - [`Modified Orders.js component`](#modified-ordersjs-component)
    - [`Modified Shop.js component`](#modified-shopjs-component)
    - [`Full Code Example`](#full-code-example)
      - [`index.js`](#indexjs)
      - [`Shop.js`](#shopjs)


# Module 48: Simple React SPA with Simple E-commerce

## 48.1 Module Introduction, site resource, figma

- Use __figma file__ to design the site. 
- go to __figma.com__ and drag the figma file
- After that, start designing according to this file

⫸ __API Data Load:__
- __products.json__ in __public__ folder
- https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json

**[🔼Back to Top](#table-of-contents)**

## 48.2 Header Component, logo position, set nav menu

``` CSS
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header a {
    text-decoration: none;
}
.header a:hover {
    color: orange;
}
```

**[🔼Back to Top](#table-of-contents)**

## 48.3 Shop Component, component layout, display data

- create __Shop.js__ & __Shop.css__ file

``` JavaScript
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='shop-container'> 
            <div className="products-container">
                <h3>This is for products: {products.length}</h3>
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

## 48.4 Product Component, component layout, display data

- create __Product.js__ & __Product.css__ file

``` JavaScript
// Shop.js (form return)
{
    products.map(product => <Product
    key={product.id}
    product={product}
    ></Product>)
}
```

``` JavaScript
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

## 48.5 Style Product Cart, style debug and button position

- style __debug__ from using __chrome dev tools__

``` CSS
/* To set "Add to Cart" button in the bottom of the product div */
.product {
    position: relative;
}
.btn-cart {
    position: absolute;
    bottom: 0;
}
```

**[🔼Back to Top](#table-of-contents)**

## 48.6 (advanced) set eventhandler, pass eventhandler to Child

- If we click __"Add to Cart"__ button, we can value update inside the __same component__.
- However, we can send data Parent component to Child component because props follows __water flow__ system.
- But, In React, we can't send data Child component to Parent component because React is __Unidirectional__. 

---

- In React, We can pass data from __up to down__
- EventHandler need to puts in shop component sothat we can pass data as a props in a cart.
- We can pass data like __(object, function, EventHandler)__ as a props `<Product handleAddToCart={handleAddToCart}></Product>`
- __EventHandler with parameter call:__ need __arrow function__ `onClick={() => props.handleAddToCart(props.product)}` Otherwise it directly call EventHandler.
- __Destructuring:__ `const {product, handleAddToCart} = props;`
- We can set it `{product, handleAddToCart}` like a __parameter__ as a __alternative of props__.

``` JavaScript
// set eventhandler in parent component (Shop.js)
const handleAddToCart = (product) => {
    console.log(product);
}
```

``` JavaScript
// set eventhandler to pass data from child to parent (Product.js)

// const {handleAddToCart} = props;

<button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
    <p>Add to Cart</p>
</button>
```
<p align="center">
    <img src='./images/EventHandler.drawio.svg' alt="EventHandler Call from Child Component" />
</p>

**[🔼Back to Top](#table-of-contents)**

## 48.7 (advanced) Cart state setup, update cart and total on click

``` CSS
/* Use media query to responsive product div (Shop.css) */
@media screen and (max-width:1100px) {
    .products-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

- Where we declare __EventHandler__, Where we declare __State__ `const [cart, setCart] = useState([]);`
- [__Lifting State Up | Lifting up the state:__](https://reactjs.org/docs/lifting-state-up.html "Lifting State Up - reactjs.org") In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called __"Lifting State Up"__.
- We don't push the product into the cart like `cart.push(product);`
- We copy cart to newCart, then add new product `const newCart = [...cart, product];` 
- Because, In React, it is easier to compare with __new virtual DOM__.
- Then, `setCart(newCart);`
- Then, `<p>Selected Items: {cart.length}</p>`

``` JavaScript
const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // console.log(product);.
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
};
```
---
⫸ Modify __Older code__ in an advanced way:

``` JavaScript
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, ratings } = props.product;
    // const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};
```
⫸ __Advanced way:__

``` JavaScript
const Product = ({product, handleAddToCart}) => {
    // console.log(props.product);
    // Destructuring 
    // const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

## 48.8 Install external packages, react-fontawesome, display icon

⫸ [__heroicons__](https://heroicons.com/ "Beautiful hand-crafted SVG icons") | [__Heroicons__](https://heroicons.dev/ "heroicons.dev")

⫸ [__React - Font Awesome Docs__](https://fontawesome.com/docs "React - Font Awesome Docs | How to use icons in our projects, awesomely.")
- `Get Started:` To get started you'll need to install the following __packages__ into your project using a __package manager__ like __npm__ or __yarn__.
``` FontAwesomeIcon 
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
OR
``` FontAwesomeIcon 
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```
- Check __dependencies__ section in the __package.json__ file, packages are install or not.
- __Ctrl + P__ for searching file.

- __Using Icons via Individual Use:__

``` JavaScript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
```
- Display __icon__
``` JavaScript
<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
```
``` CSS
/* set AddToCart & icon horizontally */
.btn-cart {
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-cart .btn-text {
    margin-right: 5px;
}
```
- Change __favicon.ico__ and __title__ of the page.

**[🔼Back to Top](#table-of-contents)**

## 48.9 Simple React SPA module summary

**[🔼Back to Top](#table-of-contents)**

## 48.10 (Bonus) Deploy Simple React website to Netlify

- `To Deploy:` [Netlify.com](https://www.netlify.com/) → sites → Drag & Drop (__build__ folder) → Click Link → get React App
- `To Modify:` Change → npm run build → Drag & Drop (build folder) → Click shareable Link → get React App

**[🔼Back to Top](#table-of-contents)**

## Quiz 48

1. What is the ___purpose of the key prop___ used in react?
   - `It can efficiently identify the changes in virtual DOM`
2. How will you ___import useState___ in React?
   - `import { useState } from 'react'`
3. `const [count, setCount] = useState(0)` → What should you do to increase the count state?
   - `setCount(count+1)`
4. `const [products, setProducts] = useState( _?_ )` → What will be the ___default value___ of the above state  If you want to store an ___array of objects___ from a server and set it to the state?
   - `[]`
5. Can we ___pass a function___ through ___props___?
   - `Yes`
6. If ___A and B___ are ___siblings___ of components that ___share a common state___, where should you ___declare the state___?
   - `In their Parent Component`
7. Where did we ___declare___  `const [products, setProducts] = useState([])` in the ___Ema John Project___?
   - `In Shop.js`
8. How do we ___pass data___ from ___a Child to a parent___ Component using props?
   - `No, you can not sent data from child to parent using props`
9. What does the `package.json` file do? (Search on Google Mama)
   - `It records important metadata about a project`
10. Which is the ___correct way___ to ___call the function inside a button___ in React?
    - `<button onClick={() => handleAdd(item)}> </button>`
``` JavaScript
const handleAdd( item ){
    console.log(item)  
}
```
11.  How will you ___set a click handler___ on a Button using React?
     - `onClick`
``` JavaScript
<button ________= {handleClick}>Click me</button>
```
12. How would you ___import a App.css file___ staying in the ___same folder___ of the App.js file? (if needed check the React Project that you have created)
    - `"./App.css";`
``` JavaScript
import ______?______;
```
13. Which ReactJS function ___renders HTML___ to the web page?
    - `ReactDOM.render()`
14. What does ___transpile jsx___ in react?
    - `Babel`
15. ___Where___ we can ___call react hooks___?
    - `At the top level of React function`

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 49: (advanced) Cart calculation, Save and Retrieve cart

## 49.1 Module Introduction and simple ema-john recap

**[🔼Back to Top](#table-of-contents)**

## 49.2 Run Github clone react project, Create Cart Component

### `Run Github clone react Project:`
- If we ___clone any react repository___ from github and try to execute command `npm start`, It will give an ___error message___.
- If we clone any react repository, then we need to `install these dependencies`.
- We don't find `node_modules` folder when we clone react repository.
- To ___install these dependencies___, we need to run `npm install` command. It will install all dependencies of that react project.
- When we ___push___ any react project into the github, we don't send ___node_modules___ folder. We ___ignore node_modules___ folder because ___create-react-app___ makes this initial setting in ___.gitignore___ file.
- After run `npm install`, we can run `npm start` command.
- After that, we can also change our ___project/folder name___.

**[🔼Back to Top](#table-of-contents)**

### `Access the Github clone react Project:`
- When we `push` any clone repository into Github, It shows an error message that you ___don't have access___. 
- Run `git remote -v`, to check the ___origin___ where to fetch and where did push.
- If we want to send these into another Repository: (search: [__git remote set-url origin__](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories "Managing remote repositories | Switching remote URLs from SSH to HTTPS"))
  - Create ___repository___ and copy the ___origin___ link.
  - run `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git`
  - Then, run `git remote -v` to verify that the remote URL has changed.

**[🔼Back to Top](#table-of-contents)**

### `Create Cart Component:`

``` JavaScript
<div className="cart-container">
    <Cart cart={cart}></Cart>
</div>
```

``` JavaScript
const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

## 49.3 Calculate shopping cart price, shipping and tax with toFixed

### `Calculate shopping cart price:`
- 2 ways: `Reduce` & `for of` loop

``` JavaScript
const Cart = (props) => {
    const {cart} = props;

    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    // const tax = (total * 10 / 100).toFixed(2);
    const tax = (total * 0.1).toFixed(2);

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: </h5>
        </div>
    );
};
```

- [JavaScript two decimal places without rounding](https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding "stackoverflow.com")
- [JavaScript toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "Number.prototype.toFixed() - MDN web docs")

**[🔼Back to Top](#table-of-contents)**

## 49.4 Setting the cart data on the localStorage for future retrieve

### `Setup cart data`

``` JavaScript
const Cart = (props) => {
    // const tax = parseFloat((total * 10 / 100).toFixed(2));
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

### `Use fakedb.js in Shop.js file`

``` JavaScript
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const handleAddToCart = (product) => {
        addToDb(product.id);
    }
};
```

**[🔼Back to Top](#table-of-contents)**

## 49.5 (advanced) Load cart from local storage, find product

``` JavaScript
// ONLY the changes things contains this code | In fakedb.js
const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
export {
    getStoredCart
}
```

- If any data load from outside, then it is ___side effect___. You need to use `useEffect()`;
- There is 2 ways to find anythings → `filter` & `find`

``` JavaScript
// ONLY the changes things contains this code | In Shop.js
import { addToDb, getStoredCart } from '../../utilities/fakedb';

useEffect( () => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
        }
    }, [])
```

**[🔼Back to Top](#table-of-contents)**

## 49.6 (advanced) Display local storage cart to the UI

- ___products load by fetch___ & ___data load from Local Storage___ don't work sequentially. It would be ___asynchronous___.
- If we ___load products before data fetch___/catch, then it shows ___empty array___ because data don't loaded before data fetching. Solution is ___dependency injection___.
- ___Dependency Injection___ means:
  - if keep empty array `useEffect( , [])`, then call it only once.
  - ___Local Storage___ depends on ___one things___ or ___many things___.
    - for one things: `useEfect( , [products])`
    - for many things: `useEfect( , [products, cart])`
- If we add dependency, then it ___call this useEffect again___ for any little changes.

``` JavaScript
// In Shop.js
const Shop = () => {
    useEffect( () => {
        console.log('products load before fetch');
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log('products loaded');
        });
    }, [])

    useEffect( () => {
        console.log('Local Storage first line', products);
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        // console.log('local storage finished');
    }, [products])
};
```

**[🔼Back to Top](#table-of-contents)**

## 49.7 (super advanced) Handle quantity from storage to cart

- Use `for in` loop, if it is ___object___.
- Use `for of` loop, if it is ___array___.

``` JavaScript
// ONLY the changes things contains this code | In Cart.js
const Cart = (props) => {
    const {cart} = props;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
    }

    return (
        <div className='cart'>
            {/* <p>Selected Items: {cart.length}</p> */}
            <p>Selected Items: {quantity}</p>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

## 49.8 (advanced) Add to the cart with quantity and explanation

``` JavaScript
// ONLY the changes things contains this code | In Shop.js
const Shop = () => {
    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            // cart.push(product); // Don't do this
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
};
```
- To Watch the [__visual explanation__](https://web.programming-hero.com/web-5/video/web-5-49-8-advanced-add-to-the-cart-with-quantity-and-explanation?t=532s "Add to the cart with quantity and explanation"): Go to __M49.8__, Time Start: __8:52__

**[🔼Back to Top](#table-of-contents)**

## 49.9 Module summary, deploy, code recap

- To Watch the [__visual explanation__](https://web.programming-hero.com/web-5/video/web-5-49-9-module-summary-deploy-code-recap "Module Summary: How whole process works"): Go to __M49.9__, Time Start: __5:45__

**[🔼Back to Top](#table-of-contents)**

## Quiz 49

1. What ___type of things___ can we ___send via props___?
   - ___array, object, function, event handler___

2. What is ___true about localStorage___? 
   - ___is not deleted___ after the browser has been closed

3. What does it mean by ___lifting up state___?
   - Declare the ___state in the parent component___ and pass ___event handler to the child___
   - `onClick={ () => findDevice(parameter)}`

``` JavaScript
// 4. if we want to add this function as an event handler to a button by passing a parameter, then which pattern is correct?

const findDevice= (id) => testArr.find(p=> p.id===id);
```

5. Which ___method___ is used to ___remove an item___ from ___local storage___?
   - `localStorage.removeItem();`

6. What will be the ___output___?
   - ___NaN___
``` JavaScript
const student1= {name: "rafique", marks: 79, result: "A+"};
console.log(student1.mark + 1);
```

7. How can we ___pass an event handler___ to the ___child component___?
   - ___Using props___

8. What is the purpose of `npm i --save <packageName>`?
   - ___Install___ and ___save___ the ___specified package___ 
   - `--save`: ___Package will appear___ in your ___dependencies___.

9. Where will you find ___information___ about ___all the packages___ that you have ___installed___ in your ___react app___?
   - ___package.json___

10. How can you ___pass a boolean value___ (true) as the ___prop___ named ___hero___?
    - `<HeroComponent hero={true} />` & `<HeroComponent hero />`

11. Suppose you are trying to ___access___ something from ___local storage___ using `localStorage.getItem()` method, and the item ___is not exist___ there. Then you will get___?
    - ___null___

12. What is the purpose of the ___dependency array___ in ___useEffect___? 
    - ___re-run the effect___ when the ___values___ within the array ___change___ across ___re-renders___.

13. If you want to ___set data___ into ___localStorage___ what two things should you do?
    - Call ____localStorage.setItem____ method and pass ___name___ and ___value___ as parameters

14. How we can ___access object properties___?
    - Using ___dot notation___ → `object.property` 
    - Using ___square bracket notation___ → `object['property']` 
    - By ___destructuring___ → `const {property} = object;`

15. How we can access __brand name__? 
    - __props.brandName__
``` JavaScript
<Phone brandName="iPhone">

const Phone = (props) => {
 return <h2>Phone Brand : { ___???____ }</h2>;
}
```

**[🔼Back to Top](#table-of-contents)**

<br /><br/>

# Module 52: ema-john with router and custom hook

## 53.0 Text Instruction

### `Follow the five Steps to set-up the React-Router`
1. Use ___BrowserRouter___ in ___index.js___
2. Set ___Routes___ in ___App.js___
3. Set many ___Route___ inside the ___Routes___
4. Route includes ___path___
5. Route also includes a __prop__ called ___element___

**[🔼Back to Top](#table-of-contents)**

## 53.1 Install React router and implement simple router setup

### `Install React Router dependencies:`

``` Terminal
npm install react-router-dom@6
```

**[🔼Back to Top](#table-of-contents)**

### `Connect the URL:` 

import ___BrowserRouter___ from ___react-router-dom___ near the top of your file and ___wrap___ your app in a `<BrowserRouter>`:

``` JavaScript
// In src/index.js

import { BrowserRouter } from "react-router-dom";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**[🔼Back to Top](#table-of-contents)**

### `Replace the default markup with some routes:`

``` JavaScript
// In src/App.js

// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

**[🔼Back to Top](#table-of-contents)**

### `Create your route components & Link them in Header.js file:`

``` JavaScript
// In Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='logo' />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;
```

**[🔼Back to Top](#table-of-contents)**

## 53.2 Recap React Router setup and intro to order review page

⫸ `Order Summary from Shop page, we need to bring it in Orders page:` (___2 ways to solve it___)
1. We ___loaded data___ according to ___Id___ in a component, this time we do it ___outside of the component___.
2. Use ___Redux___ 

**[🔼Back to Top](#table-of-contents)**

## 53.3 Write useState and useEffect in a different file and import it (Custom Hook)

### `Product Load in different outside file:`
- Increase ___code reusability___
  - Same code implement in different different file easily.
- Reduce ___code duplication/Repetition___ (DRY - Don't Repeat Yourself)

**[🔼Back to Top](#table-of-contents)**

### `Create a Custom Hook without dependency:`
- A ___custom Hook___ is a JavaScript function whose name starts with `”use”` and that may call other Hooks.
- For example, `useProducts` and `useCart` are our custom hook.

``` JavaScript
// In hooks/useProducts.js

import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}

export default useProducts;
```

**[🔼Back to Top](#table-of-contents)**

### `JavaScript function usually return only one element:`
- ___Return one thing___ → `return products;`
- But, we can ___return many thing___ like as array → `return [products, setProducts];`

**[🔼Back to Top](#table-of-contents)**

### `Use a Custom Hook:`

``` JavaScript
// In Orders.js

import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is Orders: {products.length}</h2>
        </div>
    );
};

export default Orders;
```

``` JavaScript
// In Shop.js

import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    // using a custom hook
    const [products, setProducts] = useProducts();
};

export default Shop;
```

**[🔼Back to Top](#table-of-contents)**

## 53.4 Create useCart with products dependency and use it

### `Create a Custom Hook with dependency:`

``` JavaScript
// In hooks/useCart.js

// Create a Custom Hook with dependency
import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart, setCart];
}

export default useCart;
```

**[🔼Back to Top](#table-of-contents)**

### `Use a Custom Hook:`

``` JavaScript
// In Orders.js

import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>This is Orders: {products.length}</h2>
            <p>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;
```

``` JavaScript
// In Shop.js

import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';

const Shop = () => {
    // using a custom hook
    const [cart, setCart] = useCart(products);
};

export default Shop;
```

**[🔼Back to Top](#table-of-contents)**

## 53.5 Create review page structure and Display Shopping cart

### `Adding a CSS Modules Stylesheet:`

- ___CSS [Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/ "A module encapsulates a set of related functions and components semantically")___ → `[name].module.css` file naming convention.
  - Modules ___means___ use only this component, other component can't use it.
  - If we don't name it `Shop.module.css`, then it access from other files.
  - By default, ___CSS Class___ __name__ like `.products-container` accessible from all files, because React combine all together.
- ___CSS Modules___ let you use the same CSS class name in different files without worrying about naming clashes.
- A module ___encapsulates___ a set of related ___functions and components___ semantically related with its own functional responsibility.
- [Why React developers should modularize their applications?](https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1#:~:text=A%20module%20encapsulates%20a%20set,the%20rest%20of%20the%20application.)

``` JavaScript
// In Orders.js

import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
```

**[🔼Back to Top](#table-of-contents)**

## 53.6 Implement Review Item style with a lot of flex

### `Ternary Operation:` (___if name length is greater than 20___)
- `{name.length > 20 ? name.slice(0, 20) + '...' : name}`
- ___Output:___ `NMD_R1 V2 SHOES` | `LUNAR NEW YEAR ULTRA...`
- Use `title` to show ___full name___.

``` JavaScript
<p className="product-name" title={name}>
    // ternary operation
    {name.length > 20 ? name.slice(0, 20) + '...' : name}
</p>
```

**[🔼Back to Top](#table-of-contents)**

### `Implement ReviewItem style:`

``` JavaScript
// In ReviewItem.js
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, price, shipping, quantity } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span className="orange-color">{price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
```

**[🔼Back to Top](#table-of-contents)**

## 53.7 More style of Review item and apply Remove Item handler

### `Add Remove Item Handler:` (___handleRemoveProduct___)

``` JavaScript
// In Orders.js

import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
```

**[🔼Back to Top](#table-of-contents)**

### `More style added in ReviewItem:`

``` JavaScript
// In ReviewItem.js

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span className="orange-color">${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
```

**[🔼Back to Top](#table-of-contents)**

## 53.8 Make Data consistent across UI and explore children props

### `Children Props:`
- [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html "React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components") | [Using Children Props](https://medium.com/@martin.crabtree/react-js-using-children-props-c83d5b259756 "React.js: Using Children Props - medium.com")
- If I write anything inside the component, then send it as a ___special props___ called ___children___. `{props.children}`


``` JavaScript
// In Cart.js
const Cart = (props) => {
    // console.log(props);
    console.log(props.children);

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            {props.children}
        </div>
    );
};

// In Orders.js
const Orders = () => {
    return (
        <div className="shop-container">
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/">
                        <button>Proceed Checkout </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

// In Shop.js
const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="cart-container">
                <Cart cart={cart}>
                    <p>Hello from Shop</p>
                </Cart>
            </div>
        </div>
    );
};

// Output: for Shop.js
    ▶ {cart: Array(5), children: {...}}
        ▶ cart: (5) [{...}, {...}, {...}, {...}, {...}]
        ▼ children:
            ▶ props: {children: 'Hello from Shop'}
               type: "p"
```

**[🔼Back to Top](#table-of-contents)**

## 53.9 Module Summary, use navigate and recap custom hook

### `useNavigate()`

- [useNavigate()](https://reactrouter.com/docs/en/v6/hooks/use-navigate "useNavigate - React Router")

``` JavaScript
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    return (
        <div className="shop-container">
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to="/shop">
                        <button>Proceed Checkout </button>
                    </Link> */}
                    <button onClick={() => navigate('/shop')}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
```

**[🔼Back to Top](#table-of-contents)**

## Quiz 53

1. If you ___clone a repository___ that does not contain ___node_modules___ , ___which command___ should you run?
   - `npm install`
2. Which ___property___ will you set on the Route to match with the url? <br> `<Route __?__ =”/profile”>`
   - `path`
3. A ___function___ can ___return___ _______.
   - ___An Array, An Object, and A Number___
4. Which ___props___ should you use to match exactly the path you gave for routing?
   - ___no need of any props, by default all are exact___
5. which ___React router hook___ will you use to access ___one or more parameters___ from the path? <br> `const { user ,id } = __?_();`
   - `useParams()`
6. If you want to ___add style___ to your ___Link___, which one should you use?
   - `<NavLink>` & `Custom active link`
7. Should you use `<Link>` ___outside of___ `<Router>`
   - ___No___
8. ___Object.values___ returns _______
   - ___An Array___
9.  What is the purpose of ___useEffect hook___? (Google it and then go to the reactjs.org link. And then also google what is ___side effect___. Learn it)
    - ___Load external data or interact outside of the component___
10.  If you ___miss the dependency___ how many times will it ___re-render___?
     - ___Infinity Times___
``` JavaScript
useEffect( ()=> {
    fetch(‘/https://jsonplaceholder.typicode.com/users’)
    .then( res => res.json() )
    .then(data => setData(data) )
} ) 
```

11.  What will be the ___value of the item___?
     - `[{id: "c222", name: "coffee"}, {id: "t333", name: "tea"}]`
``` JavaScript
const items= [
    { id: "c222", name : "coffee"},
    { id:"t333" , name : "tea" },
    { id:"j555", name : "juice"}
]

const  item= items.filter(item => item.id != "j555")
```

12. What is the name of the ___node module___ that you ___installed___ to have the ___react router___ in your React web application?
    - ___react-router-dom___

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 59: Private Route with Ema-John

## 59.1 Module Introduction firebase setup and git clone

⫸ [ema-john-with-router-module-53](https://github.com/ProgrammingHero1/ema-john-with-router-module-53 "Clone from 'ProgrammingHero1/ema-john-with-router-module-53', if needed")

### `If Clone any React Project:` (___Need to follow some steps___)
1. `npm install` for ___node_modules___ folder, it installs all the ___dependency___ of this project.
2. Create a ___new Repository___ 
3. `git remote -v` (___to check remote URL___)
   - It ___push___ all the ___commits___ in `https://github.com/ProgrammingHero1/eme-john-with-router-module-53.git` (It ___points___ to this repository)
4. But I want to ___push___ all my ___commits___ in ___new Repository___
   - ___set-url___ not add ___command___ `git remote set-url origin https://github.com/ProgrammingHero1/ema-john-simple-with-auth-module-59.git`
5. `git remote -v` (___to check remote URL___)
   - It ___points___ `https://github.com/ProgrammingHero1/ema-john-simple-with-auth-module-59.git` right now
6. Now we can use ___git___ in a ___regular ways___.
   - `git add .`
   - `git commit -m "initial firebase setup"`
   - `git push`
   - `git status`

**[🔼Back to Top](#table-of-contents)**

---

### `Authentication Steps or Auth_steps:`
1. Create a ___new firebase project___ in ___console.firebase.google.com___
2. ___Register app___
3. `npm install firebase`
4. Create `firebase.init.js` file and ___import___ `getAuth` to ___export___ `auth`
5. Firebase settings > Authentication > ___Enable___ Email/Password ___auth___
6. ___Create___ Login, SignUp component, ___setup route___
7. Attach ___form field handler___ and form ___submit handler___
8. `npm install --save react-firebase-hooks`
9. ___useCreateUserWithEmailAndPassword___ for create user from ___react-firebase-hooks___
10. If user is ___created___, then ___redirect___ to the expected page
11. ___useSignInWithEmailAndPassword___ for SignIn/LogIn from ___react-firebase-hooks___
12. If user is ___LoggedIn___, then ___redirect___ to the expected page
13. Create ___RequireAuth___ and ___Navigate___ from location
    - Check ___user exists___ and also ___tract user location___
14. In route, ___wrap protected component___ by using ___RequireAuth___ component

**[🔼Back to Top](#table-of-contents)**

---

### `Firebase Hosting/Deploy Steps:` (for ___1st time___) (not mandatory right now!) 

(___Hosting > Get Started___)

1. ___Install Firebase CLI___ 
   - `npm install -g firebase-tools` (___one time___ for your ___computer___)
2. ___Initialize your Project___
   - `firebase login` (___one time___ for your ___computer___)
     - `Y` > Select Google Account > `Allow` > ___Firebase CLI___ Login Successful
   - `firebase init` (___one time___ for ___each project___) (___Some questions need to face___)
     - Are you ready to proceed? (Y/n) <br /> > `Y`
     - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `SpaceBar` to select or unselect)
     - Use an existing project <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `Enter`)
     - Select an existing project like `ema-john-simple-447ad` <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `Enter`)
     - What do you want to use as your public directory? (public) <br /> > write `build` > (press `Enter`)
     - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) <br /> > `y`
     - Set up automatic builds and deploys with GitHub? (y/N) <br /> > `N`
     - File build/index.html already exists. Overwrite? (y/N) <br /> > `N` <br /> ___Firebase initialization complete!___
3. ___Build your project___ according to ___latest change___ 
   - `npm run build` (___every time___ you want to ___deploy___)
4. ___Deploy to Firebase Hosting___
   - `firebase deploy` (___every time___ you want to ___deploy___)

> `Note:` It could be needed in the next time.

**[🔼Back to Top](#table-of-contents)**

---

### `Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)
1. `npm run build`
2. `firebase deploy`

**[🔼Back to Top](#table-of-contents)**

## 59.2 Create Login component and style Login form

``` JavaScript
// In Login.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='or-container'>
                    <div>
                        <hr />
                    </div>
                    <span>or</span>
                    <div>
                        <hr />
                    </div>
                </div>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
```

``` JavaScript
// In Login.css

.form-container {
    width: 600px;
    margin: 50px auto;
    border: 1px solid #95A0A7;
    box-sizing: border-box;
    box-shadow: -10px 10px 10px rgba(255, 153, 0, 0.3);
    border-radius: 8px;
    display: flex;
    justify-content: center;
}

.form-container > div > p {
    text-align: center;
}

.form-title {
    font-size: 35px;
    color: #2A414F;
    font-weight: 400;
    text-align: center;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-left: 5px;
}

.input-group input {
    width: 415px;
    height: 55px;
    border: 1px solid #95A0A7;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 24px;
}

.form-submit {
    width: 415px;
    height: 55px;
    background-color: rgba(255, 153, 0, 0.3);
    border-radius: 5px;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.form-submit:hover {
    background-color: rgba(255, 153, 0, 0.5);
}

.form-link {
    color: #FF9900;
    text-decoration: none;
}

.or-container {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    margin-bottom: 20px;
}

.or-container > span {
    text-align: center;
}

.or-container > div > hr {
    background-color: 1px solid #95A0A7;
}

.form-container > div > button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #95A0A7;
    margin-bottom: 30px;
}
```

**[🔼Back to Top](#table-of-contents)**

## 59.3 Style sign up component and access email, password using handler

``` JavaScript
// in SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlue = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlue} type="email" name="email" id="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='or-container'>
                    <div>
                        <hr />
                    </div>
                    <span>or</span>
                    <div>
                        <hr />
                    </div>
                </div>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
```

**[🔼Back to Top](#table-of-contents)**

## 59.4 Install React firebase hook implement create user

⫸ [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks "react-firebase-hooks - github | Install react-firebase-hooks")

``` JavaScript
// In SignUp.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlue = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlue} type="email" name="email" id="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='or-container'>
                    <div>
                        <hr />
                    </div>
                    <span>or</span>
                    <div>
                        <hr />
                    </div>
                </div>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
```

**[🔼Back to Top](#table-of-contents)**

## 59.5 Implement Login and redirect user after login

``` JavaScript
// In Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
                    </div>
                    <p style={{color: "red"}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='or-container'>
                    <div>
                        <hr />
                    </div>
                    <span>or</span>
                    <div>
                        <hr />
                    </div>
                </div>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
```

**[🔼Back to Top](#table-of-contents)**

## 59.6 Create Require Auth and Navigate from location

⫸ [React-Router > Authentication:](https://reactrouter.com/docs/en/v6/examples/auth "Clicked on 'Open in StackBlitz' | This example demonstrates how to restrict access to routes to authenticated users.")

**[🔼Back to Top](#table-of-contents)**

### `Create RequireAuth component`

``` JavaScript
// In RequireAuth.js

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        // return <Navigate to="/login" state={{ from: location }} replace />;
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children;
};

export default RequireAuth;
```

**[🔼Back to Top](#table-of-contents)**

### `Wrap Inventory component by RequireAuth component for restricted access`

``` JavaScript
// In App.js

// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
```

**[🔼Back to Top](#table-of-contents)**

### `Redirected to the expected location`

``` JavaScript
// In Login.js

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        // navigate('/shop');
        navigate(from, { replace: true });
    }
};

export default Login;
```

**[🔼Back to Top](#table-of-contents)**

### `Conditional Rendering to toggle Login and Sign Out button`

``` JavaScript
// In Header.js

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <div>
                {
                    user ? 
                    <button>Sign Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;
```

**[🔼Back to Top](#table-of-contents)**

## 59.7 Implement Sign out and Create a shipment form

### `Implement Sign Out from firebase/auth`

``` JavaScript
// In Header.js

import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className='header'>
            <div>
                {
                    user ? 
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;
```

**[🔼Back to Top](#table-of-contents)**

### `Change navigate notFound to shipment route`

``` JavaScript
// In Orders.js

const Orders = () => {
    return (
        <div className="shop-container">
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='summary-button' onClick={() => navigate('/shipment')}>Proceed Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
```

**[🔼Back to Top](#table-of-contents)**

### `Wrap Shipment component by RequireAuth component for restricted access`

``` JavaScript
// In App.js

import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
```

**[🔼Back to Top](#table-of-contents)**

### `Create Shipment component like SignUp component`

``` JavaScript
// In Shipment.js

import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="number" name="phone" id="phone" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;
```

**[🔼Back to Top](#table-of-contents)**

## 59.8 Module Summary and list to implement auth

### `Make Email field readOnly and set value={user?.email}`

``` JavaScript
// In Shipment.js

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    // Remove handleEmailBlur handler

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        {/* <input onBlur={handleEmailBlur} type="email" name="email" id="email" required /> */}
                        <input value={user?.email} readOnly type="email" name="email" id="email" required />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipment;
```

**[🔼Back to Top](#table-of-contents)**

## 59.9 (bonus video) Host your react app to firebase

### `Firebase Hosting/Deploy Steps:` (for ___1st time___) (not mandatory right now!)
(___Hosting > Get Started___)
1. ___Install Firebase CLI___ 
   - `npm install -g firebase-tools` (___one time___ for your ___computer___)
2. ___Initialize your Project___
   - `firebase login` (___one time___ for your ___computer___)
     - `Y` > Select Google Account > `Allow` > ___Firebase CLI___ Login Successful
   - `firebase init` (___one time___ for ___each project___) (___Some questions need to face___)
     - Are you ready to proceed? (Y/n) <br /> > `Y`
     - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `SpaceBar` to select or unselect)
     - Use an existing project <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `Enter`)
     - Select an existing project like `ema-john-simple-447ad` <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `Enter`)
     - What do you want to use as your public directory? (public) <br /> > write `build` > (press `Enter`)
     - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) <br /> > `y`
     - Set up automatic builds and deploys with GitHub? (y/N) <br /> > `N`
     - File build/index.html already exists. Overwrite? (y/N) <br /> > `N` <br /> ___Firebase initialization complete!___
3. ___Build your project___ according to ___latest change___ 
   - `npm run build` (___every time___ you want to ___deploy___)
4. ___Deploy to Firebase Hosting___
   - `firebase deploy` (___every time___ you want to ___deploy___)

> `Note:` It could be needed in the next time.

**[🔼Back to Top](#table-of-contents)**

### `Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)
1. `npm run build`
2. `firebase deploy`

**[🔼Back to Top](#table-of-contents)**

## Quiz 59

1. Which one is true about the ___React Hook rule___? (you will need to search online: Rules of hooks)
   - [x] React hooks can be called from the ___inside___ of a React ___Functional Component___
   - [ ] Hooks can be used with React Class Component as well
   - [ ] You should call hooks inside loops and condition
   - [ ] You can call hooks from regular javascript function (not a react component)
2. What is the ___purpose of gitignore___? (google it)
   - ___Ignore files to be sent to github___
3. What is the ___use of Custom hook___ in react? (google it. And it will take you to the react js web site and you will find something called useYourImagination(). Read the first two paragraphs. Just read it. You do not have to understand anything.)
   - [x] Custom hook can ___hide complex logic behind a simple interface___
   - [ ] Custom hook allows you to pass state to any child component without props
   - [ ] It prevents you to share logic between React components
   - [ ] All the above
4. What would be the ___right way of naming your custom hook___ that handles loading Books used in multiple components? (we created a few custom hooks, think about those)
   - [ ] customBooks
   - [ ] bookHook
   - [x] ___useBooks___
   - [ ] BookProvider
5. Suppose you have placed your cursor on the Header, then pressing which ___shortcut key___ will take you to the ___Header component___?
   - ___F12___
``` JavaScript
const Home = () => {
 return (
  <div>
   <Header/>
  </div>
 );
};
```
6. How will you get the ___currently signed in User in firebase___? (check out firebase doc. Under authentication > Web > Manage Users) 
   - [x] ___onAuthStateChanged()___
   - [ ] getAuth()
   - [ ] auth.loggedInUser
   - [ ] onFirebaseAuth()
7. What is the ___purpose of Navigate___ in the following code snippet while creating ___PrivateRoute___?
   - [ ] `<Navigate>` will be same as the Link component provided by react router
   - [x] `<Navigate>` element ___changes the current location___ when it is ___rendered___.
   - [ ] It can only take an object as the value of the `to` property
   - [ ] All the above
``` JavaScript
<Navigate
      to={{
       pathname: "/login",
       state: { from: location }
      }}
 />
```
8. Which react ___router hook___ gives you the `location` ___object___ that represents the current URL? (check react router docs. Under API you will see hooks. Check them out. [tai bole, abar o google !!!])
   - ___useLocation___
9.  Here, you will be ___redirected___ to the `/home` route. Because while using logical ___OR operator___?.
    - ___If the left side is false then right side will be executed___
``` JavaScript
let url = "" || "/home";

const navigate = useNavigate()
navigate(url);
```
10.  What is the ___purpose of Private route___ / ___Protected Route___?
     - [ ] ___To protect the sensitive routes in our website___
     - [ ] There is nothing as Private Route
     - [ ] ___To limit the unauthorized users to get to certain routes___
     - [ ] All of the above
     - [x] 1 and 3
11.  What is the ___purpose of context API___? (if needed google it)
     - [x] ___Share data without passing data using Props___
     - [ ] Share more than one value using props
     - [ ] Pass data using state in a context object

**[🔼Back to Top](#table-of-contents)**

### `Some Notes:`
1. ___Rules of Hooks - React___
   - ___Don't call___ Hooks ___inside loops___, ___conditions___, or ___nested functions___. <br /> Instead, always use Hooks at the ___top level of your React function___, before any early returns.
2. ___Custom Hooks___
   - Custom Hooks are ___a mechanism to reuse stateful logic___ (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, ___all state and effects___ inside of it are ___fully isolated___. Each call to a Hook ___gets isolated state___.

**[🔼Back to Top](#table-of-contents)**

<br /><br />

# Module 67: Pagination and Load Data by filter

## 67.1 (Conceptual) Node vs Express, Set simple ema-john server

### `Resources`

- [Node.js vs Express.js](https://www.geeksforgeeks.org/node-js-vs-express-js/ "geeksforgeeks.org") - [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction "developer.mozilla.org")

**[🔼Back to Top](#table-of-contents)**

### `Basic Server Setup Steps`

#### `Create Directory`

``` Terminal
mkdir 03ema-john-server
cd 03ema-john-server
code .
```

**[🔼Back to Top](#table-of-contents)**

#### `Create package.json file`

``` Terminal
npm init -y
```

``` JSON
// In package.json

{
  "name": "03ema-john-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**[🔼Back to Top](#table-of-contents)**

#### `Install Express, CORS, MongoDB, dotenv`

- [dotenv](https://www.npmjs.com/package/dotenv "dotenv - npmjs.com")
  - ___Dotenv___ is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.
  - Storing configuration in the environment separate from code is based on `The Twelve-Factor App` methodology.

``` Terminal
npm i express cors mongodb dotenv
```

**[🔼Back to Top](#table-of-contents)**

#### `Install nodemon` (one time for each computer)

- `-g` flag stands for global | we can find it anywhere in our computer when we use `-g` flag
- One time for each computer if we use `-g` flag

``` Terminal
npm install -g nodemon
```

**[🔼Back to Top](#table-of-contents)**

#### `Modify scripts of package.json file`

- `"start": "node index.js",` should be added
- `"start-dev": "nodemon index.js",` should be added

``` JSON
// Before

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

``` JSON
// After adding the script

"scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

**[🔼Back to Top](#table-of-contents)**

#### `Steps for Express/Node server` (in index.js)

- Create `index.js` file
  1. require express
  2. create app variable
  3. declare port
  4. set app.get('/', ...)
  5. listen to port

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors()); // Without it, don't establish the Cross-Connection between 3000 and 5000 PORT;
app.use(express.json()); // parse the JSON-data from request or req.body and then give it to us;

app.get('/', (req, res) => {
    res.send('John is running and waiting for Ema - Running ema-john-server');
});

app.listen(port, () => {
    // console.log('Listening to port', port);
    console.log('John is running on port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

#### `Set middleware`

``` JavaScript
const cors = require('cors');

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body
```

**[🔼Back to Top](#table-of-contents)**

#### `import and configure dotenv:`

``` JavaScript
// In index.js

require('dotenv').config();
```

**[🔼Back to Top](#table-of-contents)**

#### `Set .gitignore for node project`

- Create `.gitignore` file and include `node_modules` inside the `.gitignore` file.
- It will ignore the `node_modules` folder when I push commits to github.

``` .gitignore
// In .gitignore

node_modules
```

> `Notes:` If you don't create `.gitignore` file before run 1st `push` command, then `node_modules` folder won't be ignored.

**[🔼Back to Top](#table-of-contents)**

#### `Create a .env file in the root of your project`

- ___Where is root?___
  - Where `package.json` file exists.
- Create `.gitignore` file and include `.env` inside the `.gitignore` file.
- It will ignore the `.env` file when I push commits to github.

``` .gitignore
// In .gitignore

node_modules
.env
```

> `Notes:` If you don't create `.gitignore` file before run 1st `push` command, then `.env` file won't be ignored.

**[🔼Back to Top](#table-of-contents)**

#### `Run Node server or Backend server`

- If we run `npm run start-dev` command, then it executes `nodemon index.js` command.
- In contrast, we can run directly `nodemon index.js` command

``` Terminal
npm run start-dev

// OR

nodemon index.js
```

**[🔼Back to Top](#table-of-contents)**

## 67.2 (Conceptual) HTTP Method, Get VS POST, Connect MongoDB

### `Resources`

- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods "developer.mozilla.org") - [HTTP Request Methods](https://www.w3schools.com/tags/ref_httpmethods.asp "All methods and GET vs POST - w3schools.com")
- [Difference between HTTP GET and POST Methods](https://www.geeksforgeeks.org/difference-between-http-get-and-post-methods/ "geeksforgeeks.org") - [GET vs POST Requests](https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests "diffen.com")

**[🔼Back to Top](#table-of-contents)**

### `Create New Project`

- Click on ___Project dropdown___ > New Project > Name Your Project (___ema-john___) > Next > Create Project

**[🔼Back to Top](#table-of-contents)**

### `Setup Database Access` (Add new Database User)

- Database Access > Add New Database User > Password > Password Authentication > Username & Password (Autogenerate Secure Password) > Copy & Paste in `.env` > Built-in Role > Select Role (Read and write to any database) > Add Specific Privileges (readWriteAnyDatabase) > Add User

``` JavaScript
// In .env

DB_USER=dbJohn1
DB_PASS=To9RpxEiy4wR2jdO
```

> `Read and write to any database` (Built-in Role) & `readWriteAnyDatabase` (Add Specific Privileges) are `same Roll`. So, use `only once`. If you add both, it will be `duplicate of same roll` and can't add new user.

**[🔼Back to Top](#table-of-contents)**

### `Setup Network Access` (Add IP Address)

- Network Access > Add IP Address > ___ALLOW ACCESS FORM ANYWHERE___ (0.0.0.0/0) > ___Confirm___

**[🔼Back to Top](#table-of-contents)**

### `Create a database` (Create Cluster)

- Database > Create a database > Build a Database > Shared (Free) > Create > Create a Shared Cluster > Remain everything by default > ___Create Cluster___

**[🔼Back to Top](#table-of-contents)**

### `Setup Quickstart` (Create new User & Add new IP)

- ___Quickstart___ > Security Quickstart > Username and Password > ___Create another User___ (if you want) > Add another IP to ___Add entries to your IP Access List___ (if you want) > Finish and Close > Go to Databases 

**[🔼Back to Top](#table-of-contents)**

### `Enable Atlas Security Quickstart in Side-bar`

- Project > Project Settings > Atlas Security Quickstart > ___Enable___

**[🔼Back to Top](#table-of-contents)**

### `Connect to Database`

- Database > Connect > Connect your application > Select on ___Include full driver code example___ > Copy & Paste to `index.js`

**[🔼Back to Top](#table-of-contents)**

#### `Without Modification`

``` JavaScript
// In index.js | Without Modification

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbJohn1:<password>@cluster0.8vvj7ch.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

**[🔼Back to Top](#table-of-contents)**

#### `With Modification`

``` JavaScript
// In index.js | With Modification

const { MongoClient, ServerApiVersion } = require('mongodb');

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8vvj7ch.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("emaJohn").collection("product");
  // perform actions on the collection object
  console.log('emaJohn database is connected');
  client.close();
});
```

**[🔼Back to Top](#table-of-contents)**

## 67.3 Add data from JSON to database and load on the UI

### `Resources` (CSP - Content Security Policy)

- [How does Content Security Policy (CSP) work?](https://stackoverflow.com/questions/30280370/how-does-content-security-policy-csp-work?rq=1 "stackoverflow.com")
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP/#csp-header "W3C Working Draft - w3.org")
- [Content Security Policy "data" not working for base64 Images in Chrome 28](https://stackoverflow.com/questions/18447970/content-security-policy-data-not-working-for-base64-images-in-chrome-28 "stackoverflow.com")
- [Content-Security-Policy: An Introduction](https://www.youtube.com/watch?v=J90t0h0AP1U "YouTube.com")

**[🔼Back to Top](#table-of-contents)**

### `Create Database and Collection` (Add My Own Data)

- EMA-JOHN (project) > Database > Database Deployments > Browse Collections > ___Add My Own Data___ > Database name (___emaJohn___) > Collection name (___product___) > ___Create___ 

``` JavaScript
▼ emaJohn
    | product
```

**[🔼Back to Top](#table-of-contents)**

### `Insert Data from JSON to MongoDB Database`

- Database name (___emaJohn___) > Collection name (___product___) > ___INSERT DOCUMENT___ > Paste ___JSON data without id attribute___ (mongodb automatically gives `_id` attribute) > Insert

**[🔼Back to Top](#table-of-contents)**

#### `Keyboard Shortcut`

- Select `"id"` > `Ctrl + Shift + L` (it select every product according to `"id"`)
- Clicked on `Home` > Every cursor will go to the first of lines.
- `Shift + End` > Every lines including `"id"` will be selected
- `Backspace` > Remove selected section of every lines including `"id"`
- `Shift + Up-Arrow` > Selected for every lines
- `Backspace` > Remove selected section of every lines
- `Ctrl + A` > Select all product's data
- `ctrl + C` > Copy all product's data
- ___Paste___ all product's data in ___Database___
- `Ctrl + Z` > Undo to go previous state and save it
- `Ctrl + Shift + F` > Search file in entire folder like `products.json`

**[🔼Back to Top](#table-of-contents)**

#### `Pasted Data Sample`

``` JSON
// In products.json | 76 product data added

[
  {
    "category": "Men's Sneaker",
    "name": "ULTRABOOST 22 SHOES",
    "seller": "Addidas",
    "price": 420,
    "stock": 20,
    "ratings": 4,
    "ratingsCount": 3725,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    "shipping": 1,
    "quantity": 0
  },
  {
    "category": "Men's Sneaker",
    "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
    "seller": "Addidas",
    "price": 196,
    "stock": 19,
    "ratings": 5,
    "ratingsCount": 4355,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
    "shipping": 14,
    "quantity": 0
  }
]
```

**[🔼Back to Top](#table-of-contents)**

#### `Original Data Sample from Database`

``` JSON
// In products.json | 76 product data added

[
  {
    "_id": "ObjectId('6331d2685e15fffe7748f162')",
    "category": "Men's Sneaker",
    "name": "ULTRABOOST 22 SHOES",
    "seller": "Addidas",
    "price": 420,
    "stock": 20,
    "ratings": 4,
    "ratingsCount": 3725,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    "shipping": 1,
    "quantity": 0
  },
  {
    "_id": "ObjectId('6331d2685e15fffe7748f162')",
    "category": "Men's Sneaker",
    "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
    "seller": "Addidas",
    "price": 196,
    "stock": 19,
    "ratings": 5,
    "ratingsCount": 4355,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
    "shipping": 14,
    "quantity": 0
  }
]
```

**[🔼Back to Top](#table-of-contents)**

### `All product's data Load form Database` (GET Method)

``` JavaScript
// In index.js | Multiple Documents load form Database

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // get all products data (json format) from database
        app.get('/product', async(req, res) => {
            const query = {}; // search-query added here for filtering
            const cursor = productCollection.find(query);
            // const products = await cursor.limit(10).toArray(); // In here, it shows only 10 product;
            const products = await cursor.toArray();
            res.send(products);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Client-side Code` (Particular Section)

> We need to change (data load) ___fakeData___ to ___server-side___ `url` & ___id___ to `_id`, because, MongoDB uses `_id` instead of `id` attribute. <br /><br /> `products.json` ⋙ `http://localhost:5000/product` || `id` ⋙ `_id`

``` JavaScript
// In useProducts.js

fetch('http://localhost:5000/product')
```

``` JavaScript
// In useCart.js

const addedProduct = products.find(product => product._id === id);
```

``` JavaScript
// In Shop.js

const exists = cart.find(product => product._id === selectedProduct._id);
const rest = cart.filter(product => product._id !== selectedProduct._id);
addToDb(selectedProduct._id);
key={product._id}
```

``` JavaScript
// In Orders.js

const rest = cart.filter(pd => pd._id !== product._id);
removeFromDb(product._id);
key={product._id}
```

> `Notes:` If anything changes, then we need to check everything works well or not.

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example` (Server-Side)

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors()); // Without it, don't establish the Cross-Connection between 3000 and 5000 PORT;
app.use(express.json()); // parse the JSON-data from request or req.body and then give it to us;

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8vvj7ch.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // get all products data (json format) from database
        app.get('/product', async(req, res) => {
            const query = {};  // search-query added here for filtering
            const cursor = productCollection.find(query);
            // const products = await cursor.limit(10).toArray(); // In here, it shows only 10 product;
            const products = await cursor.toArray();
            res.send(products);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('John is running and waiting for Ema - Running ema-john-server');
});

app.listen(port, () => {
    // console.log('Listening to port', port);
    console.log('John is running on port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

## 67.4 Introduction to pagination and pagination concept

### `Pagination Concept`

- How to ___divide in a page___?
  - Think, ___How many products___ I have.

``` JavaScript
// Pagination Math | Calculate Total Pages

100/10 // 10
90/10 // 9
95/10 // 9.5
Math.ceil(95/10) // 10
Math.ceil(91/10) // 10
Math.ceil(90/10) // 9
Math.ceil(88/10) // 9
```

``` JavaScript
// Pagination Math | Calculate Total Products in a single Page

Suppose, I have 90 products
Page no 1 = 0-10
Page no 2 = 11-20
Page no 3 = 21-30

NumberOfPage * 10 > 5 * 10 = 50
```

**[🔼Back to Top](#table-of-contents)**

### `My Own Resources` (About Pagination)

- [Everything You Need to Know About API Pagination](https://nordicapis.com/everything-you-need-to-know-about-api-pagination/ "nordicapis.com")
- [Pagination, incremental page loading, and their impact on Google Search](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading "Google Search Central - developers.google.com")
- [Pagination Design Examples](https://fireart.studio/blog/pagination-design-examples/ "fireart.studio")
- [How to Implement Pagination in ReactJS](https://www.youtube.com/watch?v=MnkjoXWM7Vk "YouTube.com")
- [Simple React Pagination Using React Hooks](https://www.youtube.com/watch?v=8Gmi1NNPtB8 "YouTube.com")
- [ReactJS Pagination Tutorial using React Hooks](https://www.youtube.com/watch?v=HANSMtDy508 "YouTube.com")
- [Simple Frontend Pagination - React](https://www.youtube.com/watch?v=IYCa1F-OWmk "YouTube.com")
- [React js Pagination With API Call Using React-paginate](https://www.youtube.com/watch?v=kMuRr53RjcE&t=436s "YouTube.com")
- [Implement Search, Sort, Filter & Pagination using JSON Server in React](https://www.youtube.com/watch?v=xRBE4iKX0yw "YouTube.com")

**[🔼Back to Top](#table-of-contents)**

## 67.5 (Interesting) get page count and Create pagination button

### `Pagination Theory`

- We can use ___Framework___ like ___react-pagination___ or ___bootstrap component library___
- Must know about, ___How many data we have___ - (total ___100___ products) (___product count___)
- We need to tell (in a dynamic or static way) ___how many data contain in a single page___ - (___10___ products in a single page)
- In two way, we can say the `product count`
  - ___All data load and tell___ total product count (1M data)
  - ___Internal mechanism maintain___ by every database to tell product count

**[🔼Back to Top](#table-of-contents)**

### `How many products have in the database` (___Product Count___ from Server-Side)

``` JavaScript
// In index.js

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // product count: How many products have in the database | {"count":76}
        app.get('/productCount', async(req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const count = await cursor.count();
            res.send({count});
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

###  `Explain array of total pages` (In Console)

``` JavaScript
// In Console

Array() // ▸ []
Array(5) // ▸ (5) [empty x 5]
Array(9) // ▸ (9) [empty x 9]
[...Array(5)] // (5) [undefined, undefined, undefined, undefined, undefined]
[...Array(5).keys()] // (5) [0, 1, 2, 3, 4]
[...Array(9).keys()] // (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

**[🔼Back to Top](#table-of-contents)**

### `Create Pagination Button` (___Product Count___ & ___Pages Count___ in Client-Side)

``` JavaScript
// In Shop.js

import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [pageCount, setPageCount] = useState(0);

    useEffect( () => {
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10); // calculate total pages for 10 products in a single page;
            setPageCount(pages);
        })
    }, []);

    return (
        <div className='shop-container'> 
            <div className="products-container">
                {
                    products.map(...)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button key={number}>{number + 1}</button>)
                    }
                </div>
            </div>
            <div className="cart-container"> </div>
        </div>
    );
};

export default Shop;
```

**[🔼Back to Top](#table-of-contents)**

### `Pagination Button Style` 

``` CSS
/* In Shop.css */

.pagination button {
    margin-right: 10px;
    background-color: white;
    border: 1px solid orange;
}
```

**[🔼Back to Top](#table-of-contents)**

## 67.6 Set Page and Size state and send search query to server

### `Resources`

- [Warning: Use the '___defaultValue___' or '___value___' props on `<select>` instead of setting '___selected___' on `<option>`](https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting "stackoverflow.com")

``` JavaScript
// Correct format | Demo Code

<select defaultValue={'DEFAULT'} >
    <option value="DEFAULT" disabled>Choose a salutation ...</option>
    <option value="1">Mr</option>
    <option value="2">Mrs</option>
</select>

/* ---------------------------------------------- */

// Correct format | Real Example

<select defaultValue={10} onChange={e => setSize(e.target.value)}>
    <option value="5">5</option>
    {/* <option value="10" selected>10</option> */}
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
</select>

// Incorrect format | Real Example

<select onChange={e => setSize(e.target.value)}>
    <option value="5">5</option>
    <option value="10" selected>10</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
</select>
```

**[🔼Back to Top](#table-of-contents)**

### `Set Page state and Size state - Send search query to server-side`

``` JavaScript
// In Shop.js

import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);

    useEffect( () => {
        // products load in a special way like page-wise and size-wise;
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`) // search-query added to filter
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page, size]);

    useEffect( () => {
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10); // calculate total pages for 10 products in a single page;
            setPageCount(pages);
        })
    }, []);

    return (
        <div className='shop-container'> 
            <div className="products-container">
                {
                    products.map(...)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button 
                            // Use Conditional CSS Class
                            className={page === number ? 'selected' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                    }
                    {/* {size} */}
                    {/* Page Size: (Select) How many products show in a single page. */}
                    <select defaultValue={10} onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        {/* <option value="10" selected>10</option> */}
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    {/* React uses defaultValue instead of selected */}
                    {/* React uses the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
                </div>
            </div>
            <div className="cart-container"> </div>
        </div>
    );
};

export default Shop;
```

**[🔼Back to Top](#table-of-contents)**

### `Conditional CSS Style for Pagination Selected Button`

``` CSS
/* In Shop.css */

.pagination button {
    margin-right: 10px;
    background-color: white;
    border: 1px solid orange;
}

.pagination .selected {
    background-color: orange;
    color: white;
}
```

**[🔼Back to Top](#table-of-contents)**

## 67.7 (Interesting) Load data based on the page number and size (no of products)

### `Fix the warning` (cursor.count)

- [Chapter1: count is deprecated. Use Collection.count_documents instead](https://www.mongodb.com/community/forums/t/chapter1-count-is-deprecated-use-collection-count-documents-instead/17297 "MongoDB Developer Community")
- [mongodb-nodejs-driver, DeprecationWarning: collection.count is deprecated](https://stackoverflow.com/questions/51146152/mongodb-nodejs-driver-deprecationwarning-collection-count-is-deprecated "stackoverflow.com")

``` JavaScript
// Error Message in server-terminal

(node:11180) [MONGODB DRIVER] Warning: cursor.count is deprecated and will be removed in the next major version, please use `collection.estimatedDocumentCount` or `collection.countDocuments` instead   
(Use `node --trace-warnings ...` to show where the warning was created)
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Code` (get all products data (json format) from database according to page_number & product_size) (___page & size___)

``` JavaScript
// In index.js

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // get all products data (json format) from database
        app.get('/product', async(req, res) => {
            console.log('query', req.query);
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);

            const query = {};  // search-query added here for filtering
            const cursor = productCollection.find(query);

            let products;
            if (page || size) {
                // page-0: --> skip: 0*10(size) --> get: 0-10 --> 10 products;
                // page-1: --> skip: 1*10(size) --> get: 11-20 --> 10 products;
                // page-2: --> skip: 2*10(size) --> get: 21-30 --> 10 products;
                products = await cursor.skip(page*size).limit(size).toArray();
            }
            else {
                // products = await cursor.limit(10).toArray(); // In here, it shows only 10 product;
                products = await cursor.toArray();
            }
            res.send(products);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Code` (product count: How many products have in the database) (___Fix deprecatedWarning___)

``` JavaScript
// In index.js

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');
        
        // product count: How many products have in the database | {"count":76}
        app.get('/productCount', async(req, res) => {

            // those two lines aren't needed
            // const query = {};
            // const cursor = productCollection.find(query);

            // const count = await cursor.count(); // give us a deprecatedWarning;

            const count = await productCollection.estimatedDocumentCount(); // deprecatedWarning solution;
            res.send({count});
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

## 67.8 (Advanced) Use Post to load some products using keys

### `Resources`

- [$in MongoDB](https://www.mongodb.com/docs/manual/reference/operator/query/in/ "MongoDB Documentation")

**[🔼Back to Top](#table-of-contents)**

### `Use post to get products by ids`

``` JavaScript
// In index.js

const { ObjectId } = require('mongodb');

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // use post to get products by ids
        app.post('/productByKeys', async(req, res) => {
            const keys = req.body;
            const ids = keys.map(id => ObjectId(id));
            const query = {_id: {$in: ids}};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            console.log(keys);
            res.send(products);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Modified useCart.js hook`

``` JavaScript
// In useCart.js

import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        // console.log(storedCart);
        console.log(keys);
        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })
    }, []);

    return [cart, setCart];
}

export default useCart;
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Orders.js component`

``` JavaScript
// In Orders.js

import Cart from '../Cart/Cart';

const [cart, setCart] = useCart();
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Shop.js component`

``` JavaScript
// In Shop.js

import useCart from '../../hooks/useCart';

const [cart, setCart] = useCart();
const [pageCount, setPageCount] = useState(0);
const [page, setPage] = useState(0);
const [size, setSize] = useState(10);
const [products, setProducts] = useState([]);
```

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example`

#### `index.js`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors()); // Without it, don't establish the Cross-Connection between 3000 and 5000 PORT;
app.use(express.json()); // parse the JSON-data from request or req.body and then give it to us;

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8vvj7ch.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // get all products data (json format) from database
        app.get('/product', async(req, res) => {
            console.log('query', req.query);
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);

            const query = {};  // search-query added here for filtering
            const cursor = productCollection.find(query);

            let products;
            if (page || size) {
                // page-0: --> skip: 0*10(size) --> get: 0-10 --> 10 products;
                // page-1: --> skip: 1*10(size) --> get: 11-20 --> 10 products;
                // page-2: --> skip: 2*10(size) --> get: 21-30 --> 10 products;
                products = await cursor.skip(page*size).limit(size).toArray();
            }
            else {
                // products = await cursor.limit(10).toArray(); // In here, it shows only 10 product;
                products = await cursor.toArray();
            }
            res.send(products);
        });

        // product count: How many products have in the database | {"count":76}
        app.get('/productCount', async(req, res) => {

            // those two lines aren't needed
            // const query = {};
            // const cursor = productCollection.find(query);

            // const count = await cursor.count(); // give us a deprecatedWarning;

            const count = await productCollection.estimatedDocumentCount(); // deprecatedWarning solution;
            res.send({count});
        });

        // use post to get products by ids
        app.post('/productByKeys', async(req, res) => {
            const keys = req.body;
            const ids = keys.map(id => ObjectId(id));
            const query = {_id: {$in: ids}};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            console.log(keys);
            res.send(products);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('John is running and waiting for Ema - Running ema-john-server');
});

app.listen(port, () => {
    // console.log('Listening to port', port);
    console.log('John is running on port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

#### `Shop.js`

``` JavaScript
// In Shop.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    // using a custom hook
    // const [products, setProducts] = useProducts();
    
    // const [products, setProducts] = useState([]);

    // useEffect( () => {
    //     // console.log('products load before fetch');
    //     // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //         // console.log('products loaded');
    //     });
    // }, [])

    // using a custom hook
    // const [cart, setCart] = useCart(products);

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);

    // useEffect( () => {
    //     // console.log('Local Storage first line', products);
    //     const storedCart = getStoredCart();
    //     // console.log(storedCart);
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         // console.log(id);
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // console.log(addedProduct);
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    //     // console.log('local storage finished');
    // }, [products]);

    useEffect( () => {
        // products load in a special way like page-wise and size-wise;
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`) // search-query added to filter
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page, size]);

    useEffect( () => {
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10); // calculate total pages for 10 products in a single page;
            setPageCount(pages);
        })
    }, []);

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            // cart.push(product); // Don't do this
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'> 
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button 
                            // Use Conditional CSS Class
                            className={page === number ? 'selected' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                    }
                    {/* {size} */}
                    {/* Page Size: (Select) How many products show in a single page. */}
                    <select defaultValue={10} onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        {/* <option value="10" selected>10</option> */}
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    {/* React uses defaultValue instead of selected */}
                    {/* React uses the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className='summary-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
```

**[🔼Back to Top](#table-of-contents)**


