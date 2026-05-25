import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Header.css"

function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <div className="header-content center-content">
                <h1><Link to="/">takealotz</Link></h1>
                <div className="user-section">
                    <nav>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/my-accout">My Account</Link></li>
                        </ul>
                    </nav>
                    <button onClick={() => navigate("/wishlist")}>Wishlist</button>
                    <button onClick={() => navigate("/cart")}>Cart</button>
                </div>
            </div>
            <div className="header-deco"></div>
        </header>
    )
}

export default Header