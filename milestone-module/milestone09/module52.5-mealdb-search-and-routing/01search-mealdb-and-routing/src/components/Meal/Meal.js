import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strMealThumb } = props.meal;

    const navigate = useNavigate();

    const showMealDetail = () => {
        const path = `/meal/${idMeal}`;
        navigate(path);
    }

    return (
        <div className='rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div>
                <img className='w-80 h-80 p-2 rounded-lg' src={strMealThumb} alt="" />
                <div className='mb-2 font-bold'>
                    <h2>Meal: {strMeal}</h2>
                    <p>Category: {strCategory} - {idMeal}</p>
                </div>
                <div className='inline-grid grid-cols-1 gap-2 mb-2'>
                    <Link className='bg-red-300 inline-block rounded-lg p-1 px-5 font-semibold text-blue-700 hover:bg-inherit hover:border-2 hover:border-yellow-300' to={'/meal/' + idMeal}>Details Link</Link>
                    <button className='bg-red-300 inline-block rounded-lg p-1 px-5 font-semibold text-blue-700 hover:bg-inherit hover:border-2 hover:border-yellow-300' onClick={showMealDetail}>Details Button</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;