import './RecipeDetails.css'

const RecipeDetails = ({ recipe, onClose }) => {

  const closeIcon =
    <svg onClick={onClose} className="bi bi-x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>;


  return (
    <div className='recipe-details'>
      {closeIcon}
      <h2 className='mealName'>{recipe.strMeal || recipe.strCategory}</h2>
      {recipe.strMealThumb ? <img className='th-img' src={recipe.strMealThumb}/> : ""}
      <p className='mealName'>{recipe.strInstructions || recipe.strCategoryDescription}</p>
    </div>
  );
};

export default RecipeDetails;
