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
- By using React Component, we can __return__ only __one element__.
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

## 47.6 What is React, when to use it, react vs angular vs vue

⫸ __What is React?__
- React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components.
- React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.
- It’s used for handling the view layer for web and mobile apps.
- React also allows us to create reusable UI components.
- React allows developers to create large web applications that can change data, without reloading the page.
- The main purpose of React is to be fast, scalable, and simple.
---
- It lets you compose complex UIs from small and isolated pieces of code called “components”.
- It is maintained by Facebook and a community of individual developers and companies.
- React can be used as a base in the development of single-page or mobile applications.
- Links: [1](https://reactjs.org/tutorial/tutorial.html "reactjs.org") [2](https://www.c-sharpcorner.com/article/what-and-why-reactjs/ "C# Corner - What and Why React.js") [3](https://media.credencys.com/wp-content/uploads/2019/08/what-is-react-js.jpg "What is React JS? Why Startups and Enterprises love React JS for Front-Ent Development?") [4](https://mechomotive.com/wp-content/uploads/2021/08/react.jpg "Why React.js") [5](data:image/jpeg;base64,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 "Why React.js") [6](data:image/png;base64,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 "Benefits of using React") [7](data:image/jpeg;base64,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 "When to use React?") [8](https://reactjs.org/docs/thinking-in-react.html "Thinking in React - Highly Recommended")

⫸ React `Properties`:
- declarative
- simple yet powerful
- component-based (reusability)
- supports server-side
- supports mobile application
- extensible

⫸ Why React.js is `Popular`?
- Virtual DOM
- Reusability
- SEO Friendly
- Easy Testing
- Efficient Debugging
- Blazing Fast
---
- Interactive Interface
- Code Stability
- Development Speed 
- Flexible Development
- Advance Performance
---
- Reusable Components
- Open-Source
- Developer Tools
- Seamless Updates
- uses __JSX__, instead of using regular JavaScript for templating.

⫸ `Benefits` of using React?
- Build __Rich User Interfaces__
- Write __reusable Custom Components__
- Offer __Fast Rendering__
- Strong __community support__
- Offer Better __Code Stability__
- ReactJS is very __Flexible__

⫸ `When To Use React?` 
- SPAs (Single Page Application)
- Dynamic Websites
- Mobile Apps
- SEO Friendly Websites
- Dashboards and other Data Visualization Tools
- Customized solutions under a budget

⫸ `Library vs Framework` <br>
__Library: (React JS)__
- Library is small things
- Freedom of adding
  - Routing → React Router
  - State manage → Not use Redux, use useReducer | Redux Toolkit | by myself
  - Data Load → use HTTP | Axios
- Better Performance (for One way Data Binding)
- Flexible

__Framework: (Angular JS)__
- Framework is collection of many things
- They give many system in together 
  - Don't need to think much to apply
- Less Freedom
  - Can't customized in my hope, make issues
- Less Performance (for Two way Data Binding)

__Vue.js__
- Combination of Library & Framework | Progressive JavaScript Framework
- Build web interfaces | one-page applications | Desktop & Mobile app development


| __Framework__ | __Library__ |
| --- | --- | 
| Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc. | libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc. |
| It is __difficult to replace__ frameworks. | A library is __easy to be replaced__ with another library. |
| A framework development __requires a lot of code__ that __decrease performance__ and __increase the load time__. | Building a library __requires less code__, so there is __better performance__ and __fast load time__. |
| Including framework smoothly into an existing project is __impossible__. | Libraries can be __integrated easily__ into existing projects to add some __specific functionality__. |
| Faster programming, support from the community, great support for MVC (Model View Controller) pattern, etc. | Good code quality, reusability, and control, enhanced speed and performance of the program, etc. |
|  Frameworks are designed for __extensibility__ | They are designed to accomplish a __specific purpose__. |
| Its example are __AngularJS, Spring, NodeJS, Vue JS__ etc. | Its example are __JQuery, React JS__ etc.  |

⩥ Links: [1](https://dev.to/rohitrana/what-is-the-difference-between-library-vs-framework-174n "What is the difference between Library vs Framework? - DEV.to") [2](https://www.interviewbit.com/blog/framework-vs-library/#:~:text=Libraries%20provide%20developers%20with%20predefined,build%20applications%20for%20specific%20platforms. "Framework vs Library: Full Comparison - InterviewBit") [3](https://www.geeksforgeeks.org/software-framework-vs-library/ "Software Framework vs Library - GeeksforGeeks") [4](http://tom.lokhorst.eu/2010/09/why-libraries-are-better-than-frameworks "Why Libraries are better than Frameworks - Tom Lokhorst's Blog")

## 47.7 How React works, Render, virtual DOM, diff algorithm, fiber

⫸ How React works?

[__The Virtual DOM:__](https://www.codecademy.com/article/react-virtual-dom "What is the Virtual DOM | How it works in React - CodeCademy.com") 
- React uses virtual DOM to make rerender efficient and increase performance.
- A virtual DOM object is a representation of a real DOM object, like a lightweight copy.
- A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.
- Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

`How it works:`<br>
<details>
  <summary><b>Descriptions</b></summary>

- When you render a JSX element, every single virtual DOM object gets updated.
- This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.
- Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.
- By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”
- Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item, and leave the rest of your list alone.
- This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.
---
</details>

<details>
  <summary><b>Summary</b></summary>

1. The entire virtual DOM __gets updated__.
2. The virtual DOM gets compared to (__a virtual DOM snapshot__) what it looked like before you updated it. React figures out __which objects have changed__.
3. The changed objects, and the changed objects only, get __updated on the real DOM__.
4. Changes on the real DOM cause __the screen to change__.
</details>

⩥ Links: [1](https://programmingwithmosh.com/react/react-virtual-dom-explained/ "React Virtual DOM Explanation - programmingWithMosh") [2](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?resize=768%2C514&ssl=1 "Image comparison (Virtual DOM vs real DOM works)") [3](https://www.geeksforgeeks.org/what-is-diffing-algorithm/ "What is Diffing Algorithm? - geeksforgeeks") [4](https://reactjs.org/docs/reconciliation.html "Reconciliation - Diffing Algorithm | reactjs.org") [5](https://reactjs.org/docs/faq-internals.html "Virtual DOM and Internals - reactjs.org")

⫸ What is `diff algorithm` in React?
- React uses a heuristic algorithm called the __Diffing algorithm__ for __reconciliation__ based on these assumptions: Elements of different types will produce different trees. We can set which elements are static and do not need to be checked.
- `DOM Diffing:` Whenever there is a change in the state of the UI elements, a new virtual DOM is created. Then the new virtual DOM and the previous virtual DOM are compared with each other. This comparing is called __DOM diffing__.

⫸ `React Fiber Architecture:`
- React Fiber is an ongoing re-implementation of React's core algorithm. It is the culmination of over two years of research by the React team. 
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
- Links: [1](https://github.com/acdlite/react-fiber-architecture "React Fiber Architecture - GitHub") [2](https://dzone.com/articles/understanding-of-react-fiber-architecture "Understanding React Fiber Architecture - Dzone.com")

## 47.8 React Class Component, Component lifecycle and rerender

⫸ `Class Component:`
- Recently, developers use functional component.
- But we can use functional & class component both together in a project.
- Class component uses extra method called render() | return() method stays in render() method
- __useState__ (in functional-component)
  - constructor in class component
    - this.state 
    - this.setState()
    - this.handleClick.bind(this) | Binding
- __useEffect__ (in functional-component) Done both tasks
  - componentDidMountJ(){} → 1st time Data Load | called lifecycle method
  - componentWillMount(){} → dependency | called lifecycle method

⫸ `Lifecycle of Components:`
- Each component in React has a lifecycle which you can __monitor and manipulate__ during its three main phases. 
- The three phases/stages are: __Mounting__, __Updating__, and __Unmounting__.
- Links: [1](https://reactjs.org/docs/react-component.html "React.Component - reactjs.org") [2](https://www.w3schools.com/react/react_lifecycle.asp#:~:text=Lifecycle%20of%20Components,Mounting%2C%20Updating%2C%20and%20Unmounting. "Lifecycle of Components - w3school.com") [3](https://www.c-sharpcorner.com/article/components-lifecycle-in-react/ "Components Lifecycle in React - C# Corner") [4](https://codingstatus.com/wp-content/uploads/2021/10/react-component-lifecycle-methods-1.jpg "Image of React Components Lifecycle Methods") [5](https://res.cloudinary.com/practicaldev/image/fetch/s--b8hPmHM8--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/b9btyrkuppcczemz1y7q.png "Image of React Components Lifecycle Methods 2")

`Mounting:`
- This is __initial stage__. When any __component enter into DOM__, then this stage start.
- This stage has __four method__ consequently:
  - __constructor()__
  - __getDerivedStateFromProps()__
  - __render()__
  - __componentDidMount()__

`Updating:`
- When any __props/state change__ that is responsible for __component change__, then component enter this phase.
- This stage has __five method__ consequently:
  - __getDerivedStateFromProps()__
  - __shouldComponentUpdate()__
  - __render()__
  - __getSnapshotBeforeUpdate()__
  - __componentDidUpdate()__

`UnMounting:`
- When any __component remove__ from DOM, then this component enter this phase.
- This stage has __one method__:
  - __componentWillMount()__

↪ Entire process is fully understand by Class-Component. <br>
↪ This full things are work for functional-Component.

# 47.9 Module Summary, Recap, Properties vs Attributes

- JSX (syntactic sugar)
- Create React App (CLI)
- npm - npx
- Components (building block)
- Props (one way data binding)
- State (asynchronous)
- Hook
- Virtual DOM
- Class component
- Lifecycle of component

[reactjs.org](https://reactjs.org/): Must Read - Recommendation

