import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Product from "./Product"
const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/Product">Product</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Product" element={<Product />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}
export default Navbar