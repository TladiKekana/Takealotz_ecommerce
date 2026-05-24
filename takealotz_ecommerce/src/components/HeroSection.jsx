import "./HeroSection.css"

function HeroSection(props) {

    const selectedCategoryProducts = props.products.filter(product => product.category === props.selectedCategory)
    const categotyProductList = selectedCategoryProducts.map(product => (
        <li 
            key={product.id} 
            id={product.id} 
            onClick={props.selectProduct}
        >
            {product.title}
        </li>
    ))

    return (
        <section className="hero-section center-content">
            {/* <Categories /> */}
            <aside>
                <h2>Categories</h2>
                <div 
                    className="categories-container" 
                    id="categories-container-id"
                    onMouseLeave={props.handleMouseLeaveCategory}
                >
                    {/* <h2>Categories</h2> */}
                    <div className="categories">
                        <ul>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory} 
                                id="men's clothing"
                            >
                                Men's clothing
                            </li>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory} 
                                id="women's clothing"
                            >
                                Women's clothing
                            </li>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory} 
                                id="jewelery"
                            >
                                Jewelery
                            </li>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory} 
                                id="electronics"
                            >
                                Electronics
                            </li>
                        </ul>
                    </div>
                    {props.selectedCategory != "" && 
                    <div
                        id="category-list-container-id" 
                        className="category-list-container" 
                    >
                        <ul>
                            {categotyProductList}
                        </ul>
                    </div>
                }
                </div>
            </aside>
            <div className="search-featured">
                <div className="search">
                    <input type="text" placeholder="Search for products" />
                    <button>Search</button>
                </div>
                <div className="featured"></div>
            </div>
        </section>
    )
}

export default HeroSection