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
    - [`Connection Setup with Database` (Find multiple documents)](#connection-setup-with-database-find-multiple-documents)
    - [`How to get connection string from MongoDB Database`](#how-to-get-connection-string-from-mongodb-database)
    - [`How to get password from MongoDB`](#how-to-get-password-from-mongodb)
    - [`Full Example`](#full-example)
  - [Load all products from database by creating a product API of get method](#load-all-products-from-database-by-creating-a-product-api-of-get-method)
    - [`Data Load from Database` (Documentation)](#data-load-from-database-documentation)
    - [`All products data Load from Database`](#all-products-data-load-from-database)
    - [`Modified Client-side Code` (Particular Section)](#modified-client-side-code-particular-section)
    - [`Modified Client-side Code` (Full Example)](#modified-client-side-code-full-example)
    - [`Modified Server-side Code` (Full Example) - (Load all products data from Database)](#modified-server-side-code-full-example---load-all-products-data-from-database)
  - [Insert a Product data to the MongoDb Cloud Database](#insert-a-product-data-to-the-mongodb-cloud-database)
    - [`Module-wise Task List`](#module-wise-task-list)
    - [`Install react hook form`](#install-react-hook-form)
    - [`Create a form using react-hook-form in the AddProducts component`](#create-a-form-using-react-hook-form-in-the-addproducts-component)
    - [`POST a product from server-side to database`](#post-a-product-from-server-side-to-database)
    - [`POST a product from client-side to server-side`](#post-a-product-from-client-side-to-server-side)
    - [`Full Code Example`](#full-code-example)
      - [`index.js`](#indexjs)
      - [`AddProducts.js`](#addproductsjs)
  - [Manage Products and Explore DELETE API](#manage-products-and-explore-delete-api)
    - [`Create a Custom Hook with dependency`](#create-a-custom-hook-with-dependency)
      - [`Create Custom Hook with dependency called useDisplayProducts.js`](#create-custom-hook-with-dependency-called-usedisplayproductsjs)
      - [`Uses of Custom Hook`](#uses-of-custom-hook)
    - [`Display all products on Manage-Products Route for Deleting`](#display-all-products-on-manage-products-route-for-deleting)
      - [`Product.js` (Modified)](#productjs-modified)
      - [`ManageProducts.js` (Modified)](#manageproductsjs-modified)
      - [`ManageProductsDisplay.js` (Created)](#manageproductsdisplayjs-created)
    - [`DELETE a product from server-side to database`](#delete-a-product-from-server-side-to-database)
    - [`DELETE a product from client-side to server-side`](#delete-a-product-from-client-side-to-server-side)
    - [`Full Code Example`](#full-code-example-1)
  - [Load single product data by using id and Setup form's field value](#load-single-product-data-by-using-id-and-setup-forms-field-value)
    - [`Create a form using react-hook-form`](#create-a-form-using-react-hook-form)
    - [`Load a particular product data from database in client-side` - (id-wise)](#load-a-particular-product-data-from-database-in-client-side---id-wise)
    - [`Create a custom hook with dependency to load individual product data` - (id-wise)](#create-a-custom-hook-with-dependency-to-load-individual-product-data---id-wise)
    - [`Modify form to setup form's field value for individual product` - (id-wise)](#modify-form-to-setup-forms-field-value-for-individual-product---id-wise)
  - [Update a single product info according to id](#update-a-single-product-info-according-to-id)
    - [`Update a single document of Database` (Documentation)](#update-a-single-document-of-database-documentation)
    - [`Update a product in server-side and send to the database`](#update-a-product-in-server-side-and-send-to-the-database)
    - [`Update a particular product (id-wise) from client-side and send to the server-side`](#update-a-particular-product-id-wise-from-client-side-and-send-to-the-server-side)
    - [`Full Code Example`](#full-code-example-2)

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

**[🔼Back to Top](#table-of-contents)**

### `Insert Data on MongoDB Database`

- Collection name (___product___) > ___INSERT DOCUMENT___ > Paste ___JSON data without id attribute___ (mongodb automatically gives `_id` attribute) > Insert

``` JSON
// In products.json

[
    {
        "name": "toyota-corolla",
        "price": "300",
        "quantity": "46",
        "img": "https://i.ibb.co/yg4J4dh/toyota-corolla.png"
    },
    {
        "name": "toyota-camry",
        "price": "400",
        "quantity": "40",
        "img": "https://i.ibb.co/P5ykgjn/toyota-camry.png"
    }
]
```

**[🔼Back to Top](#table-of-contents)**

### `Connection Setup with Database` (Find multiple documents)

- MongoDB Documentation > Usage Examples > Find Operations > [Find Multiple Documents](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/ "Find Multiple Documents - mongodb.com")

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

### `How to get password from MongoDB`

- ___Database Access___ > Edit (password) or ___ADD NEW DATABASE USER___ > Username (___geniusUser___) > Autogenerate password (___WfRnZQmYC5To03nC___) > Copy & Paste in `.env` file > get Username & Password by `${process.env.DB_USER}` and `${process.env.DB_PASS}` format

``` JavaScript
// In .env

DB_USER=productUser
DB_PASS=WZMHnqq8W4BDDELR
```

**[🔼Back to Top](#table-of-contents)**

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

## Load all products from database by creating a product API of get method

### `Data Load from Database` (Documentation)

- MongoDB Documentation > Usage Examples > Find Operations > [Find Multiple Documents](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/ "Find Multiple Documents - mongodb.com")
- `client.connect` section, we will do it as a `async-await system`, We don't do it as a `callback system pattern`.
- [MongoServerError: user is not allowed to do action [find] on [genius-car.service]](https://stackoverflow.com/questions/73560873/mongoservererror-user-is-not-allowed-to-do-action-find-on-genius-car-service "stackoverflow.com")
  - Database Access > Database Users > ___EDIT___ actions for certain user > Specific Privileges > Add Specific Privilege > ___readWriteAnyDatabase___ (Select Role) > Update User

**[🔼Back to Top](#table-of-contents)**

### `All products data Load from Database`

``` JavaScript
// In index.js | Multiple Documents load from Database

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // get all products data (json format) from database
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
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

> We need to change ___fakeData Load___ to ___server-side___ `url` & ___id___ to `_id`, because, MongoDB uses `_id` instead of `id` attribute. <br /><br /> `products.json` ⋙ `http://localhost:5000/product` || `id` ⋙ `_id`

``` JavaScript
// In Home.js

fetch('http://localhost:5000/product')

key={product._id}
```

``` JavaScript
// In Product.js

const { _id: id, name, price, quantity, img } = product;

<button className='btn btn-outline-success w-50 mx-auto mb-2' onClick={() => handleNavigateToUpdateProduct(id)}>Update</button>
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Client-side Code` (Full Example)

``` JavaScript
// In Home.js | Load all products from database

import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='my-3 mx-5'>
            <h2>Available Product: {products.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Home;
```

``` JavaScript
// In Product.js | Display all products data from database

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id: id, name, price, quantity, img } = product;

    const navigate = useNavigate();
    const handleNavigateToUpdateProduct = id => {
        navigate(`/updateProduct/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img className='w-75 mx-auto' variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className='d-flex align-items-center justify-content-around'>
                        <Card.Text className='mb-0'>Price: <span className='fw-semibold'>{price}</span></Card.Text>
                        <Card.Text>Quantity: <span className='fw-semibold'>{quantity}</span></Card.Text>
                    </div>
                </Card.Body>
                <div className='d-flex flex-nowrap gap-2 mx-2 align-items-center justify-content-around'>
                    <button className='btn btn-outline-success w-50 mx-auto mb-2' onClick={() => handleNavigateToUpdateProduct(id)}>Update</button>
                    <button className='btn btn-outline-success w-50 mx-auto mb-2'>Delete</button>
                </div>
            </Card>
        </Col>
    );
};

export default Product;
```

``` JavaScript
// In UpdateProducts.js | Display single product id

import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const { id } = useParams();
    return (
        <div className='my-3'>
            <h2>Update Products: {id}</h2>
        </div>
    );
};

export default UpdateProducts;
```

``` JavaScript
// In App.js | Setup dynamic route with id

import UpdateProducts from './components/UpdateProducts/UpdateProducts';

<Route path='/updateProduct/:id' element={<UpdateProducts></UpdateProducts>}></Route>
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Server-side Code` (Full Example) - (Load all products data from Database)

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

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // get all products data (json format) from database
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
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
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

## Insert a Product data to the MongoDb Cloud Database

### `Module-wise Task List`

- ___Install___ react hook form
- ___Create a form___ using ___react-hook-form___ in the ___AddProducts___ component
- ___POST a product___ from ___server-side to database___
- ___POST a product___ from ___client-side to server-side___
- ___Full Code___ Example
  - ___index.js___
  - ___AddProducts.js___


**[🔼Back to Top](#table-of-contents)**

### `Install react hook form`

``` Terminal
npm install react-hook-form
```

**[🔼Back to Top](#table-of-contents)**

### `Create a form using react-hook-form in the AddProducts component`

``` JavaScript
// In AddProducts.js

import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Add a product</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Price' type="number" {...register("price", { required: true })} />
                <input placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;
```

**[🔼Back to Top](#table-of-contents)**

### `POST a product from server-side to database`

``` JavaScript
// In index.js

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // POST a product form server-side to database
        app.post('/product', async(req, res) => {
            const newProduct = req.body;
            console.log('Adding a new product', newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `POST a product from client-side to server-side`

``` JavaScript
// In AddProducts.js

const onSubmit = data => {
    console.log(data);

    // POST a product form client-side to database
    const url = `http://localhost:5000/product`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
}

<form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
```

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example`

#### `index.js`

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

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // get all products data (json format) from database
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });

        // POST a product form server-side to database
        app.post('/product', async(req, res) => {
            const newProduct = req.body;
            console.log('Adding a new product', newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

#### `AddProducts.js`

``` JavaScript
// In AddProducts.js

import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        // POST a product form client-side to database
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Add a product</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Price' type="number" {...register("price", { required: true })} />
                <input placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;
```

**[🔼Back to Top](#table-of-contents)**

## Manage Products and Explore DELETE API

### `Create a Custom Hook with dependency`

#### `Create Custom Hook with dependency called useDisplayProducts.js`

``` JavaScript
// In useDisplayProducts.js

const { useState, useEffect } = require("react");

const useDisplayProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return [products, setProducts];
}

export default useDisplayProducts;
```

**[🔼Back to Top](#table-of-contents)**

#### `Uses of Custom Hook`

``` JavaScript
// In Home.js

import useDisplayProducts from '../../hooks/useDisplayProducts';

const Home = () => {
    const [products] = useDisplayProducts();
};

export default Home;
```

**[🔼Back to Top](#table-of-contents)**

``` JavaScript
// In ManageProducts.js

import useDisplayProducts from '../../hooks/useDisplayProducts';

const ManageProducts = () => {
    const [products] = useDisplayProducts();
};

export default ManageProducts;
```

**[🔼Back to Top](#table-of-contents)**

### `Display all products on Manage-Products Route for Deleting`

#### `Product.js` (Modified)

``` JavaScript
// In Product.js

import { Link } from 'react-router-dom';

<Link className='btn btn-outline-success w-50 mx-auto mb-2' to='/manageProducts'>Delete</Link>
```

**[🔼Back to Top](#table-of-contents)**

#### `ManageProducts.js` (Modified)

``` JavaScript
// In ManageProducts.js

import React from 'react';
import { Row } from 'react-bootstrap';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import ManageProductsDisplay from './ManageProductsDisplay';

const ManageProducts = () => {
    const [products] = useDisplayProducts();
    return (
        <div className='my-3'>
            <h2>Manage Products: {products.length}</h2>
            <Row xs={1} md={1} lg={1} className="g-4 my-3 mx-2 mx-sm-5 mx-md-5">
                {
                    products.map(product => <ManageProductsDisplay
                        key={product._id}
                        product={product}
                    ></ManageProductsDisplay>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;
```

**[🔼Back to Top](#table-of-contents)**

#### `ManageProductsDisplay.js` (Created)

``` JavaScript
// In ManageProductsDisplay.js

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProductsDisplay = ({ product }) => {
    const { img, name } = product;
    return (
        <div>
            <Col>
                <Card>
                    <div className='d-flex flex-nowrap flex-md-nowrap flex-lg-nowrap align-items-center justify-content-around'>
                        <Card.Img className='w-25 mx-5' variant="top" src={img} alt={name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <button className='btn btn-outline-success w-50 mx-auto mb-2'>Delete</button>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductsDisplay;
```

**[🔼Back to Top](#table-of-contents)**

### `DELETE a product from server-side to database`

``` JavaScript
// In index.js

const { ObjectId } = require('mongodb');

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // DELETE a product from server-side to database
        app.delete('/product/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.deleteOne(query);
            console.log('One product is deleted');
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `DELETE a product from client-side to server-side`

``` JavaScript
// In ManageProductsDisplay.js

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useDisplayProducts from '../../hooks/useDisplayProducts';

const ManageProductsDisplay = ({ product }) => {
    const [products, setProducts] = useDisplayProducts();
    const { img, name } = product;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('Deleting product with id = ', id);
            
            // delete a product in client-side and send to the server-side
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // console.log(data?.deletedCount);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    // remove deleted service from the state in client-side for better user experience
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            });
        }
    }

    return (
        <div>
            <Col>
                <Card>
                    <div className='d-flex flex-wrap flex-md-nowrap flex-lg-nowrap align-items-center justify-content-around'>
                        <Card.Img className='w-25 mx-5' variant="top" src={img} alt={name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <button className='btn btn-outline-success w-50 mx-auto mb-2' onClick={() => handleDelete(product._id)}>Delete</button>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductsDisplay;
```

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // get all products data (json format) from database
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });

        // POST a product form server-side to database
        app.post('/product', async(req, res) => {
            const newProduct = req.body;
            console.log('Adding a new product', newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });

        // DELETE a product from server-side to database
        app.delete('/product/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.deleteOne(query);
            console.log('One product is deleted');
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

## Load single product data by using id and Setup form's field value

### `Create a form using react-hook-form`

``` JavaScript
// In UpdateProducts.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateProducts = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Update Product: {id}</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Price' type="number" {...register("price", { required: true })} />
                <input placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default UpdateProducts;
```

**[🔼Back to Top](#table-of-contents)**

### `Load a particular product data from database in client-side` - (id-wise)

``` JavaScript
// In index.js

const { ObjectId } = require('mongodb');

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // Load a particular product data from database - (id-wise)
        app.get('/product/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.findOne(query);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Create a custom hook with dependency to load individual product data` - (id-wise)

``` JavaScript
// In useLoadSingleProduct.js

const { useState, useEffect } = require("react")

const useLoadSingleProduct = (id) => {
    const [product, setProduct] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    return [product, setProduct];
}

export default useLoadSingleProduct;
```

**[🔼Back to Top](#table-of-contents)**

### `Modify form to setup form's field value for individual product` - (id-wise)

``` JavaScript
// In UpdateProducts.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useLoadSingleProduct from '../../hooks/useLoadSingleProduct';

const UpdateProducts = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useLoadSingleProduct(id);
    console.log(product);

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Update Product: {product.name}</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input value={product.name} placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input value={product.price} placeholder='Price' type="number" {...register("price", { required: true })} />
                <input value={product.quantity} placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input value={product.img} placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default UpdateProducts;
```

**[🔼Back to Top](#table-of-contents)**

## Update a single product info according to id

### `Update a single document of Database` (Documentation)

- MongoDB Documentation > Usage Examples > Update & Replace Operations > [Update a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/ "Update a Document - mongodb.com")

**[🔼Back to Top](#table-of-contents)**

### `Update a product in server-side and send to the database`

``` JavaScript
// In index.js

const { ObjectId } = require('mongodb');

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // Update a product in server-side and send to the database
        app.put('product/:id', async(req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    img: data.img
                },
            };
            const result = await productCollection.updateOne(filter, updatedDoc, options);
            console.log('Product is updated');
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Update a particular product (id-wise) from client-side and send to the server-side`

``` JavaScript
// In UpdateProducts.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useLoadSingleProduct from '../../hooks/useLoadSingleProduct';

const UpdateProducts = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const [product] = useLoadSingleProduct(id);
    // console.log(product);

    const onSubmit = data => {
        console.log(data);

        // Update a product in client-side and send to the server-side
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('Product updated successfully!!!');
        });
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Update Product: {product.name}</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input value={product.name} placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input value={product.price} placeholder='Price' type="number" {...register("price", { required: true })} />
                <input value={product.quantity} placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input value={product.img} placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default UpdateProducts;
```

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // get all products data (json format) from database
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });

        // POST a product form server-side to database
        app.post('/product', async(req, res) => {
            const newProduct = req.body;
            console.log('Adding a new product', newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });

        // DELETE a product from server-side to database
        app.delete('/product/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.deleteOne(query);
            console.log('One product is deleted');
            res.send(result);
        });

        // Load a particular product data from database - (id-wise)
        app.get('/product/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.findOne(query);
            res.send(result);
        });

        // Update a product in server-side and send to the database
        app.put('product/:id', async(req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    img: data.img
                },
            };
            const result = await productCollection.updateOne(filter, updatedDoc, options);
            console.log('Product is updated');
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

