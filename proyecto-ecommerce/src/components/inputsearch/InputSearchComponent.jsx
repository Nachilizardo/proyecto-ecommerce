import React from 'react'
import './inputsearch.css'

const InputSearchComponent = ({searchItem, setSearch, handleSearch}) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchItem);     
        }
    };

  return (
    
        <section className='inputsearch'>
            <h2>CATEGORIES:</h2>
            <input type="text" 
            placeholder='Search by category...'
            value={searchItem}
            onChange={(e)=> setSearch(e.target.value)}
            onKeyUp={handleKeyPress}
             />
            
        </section>
    
  )
}

export default InputSearchComponent 
