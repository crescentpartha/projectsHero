import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    // using a custom hook
    // const [products, setProducts] = useProducts();
    
    // const [products, setProducts] = useState([]);

    // useEffect( () => {
    //     // console.log('products load before fetch');
    //     // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //         // console.log('products loaded');
    //     });
    // }, [])

    
    // using a custom hook
    // const [cart, setCart] = useCart(products);

    // const [cart, setCart] = useState([]);

    // useEffect( () => {
    //     // console.log('Local Storage first line', products);
    //     const storedCart = getStoredCart();
    //     // console.log(storedCart);
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         // console.log(id);
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // console.log(addedProduct);
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    //     // console.log('local storage finished');
    // }, [products])

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);

    useEffect( () => {
        // products load in a special way like page-wise and size-wise;
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`) // search-query added to filter
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page, size]);

    useEffect( () => {
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10); // calculate total pages for 10 products in a single page;
            setPageCount(pages);
        })
    }, []);

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            // cart.push(product); // Don't do this
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'> 
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button 
                            // Use Conditional CSS Class
                            className={page === number ? 'selected' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                    }
                    {/* {size} */}
                    {/* Page Size: (Select) How many products show in a single page. */}
                    <select defaultValue={10} onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        {/* <option value="10" selected>10</option> */}
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    {/* React uses defaultValue instead of selected */}
                    {/* React uses the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className='summary-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;