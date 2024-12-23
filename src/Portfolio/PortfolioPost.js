import React from "react";
import "./PortfolioPost.css"; // Optional CSS for styling

const PortfolioPost = () => {
    const fileUrl = "/files/Portfolio.zip"; // Replace with the actual file path or URL

    return (
        <div className="portfolio-post">
            <div className="iframe-container">
                <iframe
                    src="https://vrushab123.github.io/Neon-Template/" // Replace with the website you want to embed
                    title="Your Portfolio Website"
                    width="100%"
                    height="1000px"
                    style={{ border: "none" }}
                ></iframe>
            </div>
            <div className="download-section">
                <button className="download-button">
                    <a href={fileUrl} download>
                        Download Now For Yourself!!!
                    </a>
                </button>
            </div>
        </div>
    );
};

export default PortfolioPost;
