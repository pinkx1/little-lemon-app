import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('renders logo and restaurant name', () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    expect(screen.getByAltText(/Restaurant Logo/i)).toBeInTheDocument();
    expect(screen.getByText(/restaurant/i)).toBeInTheDocument();
});

test('renders navigation links', () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});

test('renders book a table button', () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    expect(screen.getByText(/Book a table/i)).toBeInTheDocument();
});


