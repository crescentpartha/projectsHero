import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/* 
    06 Core Concepts in React:
      - JSX, component, props, events, state, effect
                            OR
      - JSX, component, props, State, Event Handler, Data Load
                            OR
      - JSX, component, props, Event Hander, State, API call
                    
    REST COUNTRIES API - Plain JS
    REST COUNTRIES API - React JS

    05 Steps to load dynamic data from API:
      step-01: 
        - Writing useState()
        - Data could load or not. if Data load, then we put it in a state
        - Declaring State to save loaded data.
      step-02: 
        - Writing useEffect()
      step-03: (fetch())
        - Writing fetch() inside useEffect() & setting loaded data
      step-04: 
        - Connect with State
      step-05:
        - Show data using map()
*/

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect( () => {

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => setCountries(data));

  }, []);
  return (
    <div>
      <h1>Visiting Every Country of the world!!!</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
