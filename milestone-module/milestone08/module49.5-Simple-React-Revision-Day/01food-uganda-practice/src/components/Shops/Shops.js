import React from 'react';
import { useState, useEffect } from 'react';
import './Shops.css';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        // .then(data => console.log(data.meals));
        .then(data => setProducts(data.meals));
    } , [])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        // cart.push(selectedProduct);
        const newCart = [...cart, selectedProduct];
        setCart(newCart);

    }

    return (
        <div className='shops-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.idMeal}
                        ></Product>)
                }
            </div>
            <div className='summary-container'>
                <Summary cart={cart}></Summary>
                {/* {
                    carts.map(cart => <Summary cart={cart}></Summary>)
                } */}
            </div>
        </div>
    );
};

export default Shops;