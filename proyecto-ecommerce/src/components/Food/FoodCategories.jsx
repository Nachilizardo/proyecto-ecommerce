import React, { useState } from 'react'
import './foodContainer.css'
import LetterFilter from './LetterFilter'
import MealList from './MealList'

const FoodCategories = () => {

    const [filteredLetter, setFilteredLetter] = useState('A');

    const handleFilterChange = (letter) => {
        setFilteredLetter(letter);
    };

    return (
        <>
            <h1>Filter food by letter</h1>
            <LetterFilter onFilterChange={handleFilterChange} />
            <MealList letter={filteredLetter} />
        </>
    )
}

export default FoodCategories
