import React from 'react';
import './Summary.css';

const Summary = (props) => {
    console.log(props.cart);
    return (
        <div className='summary'>
            <h2>Order Summary</h2>
            <p>Name: {props.cart.length}</p>
        </div>
    );
};

export default Summary;