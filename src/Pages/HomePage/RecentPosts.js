import React from 'react';
import { Link } from 'react-router-dom';
import './RecentPosts.css';

// Sample data for featured posts
const recentPostsData = [
    {
        image: '/assets/ModernPortfolio.png', // Example image URL
        title: 'Modern Portfolio Website',
        number: 1,
        id: "modern-portfolio",
    },
    {
        image: '/assets/Image Gallery.png', // Example image URL
        title: 'Image Gallery',
        number: 2,
        id: "image-gallery",
    },
    {
        image: '/assets/Hovering 3D.png', // Example image URL
        title: 'Hover To Change',
        number: 3,
        id: "3d-card",
    },
    {
        image: '/assets/product-card.png', // Example image URL
        title: 'Product Card',
        number: 4,
        id: "product-card",
    },
];


const RecentPosts = () => {
    return (
        <section className="recent-posts">
            <div className="recent-posts-header">
                <span>RECENT POSTS</span>
            </div>
            <div className='recent-posts-container'>
                <div className="recent-posts-grid">
                    {recentPostsData.map((post, index) => (
                        <Link to={`/recent-post/${post.id}`} key={index} className='recent-post-link'>
                            <div className="recent-post">
                                <img src={post.image} alt={post.title} className="recent-post-image" />
                                <div className="recent-post-info">
                                    <span className="post-number">{post.number}</span>
                                    <span className="post-title">{post.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div class="follow-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" />
                    <span class="username">@code_catalyst27</span>
                    <button class="follow-button">Follow Me</button>
                    <span class="additional-text">Stay updated with my latest posts!</span>
                </div>

            </div>
        </section>
    );
};

export default RecentPosts;
