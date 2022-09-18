## Table of Content

- [Module 65: Mongodb, database integration, CRUD](#module-65-mongodb-database-integration-crud)
  - [65.1 Module Overview, node recap, mongodb vs MySql](#651-module-overview-node-recap-mongodb-vs-mysql)
    - [`Basic Server Setup Steps`](#basic-server-setup-steps)
      - [___Create Directory___](#create-directory)
      - [___Create package.json file___](#create-packagejson-file)
      - [___Install Express, CORS, mondgodb___](#install-express-cors-mondgodb)
      - [___Install nodemon___ (one time for each computer)](#install-nodemon-one-time-for-each-computer)
      - [___Modify scripts of package.json file___](#modify-scripts-of-packagejson-file)
      - [___Steps for Express/Node server___](#steps-for-expressnode-server)
      - [___Run Node server or Backend server___](#run-node-server-or-backend-server)
      - [___Set middleware___](#set-middleware)
      - [___Set .gitignore for node project___](#set-gitignore-for-node-project)
    - [`What is mongodb?`](#what-is-mongodb)
    - [`MySQL vs MongoDB?`](#mysql-vs-mongodb)
      - [___What is MySQL Database?___](#what-is-mysql-database)
      - [___What is MongoDb Database?___](#what-is-mongodb-database)


# Module 65: Mongodb, database integration, CRUD

## 65.1 Module Overview, node recap, mongodb vs MySql

### `Basic Server Setup Steps`

#### ___Create Directory___

``` Terminal
mkdir 01node-mongo-crud
cd 01node-mongo-crud
code .
```

#### ___Create package.json file___

``` Terminal
npm init -y
```

``` JSON
{
  "name": "01node-mongo-crud",
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

#### ___Install Express, CORS, mondgodb___

``` Terminal
npm i express cors mongodb
```

#### ___Install nodemon___ (one time for each computer)

- `-g` ___flag___ stands for ___global___ | we can find it anywhere in our computer when we use `-g` ___flag___
- One time for each computer if we use `-g` ___flag___

``` Terminal
npm install -g nodemon
```

#### ___Modify scripts of package.json file___

- `"start": "node index.js",` should be ___added___
- `"start-dev": "nodemon index.js",` should be ___added___

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

#### ___Steps for Express/Node server___

- Create `index.js` file
  1. require express
  2. create app variable
  3. declare port
  4. set app.get('/',...)
  5. listen to port

``` JavaScript
// In index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
});
```

#### ___Run Node server or Backend server___

- If we run `npm run start-dev` command, then it ___executes___ `nodemon index.js` command.
- In contrast, we can run directly `nodemon index.js` command

``` Terminal
npm run start-dev

// OR

nodemon index.js
```

#### ___Set middleware___

``` JavaScript
const cors = require('cors');

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin';
app.use(express.json()); // To parse body (req.body)
```

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin';
app.use(express.json()); // To parse body (req.body)

app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
});
```

#### ___Set .gitignore for node project___

- Create `.gitignore file` and include `node_modules` inside the `.gitignore` file.
- It will ignore the ___node_modules___ folder when I push commits to github.

``` JavaScript
// In .gitignore

node_modules
```

> `Notes:` If you don't create `.gitignore` file before run 1st `push` command, `node_modules` folder won't be ignored.

### `What is mongodb?`

- MongoDB is a ___source-available cross-platform document-oriented___ database program. 
- Classified as a ___NoSQL___ database program, MongoDB uses ___JSON-like___ documents with ___optional schemas___.
- `Document-Oriented Database:` 
  - A document database is a type of ___nonrelational database___ that is designed to store and query data as ___JSON-like documents___. 
  - Document databases make it easier for developers to store and query data in a database by using the same ___document-model format___ they use in their application code.
- ___Resources:___ [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_ww-multi_ps-all_desktop_eng_lead&utm_term=mongodb%20database&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&adgroup=115749713703&gclid=CjwKCAjwg5uZBhATEiwAhhRLHpgltSz23mXCExfbRe024xHusJ7o6h9ZhWB-0mvcVM7jHgAGzXP15hoCdUUQAvD_BwE "MongoDb Database - mongodb.com") | [Pros & Cons of MongoDB](https://www.knowledgenile.com/blogs/pros-and-cons-of-mongodb/ "Understanding the Pros and Cons of MongoDb - knowledgenile.com")

### `MySQL vs MongoDB?`

#### ___What is MySQL Database?___

> `MySQL` is a relational database management system (___RDBMS___) from the Oracle Corporation. Like other relational systems, MySQL stores ___data in tables___ and uses structured query language (___SQL___) ___for database access___. When MySQL developers need to access data in an application, they ___merge data from multiple tables___ together in a process called a ___join___. In MySQL, you ___predefine___ your ___database schema___ and ___set up rules to govern the relationships___ between fields in your tables.

#### ___What is MongoDb Database?___

> `MongoDB` is a ___NoSQL database___ that stores data as ___JSON-like documents___. Documents store ___related information together___ and use the MongoDB query language (___MQL___) ___for access___. Fields can vary from ___document to document___ - there is no need to declare the structure of documents to the system, as ___documents are self-describing___. Optionally, ___schema validation___ can be used to ___enforce data governance controls___ over each collection.

- ___Resources:___ [MongoDB vs. MySQL Differences](https://www.mongodb.com/compare/mongodb-mysql "MongoDB vs. MySQL Differences - mongodb.com") | [MongoDB vs MySQL](https://www.geeksforgeeks.org/mongodb-vs-mysql/ "MongoDB vs MySQL - geeksforgeeks.org")


