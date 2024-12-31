import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import FollowBox from "../BlogPage/FollowBox";
import "../BlogPage/BlogPage.css";
import "../BlogPostPage/BlogPostPage.css"

const BlogPostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const posts = [
        {
            id: 1,
            iframeLink: "https://vrushab123.github.io/Neon-Template/",
            file: "/files/Portfolio.zip",
        },
        {
            id: 2,
            iframeLink: "https://vrushab123.github.io/levi-s-page/",
            file: "/files/Levis Landing page.zip",
        },
        {
            id: 3,
            iframeLink: "/",
        },
        {
            id: 4,
            iframeLink: "/",
        },
    ];

    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Post Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="blog-page-container">
                <div className="portfolio-post ">
                    <div className="iframe-container">
                        <iframe
                            src={post.iframeLink}
                            title={`Blog Post ${id}`}
                            aria-label={`Embedded content for Blog Post ${id}`}
                            width="100%"
                            height="1000px"
                            style={{ border: "none" }}
                        ></iframe>
                    </div>
                    <div className="download-section">
                        <button className="download-button">
                            <a href={post.file} download>
                                Source Code
                            </a>
                        </button>
                    </div>
                </div>
                <div className="blog-right">
                    <FollowBox />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPostPage;
