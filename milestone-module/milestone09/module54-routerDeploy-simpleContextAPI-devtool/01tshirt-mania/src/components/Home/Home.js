import React from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
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
                        ></TShirt>)
                    }
                </div>
                <div className="cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;