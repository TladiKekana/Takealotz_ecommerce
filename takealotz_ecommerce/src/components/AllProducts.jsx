import ProductCard from "./ProductCard"
import "./AllProducts.css"

function AllProducts(props) {
    const productCards = props.products.map(product => (
        <div key={product.id} className="product-container">
            <ProductCard 
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                category={product.category}
                selectProduct={props.selectProduct}
            />
            <button>Add to Cart</button>
        </div>
    ))

    return (
        <section className="products-section center-content">
            <h1>All Products</h1>
            <div className="all-products">{productCards}</div>
        </section>
    )
}

export default AllProducts