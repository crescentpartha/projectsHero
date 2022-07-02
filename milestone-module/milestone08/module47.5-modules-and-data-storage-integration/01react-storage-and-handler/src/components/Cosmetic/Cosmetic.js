// rsc - snippets for creating component automatically | reactStatelessComponent
import React from 'react';

const Cosmetic = (props) => {
    // Destructuring
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            {/* <h2>Buy this: {props.cosmetic.name}</h2>
            <p>Only for: ${props.cosmetic.price}</p> */}
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>is has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;