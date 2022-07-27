import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;