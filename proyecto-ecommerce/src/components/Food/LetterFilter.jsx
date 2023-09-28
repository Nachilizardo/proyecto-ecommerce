import React, { useState } from 'react';

const LetterFilter = ({ onFilterChange }) => {
  const [letterSelected, setLetterSelected] = useState('A');

  const handleLetterChange = ({target}) => {
    const letter = target.value.toUpperCase();
    setLetterSelected(letter);
    onFilterChange(letter);
  };

  return (
    <div>
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