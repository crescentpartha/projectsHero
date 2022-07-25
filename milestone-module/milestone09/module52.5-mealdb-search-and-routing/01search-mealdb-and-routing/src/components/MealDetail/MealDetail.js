import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { strMeal } = useParams();

    const [meal, setMeal] = useState({});

    const { strArea, strCategory, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = meal;

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.meals));
            .then(data => setMeal(data.meals[0]));
    }, [strMeal])

    // console.log(meal);

    return (
        <div className='p-10 mb-40 mx-20 lg:mx-60 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <h2 className='text-2xl font-semibold'>This is from <span className='text-yellow-300'>Meal Detail </span> of: <span className='text-yellow-300'>{strMeal}</span></h2>
            <div className=''>
                <div>
                    <img className='mx-auto my-2  w-80 h-80 p-2 rounded-lg' src={meal.strMealThumb} alt="" />
                </div>
                <div className='mb-2 font-bold text-lg'>
                    <h2><span className='text-red-300'>Meal:</span> {meal.strMeal}</h2>
                    <p><span className='text-red-300'>Area:</span> {strArea}</p>
                    <p><span className='text-red-300'>Category:</span> {strCategory}</p>
                    <p><span className='text-red-300'>Ingredients:</span> {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}</p>
                    <p className='text-justify mt-2'><span className='text-red-300'>Instructions:</span> {strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;