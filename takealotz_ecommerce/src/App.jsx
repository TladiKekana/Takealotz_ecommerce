import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AllProducts from "./components/AllProducts"
import Footer from "./components/Footer"

import { useEffect, useState } from "react"

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("all")

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
        <HeroSection />
        <AllProducts products={products}/>
      </main>
      <Footer />
    </>
  )
}

export default App