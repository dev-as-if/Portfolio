import React from 'react';
import './Footer.css';
import socialProfiles from '../data/social';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <ul className="footer-links">
          <li><a href={`mailto:${socialProfiles.email}`}>Email</a></li>
          <li><a href={socialProfiles.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={`https://github.com/${socialProfiles.githubUsername}`} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
        <div className="footer-copy">© {new Date().getFullYear()} Asif Alam</div>
      </div>
    </footer>
  );
};

export default Footer;


