import React from "react";
import Navbar from "../Pages/HomePage/Navbar";
import "./PortfolioPage.css";
import "../Pages/BlogPage/BlogPage.css"
import FollowBox from "../Pages/BlogPage/FollowBox";
import PortfolioPost from "./PortfolioPost";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="blog-page-container">
                <div className="blog-left">
                    <h1>Your Personal Portfolio!!!</h1>
                    <PortfolioPost />
                </div>
                <div className="blog-right">
                    <FollowBox />
<<<<<<< HEAD
                    <div className="animated-box">
                        <p>Catchy Animated Content</p>
                    </div>
=======
>>>>>>> 80a7479 (Updated with logo and many things)
                </div>
            </div>
        </>
    );
};

export default Portfolio;
