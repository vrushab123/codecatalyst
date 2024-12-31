import React from "react";
import "./ComponentModal.css";
import LoaderModal from "../../components/LoaderModal";
import Cards from "../../components/CardModal";
import ButtonTypes from "../../components/ButtonTypes";
import Carousels from "../../components/Carousel";

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
            case "carousel":
                return <Carousels />
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
