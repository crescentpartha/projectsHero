# 52.5 Meal db search and routing

## `52.5.0 Text Instruction to create SPA with Routing`

⫸ `Checklist or Outlines:`

- [x] Choose a ___CSS framework___, that could be ___React Bootstrap___ or ___Tailwind CSS with Create React App___.
- [x] Implement the ___search functionality___.
- [x] Try to ___Responsive___ your website. 
- [x] ___Puts some route___ in app.js file. Implement a route called ___restaurant___.
- [x] Implement the ___Not Found___ or ___404___ page.
- [x] Implement the ___Main URL___ or ___"/" route___.
- [x] Create a ___Header components___, where are some ___Link___ to go different route, if you click this link. You might consider that after clicking the button, ___page don't reload___.
- [x] Add ___2 Event Handler___ for every cart in the Restaurant. First one is just ___Link___ and another is ___Button inside the Link___. To click this two particular event handler, it ___creates dynamic url___ according to the id. ___Create a component___ to go that route, if clicked.
- [x] Again, going to `App.js`, Declare a ___route parameter type___ __route__, in where, Declare a route by using route parameter called ___mealDb___.
- [x] ___Declare a component___ to use this route parameter. After going to this route, find out this ___route parameter by using useParams___, then ___display data___ in the website dynamically by calling ___mealDb API___.
- [x] ___Add a button___ inside the card. if click this button, you could go another route by using ___useNavigate___.

---

## `52.5.1 Practice Meal db with search and dynamic route params`

⫸ `Search Functionality Implementation:`

``` JavaScript
// In Restaurant.js

import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.meals));
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const searchFood = e => {
        // console.log(e.target.value);
        setSearchText(e.target.value);
    }

    return (
        <div className='bg-indigo-400 p-10 rounded-lg mx-20 mb-20'>
            <div>
                <input onChange={searchFood} type="text" name="" id="" />
                <h3>Result found: {meals?.length}</h3>
            </div>
            <div>
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
```

