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
  - [65.5 Send user data to the server and get response to client](#655-send-user-data-to-the-server-and-get-response-to-client)
    - [`Integrate sending data from client to server`](#integrate-sending-data-from-client-to-server)
    - [`Send data from client-side to server-side and capture it`](#send-data-from-client-side-to-server-side-and-capture-it)
  - [65.6 Save data from React Client side to mongo database](#656-save-data-from-react-client-side-to-mongo-database)
    - [`Load Data to the client side`](#load-data-to-the-client-side)
    - [`Modified Code`](#modified-code)
    - [`Full Example`](#full-example-1)
  - [65.7 Load and display data from database, create delete button](#657-load-and-display-data-from-database-create-delete-button)
    - [`Load Data to the client side`](#load-data-to-the-client-side-1)
    - [`Delete`](#delete)
    - [`Modified Code`](#modified-code-1)
    - [`Full Example`](#full-example-2)
  - [65.8 Delete a user from the database](#658-delete-a-user-from-the-database)
    - [`Steps`](#steps)
    - [`Modified Code`](#modified-code-2)
    - [`Full Example`](#full-example-3)
  - [65.9 (bonus) Load single item by id and Update user info](#659-bonus-load-single-item-by-id-and-update-user-info)
    - [`Modified Code`](#modified-code-3)
    - [`Full Example`](#full-example-4)
  - [Quiz 65](#quiz-65)


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
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body
```

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body

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
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body


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
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body


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

## 65.5 Send user data to the server and get response to client

### `Integrate sending data from client to server`

1. `Client side:` ___create form___
2. `Client side:` on submit ___get form data___ and create ___user object___
3. `on Server:` Create ___user POST method___ to receive data on the backend (___index.js___)
4. `on client side:` ___set fetch with POST, headers, body___ (___AddUser.js___)
5. `on client side:` Make sure you ___return a json___ from the ___POST API___

### `Send data from client-side to server-side and capture it`

``` JavaScript
// In index.js | Backend Side

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        app.post('/user', (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            res.send({result: 'success'});
        })
    }
    finally {

    }
}
run().catch(console.dir);
```

``` JavaScript
// In index.js | Backend Side - Full Example

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body

// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        app.post('/user', (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            res.send({result: 'success'});
        })
    }
    finally {

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

``` JavaScript
// In AddUser.js | Client Side - Full Example

import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email);

        const user = { name, email };

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success: ', data);
        })
    }
    return (
        <div>
            <h2>Please, Add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;
```

## 65.6 Save data from React Client side to mongo database

- [Insert a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/ "Insert a Document - mongodb.com") - [Find Multiple Documents](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/ "Find Multiple Documents - mongodb.com")

### `Load Data to the client side`

1. create get API on the server
2. create a query object
3. collection.find (query)
4. cursor.toArray()
5. return the result

### `Modified Code`

``` JavaScript
// In index.js | Modified Code

// Load Data: get users json data
app.get('/user', async(req,res) => {
    const query = {};
    const cursor = userCollection.find(query);
    const users = await cursor.toArray();
    res.send(users);
})

// POST User: Add a new user
app.post('/user', async(req, res) => {
    const newUser = req.body;
    console.log('adding new user', newUser);
    const result = await userCollection.insertOne(newUser);
    res.send(result);
})
```

``` JavaScript
// In AddUser.js | Modified Code

.then(data => {
    console.log('success: ', data);
    alert('users added successfully!!!');
    event.target.reset();
})
```

### `Full Example`

``` JavaScript
// In index.js | Full Example

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body

// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        // Load Data: get users json data
        app.get('/user', async(req,res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })

        // POST User: Add a new user
        app.post('/user', async(req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })
    }
    finally {

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

``` JavaScript
// In AddUser.js | Full Example

import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email);

        const user = { name, email };

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success: ', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>Please, Add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;
```

## 65.7 Load and display data from database, create delete button

### `Load Data to the client side`

1. create get API on the server
2. create a query object
3. collection.find (query)
4. cursor.toArray()
5. return the result
6. from client useEffect and display like you have done before

### `Delete`

- [Delete a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/ "Delete a Document - mongodb.com")

### `Modified Code`

``` JavaScript
// In index.js

const ObjectId = require('mongodb').ObjectId;

// delete a user
app.delete('/user/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
})
```

``` JavaScript
// In Home.js

import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            console.log('Deleting user with id, ', id);
        }
    }

    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >
                        {user.name}:: {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;
```

### `Full Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body

// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        // Load Data: get users json data
        app.get('/user', async(req,res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })

        // POST User: Add a new user
        app.post('/user', async(req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // delete a user
        app.delete('/user/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
        })
    }
    finally {

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

## 65.8 Delete a user from the database

### `Steps`

- delete a user in server-side and send to the database
- delete a user in client-side and send to the server-side
- remove deleted user from the state in client-side for better user experience
- create UpdateUser component
- Setup UpdateUser Route
- added Update button in the Home component
- load particular user data for UpdateUser | [Find a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/ "Find a Document - mongodb.com")


### `Modified Code`

``` JavaScript
// In Home.js

import { Link } from 'react-router-dom';

const handleUserDelete = id => {
    const proceed = window.confirm('Are you sure want to delete?');
    if (proceed) {
        // delete a user in client-side and send to the server-side
        console.log('Deleting user with id, ', id);
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
                console.log('Deleted');
                // remove deleted user from the state in client-side for better user experience
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        })
    }
}

{/* added Update button in the Home component */}
<Link to={`/update/${user._id}`}><button>Update</button></Link>
```

``` JavaScript
// In UpdateUser.js | create UpdateUser component

import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Updating User: {id}</h2>
        </div>
    );
};

export default UpdateUser;
```

``` JavaScript
// In App.js | Setup UpdateUser Route

import UpdateUser from './components/UpdateUser/UpdateUser';

<Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
```

``` JavaScript
// In index.js

// load particular user data for UpdateUser
app.get('/user/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await userCollection.findOne(query);
    res.send(result);
})

// delete a user in server-side and send to the database
app.delete('/user/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await userCollection.deleteOne(query);
    res.send(result);
})
```

### `Full Example`

``` JavaScript
// In Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            // delete a user in client-side and send to the server-side
            console.log('Deleting user with id, ', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    // remove deleted user from the state in client-side for better user experience
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >
                        {user.name}:: {user.email}
                        {/* added Update button in the Home component */}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;
```

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body

// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        // Load Data: get users json data
        app.get('/user', async(req,res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        // load particular user data for UpdateUser
        app.get('/user/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        // POST User: Add a new user
        app.post('/user', async(req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // delete a user in server-side and send to the database
        app.delete('/user/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })
    }
    finally {

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

## 65.9 (bonus) Load single item by id and Update user info

- [Update a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/ "Update a Document - mongodb.com")

### `Modified Code`

``` JavaScript
// In index.js

// update user
app.put('user/:id', async(req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    const filter = {_id: ObjectId(id)};
    const options = { upsert: true };
    const updatedDoc = {
        $set: {
            name: updatedUser.name,
            email: updatedUser.email
        }
    };
    const result = await userCollection.updateOne(filter, updatedDoc, options);
    res.send(result);
})
```

### `Full Example`

``` JavaScript
// In UpdateUser.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    // load id-wise individual data for display single user info
    useEffect( () => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email);

        const updatedUser = { name, email };

        // send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT', // if user exists in database, then update. Otherwise add user.
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success: ', data);
            alert('user updated successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div>
            <h2>Updating User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;
```

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body

// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        // Load Data: get users json data
        app.get('/user', async(req,res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        // load particular user data for UpdateUser
        app.get('/user/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        // POST User: Add a new user
        app.post('/user', async(req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // update user
        app.put('user/:id', async(req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            };
            const result = await userCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })

        // delete a user in server-side and send to the database
        app.delete('/user/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })
    }
    finally {

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

## Quiz 65

1. What is ___mongoDB___?
   - `A NoSQL database`
2. ___NoSQl databases___ are _______.
   - [ ] document based database
   - [ ] horizontally scalable
   - [ ] Schemas are flexible
   - [x] ___All of the above___
3. Which route/___method___ should you use to ___read data___ from the server?
   - `app.get()`
4. How will you ___use cors___ in your ___express application___?
   - `app.use(cors())`
5. We can use ___await without putting async___ at the beginning of a function.
   - `False`
6. Which ___React hook___ we use to ___get value___ from an ___input box___?
   - `useRef()`
7. Let's say you ___need___ to get ___only the first 10___ documents (___data___) from your mongodb database. How will you get it (google it. Read those answers and try to figure it out)
   - [ ] find(10)
   - [x] ___limit(10)___
   - [ ] limitTo(10)
   - [ ] only(10)
8. Which ___method___ will you use to ___find multiple data___ from the server?
   - [x] ___find({})___
   - [ ] fineOne({})
   - [ ] findMultiple({})
   - [ ] findMany({})
9.  What should you write to ___delete data___ from the server ?
    - `method`
``` JavaScript
fetch( url , {
 __?__ : ‘DELETE’
}).then( res => console.log(res) )
```
10. How will you ___require ObjectId___ in your ___express application___?
    - `const ObjectId = require('mongodb').ObjectId;`
11. How will you ___get the data collection named products___ from your mongodb database? (be careful)
    - `.collection`
``` JavaScript
const collection = client.db(“onlineStore”)_____?_______(“products”);
```
12. How will you ___add one___ document/___data___ into a database collection?
    - `insertOne`
``` JavaScript
const collection = client.db(“onlineStore”).collection(“products”);
collection._______?_______({name:’Mark Hanson’, job:’statistics’})
```
13. Which ___method___/route will you use to ___update data___ on the server?
    - `put`
14. What will you set in mongoDB ___network IP address___ if you want to ___get data from anywhere___?
    - `0.0.0.0`
15. What will you write in the ___content type___ if you want to ___send json data___ to the server from the client side?
    - `application/json`
``` JavaScript
headers: {
  'content-type':  ____?_____ },
```

