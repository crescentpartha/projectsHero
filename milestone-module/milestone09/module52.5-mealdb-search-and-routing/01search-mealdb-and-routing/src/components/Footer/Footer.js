import React from 'react';

const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full bg-rose-400 px-20 p-6 font-bold text-2xl justify-center align-middle text-center'>
            <p className='font-mono text-lg'>&copy;copyright is reserved by <span className='hover:text-yellow-300'>Crescent Partha</span> | <span className='text-yellow-300'>Footer</span>.limited</p>
        </div>
    );
};

export default Footer;