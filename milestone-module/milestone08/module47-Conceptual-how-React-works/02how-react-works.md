# How [React](https://reactjs.org/) Works


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
- `Package.json` = __Metadata associated with project + All [Dependencies](https://www.pluralsight.com/guides/add-a-dependency-to-react-in-package.json-for-a-react-component) with version + scripts__.
- It records __important metadata__ about a project which is required before publishing to NPM.
- It also defines __functional attributes__ of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
- `index.js` is the entry point to our package.

⫸ __Markdown Cheat Sheet:__ 


