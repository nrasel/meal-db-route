import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleMeal from '../SingleMeal/SingleMeal';

const MealDetails = () => {
    const { mealdb } = useParams()

    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div>
            {
                meals.map(meal => <SingleMeal meal={meal} />)
            }
        </div>
    );
};

export default MealDetails;