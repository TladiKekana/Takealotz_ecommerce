import "./Categories.css"

function Categories() {

    function handleMouseOver(event) {
        console.log("Mouse over Id: ",event.target.id)
    }

    function handleMouseLeave(event) {
        console.log("Mouse left Id: ",event.target.id)
    }

    return (
        <aside>
            <div className="categories-container">
                <h2>Categories</h2>
                <div className="categories">
                    <ul>
                        <li 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} 
                            id="Men's clothing"
                        >
                            Men's clothing
                        </li>
                        <li 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} 
                            id="Women's clothing"
                        >
                            Women's clothing
                        </li>
                        <li 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} 
                            id="Jewelery"
                        >
                            Jewelery
                        </li>
                        <li 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} 
                            id="Electronics"
                        >
                            Electronics
                        </li>
                    </ul>
                </div>
            </div>
            <div className="category-list-container"></div>
        </aside>
        
    )
}

export default Categories