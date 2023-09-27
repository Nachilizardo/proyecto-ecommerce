import React from 'react'
import './hero.css'

// Porqué esta el parametro de la función usando la funcion saludar?
const Hero = ({saludar}) => {
  return (
    <>
        <div className='sectionOne'>
        <h1>Welcome to Foods Recipes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Rem aliquam laborum consequatur ratione aspernatur illum ut veritatis atque quod, 
               unde repellat cupiditate dolores optio? Ipsa cupiditate possimus consequuntu.
               </p>
        </div>
        {/* Acá iria lo que es el filtrado, hay que hacer las funciones */}
        <section className='filter'>
          <label htmlFor="categorie-selected">Seleccionar categoria:</label>
            <select name="" id="categorie-selected">
              <option value="">categories</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            
        </section>
    </>
    
  )
}

export default Hero
