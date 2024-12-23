import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPosts.css";

const BlogPosts = () => {
    const navigate = useNavigate();

    const posts = [
        {
            id: 1,
            image: '/assets/portfolio.png', // Example image URL
            title: "Personal Portfolio",
            description: "Represent Yourself Online While applying for a job.",
            route: "/portfolio",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Post 2",
            description: "This is a description for Post 2.",
            route: "/",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            title: "Post 3",
            description: "This is a description for Post 3.",
            route: "/",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150",
            title: "Post 4",
            description: "This is a description for Post 4.",
            route: "/",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/150",
            title: "Post 4",
            description: "This is a description for Post 4.",
            route: "/",
        },
        {
            id: 6,
            image: "https://via.placeholder.com/150",
            title: "Post 4",
            description: "This is a description for Post 4.",
            route: "/",
        },
        {
            id: 7,
            image: "https://via.placeholder.com/150",
            title: "Post 4",
            description: "This is a description for Post 4.",
            route: "/",
        },
        {
            id: 8,
            image: "https://via.placeholder.com/150",
            title: "Post 4",
            description: "This is a description for Post 4.",
            route: "/",
        },
        // Add more posts as needed
    ];

    return (
        <div className="blog-posts-container">
            {posts.map((post) => (
                <div className="blog-post-card" key={post.id} onClick={() => navigate(post.route)}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPosts;