import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, name, description }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-title">{name}</div>
            <div className="card-description">{description}</div>
        </div>
    );
}

export default ProjectCard;
