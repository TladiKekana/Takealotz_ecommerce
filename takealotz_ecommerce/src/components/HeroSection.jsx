import Categories from "./Categories"
import "./HeroSection.css"

function HeroSection() {
    return (
        <section className="hero-section center-content">
            <Categories />
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