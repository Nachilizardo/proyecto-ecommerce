import React, { useState, useEffect } from 'react';

const MealList = ({ letter }) => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
                );
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // Si hay una letra realiza el fetch
        if (letter) {
            fetchMeals();
        }

    }, [letter]);

    return (
        <div>
            <h2>Results for the letter: {letter}</h2>
            <div className='foodsContainer'>
                {letter === "" ? (
                    <h2 className='fail'>CAN NOT LEAVE BLANK SPACES</h2>
                ) : isNaN(letter) ? (
                    letter.length > 1 ? (
                        <h2 className='fail'>INVALID CHARACTER</h2>
                    ) : (
                        meals.map((meal) => (
                            <div className='card' key={meal.idMeal}>
                                <h4 className='mealName'>{meal.strMeal}</h4>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <button className='button-recipe'>See recipe</button>
                            </div>
                        ))
                    )
                ) : (
                    <h2 className='fail'>INVALID CHARACTER (cannot be a number)</h2>
                )}
            </div>
        </div>
    );
};

export default MealList; 