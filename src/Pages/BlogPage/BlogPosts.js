import React from "react";
import { Link } from "react-router-dom";
import "./BlogPosts.css";

const BlogPosts = () => {
    // const navigate = useNavigate();

    const posts = [
        {
            id: 1,
            image: '/assets/portfolio.png', // Example image URL
            title: "Personal Portfolio",
            description: "Represent Yourself Online While applying for a job.",
            iframeLink: "https://vrushab123.github.io/Portfolio/",
        },
        {
            id: 2,
            image: "/assets/levis.png",
            title: "Levi's Page",
            description: "This is a description for Post 2.",
            iframeLink: "https://vrushab123.github.io/levi-s-page/",
        },
        // {
        //     id: 3,
        //     image: "https://via.placeholder.com/150",
        //     title: "Post 3",
        //     description: "This is a description for Post 3.",
        //     id: "/",
        // },
        // {
        //     id: 4,
        //     image: "https://via.placeholder.com/150",
        //     title: "Post 4",
        //     description: "This is a description for Post 4.",
        //     id: "/",
        // },
        // {
        //     id: 5,
        //     image: "https://via.placeholder.com/150",
        //     title: "Post 4",
        //     description: "This is a description for Post 4.",
        //     id: "/",
        // },
        // {
        //     id: 6,
        //     image: "https://via.placeholder.com/150",
        //     title: "Post 4",
        //     description: "This is a description for Post 4.",
        //     id: "/",
        // },
        // {
        //     id: 7,
        //     image: "https://via.placeholder.com/150",
        //     title: "Post 4",
        //     description: "This is a description for Post 4.",
        //     id: "/",
        // },
        // {
        //     id: 8,
        //     image: "https://via.placeholder.com/150",
        //     title: "Post 4",
        //     description: "This is a description for Post 4.",
        //     id: "/",
        // },
        // Add more posts as needed
    ];

    return (
        <div className="blog-posts-container">
            {posts.map((post) => (
                <Link to={`/blog/${post.id}`} className="read-more" key={post.id}>
                    <div className="blog-post-card">
                        <img src={post.image} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogPosts;
