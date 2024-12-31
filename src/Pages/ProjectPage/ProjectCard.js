import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, name, description, url }) {
    const handleClick = () => {
        if (url) {
            window.open(url, "_blank"); // Opens the URL in a new tab
        }
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img src={image} alt={name} className="card-image" />
            <div className="card-title">{name}</div>
            <div className="card-description">{description}</div>
        </div>
    );
}

export default ProjectCard;
