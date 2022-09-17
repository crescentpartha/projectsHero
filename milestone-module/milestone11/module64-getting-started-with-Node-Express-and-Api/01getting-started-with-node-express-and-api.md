## Table of Content

- [Module 64: Getting Started with Node, Express and API](#module-64-getting-started-with-node-express-and-api)
  - [64.1 Module Overview, why Node, node vs other language](#641-module-overview-why-node-node-vs-other-language)
    - [`Why we should know the basic about Node & Mongodb?`](#why-we-should-know-the-basic-about-node--mongodb)
    - [`What is Node?`](#what-is-node)
    - [`JavaScript vs Node.js`](#javascript-vs-nodejs)
    - [`When should I use Node.js?`](#when-should-i-use-nodejs)
  - [64.2 Getting started with Node and Express, your first app](#642-getting-started-with-node-and-express-your-first-app)
    - [`Basic Server Setup Steps:` (Getting Started - Express)](#basic-server-setup-steps-getting-started---express)
    - [`package-lock.json`](#package-lockjson)
    - [`Steps for Express/Node server` (Next: Hello World)](#steps-for-expressnode-server-next-hello-world)
  - [(Recap) Node express and install nodemon for auto restart](#recap-node-express-and-install-nodemon-for-auto-restart)
    - [`nodemon:`](#nodemonhttpswwwnpmjscompackagenodemon-restarting-the-node-application-when-file-changes-in-the-directory-are-detected)
    - [`Installation:`](#installation)
    - [`Modify scripts of package.json:`](#modify-scripts-of-packagejson)
    - [`Run app with nodemon:`](#run-app-with-nodemon)
  - [64.4 Create dynamic api, api parameter, access params](#644-create-dynamic-api-api-parameter-access-params)
  - [64.5 Use fetch to load data from server, middleware, handle cors](#645-use-fetch-to-load-data-from-server-middleware-handle-cors)
    - [`Resources`](#resources)
    - [`cors middleware installation`](#cors-middleware-installation)
    - [`require cors`](#require-cors)
    - [`Full Example`](#full-example)
  - [64.6 Create React form and Post API and send data to the server](#646-create-react-form-and-post-api-and-send-data-to-the-server)
    - [`Create React form`](#create-react-form)
    - [`POST (JSON-encoded) data using Fetch API`](#post-json-encoded-data-using-fetch-api)
      - [`Demo/Sample Code:`](#demosample-code)
      - [`Example Code:`](#example-code)
    - [`Create POST method` (Send data to the server)](#create-post-method-send-data-to-the-server)
    - [`Express post body is undefined` (Solution)](#express-post-body-is-undefined-solution)
    - [`How does middleware works in node.js?`](#how-does-middleware-works-in-nodejs)
    - [`Complete Example`](#complete-example)
    - [`Output of Complete Example`](#output-of-complete-example)
  - [64.7 Display POST data on the UI and explore query parameter](#647-display-post-data-on-the-ui-and-explore-query-parameter)
    - [`Display POST data on the UI`](#display-post-data-on-the-ui)
    - [`Search query or query parameter`](#search-query-or-query-parameter)
    - [`Explore Search query or query parameter`](#explore-search-query-or-query-parameter)
    - [`Complete Example`](#complete-example-1)
  - [64.8 Module summary, git ignore for node project](#648-module-summary-git-ignore-for-node-project)
    - [`git ignore for node project`](#git-ignore-for-node-project)
    - [`Final completed code`](#final-completed-code)

# Module 64: Getting Started with Node, Express and API

## 64.1 Module Overview, why Node, node vs other language

### `Why we should know the basic about Node & Mongodb?`

- It helps the ___self-understanding___
- In future, which ___technology___ we will ___use___ in our project
- Facing ___Interview___

### `What is Node?`

- ___Alternative of Node:___ 
  - Python, PHP, Java, C# (programming languages) 
  - Dot-Net or .NET (framework)
- [Node.js](https://nodejs.org/en/) - [About](https://nodejs.org/en/about/)
  - Node.js is an ___open-source___, ___cross-platform___, ___back-end JavaScript runtime environment___ that runs on the ___V8 engine___ and executes JavaScript code ___outside a web browser___.
  - Node.js® is a ___JavaScript runtime___ built on ___Chrome's V8 JavaScript engine___.
  - As an ___asynchronous event-driven___ JavaScript runtime, Node.js is designed to build ___scalable network applications___.

### `JavaScript vs Node.js`

- JavaScript is a proper ___high-level programming language___ used to create ___web scripts___ whereas Node.js is a ___run time environment___ built on ___google's v8 engine___.
- JavaScript is executed in the ___browser___ whereas using Node. js gives us the ability to execute JavaScript ___outside the browser___.
- [Difference between Node.JS and Javascript](https://www.geeksforgeeks.org/difference-between-node-js-and-javascript/ "geeksforgeeks.org")

### `When should I use Node.js?`

- Node. js is primarily used for ___non-blocking___, ___event-driven servers___, due to its ___single-threaded nature___.
- It's used for ___traditional web sites___ and ___back-end API services___, but was designed with ___real-time___, ___push-based architectures___ in mind.
- [Express](https://expressjs.com/ "Express.js - Framework of Node.js") - Node.js web application ___framework___
  - Express is a ___minimal and flexible___ Node.js web application framework that provides ___a robust set of features___ for web and mobile applications.

## 64.2 Getting started with Node and Express, your first app

### `Basic Server Setup Steps:` ([Getting Started - Express](https://expressjs.com/en/starter/installing.html))

1. ___Create a folder/directory___ to hold your application (___manually___ or ___mkdir___)

``` Terminal
mkdir myApp
cd myApp
```
2. Open command line to ___open that folder___ in VSCode

``` Terminal
code .
```
3. Use the ___npm init___ or ___npm init -y___ command to create a ___package.json___ file for your application.
   
⫸ ___Create package.json file directly without any questions:___
- `-y` ___flag___ used for that we ___agree with your all questions___ 

``` Terminal
npm init -y
```

⫸ ___Create package.json file with some questions:___

``` Terminal
npm init
```

- ___Some questions need to be answered:___
  - Press `^C` at any time to ___quit___.
  - package name: (02my-first-node) > `Enter`
  - version: (1.0.0) > `Enter`
  - description: > (you can write something) or `Enter`
  - entry point: (index.js) > `Enter`
  - test command: > `Enter`
  - git repository: > `Enter`
  - keywords: > `Enter`
  - author: > `Enter`
  - license: (ISC) > `Enter`
  - About to write to c:\projects\02my-first-node\package.json: > `Enter`

``` JSON
{
  "name": "02my-first-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
- Is this OK? (yes) > `Enter`

4. ___Install___ Express and ___save___ it in the dependencies list

``` Terminal
npm install express
```
5. Create ___index.js___ file

### `package-lock.json`

- The package-lock.json is solely used to ___lock dependencies___ to ___a specific version number___.
- So that when ___teammates clone___ your work their ___dependency versions___ are the ___same___ as yours, or vice versa.
- It ___manages___ (package install, update, change or version control)


### `Steps for Express/Node server` ([Next: Hello World](https://expressjs.com/en/starter/hello-world.html))

> `require` is the previous version of `import`. <br />We can also use ___ES6 modules (ES6 import) in Node___. In this reason, we need to change `package.json` or file name `.mjs` other than `.js` <br /><br /> `Node use ES6 Module`: [1](https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/ "How to use an ES6 import in Node.js? - geeksforgeeks.org") - [2](https://codesource.io/how-to-use-es6-import-in-node/ "How to use ES6 import in Node - codesource.io") - [3](https://nodejs.org/api/esm.html "Node.js v18.9.0 documentation - nodejs.org") - [4](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js "How can I use an ES6 import in Node.js? [duplicate] - stackoverflow.com")

1. ___require express___
   - using snippet: `req` > ___Enter___ > write ___express___
2. ___create app variable___
3. ___declare port___
4. ___set app.get('/')___
   - app.get(Route, callback function (request, response))
5. ___listen to port___
   - app.listen(port, callback function)
   - here, callback function is optional. We can write or don't write, doesn't matter.
6. ___node index.js___ | ___nodemon index.js___ (___Run the app___ with the following command)
7. ___check your browser for that port___

## (Recap) Node express and install nodemon for auto restart

### `[nodemon:](https://www.npmjs.com/package/nodemon "restarting the node application when file changes in the directory are detected")`

- ___nodemon___ is a tool that helps develop Node.js based applications by ___automatically restarting___ the node application when ___file changes___ in the directory are detected.

### `Installation:`

- `-g` flag stands for ___global___ | we can find it anywhere in our computer.

``` Terminal
npm install -g nodemon
```

### `Modify scripts of package.json:`

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

### `Run app with nodemon:`

``` Terminal
nodemon index.js
```

> `Notes:` `Nodemon` ___monitor___ the ___directory changes___ and then ___auto restart the server___ again and again. <br /> `mon` comes from `monitor` | ___nodemon___


## 64.4 Create dynamic api, api parameter, access params

``` JavaScript
// In index.js

const express = require('express');
const app = express();
// const port = precess.env.PORT || 5000;
const port = 5000;

app.get('/', (req, res) => {
    res.send('Look Mama! I can run code with Nodemon now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01788888888' },
];

app.get('/users', (req, res) => {
    // res.send('Hello from user');
    // res.send({ id: 1, name: 'Abdul Alim', job: 'Khai shudhu halim' });
    res.send(users);
});

// Create dynamic api
app.get('/user/:id', (req, res) => { // api parameter
    console.log(req.params); // access params
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // res.send('finding user');
    res.send(user);
});

app.get('/fruits', (req, res) => {
  res.send(['mango','apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
  res.send('Sour soud fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

## 64.5 Use fetch to load data from server, middleware, handle cors

### `Resources`

- [No 'Access-Control-Allow-Origin' - Node / Apache Port Issue](https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue)
- [Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Express middleware](https://expressjs.com/en/resources/middleware.html) - [cors](http://expressjs.com/en/resources/middleware/cors.html)
  - Has the ___access___ to the ___request object___
  - ___Responses object___
  - Can ___process the request___ before the ___server___ sends a ___response___
- [Cannot find module 'cors' error in Node.js](https://bobbyhadz.com/blog/node-cannot-find-module-cors#:~:text=To%20solve%20the%20error%20%22Cannot,%2DD%20%40types%2Fcors%20. "bobbyhadz.com")
  - Check your ___typing mistake___ first, if you got error.
- [Error: Cannot find module 'cors'](https://stackoverflow.com/questions/47706022/error-cannot-find-module-cors "stackoverflow.com")


### `cors middleware installation`

``` Terminal
npm install cors
```

### `require cors`

``` JavaScript
// In index.js

const cors = require('cors');

app.use(cors());
```

### `Full Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const app = express();
// const port = precess.env.PORT || 5000;
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Look Mama! I can run code with Nodemon now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01788888888' },
];

app.get('/users', (req, res) => {
    // res.send('Hello from user');
    // res.send({ id: 1, name: 'Abdul Alim', job: 'Khai shudhu halim' });
    res.send(users);
});

// Create dynamic api
app.get('/user/:id', (req, res) => { // api parameter
    console.log(req.params); // access params
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // res.send('finding user');
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Sour soud fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

``` JavaScript
// In App.js

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>My Own data: {users.length}</h1>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id} name: {user.name} email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
```

## 64.6 Create React form and Post API and send data to the server

### `Create React form`

``` JavaScript
<form onSubmit={handleAddUser}>
  <input type="text" name="name" placeholder='Name' required />
  <input type="text" name="email" placeholder='Email' required />
  <input type="submit" value="Add User" />
</form>
```

### `POST (JSON-encoded) data using Fetch API`

- [fetch post data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data "Using the Fetch API - developer.mozilla.org")
  - [Uploading JSON data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data "post (JSON-encoded) data using Fetch API - developer.mozilla.org")

#### `Demo/Sample Code:`

``` JavaScript
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

#### `Example Code:`

``` JavaScript
// In App.js

const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    // console.log(name, email);

    // const user = {name: name, email: email};
    const user = { name, email };

    // post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
  }

<form onSubmit={handleAddUser}>
```

### `Create POST method` (Send data to the server)

``` JavaScript
// In index.js

app.use(express.json()); // Solution of "Express.js req.body undefined";

app.post('/user', (req, res) => {
    // console.log('request', req);
    console.log('request', req.body);
    res.send('post method success');
})
```

### `Express post body is undefined` (Solution)

- [express post body is undefined](https://stackoverflow.com/questions/9177049/express-js-req-body-undefined "Express.js req.body undefined - stackoverflow.com")
- [Express middleware](https://expressjs.com/en/resources/middleware.html "Express middleware - expressjs.com") - [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html "body-parser middleware - expressjs.com")
  - Solution: 
    - `npm install body-parser`
    - `let bodyParser = require('body-parser');`
    - `app.use(bodyParser.json());`
  - `Another Solution: (shortcut)` We can use ___express.json___ as a ___middleware___
    - like `app.use(express.json());`

### `How does middleware works in node.js?`
  - ___Middleware___ is a function that will have ___all the access___ for ___requesting an object___, ___responding to an object___, and ___moving to the next middleware function___ in the application ___request-response cycle___.
  - Middleware literally means ___anything you put in the middle___ of one layer of the software and another.
  - Middleware are functions that ___execute during the lifecycle___ of ___a request to the server___.
  - Each middleware has access to the ___HTTP request___ and ___response___ for ___each route___.
  - ___Example:___ 
    - We didn't find value of `req.body` (___undefined___). That's why we use a ___middleware___ called `body-parser` or `express.json()` (___shortcut___)
    - Here, Middleware ___convert___ the data to ___JSON format___.

### `Complete Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const app = express();
// const port = precess.env.PORT || 5000;
const port = 5000;

app.use(cors());
app.use(express.json()); // Solution of "Express.js req.body undefined";

app.get('/', (req, res) => {
    res.send('Look Mama! I can run code with Nodemon now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01788888888' },
];

app.get('/users', (req, res) => {
    // res.send('Hello from user');
    // res.send({ id: 1, name: 'Abdul Alim', job: 'Khai shudhu halim' });
    res.send(users);
});

// Create dynamic api
app.get('/user/:id', (req, res) => { // api parameter
    console.log(req.params); // access params
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // res.send('finding user');
    res.send(user);
});

app.post('/user', (req, res) => {
    // console.log('request', req);
    console.log('request', req.body);
    res.send('post method success');
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Sour soud fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

``` JavaScript
// In App.js

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    // console.log(name, email);

    // const user = {name: name, email: email};
    const user = { name, email };

    // post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
  }

  return (
    <div className="App">
      <h1>My Own data: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' required />
        <input type="text" name="email" placeholder='Email' required />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id} name: {user.name} email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
```

### `Output of Complete Example`

- ___Takes input___ form users like `Name` & `Email`. Then send data by clicking ___Add User___ button.
- ___Output:___ `request { name: 'Sabila Nur', email: 'sabilanur@gmail.com' }`


## 64.7 Display POST data on the UI and explore query parameter

### `Display POST data on the UI`

``` JavaScript
// In index.js

app.post('/user', (req, res) => {
    // console.log('request', req);
    console.log('request', req.body);
    // res.send('post method success');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
```

``` JavaScript
// In App.js

// post data to server
fetch('http://localhost:5000/user', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
})
  .then((response) => response.json())
  .then((data) => {
    const newUsers = [...users, data];
    setUsers(newUsers);
    console.log(data);
  })
```

### `Search query or query parameter`

- ___localhost:5000/users?name=sub___ // `query { name: 'sub' }`
- ___localhost:5000/users?name=sub&time=45___ // `query { name: 'sub', time: '45' }`
- http://localhost:5000/users?name=sub&time=45&email=gmail // `query { name: 'sub', time: '45', email: 'gmail' }`
- That type of response, we can get in the backend in `req.query`
- We can ___filter___ in two ways: `id/parameter/params` & `query`
  - ___filter users___ in the browser using `search query`
  - ___filter users___ from the server using `search query` or `id/parameter/params`
- http://localhost:5000/users // `query {}`

### `Explore Search query or query parameter`

``` JavaScript
// In index.js

app.get('/users', (req, res) => {
    // console.log('query', req.query);
    // res.send(users);

    // filter by query parameter or search query
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});
```

### `Complete Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const app = express();
// const port = precess.env.PORT || 5000;
const port = 5000;

app.use(cors());
app.use(express.json()); // Solution of "Express.js req.body undefined";

app.get('/', (req, res) => {
    res.send('Look Mama! I can run code with Nodemon now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01788888888' },
];

app.get('/users', (req, res) => {
    // res.send('Hello from user');
    // res.send({ id: 1, name: 'Abdul Alim', job: 'Khai shudhu halim' });

    // console.log('query', req.query);
    // res.send(users);

    // filter by query parameter or search query
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

// Create dynamic api
app.get('/user/:id', (req, res) => { // api parameter
    console.log(req.params); // access params
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // res.send('finding user');
    res.send(user);
});

app.post('/user', (req, res) => {
    // console.log('request', req);
    console.log('request', req.body);
    // res.send('post method success');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Sour soud fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

``` JavaScript
// In App.js

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    // console.log(name, email);

    // const user = {name: name, email: email};
    const user = { name, email };

    // post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(data);
      })
  }

  return (
    <div className="App">
      <h1>My Own data: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' required />
        <input type="text" name="email" placeholder='Email' required />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id} name: {user.name} email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
```

## 64.8 Module summary, git ignore for node project

### `git ignore for node project`

- create `.gitignore` file ___inside___ the ___node project___
- In `.gitignore`, write `node_modules`, that's it. Otherwise, ___node_modules___ file also ___push___ in the github repository.

### `Final completed code`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const app = express();
// const port = precess.env.PORT || 5000;
const port = 5000;

app.use(cors());
app.use(express.json()); // Solution of "Express.js req.body undefined";

app.get('/', (req, res) => {
    res.send('Look Mama! I can run code with Nodemon now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01788888888' },
];

// app.get('/users', (req, res) => {
//     res.send(users);
// });

// app.get('/users', (req, res) => {
//     // res.send('Hello from user');
//     // res.send({ id: 1, name: 'Abdul Alim', job: 'Khai shudhu halim' });

//     // console.log('query', req.query);
//     res.send(users);
// });

// filter by query parameter or search query
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

// Create dynamic api
app.get('/user/:id', (req, res) => { // api parameter
    console.log(req.params); // access params
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // res.send('finding user');
    res.send(user);
});

app.post('/user', (req, res) => {
    // console.log('request', req);
    console.log('request', req.body);
    // res.send('post method success');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Sour soud fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

``` JavaScript
// In App.js

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // load data
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    // console.log(name, email);

    // const user = {name: name, email: email};
    const user = { name, email };

    // post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(data);
      })
  }

  return (
    <div className="App">
      <h1>My Own data: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' required />
        <input type="text" name="email" placeholder='Email' required />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id} name: {user.name} email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
```
