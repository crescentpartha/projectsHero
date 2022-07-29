import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options
    // 01. Element variable
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>01(i). Cart is empty!!!</h5>
            <p>Please, Add at least one item!!!</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>01(ii). Please, Add more...</p>
    }
    else {
        command = <p><small>01(iii). Thanks for adding item</small></p>
    }

    // 02. ternary operator → condition ? true : false

    // 03. && Operator (shorthand) → true (render one)

    // 04. || Operator (shorthand) → false (render)

    return (
        <div>
            <h2>Items Selected in Cart: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button className='delete-button' onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            <div className='conditional-rendering'>
                <h4>Conditional Rendering  (4-types)</h4>
                <div>
                    <p className='orange'>{command}</p>

                    {cart.length !== 4 ? <p className='orange'>02(i). Keep adding...</p> : <button className='orange-button'>02(ii). Remove All</button>}
                    
                    {cart.length === 3 && <div className='orange'>
                        <h3>03(i). Trigonal</h3>
                        <p>Which gift are you giving three of them?</p>
                    </div>}
                    {cart.length === 4 && <button className='orange-button'>03(ii).Review Order</button>}
                    
                    {cart.length === 0 || <p className='orange'>04. YAY! You are buying.</p>}
                </div>
            </div>
        </div>
    );
};

export default Cart;