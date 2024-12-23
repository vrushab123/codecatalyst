import React from "react";
import "./ProjectPage.css";
import ProjectCard from "./ProjectCard";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";

const projects = [
    {
        id: 1,
        image: "https://via.placeholder.com/250x300?text=Project+1",
        name: "Project 1",
        description: "This is a description of Project 1."
    },
    {
        id: 2,
        image: "https://via.placeholder.com/250x300?text=Project+2",
        name: "Project 2",
        description: "This is a description of Project 2."
    },
    {
        id: 3,
        image: "https://via.placeholder.com/250x300?text=Project+3",
        name: "Project 3",
        description: "This is a description of Project 3."
    },
    {
        id: 4,
        image: "https://via.placeholder.com/250x300?text=Project+4",
        name: "Project 4",
        description: "This is a description of Project 4."
    },
    {
        id: 5,
        image: "https://via.placeholder.com/250x300?text=Project+5",
        name: "Project 5",
        description: "This is a description of Project 5."
    }
];

function ProjectsPage() {
    return (
        <>
            <Navbar />
            <div className="projects-container">
                <h1 className="projects-title">Our Projects</h1>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            name={project.name}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProjectsPage;
