import React from 'react';
import notFound from '../../../images/notFound.jpg';
import notFound2 from '../../../images/notFound2.jpg';

const NotFound = () => {
    return (
        <div className='d-flex flex-wrap align-items-center justify-content-center m-5'>
            <img className='w-50 mh-100' src={notFound} alt="404 Not Found" />
            <img className='w-50 mh-100' src={notFound2} alt="404 Not Found Sleeping" />
        </div>
    );
};

export default NotFound;