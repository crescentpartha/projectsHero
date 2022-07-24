import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-rose-400 flex flex-row justify-between px-20 p-6 font-bold text-2xl'>
                <p>MealDb with Route</p>
                <div className='text-blue-600'>
                    <Link className='mx-3 hover:text-yellow-300' to="/home">Home</Link>
                    <Link className='mx-3 hover:text-yellow-300' to="/restaurant">Restaurant</Link>
                    <Link className='mx-3 hover:text-yellow-300' to="/about">About</Link>
                    <Link className='mx-3 hover:text-yellow-300' to="/not-found">Not Found</Link>
                </div>
            </nav>
            <h1 className='font-bold md:text-4xl sm:text-3xl sm:mx-20 lg:mx-40 my-10 p-5 font-sans hover:font-serif text-orange-400 hover:text-yellow-300 hover:rounded-b-lg hover:border hover:border-orange-400'>Welcome to search mealDb with Router!</h1>
        </div>
    );
};

export default Header;