import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import blueImage from '../images/blue.jpg';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;
  const fullName = 'ASIF ALAM';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriting effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150); // Typing speed: 150ms per character

    return () => clearInterval(typingInterval);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-text">
            <span className="typewriter-text">
              {displayedText}
              {!isTypingComplete && <span className="cursor-blink">|</span>}
            </span>
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/development">Development</Link></li>
            <li><Link to="/competitive-coding">Competitive</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => { navigate('/browse') }} />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <span className="sidebar-name">ASIF ALAM</span>
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/development" onClick={closeSidebar}><FaProjectDiagram /> Development</Link></li>
          <li><Link to="/competitive-coding" onClick={closeSidebar}><FaProjectDiagram /> Competitive</Link></li>
          <li><Link to="/resume" onClick={closeSidebar}><FaProjectDiagram /> Resume</Link></li>
          <li><Link to="/certifications" onClick={closeSidebar}><FaProjectDiagram /> Certifications</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
