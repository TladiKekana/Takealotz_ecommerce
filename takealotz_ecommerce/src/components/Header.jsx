import "./Header.css"

function Header() {
    return (
        <header>
            <div className="header-content center-content">
                <h1>takealotz</h1>
                <div className="user-section">
                    <nav>
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                    </nav>
                    <button>Wishlist</button>
                    <button>Cart</button>
                </div>
            </div>
            <div className="header-deco"></div>
        </header>
    )
}

export default Header