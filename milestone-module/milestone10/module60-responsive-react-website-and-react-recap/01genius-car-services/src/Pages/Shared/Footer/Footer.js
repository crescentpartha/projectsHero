import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    // const today = new Date();
    // const year2 = today.getFullYear();
    return (
        <footer>
            <p><small>&copy;copyright <span>{year}</span> | reserved by <span>Crescent Partha</span></small></p>
        </footer>
    );
};

export default Footer;