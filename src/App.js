import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Pages/HomePage/HomePage'; // Updated import
import BlogPage from './Pages/BlogPage/BlogPage';
import ItemsPage from './Pages/ItemsPage/ItemsPage';
import Portfolio from './Portfolio/PortfolioPage';
// import ModernLoginForm from './Pages/FeaturedPostPage/ModernLoginForm';
import FeaturedPostPage from './Pages/FeaturedPostPage/FeaturedPostPage';
import RecentPostPage from './Pages/RecentPostPage/RecentPostPage';
import ProjectsPage from './Pages/ProjectPage/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />
        } />
        <Route path="/items" element={<ItemsPage />
        } />
        <Route path="/portfolio" element={<Portfolio />
        } />
        <Route path="/featured-post/:postId" element={<FeaturedPostPage />
        } />
        <Route path="/recent-post/:postId" element={<RecentPostPage />
        } />
        <Route path="/projects" element={<ProjectsPage />
        } />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
