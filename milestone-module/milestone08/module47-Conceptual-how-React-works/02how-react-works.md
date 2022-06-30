# How [React](https://reactjs.org/ "Recommended to read Reactjs.org documentation") Works (Conceptual)

## 47.1 Module Introduction Create React App under the hood
```git
node --version
node -v
npm -v
```

⫸ **npm** → **Node Package Manager** (A JavaScript package manager)
- NPM is used to manage __dependencies__ for packages. (update framework)
- Many things need to manage to run a website which is done by npm
- By npm, extra things we could (__install, update, delete__) for React Project
- __node package installer__ is npm

⫸ **npx** → **Node Package Execute**
- It is an __npm package runner__ that can execute any package that you want from the __npm registry__ without even installing that package.
- npx is a tool intended to help round out the experience of using packages from the npm registry.
- It made easy to npm's work
- npx install and execute a package together
- __package executer__ is npx
  
⫸ Difference between [__npm and npx__](https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/#:~:text=Npm%20is%20a%20tool%20that,pollution%20in%20the%20long%20term.): 

| **npm** | **npx** |
| --- | --- |
| If you wish to run package through npm then you have to specify that package in your `package.json` and __install__ it locally. | A package can be __executable__ without installing the package. It is an __npm package runner__ so if any packages aren’t already installed it will install them automatically. |
| To use __create-react-app__ in npm, the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required). | In npx, you can create a react app without installing the package: `npx create-react-app myApp` this command is required in every app’s life cycle only once. |
| Npm is a tool that use to __install packages__. | Npx is a tool that use to __execute packages__. |
| Packages used by npm are __installed globally__. You have to care about __pollution__ in the long term. | Packages used by npx __are not installed globally__. You don’t have to worry about for pollution in the long term. |


