import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav>
                <div>
                    <Link to='/home'>Home</Link>
                    <Link to='/orderReview'>Order Review</Link>
                </div>
                <div>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/orderReview'>Order Review</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;