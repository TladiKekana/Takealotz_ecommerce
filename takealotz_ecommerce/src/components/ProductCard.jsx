import "./ProductCard.css"

function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="product-details">
                <span><strong>{props.title}</strong></span>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <p>{props.category}</p>
            </div>
        </div>
    )
}

export default ProductCard