import React from "react";
import "./LoaderModal.css";

const LoaderModal = () => {
    return (
        <div className="loader-modal">
            <h2>Loader Preview</h2>
            <iframe className="loader-iframe"
                src="https://cssloaders.github.io" // Replace with dynamic URLs if needed
                title="Loader Component"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LoaderModal;
