import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AllProducts from "../components/AllProducts"
import Footer from "../components/Footer"

import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"

// import './App.css'

function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleMouseEnterCategory = (event) => {
    setSelectedCategory(event.target.id)
  }

  const handleMouseLeaveCategory = (event) => {
    setSelectedCategory("")
  }

  const navigate = useNavigate()

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
          products={products}
          selectedProduct={() => navigate("/product")}
          selectedCategory={selectedCategory}
          handleMouseEnterCategory={handleMouseEnterCategory} 
          handleMouseLeaveCategory={handleMouseLeaveCategory}
          // handleMouseLeaveSelCategory={handleMouseLeaveSelCategory} 
        />
        <AllProducts products={products}/>
      </main>
      <Footer />
    </>
  )
}

export default Home