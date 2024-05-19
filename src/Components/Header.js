import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../logo.png';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Restaurant Logo" className="logo" />
                </Link>
                <Link to="/" className="restaurant-link">
                    <span className="restaurant-name">restaurant</span>
                </Link>
            </div>
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
            <Link to="/reservation">
                <button className="book-table">Book a table</button>
            </Link>
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header;
