import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    // Declare State for meals & searchText
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Load data from TheMealDB-API
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.meals));
            .then(data => setMeals(data.meals));
    }, [searchText]);

    // Search Functionality Implementation
    const searchFood = e => {
        // console.log(e.target.value);
        setSearchText(e.target.value);
    }

    return (
        <div className='bg-indigo-400 p-10 rounded-lg mx-20 mb-20'>
            <h2 className='mb-10 text-3xl font-semibold'>Welcome to the <span className='text-yellow-300'>Restaurant</span></h2>
            <div className='mb-10 text-xl font-semibold'>
                <input onChange={searchFood} className='rounded-lg w-80 mb-2 p-1 focus:text-red-500 focus:stroke-white' type="text" name="" id="" />
                <h3>Result found: <span className='text-yellow-300'>{meals?.length}</span></h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 grid-flow-row drop-shadow-lg '>
                {
                    meals?.map(meal => <Meal
                        meal={meal}
                        key={meal.idMeal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;