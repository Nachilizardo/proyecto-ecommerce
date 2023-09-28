import React, { useState } from 'react';
import "./letterfilter.css"

const LetterFilter = ({ onFilterChange }) => {
  const [letterSelected, setLetterSelected] = useState('A');

  const handleLetterChange = ({target}) => {
    const letter = target.value.toUpperCase();
    setLetterSelected(letter);
    onFilterChange(letter);
  };

  return (
    <div className='filter-letter'>
      <label htmlFor="letter">Filter by letter:</label>
      <input
        type="text"
        id="letter"
        value={letterSelected}
        onChange={handleLetterChange}
      />
    </div>
  );
};

export default LetterFilter;