import React from 'react';
import './Blogs.css';
import { FaLinkedin } from 'react-icons/fa';
import blogsData from '../data/blogs';

const blogs = blogsData;

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.url} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            {blog.thumbnailUrl ? (
              <img src={blog.thumbnailUrl} alt={blog.title} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover' }} />
            ) : (
              <div className="blog-icon animated-icon"><FaLinkedin /></div>
            )}
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              {blog.description && <p className="blog-description">{blog.description}</p>}
              <span className="blog-platform">LinkedIn</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
