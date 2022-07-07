import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

// const Product = (props) => {
const Product = ({product, handleAddToCart}) => {
    // const {idMeal, strMeal, strArea, strCategory, strMealThumb } = props.product;
    const {idMeal, strMeal, strArea, strCategory, strMealThumb } = product;
    // console.log(props);
    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <div>
                <h3>Name: {strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                <p>Meal id: {idMeal}</p>
            </div>
            {/* <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button> */}
            <button onClick={() => handleAddToCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;