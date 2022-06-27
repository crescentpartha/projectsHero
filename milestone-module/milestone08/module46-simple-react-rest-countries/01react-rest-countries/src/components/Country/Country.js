// rsc - snippets for creating component automatically
import React from 'react';
import './Country.css';

// 46.5 Create child component and pass data via props
const Country = (props) => {
    // console.log(props);
    return (
        <div className='country2'>
            <h2>Country Name: {props.name}</h2>
            <p>Region: {props.region}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;