import "./Categories.css"

function Categories() {
    return (
        <aside>
            <div className="categories-container">
                <h2>Categories</h2>
                <div className="categories">
                    <ul>
                        <li><span>Men's clothing</span></li>
                        <li><span>Wommen's clothing</span></li>
                        <li><span>Jewelery</span></li>
                        <li><span>Electronics</span></li>
                    </ul>
                </div>
            </div>
            <div className="category-list-container"></div>
        </aside>
        
    )
}

export default Categories