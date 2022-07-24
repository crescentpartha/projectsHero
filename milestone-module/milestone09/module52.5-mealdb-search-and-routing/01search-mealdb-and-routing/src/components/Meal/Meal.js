import React from 'react';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strMealThumb } = props.meal;
    return (
        <div className='rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div>
                <img className='w-80 h-80 p-2 rounded-lg' src={strMealThumb} alt="" />
                <div className='mb-2 font-bold'>
                    <h2>Meal: {strMeal}</h2>
                    <p>Category: {strCategory} - {idMeal}</p>
                </div>
            </div>
        </div>
    );
};

export default Meal;