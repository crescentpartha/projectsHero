import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-indigo-400 p-10 rounded-lg mx-20 text-2xl font-semibold'>
            <h2 className='mb-5'>This is from <span className='text-yellow-300'>Not Found</span></h2>
            <h2>The page you are looking for is not available!!</h2>
            <h4>404</h4>
        </div>
    );
};

export default NotFound;