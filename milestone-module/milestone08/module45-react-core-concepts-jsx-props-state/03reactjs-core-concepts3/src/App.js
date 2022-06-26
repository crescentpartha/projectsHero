import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

/* 
  Six(6) Core Concepts in React:

    1. JSX = JavaScript XML | (html code facilities) | Power of JSX
        - To give a ability to write html code in JS file
        - We can use map
        - Declear user difine component, then use like html tag
        - We can set style dynamically
        - We can pass dinamic data
        - The only reason behind the fact that JSX code convert to JS code

    2. Component (a function, can use multiple times)
        - Component is nothing but a function
        - We can declear user difine component, then use as much as you like
        - Code reuse ability by creating component
        - Similer in look, different in data
        - When creating a component in React, the first letter of that function name should be in Uppercase (Lowercase for props)

    3. props (properties, used for passing dynamic data to component)
        - Used for passing dynamic data
        - props is properties in js, similer to html attributes
        - props helps to find (similer in look, different in data)
        - convert html attributies to a js properties

    4. Display array of objects (map)
        - Map used for accessing all dynamic data
        - Object distructuring & Array distructuring
        - set attribute is user define (you can use any name)

    5. State (component state hook and useState() method), eventHandler related
        - State is the situation of anythings like (Ex: cart, logIn, Counter, Increase, Decrease, React on FB, Session, Data Loading)
        - State could be changed or not (Ex: user can react or not)
        - State depends on users activities
        - Used useState() method (if anything could change)
        - To use useState() & useEffect(), we need to import alongwith these method:- import { useState, useEffect } from 'react';
        - Default value of useState() & useEffect() methods: 0, []
        - How to add eventHandler

    6. API call (Load dynamic data --> fetch, API call useEffect() integrate state)
        - Loading external & dynamic data
        - Data could load or not (depending on server down or error)
        - Used useEffect() & fetch()
        - integrate with useState() method
    
  ---------------------------------------------------------------------------------------------------------------------------------

  Load dynamic data, API call useEffect Integrate state:

    To load data from API, we have to do at least 5 tasks:
        1. Data load from outside (Data might come or not [if server down Or error])
            - Therefore, we found or not, it could be changed. So, It is State.
            - const [users, setUsers] = useState([]);
        2. useEffect( ()=>{}, []); | Without Dependency (Render) = null --> Infinity Loop
        3. fetch('url') --> data load by fetch
        4. Connect with state
        5. Show data using map()

      (useState() --> useEffect() --> fetch() --> Connect with State --> map())

  ---------------------------------------------------------------------------------------------------------------------------------

  Why can't we declare a class with the "class" keyword in React?
    - We should use class instead of className
    - class is a reserved keyword in javascript
  
  ---------------------------------------------------------------------------------------------------------------------------------

  Basic Information:

    # JS live reload = React Hot reload
    # React comment / JSX comment = {multi-line comment in block}
    # React use 3 types of comment = single-line comment, multi-line comment, multi-line in block quote comment
    # Every component neet to conect with App() function
  
*/

function App() {
  return (
    <div className="App">
      <Counter></Counter>

      <img src={logo} className="App-logo" alt="logo" />
      
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data));
  }, []);

  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {
        // comments.map(comment => Comment(comment))
        comments.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div className='comment'>
      <h1>Name: {props.name}</h1>
      <p>Email: <span>{props.email}</span></p>
      <p>Body: {props.body}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div style={{border: '2px solid red', borderRadius: '20px', margin: '10px 30%', padding: '20px'}}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
