import React, { useState } from 'react'
import './foodContainer.css'
import LetterFilter from './LetterFilter'
import MealList from './MealList'

const FoodCategories = (props) => {
    const cat = props.food.categories
    const hasMeals = props.meals.meals
    const [filteredLetter, setFilteredLetter] = useState('A');

    const handleFilterChange = (letter) => {
        setFilteredLetter(letter);
    };

    return (
        <>
            <div className='foodsContainer'>
                
                {
                     hasMeals == undefined ? (
                         cat == null ? (
                             <p>results not found</p >
                         ) : (
                             cat?.map((item, index) => {
                                 return(
                                     <div className='card' key={item.idCategory}>
                                         <h4>
                                             {item.strCategory}
                                         </h4>
                                         <img src={item.strCategoryThumb} alt={item.strCategory} />
                                         <button className='button-recipe'>see recipe</button>
                                     </div>
                 
                                 )
                             })
                         )
                     ) : (
                         props.meals.meals?.map((item) => {
                             return(
                                 <div className='card' key={item.idMeal}>
                                     <h4>
                                         {item.strMeal}
                                     </h4>
                                     <img src={item.strMealThumb} alt={item.strMeal} />
                                     <button className='button-recipe'>see recipe</button>
                                 </div>
             
                             )
                         })
                     )
                     
                }
            </div>
            <h1>Filter food by letter</h1>
            <LetterFilter onFilterChange={handleFilterChange} />
            <MealList letter={filteredLetter} />
        </>
    )
}

export default FoodCategories
