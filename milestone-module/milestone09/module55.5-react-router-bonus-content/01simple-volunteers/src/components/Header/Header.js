import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/main'>Main</Link>
            <Link to='/volunteers'>Volunteers</Link>
            <Link to='/notFound'>Not-Found</Link>
        </nav>
    );
};

export default Header;