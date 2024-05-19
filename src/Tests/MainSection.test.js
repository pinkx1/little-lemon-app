import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainSection from '../components/MainSection';

test('renders main section heading', () => {
    render(
        <Router>
            <MainSection />
        </Router>
    );
    expect(screen.getByText(/We provide the best food for you/i)).toBeInTheDocument();
});

test('renders restaurant description', () => {
    render(
        <Router>
            <MainSection />
        </Router>
    );
    expect(screen.getByText(/"Little Lemon" restaurant offers a cozy atmosphere/i)).toBeInTheDocument();
});

test('renders menu and book a table buttons', () => {
    render(
        <Router>
            <MainSection />
        </Router>
    );
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/Book a table/i)).toBeInTheDocument();
});
