// rsc - snippets for creating component automatically
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setCountries(data));

    }, []);

    return (
        <div>
            <div className='heading-container'>
                <h2>This is <span>Countries component</span> from File Structure</h2>
                <h3>Available Countries: <b>{countries.length}</b></h3>
            </div>
            <div className='countries-container'>
                {
                    // countries.map(country => console.log(country))
                    // countries.map(country => <p>{country.name.common}</p>)
                    // countries.map(country => <Country name={country.name.common} population={country.population}></Country>)

                    countries.map(country => <Country 
                        country={country} // pass the whole country
                        // name={country.name.common} 
                        // region={country.region}
                        // area={country.area}
                        key={country.cca3} // add unique key for mapping components
                        ></Country>)
                }
                {
                    // countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;