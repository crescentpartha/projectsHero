import React from 'react';
import './Summary.css';

const Summary = (props) => {
    console.log(props.product);
    return (
        <div className='summary'>
            <h2>Order Summary</h2>
            <p>Name: {props.strMeal}</p>
        </div>
    );
};

export default Summary;