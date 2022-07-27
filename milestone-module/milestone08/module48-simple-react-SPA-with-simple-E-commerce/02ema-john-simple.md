# Module 48: Simple React SPA with Simple E-commerce

# `02ema-john-simple`

## 48.1 Module Introduction, site resource, figma

- Use __figma file__ to design the site. 
- go to __figma.com__ and drag the figma file
- After that, start designing according to this file

⫸ __API Data Load:__
- __products.json__ in __public__ folder
- https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json

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

## 48.9 Simple React SPA module summary

## 48.10 (Bonus) Deploy Simple React website to Netlify

- `To Deploy:` [Netlify.com](https://www.netlify.com/) → sites → Drag & Drop (__build__ folder) → Click Link → get React App
- `To Modify:` Change → npm run build → Drag & Drop (build folder) → Click shareable Link → get React App

## Quiz:

1. What is the purpose of the key prop used in react?
   - It can efficiently identify the changes in virtual DOM
2. How will you import useState in React?
   - `import { useState } from 'react'`
3. `const [count, setCount] = useState(0)` → What should you do to increase the count state?
   - `setCount(count+1)`
4. `const [products, setProducts] = useState( _?_ )` → What will be the default value of the above state  If you want to store an array of objects from a server and set it to the state?
   - __[]__
5. Can we pass a function through props?
   - Yes
6. If A and B are siblings of components that share a common state, where should you declare the state?
   - In their Parent Component
7. Where did we declare  const [products, setProducts] = useState( [ ] ) in the Ema John Project?
   - In Shop.js
8. How do we pass data from a Child to a parent Component using props?
   - No, you can not sent data from child to parent using props
9. What does the package.json file do? (Search on Google Mama)
   - It records important metadata about a project
10. Which is the correct way to call the function inside a button in React?
``` JavaScript
const handleAdd( item ){
    console.log(item)  
}
```
- `<button onClick={() => handleAdd(item)}> </button>`
11.  How will you set a clickhandler on a Button using React?
``` JavaScript
<button ________= {handleClick}>Click me</button>
```
- `onClick`
12. How would you import a App.css file staying in the same folder of the App.js file? (if needed check the React Project that you have created)
``` JavaScript
import ______?______;
```
- `"./App.css";`
13. Which ReactJS function renders HTML to the web page?
    - `ReactDOM.render()`
14. What does transpile jsx in react?
    - Babel
15. Where we can call react hooks?
    - At the top level of React function

---

# Module 49: (advanced) Cart calculation, Save and Retrieve cart

## 49.1 Module Introduction and simple ema-john recap

## 49.2 Run Github clone react project, Create Cart Component

⫸ `Run Github clone react Project:`
- If we clone any react repository from github and try to execute command `npm start`, It will give an error message.
- If we clone any react repository, then we need to `install these dependencies`.
- We don't find `node_modules` folder when we clone react repository.
- To install these dependencies, we need to run `npm install` command. It will install all dependencies of that react project.
- When we __push__ any react project into the github, we don't send __node_modules__ folder. We __ignore node_modules__ folder because __create-react-app__ makes this initial setting in __.gitignore__ file.
- After run `npm install`, we can run `npm start` command.
- After that, we can also change our __project/folder name__.

---

⫸ `Access the Github clone react Project:`
- When we `push` any clone repository into Github, It shows an error message that you __don't have access__. 
- Run `git remote -v`, to check the __origin__ where to fetch and where did push.
- If we want to send these into another Repository: (search: [__git remote set-url origin__](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories "Managing remote repositories | Switching remote URLs from SSH to HTTPS"))
  - Create __repository__ and copy the __origin__ link.
  - run `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git`
  - Then, run `git remote -v` to verify that the remote URL has changed.

---

⫸ `Create Cart Component:`

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

## 49.3 Calculate shopping cart price, shipping and tax with toFixed

⫸ `Calculate shopping cart price:`
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

## 49.4 Setting the cart data on the localStorage for future retrieve

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
⫸ `Use fakedb.js in Shop.js file:`

``` JavaScript
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const handleAddToCart = (product) => {
        addToDb(product.id);
    }
};
```

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

- If any data load from outside, then it is __side effect__. You need to use `useEffect()`;
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

## 49.6 (advanced) Display local storage cart to the UI

- __products load by fetch__ & __data load from Local Storage__ don't work sequentially. It would be __asynchronous__.
- If we __load products before data fetch__/catch, then it shows __empty array__ because data don't loaded before data fetching. Solution is __dependency injection__.
- __Dependency Injection__ means:
  - if keep empty array `useEffect( , [])`, then call it only once.
  - __Local Storage__ depends on __one things__ or __many things__.
    - for one things: `useEfect( , [products])`
    - for many things: `useEfect( , [products, cart])`
- If we add dependency, then it __call this useEffect again__ for any little changes.

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

## 49.7 (super advanced) Handle quantity from storage to cart

- Use `for in` loop, if it is __object__.
- Use `for of` loop, if it is __array__.

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

## 49.9 Module summary, deploy, code recap

- To Watch the [__visual explanation__](https://web.programming-hero.com/web-5/video/web-5-49-9-module-summary-deploy-code-recap "Module Summary: How whole process works"): Go to __M49.9__, Time Start: __5:45__

## `Quiz:`

1. What type of things can we send via props?
   - __array, object, function, event handler__

2. What is true about localStorage? 
   - __is not deleted__ after the browser has been closed

3. What does it mean by __lifting up state__?
   - Declare the __state in the parent component__ and pass __event handler to the child__

``` JavaScript
// 4. if we want to add this function as an event handler to a button by passing a parameter, then which pattern is correct?

const findDevice= (id) => testArr.find(p=> p.id===id);
```
- `onClick={ () => findDevice(parameter)}`

5. Which method is used to remove an item from local storage?
   - `localStorage.removeItem();`

``` JavaScript
// 6. What will be the output?
const student1= {name: "rafique", marks: 79, result: "A+"};
console.log(student1.mark + 1);
```
- __NaN__

7. How can we pass an event handler to the child component?
   - __Using props__

8. What is the purpose of `npm i --save <packageName>`?
   - Install and save the specified package 
   - `--save`: Package will appear in your dependencies.

9. Where will you find information about all the packages that you have installed in your react app?
   - __package.json__

10. How can you pass a boolean value (true) as the prop named hero?
    - `<HeroComponent hero={true} />` & `<HeroComponent hero />`

11. Suppose you are trying to access something from local storage using `localStorage.getItem()` method, and the item is not exist there. Then you will get___?
    - __null__

12. What is the purpose of the dependency array in useEffect? 
    - re-run the effect when the values within the array change across re-renders.

13. If you want to set data into localStorage what two things should you do?
    - Call __localStorage.setItem__ method and pass __name__ and __value__ as parameters

14. How we can access object properties?
    - Using dot notation → `object.property` 
    - Using square bracket notation → `object['property']` 
    - By destructuring → `const {property} = object;`

``` JavaScript
// 15. How we can access __brand name__? 
<Phone brandName="iPhone">

const Phone = (props) => {
 return <h2>Phone Brand : { ___???____ }</h2>;
}
```
- __props.brandName__

---

# Module 52: ema-john with router and custom hook

## 53.0 Text Instruction

⫸ `Follow the five Steps to set-up the React-Router:`
1. Use ___BrowserRouter___ in ___index.js___
2. Set ___Routes___ in ___App.js___
3. Set many ___Route___ inside the ___Routes___
4. Route includes ___path___
5. Route also includes a __prop__ called ___element___

## 53.1 Install React router and implement simple router setup

⫸ `Install React Router dependencies:`

``` Terminal
npm install react-router-dom@6
```

⫸ `Connect the URL:` import ___BrowserRouter___ from ___react-router-dom___ near the top of your file and ___wrap___ your app in a `<BrowserRouter>`:

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

⫸ `Replace the default markup with some routes:`

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

⫸ `Create your route components & Link them in Header.js file:`

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

## 53.2 Recap React Router setup and intro to order review page

⫸ `Order Summary from Shop page, we need to bring it in Orders page:` (___2 ways to solve it___)
1. We ___loaded data___ according to ___Id___ in a component, this time we do it ___outside of the component___.
2. Use ___Redux___ 


## 53.3 Write useState and useEffect in a different file and import it (Custom Hook)

⫸ `Product Load in different outside file:`
- Increase ___code reusability___
  - Same code implement in different different file easily.
- Reduce ___code duplication/Repetition___ (DRY - Don't Repeat Yourself)

⫸ `Create a Custom Hook without dependency:`
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

⫸ `JavaScript function usually return only one element:`
- ___Return one thing___ → `return products;`
- But, we can ___return many thing___ like as array → `return [products, setProducts];`

⫸ `Use a Custom Hook:`

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

## 53.4 Create useCart with products dependency and use it

⫸ `Create a Custom Hook with dependency:`

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

⫸ `Use a Custom Hook:`

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

## 53.5 Create review page structure and Display Shopping cart

⫸ __Adding a CSS [Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/ "A module encapsulates a set of related functions and components semantically") Stylesheet:__
- ___CSS Modules___ → `[name].module.css` file naming convention.
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

## 53.6 Implement Review Item style with a lot of flex

⫸ `Ternary Operation:` (___if name length is greater than 20___)
- `{name.length > 20 ? name.slice(0, 20) + '...' : name}`
- ___Output:___ `NMD_R1 V2 SHOES` | `LUNAR NEW YEAR ULTRA...`
- Use `title` to show ___full name___.

``` JavaScript
<p className="product-name" title={name}>
    {name.length > 20 ? name.slice(0, 20) + '...' : name}
</p>
```

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

