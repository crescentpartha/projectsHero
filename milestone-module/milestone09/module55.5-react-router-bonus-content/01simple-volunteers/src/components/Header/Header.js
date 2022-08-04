import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <Link to='/home'>Home</Link>
            <Link to='/volunteers'>Volunteers</Link>
            <Link to='/notFound'>Not-Found</Link>
        </div>
    );
};

export default Header;