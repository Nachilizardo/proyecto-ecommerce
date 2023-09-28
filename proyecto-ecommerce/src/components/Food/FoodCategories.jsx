import React, { useState } from 'react';
import './foodContainer.css';
import LetterFilter from './LetterFilter';
import MealList from './MealList';
import RecipeButton from '../RecipeDetails/recipeButton';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const FoodCategories = (props) => {
    const cat = props.food.categories
    const hasMeals = props.meals.meals
    const [filteredLetter, setFilteredLetter] = useState('A');
    const [selectedRecipe, setSelectedRecipe] = useState(null); // Nuevo estado para la receta seleccionada
    const [isRecipeDetailsVisible, setIsRecipeDetailsVisible] = useState(false); // Nuevo estado para la visibilidad de los detalles de la receta

    const handleFilterChange = (letter) => {
        setFilteredLetter(letter);
    };

    // Función para abrir los detalles de la receta
    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
        setIsRecipeDetailsVisible(true);
    };

    // Función para cerrar los detalles de la receta
    const handleCloseRecipe = () => {
        setSelectedRecipe(null);
        setIsRecipeDetailsVisible(false);
    };

    return (
        <>
        <div className='foodsContainer'>
            {hasMeals == undefined ? (
                cat == null ? (
                    <p>results not found</p>
                ) : (
                    cat?.map((item) => {
                        return (
                            <div className='card' key={item.idCategory}>
                                <h4 className='mealName'>{item.strCategory}</h4>
                                <img src={item.strCategoryThumb} alt={item.strCategory} />
                                {/* Utiliza RecipeButton para ver la receta */}
                                <RecipeButton onClick={() => handleRecipeClick(item)} />
                            </div>
                        );
                    })
                )
            ) : (
                props.meals.meals?.map((item) => {
                    return (
                        <div className='card' key={item.idMeal}>
                            <h4 className='mealName'>{item.strMeal}</h4>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                            {/* Utiliza RecipeButton para ver la receta */}
                            <RecipeButton onClick={() => handleRecipeClick(item)} />
                        </div>
                    );
                })
            )}
        </div>
        {isRecipeDetailsVisible && selectedRecipe && (
            // Utiliza RecipeDetails para mostrar los detalles de la receta seleccionada
            <RecipeDetails recipe={selectedRecipe} onClose={handleCloseRecipe} />
        )}
        <h1>Filter food by letter</h1>
        <LetterFilter onFilterChange={handleFilterChange} />
        {/* Pasa la letra filtrada a MealList */}
        <MealList letter={filteredLetter} />
        </>
    )
}

export default FoodCategories
