import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import FollowBox from "./FollowBox";
import "./BlogPage.css";
import BlogPosts from "./BlogPosts";

const BlogPage = () => {
    return (
        <>
            <Navbar />
            <div className="blog-page-container">
                <div className="blog-left">
                    <h1>Browsing Blogs</h1>
                    <BlogPosts />
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

export default BlogPage;
