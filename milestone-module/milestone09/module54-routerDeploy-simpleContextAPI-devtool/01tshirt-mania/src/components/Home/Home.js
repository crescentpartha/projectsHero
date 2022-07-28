import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        // console.log(selectedItem);
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('item already added');
        }
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div>
            <h2>Welcome to tShirt-Mania's Home!!!</h2>
            <div className='home-container'>
                {/* .tshirt-container+.cart-container */}
                <div className="tshirt-container">
                    {/* <h3>{tShirts.length}</h3> */}
                    {
                        tShirts.map(tShirt => <TShirt
                            key={tShirt._id}
                            tShirt={tShirt}
                            handleAddToCart={handleAddToCart}
                        ></TShirt>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;