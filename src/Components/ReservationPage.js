import React, { useState } from 'react';
import './ReservationPage.css';
import Modal from './Modal';

const ReservationPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="reservation-page">
            <h1>Book a Table</h1>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" required />
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Number of Guests:
                    <select name="guests" required>
                        {[...Array(20)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Date:
                    <input type="date" name="date" required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" required />
                </label>
                <label>
                    Comments:
                    <textarea name="comments" rows="4"></textarea>
                </label>
                <button type="submit">Reserve</button>
            </form>
            <Modal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default ReservationPage;
