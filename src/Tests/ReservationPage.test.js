import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationPage from '../components/ReservationPage';

test('renders reservation form', () => {
    render(<ReservationPage />);
    expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Comments/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve/i)).toBeInTheDocument();
});

test('submits the form and shows modal', () => {
    render(<ReservationPage />);
    fireEvent.submit(screen.getByText(/Reserve/i));
    expect(screen.getByText(/Your reservation has been submitted/i)).toBeInTheDocument();
});
