import React from 'react';
import { Link } from 'react-router-dom';
import './MainSection.css';
import restaurantImage from '../coffee-shop.jpeg';

const MainSection = () => {
    return (
        <section className="main-section">
            <div className="text-container">
                <h1>We provide the best food for you</h1>
                <p>
                    "Little Lemon" restaurant offers a cozy atmosphere with warm wooden accents and soft lighting, where you can enjoy European cuisine. Pleasant decorative details and attentive service create the perfect setting for a comfortable dining experience.
                </p>
                <div className="button-container">
                    <button className="menu-button">Menu</button>
                    <Link to="/reservation">
                        <button className="book-button">Book a table</button>
                    </Link>
                </div>
            </div>
            <div className="image-container">
                <img src={restaurantImage} alt="Restaurant" className="restaurant-image" />
            </div>
        </section>
    );
};

export default MainSection;
