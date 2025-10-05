import React from 'react';
import './Blogs.css';
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import blogsData from '../data/blogs';

const blogs = blogsData;

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h2 className="blogs-title">My Blog Posts</h2>
        <p className="blogs-intro">A collection of my thoughts, experiences, and insights on software development, hackathons, and my journey in tech.</p>
        <div className="blogs-stats">
          <div className="stat-item">
            <span className="stat-number">{blogs.length}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">LinkedIn</span>
            <span className="stat-label">Platform</span>
          </div>
        </div>
      </div>
      
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a 
            href={blog.url} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="blog-thumbnail">
              {blog.thumbnailUrl ? (
                <img src={blog.thumbnailUrl} alt={blog.title} className="blog-image" />
              ) : (
                <div className="blog-icon-placeholder">
                  <FaLinkedin className="blog-icon" />
                </div>
              )}
              <div className="blog-overlay">
                <FaExternalLinkAlt className="external-link-icon" />
              </div>
            </div>
            
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              {blog.description && <p className="blog-description">{blog.description}</p>}
              <div className="blog-footer">
                <span className="blog-platform">
                  <FaLinkedin className="platform-icon" />
                  LinkedIn
                </span>
                <span className="read-more">Read more →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
