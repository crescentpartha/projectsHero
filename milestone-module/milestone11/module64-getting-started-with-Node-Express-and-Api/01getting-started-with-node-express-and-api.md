## Table of Content

- [Module 64: Getting Started with Node, Express and API](#module-64-getting-started-with-node-express-and-api)
  - [64.1 Module Overview, why Node, node vs other language](#641-module-overview-why-node-node-vs-other-language)
    - [`Why we should know the basic about Node & Mongodb?`](#why-we-should-know-the-basic-about-node--mongodb)
    - [`What is Node?`](#what-is-node)
    - [`JavaScript vs Node.js`](#javascript-vs-nodejs)
    - [`When should I use Node.js?`](#when-should-i-use-nodejs)
  - [64.2 Getting started with Node and Express, your first app](#642-getting-started-with-node-and-express-your-first-app)
    - [`Steps:` (Getting Started - Express)](#steps-getting-started---express)
    - [`Steps for Express/Node server` (Next: Hello World)](#steps-for-expressnode-server-next-hello-world)
  - [(Recap) Node express and install nodemon for auto restart](#recap-node-express-and-install-nodemon-for-auto-restart)
    - [`nodemon:`](#nodemonhttpswwwnpmjscompackagenodemon-restarting-the-node-application-when-file-changes-in-the-directory-are-detected)
    - [`Installation:`](#installation)
    - [`Modify scripts of package.json:`](#modify-scripts-of-packagejson)
    - [`Run app with nodemon:`](#run-app-with-nodemon)
  - [64.4 Create dynamic api, api parameter, access params](#644-create-dynamic-api-api-parameter-access-params)

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

### `Steps:` ([Getting Started - Express](https://expressjs.com/en/starter/installing.html))

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

⫸ ___package-lock.json:___ 
- The package-lock.json is solely used to ___lock dependencies___ to ___a specific version number___.
- So that when ___teammates clone___ your work their ___dependency versions___ are the ___same___ as yours, or vice versa.
- It ___manages___ (package install, update, change or version control)


### `Steps for Express/Node server` ([Next: Hello World](https://expressjs.com/en/starter/hello-world.html))

> `require` is the previous version of `import`. <br />We can also use ___ES6 modules (ES6 import) in Node___. In this reason, we need to change `package.json` or file name `.mjs` other than `.js` <br /><br /> `Node use ES6 Module`: [1](https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/ "How to use an ES6 import in Node.js? - geeksforgeeks.org") - [2](https://codesource.io/how-to-use-es6-import-in-node/ "How to use ES6 import in Node - codesource.io") - [3](https://nodejs.org/api/esm.html "Node.js v18.9.0 documentation - nodejs.org") - [4](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js "How can I use an ES6 import in Node.js? [duplicate] - stackoverflow.com")

1. require express
   - using snippet: `req` > ___Enter___ > write ___express___
2. create app variable
3. declare port
4. set app.get('/')
   - app.get(Route, callback function (request, response))
5. listen to port 
   - app.listen(port, callback function)
   - here, callback function is optional. We can write or don't write, doesn't matter.
6. node index.js (___Run the app___ with the following command)
7. check your browser for that port

## (Recap) Node express and install nodemon for auto restart

### `[nodemon:](https://www.npmjs.com/package/nodemon "restarting the node application when file changes in the directory are detected")`

- nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

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

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

