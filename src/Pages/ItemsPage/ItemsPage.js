import React, { useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import ComponentCard from "./ComponentCard"; // Importing individual card component
import ComponentModal from "./ComponentModal"; // Importing modal component
// import Modal from "./Modal";
import "./ItemsPage.css";

const ItemsPage = () => {
    const components = [
        {
            id: 1,
            title: "Loader",
            description: "Various types of loaders like spinners, bars, and circles.",
            img: "/assets/loader.png",
            type: "loader",
        },
        {
            id: 2,
            title: "Card",
            description: "Simple and flexible card layouts with different designs.",
            img: "/assets/cards.png",
            type: "card",
        },
        {
            id: 3,
            title: "Carousel",
            description: "Create beautiful image sliders and carousels.",
            img: "/assets/carousels.jpg",
            type: "carousel",
        },
        {
            id: 4,
            title: "Button",
            description: "Create beautiful image sliders and carousels.",
            img: "/assets/buttons.jpg",
            type: "button",
        },
        // Add more components as needed
    ];

    // Modal State
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open modal
    const openModal = (type) => {
        setModalContent({ type });
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                {/* Navbar Component */}
                <Navbar />

                <div className="item-page-container">
                    <div className="items-page-header">
                        <h1>Welcome to the Items Page</h1>
                        <p>
                            Here, you will find a collection of reusable components like loaders,
                            cards, carousels, and more. You can easily copy the code and integrate
                            them into your projects. Click on the "View Details" button to explore
                            each component in detail, view different types, and get the code to use.
                        </p>
                    </div>

                    <div className="components-grid">
                        {components.map((component) => (
                            <ComponentCard
                                key={component.id}
                                img={component.img}
                                title={component.title}
                                description={component.description}
                                onClick={() => openModal(component.type)}
                            // Passing openModal function to card
                            />
                        ))}
                    </div>

                    {/* Modal for showing component details */}
                    {isModalOpen && (
                        <ComponentModal content={modalContent} closeModal={closeModal} />
                    )}
                </div>
                <Footer />
                {/* You can add more content here in the future */}
            </div>
        </>
    );
};

export default ItemsPage;
