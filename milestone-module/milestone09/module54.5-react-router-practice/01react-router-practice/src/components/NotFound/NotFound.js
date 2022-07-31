import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>This is <span className='title-color'>Not Found</span></h2>
            <p>This page is not available!!!</p>
            <p><span className='title-color'>404</span></p>
        </div>
    );
};

export default NotFound;