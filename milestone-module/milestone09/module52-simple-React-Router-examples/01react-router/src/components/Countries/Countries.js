import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h2>Welcome to my World! {countries.length}</h2>
            {
                countries.map(country => <li>
                    <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                    </li>)
            }
        </div>
    );
};

export default Countries;