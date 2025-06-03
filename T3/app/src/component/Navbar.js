import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Product from './Product'
import Contact from './Contact'

const Navbar = () => {
    const products = [
        { name: "Shampoo", price: 999, description: "High performance shampoo.", img: '../imgs/shampoo.jpg' },
        { name: "Conditioner", price: 499, description: "Smooth conditioner.", img: '../imgs/conditioner.jpg' },
        { name: "Hair Color", price: 199, description: "Vibrant hair color.", img: '../imgs/haircolor.jpg' },
    ];
    return (
        <Router>
            <div>
                <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                    <div className="container-fluid justify-content-center">
                        <ul className='nav navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Product' className='nav-link'>Product</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Contact' className='nav-link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Product' element={<Product prods={products} />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>
            </Routes>
        </Router >
    )
}

export default Navbar