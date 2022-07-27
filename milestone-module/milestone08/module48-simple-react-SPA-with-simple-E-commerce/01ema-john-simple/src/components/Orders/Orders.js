import React from 'react';
import './Orders.css';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className="shop-container">
            {/* <div>
                <h2>This is Orders: {products.length}</h2>
                <p>Cart has: {cart.length}</p>
            </div> */}

            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to="/shop">
                        <button>Proceed Checkout </button>
                    </Link> */}
                    <button className='summary-button' onClick={() => navigate('/notFound')}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;