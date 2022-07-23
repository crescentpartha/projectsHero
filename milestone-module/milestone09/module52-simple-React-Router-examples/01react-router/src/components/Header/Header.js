import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to my fancy React Router website!</h1>
            <nav>
                <div className='link-nav'>
                    <h3>This is from <span style={{ color: "orange" }}>Link</span></h3>
                    <div>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/friends">Friends</Link>
                        <Link className='link' to="/posts">Posts</Link>
                        <Link className='link' to="/countries">Countries</Link>
                        <Link className='link' to="/about">About</Link>
                    </div>
                </div>

                <div className='customLink-nav'>
                    <h3>This is from <span style={{ color: "orange" }}>CustomLink</span></h3>
                    <div>
                        <CustomLink className='custom-link' to="/">Home</CustomLink>
                        <CustomLink className='custom-link' to="/friends">Friends</CustomLink>
                        <CustomLink className='custom-link' to="/posts">Posts</CustomLink>
                        <CustomLink className='custom-link' to="/countries">Countries</CustomLink>
                        <CustomLink className='custom-link' to="/about">About</CustomLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;