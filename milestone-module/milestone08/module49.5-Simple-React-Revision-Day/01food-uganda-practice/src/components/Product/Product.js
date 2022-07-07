import React from 'react';
import './Product.css'

const Product = (props) => {
    const {idMeal, strMeal, strArea, strCategory, strMealThumb, } = props.product;
    console.log(props);
    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <div>
                <h3>Name: {strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                <p>Meal id: {idMeal}</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;