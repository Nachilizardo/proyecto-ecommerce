import './App.css'
import FoodCategories from './components/FoodCategories'
import { Header } from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'


function App() {
  const FOOD_CATEGORIES_API = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const FOOD_FILTER_BY_CATEGORY = "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

  const [foodCategories, setFoodCategories] = useState([])

  useEffect(() => {

    const response = fetch (FOOD_CATEGORIES_API)
                    .then(response => response.json())
                    .then(data =>setFoodCategories(data))
                    .catch(err => console.log("hubo un error al traer los datos", err))

  }, [])
  
  const filterCategory = () => {
    console.log("hola mundo")
  }

  return (
    <>
      <Header></Header>
      <Hero saludar={() => filterCategory()}></Hero>
      <FoodCategories food={foodCategories}></FoodCategories> 
      <Footer></Footer>
    </>
  )
}

export default App
