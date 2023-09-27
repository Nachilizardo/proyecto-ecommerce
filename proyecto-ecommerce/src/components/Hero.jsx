import React from 'react'

const Hero = ({saludar}) => {
  return (
    <>
        <div className='sectionOne'>
        <h1>Welcome of Foods Recets</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Rem aliquam laborum consequatur ratione aspernatur illum ut veritatis atque quod, 
               unde repellat cupiditate dolores optio? Ipsa cupiditate possimus consequuntu.
               </p>
        </div>
        <section className='filter'>
            <input type="text" placeholder='Buscar por categoria' />
            
        </section>
    </>
    
  )
}

export default Hero
