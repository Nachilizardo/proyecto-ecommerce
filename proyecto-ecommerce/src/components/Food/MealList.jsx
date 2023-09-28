import React, { useState, useEffect } from 'react';
import RecipeButton from '../RecipeDetails/recipeButton';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const MealList = ({ letter }) => {

    const [meals, setMeals] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isRecipeDetailsVisible, setIsRecipeDetailsVisible] = useState(false);

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

    const handleRecipeClick = async (mealId) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            const recipe = data.meals[0];
            setSelectedRecipe(recipe);
            setIsRecipeDetailsVisible(true); // Abre la ventana de detalles al hacer clic
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };

    const handleCloseRecipe = () => {
        setIsRecipeDetailsVisible(false); // Cierra la ventana de detalles
    };

    return (
        <div>
            <h2>Results for the letter: {letter}</h2>
            <div className='foodsContainer'>
                {letter === "" || letter === " " ? (
                    <h2 className='fail'>CANNOT LEAVE BLANK SPACES</h2>
                ) : isNaN(letter) ? (
                    letter.length > 1 ? (
                        <h2 className='fail'>INVALID CHARACTER</h2>
                    ) : (
                        meals.map((meal) => (
                            <div className='card' key={meal.idMeal}>
                                <h4 className='mealName'>{meal.strMeal}</h4>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <RecipeButton onClick={() => handleRecipeClick(meal.idMeal)} />
                            </div>
                        ))
                    )
                ) : (
                    <h2 className='fail'>INVALID CHARACTER (cannot be a number)</h2>
                )}
            </div>
            {isRecipeDetailsVisible && (
                <RecipeDetails recipe={selectedRecipe} onClose={handleCloseRecipe} />
            )}
        </div>
    );
};

export default MealList; 