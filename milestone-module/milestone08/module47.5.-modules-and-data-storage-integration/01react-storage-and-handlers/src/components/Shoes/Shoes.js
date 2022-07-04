// rsc - snippets for creating component automatically | reactStatelessComponent
import React from 'react';
import { add, multiply } from '../../utilities/calculate'; // if not default, then import like a object

const Shoes = () => {
    const first = 13;
    const second = 11; 
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div className='products'>
            <h2>This is Shoes Component</h2>
            <p>Result: {result} and Total: {sum}</p>
        </div>
    );
};

export default Shoes;