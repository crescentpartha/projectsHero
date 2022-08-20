import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    // const today = new Date();
    // const year2 = today.getFullYear();
    return (
        <footer>
            <p><small>&copy;copyright reserved by <span>Crescent_Partha</span> in <span>{year}</span></small></p>
        </footer>
    );
};

export default Footer;