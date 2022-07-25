import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {strMeal} = useParams();

    const [meal, setMeal] = useState({});

    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
        fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setMeal(data));
    }, [strMeal])
    
    return (
        <div>
            <h2>This is from Meal Detail of: {strMeal}</h2>
        </div>
    );
};

export default MealDetail;