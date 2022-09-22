Table of Contents
---

- [CRUD Product Management](#crud-product-management)
  - [`Basic Client Project Setup Steps`](#basic-client-project-setup-steps)
    - [`Project Setup 01` (Basic Setup)](#project-setup-01-basic-setup)
    - [`Project Setup 02` (Create Routes)](#project-setup-02-create-routes)
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

# CRUD Product Management

## `Basic Client Project Setup Steps`

### `Project Setup 01` (Basic Setup)

- Create a ___React App___
- Create ___instruction___ documentation
- Create ___project___ documentation

**[🔼Back to Top](#table-of-contents)**

### `Project Setup 02` (Create Routes)

- Install and Setup React Router
  - Wrap `<App />` component by using `<BrowserRouter>` in ___src/index.js___ file
  - Create some ___Components___ such as Home, Header, AddProducts, ManageProducts, UpdateProducts, and NotFound.
  - Maintain ___File-Structure___ or ___Folder-Structure___
  - Then, ___Add some Routes___ in ___src/App.js___ file
- Set `_redirects` file in ___public___ folder
- Install ___React-Bootstrap___ and Add ___Bootstrap CDN Link___ inside the ___index.html___
- Change ___project title___
- Add ___favicon.ico___

---

- ___Responsive Navbar___ added

**[🔼Back to Top](#table-of-contents)**

## `Basic Server Setup Steps`

### `Create Directory`

``` Terminal
mkdir 02crud-product-management-server
cd 02crud-product-management-server
code .
```

**[🔼Back to Top](#table-of-contents)**

### `Create package.json file`

``` Terminal
npm init -y
```

``` JSON
{
  "name": "02crud-product-management-server",
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

### `Install Express, CORS, MongoDB, dotenv`

- [dotenv](https://www.npmjs.com/package/dotenv "dotenv - npmjs.com")
  - ___Dotenv___ is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.
  - Storing configuration in the environment separate from code is based on `The Twelve-Factor App` methodology.

``` Terminal
npm i express cors mongodb dotenv
```

**[🔼Back to Top](#table-of-contents)**

### `Install nodemon` (one time for each computer)

- `-g` flag stands for global | we can find it anywhere in our computer when we use `-g` flag
- One time for each computer if we use `-g` flag

``` Terminal
npm install -g nodemon
```

**[🔼Back to Top](#table-of-contents)**

### `Modify scripts of package.json file`

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

### `Steps for Express/Node server` (in index.js)

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
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

### `Set middleware`

``` JavaScript
const cors = require('cors');
// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body
```

**[🔼Back to Top](#table-of-contents)**

### `import and configure dotenv:`

``` JavaScript
// In index.js
require('dotenv').config();
```

**[🔼Back to Top](#table-of-contents)**

### `Set .gitignore for node project`

- Create `.gitignore` file and include `node_modules` inside the `.gitignore` file.
- It will ignore the `node_modules` folder when I push commits to github.

``` .gitignore
// In .gitignore
node_modules
```

> `Notes:` If you don't create `.gitignore` file before run 1st `push` command, then `node_modules` folder won't be ignored.

**[🔼Back to Top](#table-of-contents)**

### `Create a .env file in the root of your project`

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

### `Run Node server or Backend server`

- If we run `npm run start-dev` command, then it executes `nodemon index.js` command.
- In contrast, we can run directly `nodemon index.js` command

``` Terminal
npm run start-dev
// OR
nodemon index.js
```

**[🔼Back to Top](#table-of-contents)**

