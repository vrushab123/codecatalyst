import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import FollowBox from "../BlogPage/FollowBox";
import "../BlogPage/BlogPage.css";
import ModernLoginForm from "./ModernLoginForm";
import PortfolioPost from "../../Portfolio/PortfolioPost";
import ValentinesCard from "./ValentinesCard";
import GymWebsite from "./GymWebsite";

const FeaturedPostPage = () => {
    const { postId } = useParams();

    const renderContent = () => {
        switch (postId) {
            case "portfolio":
                return <PortfolioPost />;
            case "modern-login-form":
                return <ModernLoginForm />;
            case "valentines-card":
                return <ValentinesCard />;
            case "gym-website":
                return <GymWebsite />;
            // Add more cases for other components
            default:
                return <p>Post not found</p>;
        }
    };

    return (
        <>
            <Navbar />
            <div className="blog-page-container">
                <div className="blog-left">
                    {/* <BlogPosts /> */}
                    {renderContent()}
                </div>
                <div className="blog-right">
                    <FollowBox />
                    {/* <div className="animated-box">
                        <p>Catchy Animated Content</p>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FeaturedPostPage;
