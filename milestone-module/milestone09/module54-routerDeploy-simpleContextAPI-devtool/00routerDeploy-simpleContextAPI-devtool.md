# Module 54: Router deploy, Simple Context API, devtool

## 54.0 Text Instruction

⫸ `About React-Router:`
1. How to ___set-up React-Router___. Just follow the ___5 steps___
2. How to set ___Not Found___ or ___404___ type route
3. How to ___set dynamic route___ and also ___set the path___ of dynamic route
4. In component, how can ___take a value___ from ___route parameter___ of ___dynamic route___.
5. ___Set route___ by clicking an ___Event Handler of Button___

⫸ `Some other Topies:` (covered)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html "Conditional Rendering - reactjs.org") (3-4 system)
  - ___Conditional rendering___ in React works the same way conditions work in JavaScript.
  -  Use JavaScript operators like `if` or the `conditional operator` to create elements ___representing the current state___, and let React update the UI to match them.
- ___Data Sharing___ (secretly)
- ___Props Drilling___ [ [1](https://blog.logrocket.com/solving-prop-drilling-react-apps/#:~:text=Prop%20drilling%20is%20the%20unofficial,actual%20need%20for%20this%20data. "A better way of solving prop drilling in React apps - LogRocket.com") - [2](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/ "What is prop drilling and how to avoid it? - GeeksforGeeks.org") - [3](https://medium.com/swlh/avoid-prop-drilling-with-react-context-a00392ee3d8 "Avoid Prop Drilling with React Context - medium.com") - [4](https://dev.to/iamrishavraj1/what-is-react-prop-drilling-and-context-api-cjl "What is React Prop Drilling and Context API - dev.to") ]
  - Prop drilling is the ___unofficial term___ for ___passing data___ through several ___nested children components___.
  - The problem with this approach is that most of the components through which this data is passed have ___no actual need for this data___.
- [Context API](https://reactjs.org/docs/context.html "reactjs.org") (used for ___props drilling___)
- [Custom Active Link](https://reactrouter.com/docs/en/v6/examples/custom-link "reactjs.org")


## 54.1 Another Recap of Recap of React Router Setup

⫸ `Common Stuff:`
- React Router Setup
- Create Components
- Set Routes
- Custom Active Link

⫸ `For Styling in CSS files:` 
- `<Link>` tag converted to `<a>` tag, that's why used <a> 
- `<CustomLink>` converted to `<div>` tag, that's why used `<div>`
- ___Demo:___ Header.css
