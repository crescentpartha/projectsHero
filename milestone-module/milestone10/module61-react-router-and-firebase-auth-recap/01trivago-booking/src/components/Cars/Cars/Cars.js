import React from 'react';
import logo from '../../../images/trivago-logo.png';

const Cars = () => {
    
    return (
        <div>
            <div className='d-flex flex-wrap gap-3 m-5 align-items-center justify-content-center'>
                <img width={100} height={50} src={logo} alt="trivago" />
                <div className='border-start border-2 border-secondary border-opacity-25 ps-3'>
                    <h4>Deals from your favorite booking sites</h4>
                    <p>Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
            </div>
            <h2>Cars</h2>
        </div>
    );
};

export default Cars;