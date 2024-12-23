import React from "react";
import "./FollowBox.css";

const FollowBox = () => {
    return (
        <div className="blog-follow-box">
            <h2>Follow Me</h2>
            <p>@yourusername</p>
            <div className="follow-button">
                <button>Follow</button>
            </div>
        </div>
    );
};

export default FollowBox;
