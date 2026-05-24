import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

function Product() {
    const location = useLocation()
    const { product } = location.state || {}
    console.log(product)

    return (
        <>
            <Header />
            <main>
                <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                />
            </main>
            <Footer />
        </>
    )
}

export default Product