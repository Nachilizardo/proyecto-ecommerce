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

  const [foodCategories, setFoodCategories] = useState([]) // Lista de categorías de comida
  const [searchTerm, setSearchTerm] = useState("") // Término de búsqueda
  const [searchResult, setSearchResult] = useState([])  // Resultado de la búsqueda
  
  
  // Utilizamos useEffect para realizar una solicitud a la API al cargar la página
  useEffect(() => {

    // Hacemos una solicitud a la API de categorías de comida
    const response = fetch (FOOD_CATEGORIES_API)
                    .then(response => response.json())
                    .then(data =>setFoodCategories(data))
                    .catch(err => console.log("hubo un error al traer los datos", err))

  }, [])

    // Función para filtrar por categoría de comida
    const filterCategory = (value) => {
      const response = fetch(FOOD_FILTER_BY_CATEGORY + value)
                        .then(response => response.json())
                        .then(data => {
    // Actualizamos el estado de los resultados de búsqueda y vaciamos la lista de categorías de comida
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

      <FoodCategories food={foodCategories} meals={searchResult}></FoodCategories> {/**creamos props */}
      <Footer></Footer>
    </>
  )
}

export default App
