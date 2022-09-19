## Table of Content

- [Module 65: Mongodb, database integration, CRUD](#module-65-mongodb-database-integration-crud)
  - [65.1 Module Overview, node recap, mongodb vs MySql](#651-module-overview-node-recap-mongodb-vs-mysql)
    - [`Basic Server Setup Steps`](#basic-server-setup-steps)
      - [`Create Directory`](#create-directory)
      - [`Create package.json file`](#create-packagejson-file)
      - [`Install Express, CORS, MongoDB`](#install-express-cors-mongodb)
      - [`Install nodemon` (one time for each computer)](#install-nodemon-one-time-for-each-computer)
      - [`Modify scripts of package.json file`](#modify-scripts-of-packagejson-file)
      - [`Steps for Express/Node server`](#steps-for-expressnode-server)
      - [`Run Node server or Backend server`](#run-node-server-or-backend-server)
      - [`Set middleware`](#set-middleware)
      - [`Set .gitignore for node project`](#set-gitignore-for-node-project)
    - [`What is mongodb?`](#what-is-mongodb)
    - [`MySQL vs MongoDB?`](#mysql-vs-mongodb)
      - [`What is MySQL Database?`](#what-is-mysql-database)
      - [`What is MongoDb Database?`](#what-is-mongodb-database)
  - [65.2 Create mongodb atlas account and Connect to database](#652-create-mongodb-atlas-account-and-connect-to-database)
    - [`Basic Five Steps`](#basic-five-steps)
    - [`Copy Paste Code`](#copy-paste-code)
    - [`Modify Copy Paste Code`](#modify-copy-paste-code)
  - [65.3 Send data to database using mongodb insertOne](#653-send-data-to-database-using-mongodb-insertone)
    - [`Insert a Document (JavaScript):` (Demo Code to Real Example)](#insert-a-document-javascript-demo-code-to-real-example)
    - [`Full Example`](#full-example)
  - [65.4 (Recap) Async await, try catch and mongodb connection](#654-recap-async-await-try-catch-and-mongodb-connection)
    - [`Initial Setup`](#initial-setup)
    - [`Create Atlas Account`](#create-atlas-account)
    - [`CRUD Operation`](#crud-operation)
    - [`Code Example`](#code-example)


# Module 65: Mongodb, database integration, CRUD

## 65.1 Module Overview, node recap, mongodb vs MySql

### `Basic Server Setup Steps`

#### `Create Directory`

``` Terminal
mkdir 01node-mongo-crud
cd 01node-mongo-crud
code .
```

#### `Create package.json file`

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

#### `Install Express, CORS, MongoDB`

``` Terminal
npm i express cors mongodb
```

#### `Install nodemon` (one time for each computer)

- `-g` ___flag___ stands for ___global___ | we can find it anywhere in our computer when we use `-g` ___flag___
- One time for each computer if we use `-g` ___flag___

``` Terminal
npm install -g nodemon
```

#### `Modify scripts of package.json file`

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

#### `Steps for Express/Node server`

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

#### `Run Node server or Backend server`

- If we run `npm run start-dev` command, then it ___executes___ `nodemon index.js` command.
- In contrast, we can run directly `nodemon index.js` command

``` Terminal
npm run start-dev

// OR

nodemon index.js
```

#### `Set middleware`

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

#### `Set .gitignore for node project`

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

#### `What is MySQL Database?`

> `MySQL` is a relational database management system (___RDBMS___) from the Oracle Corporation. Like other relational systems, MySQL stores ___data in tables___ and uses structured query language (___SQL___) ___for database access___. When MySQL developers need to access data in an application, they ___merge data from multiple tables___ together in a process called a ___join___. In MySQL, you ___predefine___ your ___database schema___ and ___set up rules to govern the relationships___ between fields in your tables.

#### `What is MongoDb Database?`

> `MongoDB` is a ___NoSQL database___ that stores data as ___JSON-like documents___. Documents store ___related information together___ and use the MongoDB query language (___MQL___) ___for access___. Fields can vary from ___document to document___ - there is no need to declare the structure of documents to the system, as ___documents are self-describing___. Optionally, ___schema validation___ can be used to ___enforce data governance controls___ over each collection.

- ___Resources:___ [NoSQL](https://www.mongodb.com/nosql-explained "NoSQL - mongodb.com") | [MongoDB vs. MySQL Differences](https://www.mongodb.com/compare/mongodb-mysql "MongoDB vs. MySQL Differences - mongodb.com") | [MongoDB vs MySQL](https://www.geeksforgeeks.org/mongodb-vs-mysql/ "MongoDB vs MySQL - geeksforgeeks.org")


## 65.2 Create mongodb atlas account and Connect to database

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register "Registration Link for MongoDB Atlas | Create an Atlas account")

### `Basic Five Steps`

1. `Create an account` ↪ Create your ___MongoDb Atlas account___
2. `Build your first cluster` ↪ Database Deployments > Build a Database > ___Shared___ > Create > ___Create Cluster___
3. `Create your first database user` ↪ How would you like to authenticate your connection?
    - Username and Password > ___dbuser1___ (Username) > ___Autogenerate Secure Password___ (clicked on) > ___fLF42yfe7MM0cDWF___ (Password) > ___Copy and Paste___ (username & password) in ___index.js___ > ___Create User___
4. `Add IP Address to your Access List` ↪ Where would you like to connect from?
    - ___My Local Environment___ > ___Add My Current IP Address___ > Finish and Close > Go to Databases
    - ___SECURITY/Network Access___ > Add IP Address > ALLOW ACCESS FROM ANYWHERE > ___Confirm___ | (___It is optional, if my IP not work___)
5. `Connect to the database` ↪ Database Deployments > ___Connect___ > Connect your application > ___Include full driver code example___ (clicked on) > Copy and Paste in index.js > replace `<password>` by ___password___ > Close

> `Notes:` If Quickstart not found. Then, <br /> &emsp;&emsp;01. Project Settings > Atlas Security Quickstart (___Enable___) <br /> &emsp;&emsp;02. Atlas > SECURITY/Quickstart 

### `Copy Paste Code`

``` JavaScript
// In index.js

// user: dbuser1
// password: fLF42yfe7MM0cDWF

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbuser1:<password>@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

### `Modify Copy Paste Code`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin';
app.use(express.json()); // To parse body (req.body)


// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('db connected');
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
});
```

## 65.3 Send data to database using mongodb insertOne

- [Node MongoDB CRUD Operations](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/ "CRUD Operations - mongodb.com") - [Quick Start](https://www.mongodb.com/docs/drivers/node/current/quick-start/ "mongodb.com") - [Insert a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/ "mongodb.com")
- [JavaScript try catch finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch "mdn web docs")

### `Insert a Document (JavaScript):` (Demo Code to Real Example)

``` JavaScript
// Insert a Document (JavaScript) | Demo Code to Real Example

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");
        const user = { name: 'Mohona Nodi', email: 'nodi@gmail.com' };
        const result = await userCollection.insertOne(user);
        console.log(`User inserted with id: ${result.insertedId}`);
    } 
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

### `Full Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin';
app.use(express.json()); // To parse body (req.body)


// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");
        const user = { name: 'Mohona Nodi', email: 'nodi@gmail.com' };
        const result = await userCollection.insertOne(user);
        console.log(`User inserted with id: ${result.insertedId}`);
    } 
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
});
```

## 65.4 (Recap) Async await, try catch and mongodb connection

### `Initial Setup`

- ___Create a node server with 5 steps___
    1. create folder
    2. npm init
    3. npm i express cors mongodb
    4. script-dev: nodemon index.js
    5. create index.js
    6. use ___5 steps___ to create a node server 

### `Create Atlas Account`

1. sign up or google access
2. create a cluster
3. create a user dbuser1 and password
4. Network Access > ip address: allow all
5. database > Connect > code copy paste in index.js

### `CRUD Operation`

1. node mongodb CRUD > Fundamentals
2. create async run function

---

### `Code Example`

``` JavaScript
// In index.js

// Create hardcoded data and send to the database
// async function run() {
//     try {
//         await client.connect();
//         const userCollection = client.db("foodExpress").collection("user");
//         const user = { name: 'Mohona Nodi', email: 'nodi@gmail.com' };
//         const result = await userCollection.insertOne(user);
//         console.log(`User inserted with id: ${result.insertedId}`);
//     } 
//     finally {
//         // await client.close(); // commented, if I want to keep connection active;
//     }
// }
// run().catch(console.dir);

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        app.post('/user', (req, res) => {

        })

    }
    finally {

    }
}
run().catch(console.dir);
```

- create a React App called ___02react-node-mongodb___
- Setup React Router
- Setup Routes (___Home___, ___AddUser___)