⫸ What is [__create react app__](https://reactjs.org/docs/create-a-new-react-app.html)?
- [Create React App](https://www.codecademy.com/article/how-to-create-a-react-app) is a comfortable environment for learning React, and is the best way to start building a new __single-page application__ in React. 
- It sets up our your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
- [Create React App](https://create-react-app.dev/) (CRA) is a tool to create __single-page React applications__ that is officially supported by the React team. The script generates the required files and folders to start the React application and run it __on the browser__.
- Create React App is one type of __CLI (Command Line Interface)__ to create a React application.


⫸ [__CLI__](https://www.hostinger.com/tutorials/what-is-cli) means __Command Line Interface__:
- CLI is a __command line program__ that accepts text input to execute operating system functions.
- A command-line interface (CLI) is a text-based user interface (UI) used to run programs, manage computer files and interact with the computer. 
- Command-line interfaces are also called __command-line user interfaces__, __console user interfaces__ and __character user interfaces__.
- Example: computer terminals like Shell Scripting → __Windows Shell__, __Bash__.
- __Advantages__: needs fewer resource, ensures high precision, handles repetitive task easily, Powerful, and faster.
            
⫸ [__GUI__](https://www.educba.com/what-is-gui/) means __Graphical User Interface__:
- A GUI is __a system of interactive visual components__ for computer software.
- It is the common user Interface that includes __Graphical Representation__ like buttons and icons, and communication can be performed by interacting with these icons rather than the usual text-based or command-based communication. 
- A common example of a GUI is __Microsoft operating systems__.
- __Advantages__: simplicity, visually attractive and easily understood.

⫸ What is [__package.json__](https://www.letsreact.org/package-json-explained/) in React?
- All npm packages contain a file, usually in the project root, called __package.json__
- This file is a kind of __manifest file__ for your application.
- The __package.json__ file is the __heart__ of any Node project.
- This file plays a very __important role__ in the react application development and deployment.
---
- `Package.json` = __Metadata associated with project + All [Dependencies](https://www.pluralsight.com/guides/add-a-dependency-to-react-in-package.json-for-a-react-component) with version + scripts__.
- It records __important metadata__ about a project which is required before publishing to NPM.
- It also defines __functional attributes__ of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
- `index.js` is the __entry point__ to our package.

⫸ __Markdown Cheat Sheet:__ [1](https://www.markdownguide.org/cheat-sheet/ "Markdown Cheat Sheet") [2](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings "GitHub Docs")

## 47.2 What is JSX, React Component, babel transpiler

⫸ What is __JSX (JavaScript XML)__? ([JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html "Recommended to read Reactjs.org documentation - JSX in Depth"))
- JSX is an `extension` to the JavaScript language syntax.
- JSX just provides __syntactic sugar__ for the `React.createElement(component, props, ...children)` function. JSX is converted into JavaScript, you can try out [the online Babel compiler/transpiler](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=script&lineWrap=true&presets=react&prettier=false&targets=&version=7.18.7&externalPlugins=&assumptions=%7B%7D).
- __Specifying The React Element Type:__ Capitalized types indicate that the JSX tag is referring to a React component. 
- __React Must Be in Scope:__ The React library must always be in scope from your JSX code. Ex: `import React from 'react';`
---
- __Spread Attributes:__ Ex: `return <Greeting {...props} />;`
- __String Literals:__ Ex: `<MyComponent message={'hello world'} />`
- __User-Defined Components Must Be Capitalized:__ Ex: `<Person></Person>`
- __Using Dot Notation for JSX Type:__ You can also refer to a React component using dot-notation from within JSX.
---
- __Props in JSX__
- __Props Default to “True”:__ Ex: `<MyTextBox autocomplete={true} />`
- __JavaScript Expressions as Props:__ Ex: `<MyComponent foo={1 + 2 + 3 + 4} />`
- __JavaScript Expressions as Children:__ Ex: `<MyComponent>{'foo'}</MyComponent>`
- __Functions as Children:__
---
- __Children in JSX:__ Ex: `props.children`
- __JSX Children:__ You can provide more JSX elements as the children.
- __Booleans, Null, and Undefined Are Ignored:__ Ex: `<div>{false}</div>`

⫸ __Power of JSX:__ OR __advantages of using JSX in ReactJS__
- To give a ability to `write html code` in JS file and `JavaScript expression` in html code.
- JSX helps for `code simpler and Attractive` when writing large pieces of code for big React Application.
- JSX also __allows React__ to Show more useful `error and warning messages`.
- One of the advantages of JSX is that `React creates a virtual DOM` (a virtual representation of the page) __to track changes and updates__. Instead of rewriting the entire HTML, `React modifies the DOM` of the page whenever the information is updated. This is one of the main issues React was created to solve.
---
- Use __React Component__ to put together `Markup language & logic` in same file. 
- We can use `Map`, `Spread Attributes`, `String Literals`, `User-Defined Components`, `Dot Notation`
- Declare `User-Defined Components`, then use like html tag as much as you want
- We can `set style dynamically`
- We can `pass dynamic data`
- The only reason behind the fact that `JSX code is converted to JS code`

## 47.3 [Components](https://reactjs.org/docs/components-and-props.html "Components and Props - reactjs.org") and how props works, unidirectional data flow

⫸ `Component` (a function, can use __multiple times__)
- Component is nothing but __a function__
- We can declare __User-Defined Components__, then use as much as you like
- __Code reuse ability__ by creating component
- __Similar in look, different in data__
- When creating a component in React, the __first letter__ of that function name should be in __Uppercase__ (Lowercase for props)
---
- Components are __independent__ and __reusable bits of code__.
- A Component is one of the __core building blocks__ of React app.
- Components let you split the UI into __independent__, __reusable pieces__, and think about each piece in __isolation__.
- They serve the __same purpose__ as JavaScript functions, but __work in isolation and return HTML__.
- They accept arbitrary inputs (called __“props”__) and return __React elements__ describing what should appear on the screen.
---
- Components come in __two types__, __Class components__ and __Function components__.
- Recently, people mostly used Function components after coming the __React-Hook__.
- __Component → composed → rendering → optimized → show in UI__
- Components compare with [Leader-board-css3](https://github.com/ProgrammingHero1/leader-board-css3/blob/main/index.html) | (__player__ class, __article__ tag) → __similar in look, different in data__.

⫸ `Props` (__properties__, used for __passing dynamic data to component__)

- Used for __passing dynamic data__
- __props is properties__ in js, similar to html is attributes
- props helps to make (__similar in look, different in data__)
- convert html attributes to a js properties
- props __read only__
  - __Cannot assign__ any value (__ex:__ props.price = 150000) | makes error
  - you can change value only from the root (__from where__ you send)

⫸ `Unidirectional Data Flows`
- __React:__ Unidirectional Data Flows: (One way Binding)
  - __Parent → Child__ (ex: App → Device → DeviceDetail)
- __Angular__ Framework (Two way Binding)
  - __Parent ↔ Child__

## 47.4 (advanced) [How states works, asynchronous, console state](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module47-Conceptual-how-React-works/01how-react-works/src/components/Watch/Watch.js "Learn with example")

⫸ [`State:`](https://reactjs.org/docs/state-and-lifecycle.html "State and LifeCycle - reactjs.org")
- The state is a built-in React object that is used to contain data or information about the component. 
- A component's state can change over time; whenever it changes, the component re-renders.
---
- State is the situation of anythings like (Ex: cart, logIn, Counter, Increase, Decrease, React on FB, Session, Data Loading)
- State could be changed or not (Ex: user can react or not)
- State depends on users activities
- Used useState() method (if anything could change)
- To use useState() & useEffect(), we need to import alongside these method:- import { useState, useEffect } from 'react';
- Default value of useState() & useEffect() methods: 0, []

⫸ `How states works:`
- Click button → Call event handler by onClick method → stateful value + 1
- new stateful value assign to a variable → then passing by a function 
- this function delivery(dispatch) a Action to useState → useState check value is different or not
- if different, then check the UI (where will be changed) → find + rerender + change stateful value & give us <br>
[__state variable = steps = stateful value__ | __function = setSteps__]

⫸ `Asynchronous`
- [function = setSteps] is asynchronous like setTimeout()
- State update is asynchronous.

⫸ `Solutions (To print latest value):` setInterval(), setTimeout(), useEffect()
__useEffect():__
- does not depend on anyone/anything. But, sometimes could depend on one value called __"stateful value"__ (Execute multi-time)
- if we set empty array, then execute only one. 
- if we don't given any empty array, then it executes multiple times. (normally not used, by default making mistake)
- latest value need to get __asynchronous way__ by useEffect().

⫸ `State vs Props`
|  | __State__ | __Props__ |
| --- | --- | --- |
| __Use Case__ | State is used to store the data of the components that have to be rendered to the view | Props are used to pass data and event handlers to the children components |
| __Mutability__ | State holds the data and can change over time | Props are immutable—once set, props cannot be changed |
| __Component__ | State can only be used in class components | Props can be used in both functional and class components |
| __Updating__ | Event handlers generally update state | The parent component sets props for the children components |

## 47.5 How React Hook works, send state via props, props vs state

⫸ `Props vs State`
| __Props__ | __State__ |
| --- | --- |
| Props are used to __pass data__ from one component to another | state is a __local data storage__ that is local to the component only and __cannot be passed__ to other components
| props are __read-only__ | state __changes__ can be __asynchronous way__ |
| props __can not be modified__ | state can be __modified using this.setState__ |
| we can __send state by using props__ to child component | state actually __stay where we declare__ it |

⫸ `Stateful component and Stateless component`
- A stateful component is a component that __holds some state__.
  - contains the state object, event handling function, and user actions.
- Stateless components, by contrast, __have no state__.
  - we can't use this.setState inside these components.
  - It is like a normal function with no render method.
  - They simply accept data and display them in some form that is they are mainly responsible for rendering UI. It accept properties(props) in function and return html(JSX), It gives solution without using state.
  - It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.
- There are __two__ React component
  - __Stateful component__ → (class-based components | smart components | store component | containers)
  - __Stateless component__ → (functional components | dump components | week component | presentational components)

⫸ What is [__Hooks__](https://reactjs.org/docs/hooks-intro.html "Introducing Hooks - Reactjs.org")?
- Hooks are the functions which "hook into" __React state__ and __lifecycle features__ from function components.[^2]
- It allows us to use __state__ and other __React features__ without writing a class.[^3]
- It does not work inside classes.[^4]
- Hooks are the special functions that implement React functionality to optimize.
---
- Hooks are JavaScript functions that manage the __state's behavior__ and __side effects__ by isolating them from a component.[^1]
- With hooks, you achieve similar functionality to a class-based component.[^5]
- Hooks give power to React functional components, making it possible to develop an entire application with it.
- There are 15 hooks in Reactjs

⫸ `useState(default value)`: is the hook that allows us to track state in a function component.
- __state variable__ & __function__ names are customizable like (color, setColor | user, setUser)
- function that changes state and updates the value of state variable.
- __default value__ could be __0__, __100__, __[]__, __true__, __false__
- Links: [1](https://ihatetomatoes.net/wp-content/uploads/2020/05/01-react-hook-useState.png "useState Hook | state variable - function that changes state - default value")

⫸ `useEffect(callback, dependencies)`: is the hook that manages the side-effects in functional components.
- __callback argument__ is a function to put the side-effect logic.
- __dependencies__ is a list of dependencies of your side-effect: being props or state values.
- Links: [1](https://ihatetomatoes.net/wp-content/uploads/2020/05/02-react-hook-useEffect.png "useEffect Hook | dependency of side effect") [2](https://dmitripavlutin.com/533bea4c73b775e7cb1cad6d1d4acaf1/react-useeffect-callback-3.svg "useEffect Hook | A Simple Explanation of React.useEffect(callback, dependencies)")



