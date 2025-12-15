import React, { useContext, useState } from "react";
import logo from '../Assets/logo_1.png';
import cart_icon from '../Assets/cart_icon.png';
import './Navbar.css';
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const {getTotalCartItems} = useContext(ShopContext);
    
    const getMenuState = (path) => {
        if (path === "/") return "shop";
        if (path === "/mens") return "men";
        if (path === "/womens") return "women";
        if (path === "/kids") return "kids";
        return "";
    };
    
    const menu = getMenuState(location.pathname);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const closeMenu = () => {
        setMenuOpen(false);
    };
    
    // console.log(getTotalCartItems);
    return(
        <div className="navbar">
            <Link to="/" style={{textDecoration: "none"}} onClick={closeMenu}>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>CLOTHES SHOP</p>
                </div>
            </Link>
            <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <li onClick={closeMenu}>
                    <NavLink 
                        style={{textDecoration: "none"}} 
                        to="/"
                        end
                    >
                        Shop
                    </NavLink>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={closeMenu}>
                    <NavLink 
                        style={{textDecoration: "none"}} 
                        to="/mens"
                    >
                        Mens
                    </NavLink>
                    {menu === "men" ? <hr /> : <></>}
                </li>
                <li onClick={closeMenu}>
                    <NavLink 
                        style={{textDecoration: "none"}} 
                        to="/womens"
                    >
                        Womens
                    </NavLink>
                    {menu === "women" ? <hr /> : <></>}
                </li>
                <li onClick={closeMenu}>
                    <NavLink 
                        style={{textDecoration: "none"}} 
                        to="/kids"
                    >
                        Kids
                    </NavLink>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
                <li className="nav-menu-login" onClick={closeMenu}>
                    <Link style={{textDecoration: "none"}} to="/login">Login</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link className="nav-login-btn" style={{textDecoration: "none"}} to="/login"><button>Login</button></Link>
                <Link style={{textDecoration: "none"}} to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;