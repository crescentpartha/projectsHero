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



