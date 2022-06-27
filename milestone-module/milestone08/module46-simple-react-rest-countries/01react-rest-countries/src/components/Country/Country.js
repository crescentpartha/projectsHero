// rsc - snippets for creating component automatically
import React from 'react';
import './Country.css';

// 46.5 Create child component and pass data via props
const Country = (props) => {
    console.log(props.country);
    // destructuring
    const {area, region, population} = props.country;
    return (
        <div className='country'>
            {/* <h2>Country Name: {props.name}</h2>
            <p>Region: {props.region}</p>
            <p>Area: {props.area}</p> */}
            <p>Country Name<br></br> <h2>{props.country.name.common}</h2></p>
            <p>Region<br></br> <h2>{region}</h2></p>
            <p>Area<br></br> <h2>{area}</h2></p>
            <p>Population<br></br> <h2>{props.country.population}</h2></p>
        </div>
    );
};

export default Country;