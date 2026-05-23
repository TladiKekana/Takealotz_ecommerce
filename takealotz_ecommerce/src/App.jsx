import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AllProducts from "./components/AllProducts"
import Footer from "./components/Footer"

import { useEffect, useState } from "react"

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleMouseOverCategory = (event) => {
    setSelectedCategory(event.target.id)
  }

  const handleMouseLeaveCategory = (event) => {
    if(event.relatedTarget.id !== "category-list-container-id") {
      setSelectedCategory("")
    }
  }

  const handleMouseLeaveSelCategory = (event) => {
    if(event.relatedTarget.id !== "categories-container-id") {
      setSelectedCategory("")
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSection
          selectedCategory={selectedCategory}
          handleMouseOverCategory={handleMouseOverCategory} 
          handleMouseLeaveCategory={handleMouseLeaveCategory}
          handleMouseLeaveSelCategory={handleMouseLeaveSelCategory} 
        />
        <AllProducts products={products}/>
      </main>
      <Footer />
    </>
  )
}

export default App