// import Header from "./components/Header"
// import HeroSection from "./components/HeroSection"
// import AllProducts from "./components/AllProducts"
// import Footer from "./components/Footer"

// import { useEffect, useState } from "react"

// import './App.css'

// function App() {
//   const [products, setProducts] = useState([])
//   const [category, setCategory] = useState("all")
//   const [selectedCategory, setSelectedCategory] = useState("")

//   const handleMouseEnterCategory = (event) => {
//     setSelectedCategory(event.target.id)
//   }

//   const handleMouseLeaveCategory = (event) => {
//     setSelectedCategory("")
//   }

//   const selectedProduct = (event) => {

//   }

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//       setProducts(data)
//     })
//   }, [])

//   return (
//     <>
//       <Header />
//       <main>
//         <HeroSection
//           products={products}
//           selectedProduct={selectedProduct}
//           selectedCategory={selectedCategory}
//           handleMouseEnterCategory={handleMouseEnterCategory} 
//           handleMouseLeaveCategory={handleMouseLeaveCategory}
//           // handleMouseLeaveSelCategory={handleMouseLeaveSelCategory} 
//         />
//         <AllProducts products={products}/>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App

import Home from "./pages/Home"
import Product from "./pages/Product"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App