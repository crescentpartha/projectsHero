import React from 'react';
import './Summary.css';

const Summary = (props) => {
    console.log(props.cart);
    return (
        <div className='summary'>
            <h2>Order Summary</h2>
            <p>Total cart Added: {props.cart.length}</p>
            {
                props.cart.map(product => displayCartProduct(product))
            }
            <div id='cart-product'>

            </div>
        </div>
    );
};

function setNameStyle(name) {
    name.style.color = 'orange';
    name.style.backgroundColor = 'bisque';
    name.style.padding = '5px';
    name.style.border = '2px solid red';
    name.style.borderRadius = '10px';
    name.style.margin = '5px';
}

function setContainerStyle(container) {
    container.style.backgroundColor = '#ffeacc';
    container.style.padding = '5px 0';
}

const displayCartProduct = (product) => {
    // console.log(product.strMeal);
    const {strMeal} = product;
    // console.log(strMeal);
    const container = document.getElementById("cart-product");
    container.innerHTML = "";
    const name = document.createElement('div');
    name.innerHTML = `
    <p>${strMeal}</p>
    `;
    setNameStyle(name);
    setContainerStyle(container);
    container.appendChild(name);
}

export default Summary;