import React from 'react';
import './SpecialDishes.css';
import dish1 from '../dish1.jpeg';
import dish2 from '../dish2.jpg';
import dish3 from '../dish3.svg';
import dish4 from '../dish4.webp';

const SpecialDishes = () => {
    const dishes = [
        { image: dish1, name: 'Lemon Cake', price: '$7', description: 'A delightful dessert made with fresh lemons, flour, sugar, butter, eggs, and a hint of vanilla, topped with a zesty lemon glaze'},
        { image: dish2, name: 'Greek Salad\n', price: '$12', description: 'A refreshing mix of ripe tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, dressed with olive oil, lemon juice, oregano, and a sprinkle of salt and pepper' },
        { image: dish3, name: 'Bruschetta', price: '$10', description: 'Toasted slices of crusty bread topped with a flavorful combination of diced tomatoes, fresh basil, garlic, olive oil, and a touch of balsamic vinegar'},
        { image: dish4, name: 'Grilled Dorade', price: '$35', description: 'A perfectly grilled dorade fish seasoned with olive oil, lemon juice, garlic, and fresh herbs, served with a side of roasted vegetables' },
    ];

    return (
        <section className="special-dishes">
            <h2>Our Special Dishes</h2>
            <div className="dishes-container">
                {dishes.map((dish, index) => (
                    <div key={index} className="dish-card">
                        <div className="dish-image-container">
                            <img src={dish.image} alt={dish.name} className="dish-image" />
                            <span className="price-tag">{dish.price}</span>
                        </div>
                        <h3 className="dish-name">{dish.name}</h3>
                        <p className="dish-description">{dish.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialDishes;