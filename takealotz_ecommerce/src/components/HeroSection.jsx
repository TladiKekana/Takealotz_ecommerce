import Categories from "./Categories"
import "./HeroSection.css"

function HeroSection(props) {
    return (
        <section className="hero-section center-content">
            {/* <Categories /> */}
            <aside>
                <div className="categories-container" id="categories-container-id">
                    <h2>Categories</h2>
                    <div className="categories">
                        <ul>
                            <li 
                                onMouseOver={props.handleMouseOverCategory}
                                onMouseLeave={props.handleMouseLeaveCategory} 
                                id="Men's clothing"
                            >
                                Men's clothing
                            </li>
                            <li 
                                onMouseOver={props.handleMouseOverCategory}
                                onMouseLeave={props.handleMouseLeaveCategory} 
                                id="Women's clothing"
                            >
                                Women's clothing
                            </li>
                            <li 
                                onMouseOver={props.handleMouseOverCategory}
                                onMouseLeave={props.handleMouseLeaveCategory} 
                                id="Jewelery"
                            >
                                Jewelery
                            </li>
                            <li 
                                onMouseOver={props.handleMouseOverCategory}
                                onMouseLeave={props.handleMouseLeaveCategory} 
                                id="Electronics"
                            >
                                Electronics
                            </li>
                        </ul>
                    </div>
                </div>
                {props.selectedCategory != "" && 
                    <div
                        id="category-list-container-id" 
                        className="category-list-container" 
                        onMouseLeave={props.handleMouseLeaveSelCategory}
                    ></div>
                }
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