import React from 'react';
import './Navbar.css';


const Navbar = () => {
    const toggleMobileMenu = () => {
        document.querySelector('#menu').classList.toggle("active");
        document.querySelector('.mobile-bar').classList.toggle("selected");
    }

    const togglePortfolio = ()=> {
        console.log("clicked")
    }

    return (
        <div className="navbar-main">
            <h1 className="logo">Architect Solution</h1>
            <nav className="navbar-container">
                <ul id="menu">
                    <li>
                        <a href="/" >HOME</a>
                    </li>
                    <li>
                        <a href="/about">ABOUT US</a>
                    </li>
                    <li>
                        <a href="/services">SERVICES</a>    
                    </li>
                    <li  id="dropdown" >
                        <a href="#" ><i className="fas fa-angle-double-down"></i> PORTFOLIO</a>
                        <ul id="dropdown-menu">
                            <li><a href="/services">Shop Drawing</a></li>
                            <li><a href="/services">BIM Modelling</a></li>
                            <li><a href="/services">3D Floor Plan</a></li>
                            <li><a href="/services">Clash Coordination</a></li>
                            <li><a href="/services">Revit Families</a></li>
                            <li><a href="/services">Structural Modelling and Detailing</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/contactUs">CONTACT US</a>
                    </li>
                    <li>
                        <a href="/blog">OUR BLOG</a>
                    </li>
                </ul>
                <div className="mobile-bar" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;