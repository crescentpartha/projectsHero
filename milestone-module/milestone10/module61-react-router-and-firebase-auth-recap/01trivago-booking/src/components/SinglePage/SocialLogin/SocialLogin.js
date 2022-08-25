import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-primary w-50'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;