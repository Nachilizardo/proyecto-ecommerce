import React from 'react'

const Hero = ({saludar}) => {
  return (
    <>
        <div className='sectionOne'>
        <h1>Welcome to Foods</h1>
        <p>your website where you can find different recipes from all over the world.</p>
        </div>
        <section className='search-category'>
            <input type="text" placeholder='Search by category...' />
            
        </section>
    </>
    
  )
}

export default Hero
