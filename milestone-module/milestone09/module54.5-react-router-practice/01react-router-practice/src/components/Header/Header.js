import React from 'react';
import './Header.css';
import { TableIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to='/home'>CRESCENT PARTHA</Link>
                <nav>
                    <Link to='/home'><TableIcon className='icon'></TableIcon><span>Home</span></Link>
                    <Link to='/notFound'>Not Found</Link>
                </nav>
            </div>
            <h2>Welcome to My <span className='title-color'>GitHub Demo</span>!!!</h2>
        </div>
    );
};

export default Header;