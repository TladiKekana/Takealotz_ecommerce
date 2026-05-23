import "./ProductCard.css"

function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.image} alt={props.title} />
            <p>title</p>
            <p>product description</p>
            <p>price</p>
        </div>
    )
}

export default ProductCard