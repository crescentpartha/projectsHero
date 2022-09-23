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
  - [Connect to database with secure password on environment variable](#connect-to-database-with-secure-password-on-environment-variable)
    - [`Create a Database inside the previous Cluster`](#create-a-database-inside-the-previous-cluster)
    - [`Insert Data on MongoDB Database`](#insert-data-on-mongodb-database)
    - [`Connection Setup with Database` (Find multiple user)](#connection-setup-with-database-find-multiple-user)
    - [`How to get connection string from MongoDB Database`](#how-to-get-connection-string-from-mongodb-database)
    - [`How to get password from MongoDB`](#how-to-get-password-from-mongodb)
    - [`Full Example`](#full-example)

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
// In package.json

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

## Connect to database with secure password on environment variable

### `Create a Database inside the previous Cluster`

- Database Deployments > Browse Collections (___Cluster0___)> Create Database > database name (___crudProductManagement___) > collection name (___product___) > Create

### `Insert Data on MongoDB Database`

- Collection name (___product___) > ___INSERT DOCUMENT___ > Paste ___JSON data without id attribute___ (mongodb automatically gives `_id` attribute) > Insert

``` JSON
// In products.json

[
    {
        "name": "ENGINE DIAGNOSTIC",
        "price": "300",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/dGDkr4v/1.jpg"
    },
    {
        "name": "AUTO SERVICE",
        "price": "400",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
        "img": "https://i.ibb.co/wNZy7k8/auto-service.webp"
    }
]
```

### `Connection Setup with Database` (Find multiple user)

- MongoDB Documentation > Usage Examples > Find Operations > [Find Multiple Documents](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/ "Find Multiple Documents - mongodb.com")

### `How to get connection string from MongoDB Database`

- ___Database___ > ___Connect___ (from ___Cluster0___)> Connect your application > Include full driver code example (___Selected___ to get full Code) > ___Copy & Paste___ in index.js

``` JavaScript
// In index.js

// connection setup with database with secure password on environment variable
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('crudProductManagement database connected');
  // perform actions on the collection object
  client.close();
});
```

### `How to get password from MongoDB`

- ___Database Access___ > Edit (password) or ___ADD NEW DATABASE USER___ > Username (___geniusUser___) > Autogenerate password (___WfRnZQmYC5To03nC___) > Copy & Paste in `.env` file > get Username & Password by `${process.env.DB_USER}` and `${process.env.DB_PASS}` format

``` JavaScript
// In .env

DB_USER=productUser
DB_PASS=WZMHnqq8W4BDDELR
```

### `Full Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('crudProductManagement database connected');
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**



