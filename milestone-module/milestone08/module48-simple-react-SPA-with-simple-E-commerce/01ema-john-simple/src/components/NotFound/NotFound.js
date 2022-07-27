import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='inventory-about-notFound'>
            <h2>This is <span className='highlighted'>Not Found</span></h2>
            <p className='notFound-para'>This page is not available!!! <br /> 404</p>
        </div>
    );
};

export default NotFound;