import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import FeaturedPosts from './FeaturedPosts'; // Import your FeaturedPosts component
import RecentPosts from './RecentPosts';
// import './App.css'; // Optionally, if you have global styles
import WhyUs from './WhyUs';
import Footer from './Footer'; // Import your Footer component

function HomePage() {
    return (
        <div>
            {/* Navbar is always present */}
            <Navbar />
            <FeaturedPosts />
            <RecentPosts />
            <WhyUs />
            <Footer />
            {/* Main Content Area */}
            <div className="main-content">
                {/* Placeholder for your future components */}
                {/* <section id="home">
          <h1>Welcome to Home</h1>
        </section>
        <section id="blog">
          <h1>Our Blog</h1>
        </section>
        <section id="items">
          <h1>Our Items</h1>
        </section>
        <section id="hire-us">
          <h1>Hire Us!</h1>
        </section> */}
            </div>
        </div>
    );
}

export default HomePage;
