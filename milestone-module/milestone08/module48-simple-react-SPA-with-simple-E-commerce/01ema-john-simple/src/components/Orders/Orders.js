import React from 'react';
import './Orders.css';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
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
                        key={product._id}
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
                    <button className='summary-button' onClick={() => navigate('/shipment')}>Proceed Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;