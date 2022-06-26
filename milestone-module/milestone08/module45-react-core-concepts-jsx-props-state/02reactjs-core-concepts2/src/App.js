import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products = [
    {name: 'laptop', price: 153000},
    {name: 'phone', price: 80000},
    {name: 'watch', price: 5300},
    {name: 'tablet', price: 52000},
  ]

  return (
    <div className="App">
      <Counter></Counter>

      <img src={logo} className="App-logo" alt="logo" />

      <ExternalUsers></ExternalUsers>

      <img src={logo} className="App-logo" alt="logo" />

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      <img src={logo} className="App-logo" alt="logo" />

      <Product name="laptop" price="50000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]); // Default value = 0, []
  
  // useEffect( ()=>{}, []); // Accepts a function that contains imperative, possibly effectful code.
  useEffect( ()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>Total User: {users.length}</p>
      {
        // users.map(user => <li>{user.name}</li>)
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
} 

function User(props) {
  return (
    <div style={{border: '2px solid red', borderRadius: '10px', margin: '20px', padding: '15px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

/* (45.8) Load dynamic data, API call useEffect Integrate state

  To load data from API, we have to do at least 5 tasks:
      1. Data load from outside (Data might come or not [if server down Or error])
          - Therefore, we found or not, it could be changed. So, It is State.
          - const [users, setUsers] = useState([]);
      2. useEffect( ()=>{}, []); | Without Dependency (Render) = null --> Infinity Loop
      3. fetch('url') --> data load by fetch
      4. Connect with state
      5. Show data using map()

    (useState() --> useEffect() --> fetch() --> Connect with State --> map())
*/

function Counter() {
  // useState() functional component এ state variable কে রাখতে দেয়।
  // const [] = useState(0); 

  const [count, setCount] = useState(55); // Returns a stateful value, and a function to update it.
  
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  // console.log(abc);

  return (
    <div>
      <h1>Count (State Change): {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/* 
  Object distructuring:
  {name, age} = {name: 'a', age: 7}

  Array distructuring:
  [first, second] = [44, 11]
*/


// (45.6) Concept Recap, JSX, components, props, display array of objects

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
