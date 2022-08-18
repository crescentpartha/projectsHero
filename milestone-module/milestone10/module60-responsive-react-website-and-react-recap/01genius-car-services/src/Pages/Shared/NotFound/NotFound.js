import React from 'react';
import './NotFound.css';
import notFound from '../../../images/notFound.gif';

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;