import './App.css'
import FoodCategories from './components/Food/FoodCategories'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import InputSearchComponent from './components/inputsearch/inputSearchcomponent'


function App() {
  const FOOD_CATEGORIES_API = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const FOOD_FILTER_BY_CATEGORY = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

  const [foodCategories, setFoodCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState([])
  

  useEffect(() => {

    const response = fetch (FOOD_CATEGORIES_API)
                    .then(response => response.json())
                    .then(data =>setFoodCategories(data))
                    .catch(err => console.log("hubo un error al traer los datos", err))

  }, [])
  
    const filterCategory = (value) => {
      const response = fetch(FOOD_FILTER_BY_CATEGORY + value)
                        .then(response => response.json())
                        .then(data => {
                          setSearchResult(data)
                          setFoodCategories([]) 
                        })
      }

  return (
    <>
      <NavBar/>
      
      <Hero></Hero>

      <InputSearchComponent
        searchItem={searchTerm}
        setSearch={(val) => {
          setSearchTerm(val)
        }}
        handleSearch={(val)=> filterCategory(val)}
      ></InputSearchComponent>

      <FoodCategories food={foodCategories} meals={searchResult}></FoodCategories> 
      <Footer></Footer>
    </>
  )
}

export default App
