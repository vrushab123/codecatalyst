import React from "react";
import "./ComponentModal.css";
import LoaderModal from "../../components/LoaderModal";
import Cards from "../../components/CardModal";
import ButtonTypes from "../../components/ButtonTypes";
<<<<<<< HEAD
=======
import Carousels from "../../components/Carousel";
>>>>>>> 80a7479 (Updated with logo and many things)

const ComponentModal = ({ content, closeModal }) => {

    if (!content) {
        return null;
    }

    const renderComponent = () => {
        switch (content.type) {
            case "loader":
                return <LoaderModal />;
            case "card":
                return <Cards />
            case "button":
                return <ButtonTypes />
<<<<<<< HEAD
=======
            case "carousel":
                return <Carousels />
>>>>>>> 80a7479 (Updated with logo and many things)
        }
    }

    console.log("Modal content: ", content);

    return (
        <div className="component-modal-overlay">
            <div className="component-modal">
                <button onClick={closeModal} className="close-button">
                    ×
                </button>
                {renderComponent()}
            </div>
        </div>
    );
};

export default ComponentModal;
