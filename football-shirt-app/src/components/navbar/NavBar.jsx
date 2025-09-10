import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"><h1><strong>Football Shirt Gallery</strong></h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
