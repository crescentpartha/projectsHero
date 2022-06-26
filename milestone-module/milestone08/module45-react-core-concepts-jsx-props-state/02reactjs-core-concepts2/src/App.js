import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 153000},
    {name: 'phone', price: 80000},
    {name: 'watch', price: 5300},
    {name: 'tablet', price: 52000},
  ]

  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/* <Product name="laptop" price="50000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
