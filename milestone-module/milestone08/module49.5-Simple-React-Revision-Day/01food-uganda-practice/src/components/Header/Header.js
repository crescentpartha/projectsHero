import React from 'react';
import logo from '../../images/food-uganda.drawio.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-container'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;