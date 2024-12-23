import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import FollowBox from "../BlogPage/FollowBox";
import "../BlogPage/BlogPage.css";
import ModernPortfolio from "./ModernPortfolio";
import ImageGallery from "./ImageGallery";
import CardHover from "./CardHover";
import ProductCard from "./ProductCard";

const RecentPostPage = () => {
    const { postId } = useParams();

    const renderContent = () => {
        switch (postId) {
            case "modern-portfolio":
                return <ModernPortfolio />;
            case "image-gallery":
                return <ImageGallery />;
            case "3d-card":
                return <CardHover />;
            case "product-card":
                return <ProductCard />;
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
                    <div className="animated-box">
                        <p>Catchy Animated Content</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RecentPostPage;
