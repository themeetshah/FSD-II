import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Product from "./Product"
const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Product">Product</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
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