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
    - `<button onClick={() => handleAdd(item)}> </button>`
``` JavaScript
const handleAdd( item ){
    console.log(item)  
}
```
11.  How will you set a clickhandler on a Button using React?
     - `onClick`
``` JavaScript
<button ________= {handleClick}>Click me</button>
```
12. How would you import a App.css file staying in the same folder of the App.js file? (if needed check the React Project that you have created)
    - `"./App.css";`
``` JavaScript
import ______?______;
```
13. Which ReactJS function ___renders HTML___ to the web page?
    - `ReactDOM.render()`
14. What does ___transpile jsx___ in react?
    - ___Babel___
15. ___Where___ we can ___call react hooks___?
    - ___At the top level of React function___

---

# Module 49: (advanced) Cart calculation, Save and Retrieve cart

## 49.1 Module Introduction and simple ema-john recap

## 49.2 Run Github clone react project, Create Cart Component

⫸ `Run Github clone react Project:`
- If we ___clone any react repository___ from github and try to execute command `npm start`, It will give an ___error message___.
- If we clone any react repository, then we need to `install these dependencies`.
- We don't find `node_modules` folder when we clone react repository.
- To ___install these dependencies___, we need to run `npm install` command. It will install all dependencies of that react project.
- When we ___push___ any react project into the github, we don't send ___node_modules___ folder. We ___ignore node_modules___ folder because ___create-react-app___ makes this initial setting in ___.gitignore___ file.
- After run `npm install`, we can run `npm start` command.
- After that, we can also change our ___project/folder name___.

---

⫸ `Access the Github clone react Project:`
- When we `push` any clone repository into Github, It shows an error message that you ___don't have access___. 
- Run `git remote -v`, to check the ___origin___ where to fetch and where did push.
- If we want to send these into another Repository: (search: [__git remote set-url origin__](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories "Managing remote repositories | Switching remote URLs from SSH to HTTPS"))
  - Create ___repository___ and copy the ___origin___ link.
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
    // ternary operation
    {name.length > 20 ? name.slice(0, 20) + '...' : name}
</p>
```

⫸ `Implement ReviewItem style:`

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

## 53.7 More style of Review item and apply Remove Item handler

⫸ `Add Remove Item Handler:` ___handleRemoveProduct___

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

⫸ `More style added in ReviewItem:`

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

## 53.8 Make Data consistent across UI and explore children props

⫸ `Children Props:`
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

## 53.9 Module Summary, use navigate and recap custom hook

⫸ [useNavigate():](https://reactrouter.com/docs/en/v6/hooks/use-navigate "useNavigate - React Router")

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

## `53.10 Quiz`

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

---

# Module 59: Private Route with Ema-John

## 59.1 Module Introduction firebase setup and git clone

⫸ [ema-john-with-router-module-53](https://github.com/ProgrammingHero1/ema-john-with-router-module-53 "Clone from 'ProgrammingHero1/ema-john-with-router-module-53', if needed")

⫸ `If Clone any React Project:` (___Need to follow some steps___)
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


⫸ `Authentication Steps or Auth_steps:`
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


⫸ `Firebase Hosting Steps:` (not mandatory right now!)
1. ___Install Firebase CLI___ `npm install -g firebase-tools`
2. ___Deploy to Firebase Hosting___
   - `firebase login`
   - `firebase init`
   - `firebase deploy`

`Note:` It could be needed in the next time.

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

## 59.6 Create Require Auth and Navigate from location

⫸ [React-Router > Authentication:](https://reactrouter.com/docs/en/v6/examples/auth "Clicked on 'Open in StackBlitz' | This example demonstrates how to restrict access to routes to authenticated users.")

⫸ `Create RequireAuth component:`

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

⫸ `Wrap Inventory component by RequireAuth component for restricted access:`

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

⫸ `Redirected to the expected location:`

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

⫸ `Conditional Rendering to toggle Login and Sign Out button:`

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

## 59.7 Implement Sign out and Create a shipment form

⫸ `Implement Sign Out from firebase/auth:`

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

⫸ `Change navigate notFound to shipment route:`

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

⫸ `Wrap Shipment component by RequireAuth component for restricted access:`

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

⫸ `Create Shipment component like SignUp component:`

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

## 59.8 Module Summary and list to implement auth

⫸ `Make Email field readOnly and set value={user?.email}`

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

