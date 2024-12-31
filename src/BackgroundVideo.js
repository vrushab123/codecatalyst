import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
    return (
        <div className="video-container">
            <video autoPlay loop muted className="background-video">
                <source src="/assets/bg.mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
