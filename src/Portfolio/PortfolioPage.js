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
                </div>
            </div>
        </>
    );
};

export default Portfolio;
