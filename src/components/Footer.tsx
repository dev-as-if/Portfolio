import React from 'react';
import './Footer.css';
import socialProfiles from '../data/social';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTrophy, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { to: '/browse', label: 'Home' },
    { to: '/work-experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact-me', label: 'Contact' },
  ];

  const socialLinks = [
    { href: socialProfiles.linkedinUrl, icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: `https://github.com/${socialProfiles.githubUsername}`, icon: <FaGithub />, label: 'GitHub' },
    { href: socialProfiles.leetcodeUrl, icon: <SiLeetcode />, label: 'LeetCode' },
    { href: socialProfiles.gfgProfile, icon: <SiGeeksforgeeks />, label: 'GeeksforGeeks' },
    { href: socialProfiles.hackerrankProfile, icon: <FaHackerrank />, label: 'HackerRank' },
    { href: `mailto:${socialProfiles.email}`, icon: <FaEnvelope />, label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h3 className="footer-logo">ASIF ALAM</h3>
          <p className="footer-tagline">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="footer-description">
            Crafting elegant solutions to complex problems. Passionate about building scalable applications and contributing to open source.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="cube-link">
                  <span className="cube-link-inner">
                    <span className="cube-face cube-face-front">{link.label}</span>
                    <span className="cube-face cube-face-bottom">{link.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Connect With Me</h4>
          <ul className="footer-links">
            {socialLinks.filter(link => link.href).map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noreferrer" className="cube-link social-link">
                  <span className="cube-link-inner">
                    <span className="cube-face cube-face-front">
                      {link.icon} {link.label}
                    </span>
                    <span className="cube-face cube-face-bottom">
                      {link.icon} {link.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="footer-contact">
            <p><FaEnvelope /> {socialProfiles.email}</p>
            <p><FaCode /> Open for opportunities</p>
            <p><FaTrophy /> Let's build something amazing!</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copy">© {new Date().getFullYear()} Asif Alam. All rights reserved.</p>
          <p className="footer-made">Made with <span className="heart">❤</span> using React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


