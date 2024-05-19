import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Reservation Submitted</h2>
                <p>Your reservation has been submitted. You will receive a confirmation email within 5 minutes.</p>
            </div>
        </div>
    );
};

export default Modal;
