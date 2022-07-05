import React from 'react';
import './Product.css';

/* 
    → In React, We can pass data from up to down
    → eventhandler need to puts in shop component sothat we can pass data as a props in a cart.
    → We can pass data (object, function) as a props
*/

const Product = ({product, handleAddToCart}) => {
    // console.log(props.product);
    // Destructuring 
    // const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;