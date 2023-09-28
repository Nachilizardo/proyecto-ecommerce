import './App.css'
import FoodCategories from './components/Food/FoodCategories'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'


function App() {
  const FOOD_CATEGORIES_API = "https://www.themealdb.com/api/json/v1/1/categories.php"

  const [foodCategories, setFoodCategories] = useState([])

  useEffect(() => {

    const response = fetch (FOOD_CATEGORIES_API)
                    .then(response => response.json())
                    .then(data =>setFoodCategories(data))
                    .catch(err => console.log("hubo un error al traer los datos", err))

  }, [])

  return (
    <>
      <NavBar/>
      <Hero></Hero>
      <FoodCategories food={foodCategories}></FoodCategories> 
      <Footer></Footer>
    </>
  )
}

export default App
