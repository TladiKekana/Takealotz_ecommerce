import ProductCard from "./ProductCard"
import "./AllProducts.css"

function AllProducts(props) {
    const productCards = props.products.map(product => {
        return (
            <ProductCard 
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
            />
        )
    })

    return (
        <section className="products-section center-content">
            <h1>All Products</h1>
            <div className="all-products">{productCards}</div>
        </section>
    )
}

export default AllProducts