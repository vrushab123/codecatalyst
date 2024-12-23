import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPosts.css';


// Sample data for featured posts
const featuredPostsData = [
    {
        image: '/assets/portfolio.png', // Example image URL
        title: 'Personal Portfolio',
        number: 1,
        id: "portfolio",
    },
    {
        image: '/assets/modernloginform.jpeg', // Example image URL
        title: 'Modern Form',
        number: 2,
        id: "modern-login-form",
    },
    {
        image: '/assets/valentinescard.png', // Example image URL
        title: 'Valentines Card',
        number: 3,
        id: "valentines-card",
    },
    {
        image: '/assets/GymWebsite.jpg', // Example image URL
        title: 'Gym Website',
        number: 4,
        id: "gym-website",
    },
];


const FeaturedPosts = () => {
    // const navigate = useNavigate();

    return (
        <section className="featured-posts">
            <div className="featured-posts-header">
                <span>FEATURED POSTS</span>
            </div>
            <div className='featured-posts-container'>
                <div className="posts-container">
                    {featuredPostsData.map((post, index) => (
                        <Link to={`/featured-post/${post.id}`} key={index} className='featured-post-link'><div className="featured-post" >
                            <img src={post.image} alt={post.title} className="featured-post-image" />
                            <div className="featured-post-info">
                                <span className="post-number">{post.number}</span>
                                <span className="featured-post-title">{post.title}</span>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default FeaturedPosts;
