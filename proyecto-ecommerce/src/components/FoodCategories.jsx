import React from 'react'
import '../styles/foodContainer.css'

const FoodCategories = (props) => {
    const cat = props.food.categories

    return (
        
        <div className='foodsContainer'>
                
           {
                cat?.map((item, index) => {
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
