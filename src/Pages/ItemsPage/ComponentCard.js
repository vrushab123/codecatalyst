import React from "react";
import "./ComponentCard.css";

const ComponentCard = ({ img, title, description, onClick }) => {
    return (
        <div className="component-card">
            <img src={img} alt={title} className="component-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="view-details-button" onClick={onClick}>
                View Details
            </button>
        </div>
    );
};

export default ComponentCard;
