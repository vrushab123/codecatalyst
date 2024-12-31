import React from "react";
import "./ProjectPage.css";
import ProjectCard from "./ProjectCard";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";

const projects = [
    {
        id: 1,
<<<<<<< HEAD
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
=======
        image: "/assets/finance-consultancy.png",
        name: "Finance Consultancy",
        description: "This is a description of Project 1.",
        url: "https://vrushab123.github.io/stock-market-website/",
    },
    {
        id: 2,
        image: "/assets/shoe-store.png",
        name: "Shoe Store",
        description: "This is a description of Project 2.",
        url: "https://vrushab123.github.io/Shoe-Store/",
    },
    {
        id: 3,
        image: "/assets/illuminati.png",
        name: "Ancient Illuminati",
        description: "This is a description of Project 3.",
        url: "https://vrushab123.github.io/Invest-Company-Website/",
    },
    {
        id: 4,
        image: "/assets/cred.png",
        name: "Cred Replica",
        description: "This is a description of Project 4.",
        url: "https://vrushab123.github.io/Cred/",
    },
    {
        id: 5,
        image: "/assets/laava.png",
        name: "Financial Website",
        description: "This is a description of Project 5.",
        url: "https://vrushab123.github.io/Financial-Website/",
    },
    {
        id: 5,
        image: "/assets/electronics.png",
        name: "Electronic's Store",
        description: "This is a description of Project 5.",
        url: "https://vrushab123.github.io/Electronic-Store/",
>>>>>>> 80a7479 (Updated with logo and many things)
    }
];

function ProjectsPage() {
    return (
        <>
            <Navbar />
            <div className="projects-container">
<<<<<<< HEAD
                <h1 className="projects-title">Our Projects</h1>
=======
                <h1 className="projects-title">A Quick Display Of Our Projects</h1>
>>>>>>> 80a7479 (Updated with logo and many things)
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            name={project.name}
                            description={project.description}
<<<<<<< HEAD
=======
                            url={project.url}
>>>>>>> 80a7479 (Updated with logo and many things)
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProjectsPage;
