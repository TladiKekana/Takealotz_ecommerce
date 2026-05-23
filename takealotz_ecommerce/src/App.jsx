import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AllProducts from "./components/AllProducts"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AllProducts />
      </main>
      <Footer />
    </>
  )
}

export default App