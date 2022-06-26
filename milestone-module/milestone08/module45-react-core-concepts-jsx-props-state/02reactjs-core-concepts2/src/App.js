import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

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

/* const products = [
  {name: 'laptop', price: 153000},
  {name: 'phone', price: 80000},
  {name: 'watch', price: 5300},
  {name: 'tablet', price: 52000},
] */

/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}
<Product name="laptop" price="50000"></Product>
<Product name="phone" price="75000"></Product>
<Product name="watch" price="3500"></Product> */

/* function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
} */

export default App;
