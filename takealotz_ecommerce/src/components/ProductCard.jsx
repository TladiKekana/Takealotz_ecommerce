import "./ProductCard.css"

function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="image-container">
                <img
                    id={props.id} 
                    src={props.image} 
                    alt={props.title} 
                    onClick={props.selectProduct}
                />
            </div>
            <div className="product-details">
                <span><strong>{props.title}</strong></span>
                <p className="description">{props.description}</p>
                <p>{props.price}</p>
                <p>{props.category}</p>
            </div>
        </div>
    )
}

export default ProductCard