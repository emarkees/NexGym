import React from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal__overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal__overlay" onClick={handleOverlayClick}>
      <div className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
