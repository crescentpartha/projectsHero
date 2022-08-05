import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h2>Header</h2>
            <Link to='/home'>Home</Link>
            <Link to='/main'>Main</Link>
            <Link to='/volunteers'>Volunteers</Link>
            <Link to='/notFound'>Not-Found</Link>
        </nav>
    );
};

export default Header;