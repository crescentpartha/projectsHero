import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data));
    }, []);

    return (
        <div style={{ backgroundColor: "cornSilk", padding: "10px", margin: "30px", borderRadius: "20px" }}>
            <h2>Welcome to my World! <span style={{ color: "orange" }}>{countries.length} Countries</span></h2>
            {
                countries.map(country => <li><Link 
                    key={country.name.common} // It doesn't work
                    to={`/country/${country.name.common}`}
                    >{country.name.common}</Link></li>)
            }
        </div>
    );
};

export default Countries;