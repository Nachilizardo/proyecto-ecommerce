import React from 'react'
import './foodContainer.css'

const FoodCategories = (props) => {
    const cat = props.food.categories

    return (
        
        <div className='foodsContainer'>
                
           {
                cat?.map((item) => {
                    return(
                        <div className='card' key={item.idCategory}>
                            <h4>
                                {item.strCategory}
                            </h4>
                            <img src={item.strCategoryThumb} alt={item.strCategory} />
                        </div>
    
                    )
                })
           }
        </div>
      )
}

export default FoodCategories
