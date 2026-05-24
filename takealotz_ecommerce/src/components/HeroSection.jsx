import "./HeroSection.css"

function HeroSection(props) {

    const selectedCategoryProducts = props.products.filter(product => product.category === props.selectedCategory)
    const categotyProductList = selectedCategoryProducts.map(product => (
        <li key={product.id}>{product.title}</li>
    ))

    return (
        <section className="hero-section center-content">
            {/* <Categories /> */}
            <aside>
                <h2>Categories</h2>
                <div 
                    className="categories-container" 
                    id="categories-container-id"
                    // onMouseEnter={props.handleMouseEnterCategory}
                    onMouseLeave={props.handleMouseLeaveCategory}
                >
                    {/* <h2>Categories</h2> */}
                    <div className="categories">
                        <ul>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory}
                                // onMouseLeave={props.handleMouseLeaveCategory} 
                                id="men's clothing"
                            >
                                Men's clothing
                            </li>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory}
                                // onMouseLeave={props.handleMouseLeaveCategory} 
                                id="women's clothing"
                            >
                                Women's clothing
                            </li>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory}
                                // onMouseLeave={props.handleMouseLeaveCategory} 
                                id="jewelery"
                            >
                                Jewelery
                            </li>
                            <li 
                                onMouseEnter={props.handleMouseEnterCategory}
                                // onMouseLeave={props.handleMouseLeaveCategory} 
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
                        // onMouseLeave={props.handleMouseLeaveSelCategory}
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