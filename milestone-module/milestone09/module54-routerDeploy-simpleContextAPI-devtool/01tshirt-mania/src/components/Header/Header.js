import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>This is <span className='number-color'>Header</span></h2>
            <nav>
                <div>
                    <Link to='/home'>Home</Link>
                    <Link to='/orderReview'>Order Review</Link>
                    <Link to='/grandpa'>GrandPa</Link>
                    <Link to='/notFound'>NotFound</Link>
                </div>
                <div>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/orderReview'>Order Review</CustomLink>
                    <CustomLink to='/grandpa'>GrandPa</CustomLink>
                    <CustomLink to='/notFound'>NotFound</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;