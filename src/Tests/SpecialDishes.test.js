import React from 'react';
import { render, screen } from '@testing-library/react';
import SpecialDishes from '../components/SpecialDishes';

test('renders special dishes heading', () => {
    render(<SpecialDishes />);
    expect(screen.getByText(/Our Special Dishes/i)).toBeInTheDocument();
});

test('renders all dishes', () => {
    render(<SpecialDishes />);
    const dishes = [
        'Lemon Cake',
        'Greek Salad',
        'Bruschetta',
        'Grilled Dorade',
    ];

    dishes.forEach(dish => {
        expect(screen.getAllByText(new RegExp(dish, 'i')).length).toBeGreaterThan(0);
    });
});

test('renders dish prices', () => {
    render(<SpecialDishes />);
    const prices = [
        '$7',
        '$12',
        '$10',
        '$35',
    ];

    prices.forEach(price => {
        expect(screen.getByText(price)).toBeInTheDocument();
    });
});
