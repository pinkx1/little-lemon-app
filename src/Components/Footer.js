import React from 'react';
import './Footer.css';
import logo from '../logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="logo-container">
                        <img src={logo} alt="Restaurant Logo" className="logo" />
                        <span className="restaurant-name">restaurant</span>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">OPENING HOURS</h3>
                    <p>Monday - Friday: 8:00 am to 9:00 pm</p>
                    <p>Saturday: 8:00 am to 9:00 pm</p>
                    <p>Sunday: CLOSED</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">NAVIGATION</h3>
                    <p><a href="#menu">Menu</a></p>
                    <p><a href="#about-us">About us</a></p>
                    <p><a href="#contact-us">Contact us</a></p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">DISHES</h3>
                    <p>Lemon Cake</p>
                    <p>Greek Salad</p>
                    <p>Bruschetta</p>
                    <p>Grilled Dorade</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Little Lemon Restaurant. All Right Reserved</p>
                <div className="footer-links">
                    <a href="#terms-of-service">Terms of Service</a>
                    <a href="#privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
