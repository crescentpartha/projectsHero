import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <Link to='/home'>CRESCENT PARTHA</Link>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/notFound'>Not Found</Link>
                </nav>
            </div>
            <h2>Welcome to My React Router!!!</h2>
        </div>
    );
};

export default Header;