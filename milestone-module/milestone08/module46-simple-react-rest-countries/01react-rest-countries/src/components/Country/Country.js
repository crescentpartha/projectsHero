// rsc - snippets for creating component automatically
import React from 'react';
import './Country.css';

// 46.5 Create child component and pass data via props
const Country = (props) => {
    // console.log(props.country);
    // destructuring
    const {area, region, population, flags} = props.country;
    return (
        <div className='country'>
            {/* <h2>Country Name: {props.name}</h2>
            <p>Region: {props.region}</p>
            <p>Area: {props.area}</p> */}
            <p>Country Name<br></br> <span>{props.country.name.common}</span></p>
            <img src={flags.png} alt="flags" />
            <p>Region<br></br> <span>{region}</span></p>
            <p>Area<br></br> <span>{area}</span></p>
            <p>Population<br></br> <span>{props.country.population}</span></p>
        </div>
    );
};

export default Country;