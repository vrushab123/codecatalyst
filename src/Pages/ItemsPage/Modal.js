import React from "react";
import "./Modal.css"; // Add your modal styles here

const Modal = ({ isOpen, content, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-btn" onClick={onClose}>
                    X
                </button> */}
                <div className="modal-body">{content}</div>
            </div>
        </div>
    );
};

export default Modal;
