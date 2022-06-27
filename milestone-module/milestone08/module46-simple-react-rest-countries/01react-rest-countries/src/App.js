import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

/* 
    06 Core Concepts in React:
      - JSX, component, props, events, state, effect
                            OR
      - JSX, component, props, State, Event Handler, Data Load
                            OR
      - JSX, component, props, Event Handler, State, API call
    
    -----------------------------------------------------------

    REST COUNTRIES API - Plain JS
    REST COUNTRIES API - React JS

    -----------------------------------------------------------

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

    -----------------------------------------------------------------------------------------------

    Display Data (Countries) by 2 ways:
      1. Simple way:
          - for large/many component, it does not easier to manage (Ex: 1000 components in one page)
      2. Folder Structure:
          - Easier to manage | Every component have to manage structurally
          - Folder Structure Format --> Depends on person (Who leads this project) | Depends on complexity (How large this project)
          - Everyone manage folder structure in different ways, not similar way | There is no common Folder Structure
          - Component with css file | Component inside the folder structure and connect them
          - Create child component and pass data via props | Pass multiple data to a child component
          - Ex: components --> Countries|Country --> 2 files (Country.js & Country.css) | Every Component contains 2 files (js & css)
          
          Problems:
            - need to export, import 'react'
          Solutions:
            - Extensions: (React Extension Pack, Reactjs Code Snippets)
            - Other for life Easy: (Code Spell Checker, Live Server, Auto Import, Markdown All in One)
            
    -----------------------------------------------------------------------------------------------

    Passing dynamic data:
      - Add unique key for mapping components (Ex: key={country.cca3}) | It should do, but not mandatory
      - Otherwise, Give warning | Used for Performance improvement (if change any certain data, it only update this by unique key)
      - Pass the whole country (Ex: country={country})
*/

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Person></Person>
      <img src={logo} className="App-logo" alt="logo" />
      <Countries></Countries>
      <img src={logo} className="App-logo" alt="logo" />
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
      <div className='heading-container2'>
        <h1>Visiting Every Country of the world!!!</h1>
        <h3>Available Countries: <b>{countries.length}</b></h3>
      </div>
      <div className='countries-container2'>
        {
          // countries.map(country => console.log(country))
          // countries.map(country => <p>{country.name.common}</p>)
          // countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
          countries.map(country => <Country 
            name={country.name.common} 
            flags={country.flags.png}
            capital={country.capital}
            region={country.region}
            population={country.population}
            key={country.cca3} // add unique key for mapping components
            ></Country>)
        }
      </div>
    </div>
  )
}

function Country(props) {
  return (
    <div className='country2'>
      <h2>Country: {props.name}</h2>
      <img src={props.flags}/>
      <h4>Capital: {props.capital}</h4>
      <h4>Region: {props.region}</h4>
      <h4>Population: {props.population}</h4>
    </div>
  )
}

export default App;
