# Modules and Data Storage Integration

## 47.5.1 Module Introduction ES6 Modules simple import, export

⫸ `import './App.css';`
- __./ means__ import from __same folder__

⫸ `import React from 'react';`
- If __don't have ./__ then it imports from __node_modules__ folder

⫸ `import Cosmetics from './components/Cosmetics/Cosmetics';`
- __.js__ isn't mandatory when we import JavaScript file.
- __.js__ isn't need to write because it is __by default__.
- Other files need to write extension like __.css__ or __.md__ or __.svg__

## 47.5.2 ES6 Modules, Import default, relative path

⫸ `ES6 Modules:`
- An ES6 module is __a JavaScript file__ that __executes in strict mode only__. It means that any __variables, functions or classes__ declared in the module won't be added automatically to the __global scope__.
- An ES6 module is __a file containing JS code__. A module mostly reads just like a script. There are two differences.
  - ES6 modules are __automatically strict-mode code__, even if you don’t write __"use strict";__ in them.
  - You can use __import__ and __export__ in modules.
---
- A module __organizes a related set of JavaScript code__. A module can contain __variables, functions and classes__. A module is nothing more than __a chunk of JavaScript code__ written in a file. 
- By default, variables and functions of a module are not available for use. Variables and functions within a module should be __exported__ so that they __can be accessed__ from within other files. 
- Modules in ES6 __work only in strict mode__. This means variables or functions declared in a module __will not be accessible globally__.
- __Links:__ [1](https://www.tutorialspoint.com/es6/es6_modules.htm#:~:text=ES6%20comes%20to%20your%20rescue,are%20not%20available%20for%20use. "ES6 Modules - tutorialspoint.com") [2](https://www.javascripttutorial.net/es6/es6-modules/ "A Comprehensive Look at ES6 Modules - javascripttutorial.net") [3](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/ "ES6 in Depth: Modules - hacks.mozilla.org")

⫸ `Export:`
- Only one thing (One is default) → ex: 
  - `export default add;`
- Many things (Nothing is default) → ex: 
  - `export {add};`
  - `export {add, multiply};`
- Many things (One is default) → 

⫸ `Import:`
- Only one thing (One is default) → ex: 
  - `import add from '../../utilities/calculate';`
- Many things (Nothing is default) → ex: 
  - `import { add } from '../../utilities/calculate';`
  - `import { add, multiply } from '../../utilities/calculate';`
  - `import {a, b, result, sum, multiply } from './cal.js';`
  - `import * as cal from './cal.js';` then use `cal.a;` → Renaming imports
  - `import {sum as total} from './math.js';` → Renaming import
- Many things (One is default) → 

⫸ `Relative Path:`
- __../__ means one folder upper Or one level-up.
- __../../__ means two folder upper Or two level-up.
- __../../utilities__ means two folder upper then go to utilities folder.

## 47.5.3 Create and Load Fake data, json generator, online API

⫸ There are __three types of way__ to create and load fake data.
1. Data Generate System: `Create Object of data`
``` JavaScript
// Data Generate System
const cosmetics = [
    {id: 1, name: 'Alta', price: 100}, 
    {id: 2, name: 'Palis', price: 200}, 
    {id: 3, name: 'Malis', price: 300}, 
    {id: 4, name: 'Balis', price: 400}, 
    {id: 5, name: 'Nalis', price: 500}
]
```
2. Data Generate System: [`json generator`](https://json-generator.com/ "json generator - json-generator.com")
``` JavaScript
// from json-generator
const cosmetics = [
  {
    "id": "62c0931f912f5dc9bd357458",
    "price": 724,
    "name": "Ruthie Nash"
  },
  {
    "id": "62c0931f9054587abe7baee9",
    "price": 1037,
    "name": "Lolita Jarvis"
  },
  {
    "id": "62c0931ff90b12c0c949a17a",
    "price": 2586,
    "name": "Cooley Robinson"
  },
  {
    "id": "62c0931f19131f46b7a151b5",
    "price": 1489,
    "name": "Betty Joyce"
  },
  {
    "id": "62c0931f2a763e72bbacd2e8",
    "price": 741,
    "name": "Daugherty Klein"
  },
  {
    "id": "62c0931f53b614ba0ef9d579",
    "price": 2486,
    "name": "Willa Mathews"
  },
  {
    "id": "62c0931ffbfd7543d904c8ef",
    "price": 3114,
    "name": "Anthony Martinez"
  }
]
```
3. Data Generate System Number-03: `Data set by fetch`
   - go to __public__ folder, then create __data.json__ file and paste your __json-generator data__ inside this file.
``` JavaScript
const [cosmetics, setCosmetics] = useState([]);

useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => setCosmetics(data));
}, [])
```
4. Data Generate System Number-04: (`Online API`) → free api online | [mockAPI online](https://mockapi.io/ "mockAPI - mock api online - mockapi.io | The easiest way to mock REST APIs!") | [Beeceptor](https://beeceptor.com/ "Beeceptor.com | Rest API mocking and intercepting in seconds.")
   - Example: (go to __Beeceptor__ website first). Then, follow the following steps.
     - set __Endpoint Name__ like __cosmetic__, then press __Create Endpoint__ 
     - Rules enabled → Mocking Rules → Create New Rule
     - Paste data on Response body → Save Rule
     - You will find a link like https://cosmetic.free.beeceptor.com → here you will find data
     - __Problem__ is, there have data limit. You need to choose __premium service__.

__Note:__ It is safer to __create your own data__ like __data.json__ in __public__ folder.

## 47.5.4 How to Create Event handler with parameters

⫸ [`Event Handler Call with Parameter:`](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module47.5-modules-and-data-storage-integration/01react-storage-and-handler/src/components/Cosmetic/Cosmetic.js "Event Handler Call with Parameter: Wrap the Event Handler - Directly creating arrow function")
- Call another function which actually call the Event Handler with parameter by creating arrow function. (__Wrap the Event Handler__)
  - `<button onClick={addToCartWithParam}>Add to Cart</button>`
    - `const addToCartWithParam = () => addToCart(id);`
- Call Event Handler by directly creating arrow function.
  - `<button onClick={() => addToCart(id)}>Add To Cart</button>`

## 47.5.5 Indro to Local storage and store data just one item

⫸ We can store data in __3 different place__:
- In __our code__
- In the __database__
- In the __browser__

## 47.5.6 Store multiple data in an Object with local storage

⫸ [__Window.localStorage__](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "Window.localStorage - MDN web docs")

``` JavaScript
// Some methods
const storedCart = localStorage.getItem('shopping-cart');
const shoppingCart = JSON.parse(storedCart);
const quantity = shoppingCart[id];
localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
```

## 47.5.7 Remove data to the local storage and delete shopping cart

``` JavaScript
// Some methods
delete shoppingCart[id];
localStorage.removeItem('shopping-cart');
```


