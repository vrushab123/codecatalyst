import React from "react";
import "./FollowBox.css";

const FollowBox = () => {
    return (
        <div class="follow-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" />
            <span class="username">@code_catalyst27</span>
            <button class="follow-button" onClick={() => window.open('https://www.instagram.com/code_catalyst27/', '_blank')}>Follow Me</button>
            <span class="additional-text">Stay updated with my latest posts!</span>
        </div>
    );
};

export default FollowBox;
