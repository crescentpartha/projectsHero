import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-rose-400 flex flex-row justify-between px-20 p-6 font-bold text-2xl'>
                <p>MealDb with Route</p>
                <div className='text-blue-600 mr-10'>
                    <Link className='mx-5 hover:text-yellow-300' to="/home">Home</Link>
                    <Link className='mx-5 hover:text-yellow-300' to="/about">About</Link>
                    <Link className='mx-5 hover:text-yellow-300' to="/not-found">Not Found</Link>
                </div>
            </nav>
            <h1 className='font-bold text-4xl m-10 font-sans hover:font-serif hover:text-orange-400'>Welcome to search mealDb with Router!</h1>
        </div>
    );
};

export default Header;