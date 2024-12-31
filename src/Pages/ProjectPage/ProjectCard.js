import React from "react";
import "./ProjectCard.css";

<<<<<<< HEAD
function ProjectCard({ image, name, description }) {
    return (
        <div className="card">
=======
function ProjectCard({ image, name, description, url }) {
    const handleClick = () => {
        if (url) {
            window.open(url, "_blank"); // Opens the URL in a new tab
        }
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
>>>>>>> 80a7479 (Updated with logo and many things)
            <img src={image} alt={name} className="card-image" />
            <div className="card-title">{name}</div>
            <div className="card-description">{description}</div>
        </div>
    );
}

export default ProjectCard;
