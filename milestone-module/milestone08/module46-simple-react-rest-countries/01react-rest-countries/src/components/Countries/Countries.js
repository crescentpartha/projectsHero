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
            <h2>This is <span>Countries component</span> from File Structure</h2>
            <h3>Available Countries: {countries.length}</h3>
            {
                // countries.map(country => console.log(country))
            }
            {
                // countries.map(country => console.log(country))
                // countries.map(country => <p>{country.name.common}</p>)
                countries.map(country => <Country 
                    name={country.name.common} 
                    region={country.region}
                    area={country.area}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;