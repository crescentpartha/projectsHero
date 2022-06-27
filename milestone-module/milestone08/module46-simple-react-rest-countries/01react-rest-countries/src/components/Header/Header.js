// rsc - snippets for creating component automatically
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>Welcome to my <span>React website</span></h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;