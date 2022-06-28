import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

/* 
  Js Vs React:
    - class="container" --> className="container"
    - onclick="Increment()" --> onClick={Increment}
  
  React 6 core concepts:
    - (46.5.1) JSX, Component, props
    - (46.5.2) State, set eventHandler
    - API Call --> useEffect(), fetch()
  
  React.Fragment vs div:
    - Fragment will not add any additional elements into the DOM tree, whereas, using a div will add a div to the DOM tree.
    - Ex: 
          return (                return ( 
            <div>                   <React.Fragment>
              <p>Hello</p>            <p>Hello</p> 
              <p>World</p>            <p>World</p>
            </div>                  </React.Fragment>
          );                      );
  
  We could Add style in 3 ways:
        1. Writing style in App.css file similar to CSS style: .container { color: 'blue', backgroundColor: 'goldenrod'}
        1. creating an object of style properties, then use: <p style={singerStyle}> Name: </p>
        2. Style use directly: <p style={{color: 'blue', borderRadius: '10px'}}>Name:</p>

  3 steps to complete data passing:
   - send as a attribute
   - receive as a props
   - show dynamically --> <h2>{props.name}</h2>
      
  Steps to State change:
    - declare the State
    - show the State in the UI
    - set a event handler
    - make connection to event handler by using onClick
  
  5 steps to show data dynamically:
    - declare the State (useState)
    - declare the useEffect
    - load data by using fetch
    - set date in the State
    - show data dynamically
  
  (46.5.6)(optional) Avoid multiple react install due to slow internet: (Shortcut Solutions)
(Step-1)- install yarn (slightly faster) --> npm install --global yarn | yarn --version
(Step-2)- create two projects called empty-react-app & working-react-app  
        - empty-react-app --> (never code in this project | use for copying the initial file to work)
        - Copy Only: 
            - (public to README.md) or (public, src, .gitignore, package.json, package-lock.json, README.md)
            - copy all files except (.git & node-modules)
        - working-react-app: 
            - paste those empty files, then run command "npm start" and work on.
            - After finishing the work, cut only those working files & paste to another folder. 
            - Again past those empty files to work (Loop - the same steps)
            - if make error then "Ctrl + C --> then Y"
        - Use multiple terminal for parallel works
        - 
  
  Basic Information:
    - Component name should be meaningful & Uppercase
    - To build react-app, run --> npm run build

*/

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>

      <img src={logo} className="App-logo" alt="logo" />

      <District name="Jessore" specialty="1st digital district in Bangladesh"></District>
      <District name="Brahmanbaria" specialty="Jodha Akbar"></District>
      <District name="Noakhali" specialty="Noakhali bivag chai"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => setPosts(data));

  }, []);
  
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      <div className='post-container'>
      {
        // posts.map(post => console.log(post))
        // posts.map(post => <p>{post.title}</p>)
        // posts.map(post => <Post title={post.title} body={post.body}></Post>)
        posts.map(post => <Post post={post}></Post>)
      }
      </div>
    </div>
  )
}

function Post(props) {
  // Object Destructuring 
  const {title, body} = props.post;
  return (
    <div className='post'>
      <h2>Title: {title}</h2>
      <p><b>Body:</b> {body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightGoldenRodYellow', 
  margin: '20px 20%'
}

function District(props) {
  const [power, setPower] = useState(1)

  // Event Handler
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  return (
    <div className="district" style={districtStyle}>
      <h2>District: {props.name}</h2>
      <p style={{fontWeight: 'bold'}}>Specialty: {props.specialty}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
