import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p><small>&copy;copyright reserved by Crescent_Partha in {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;