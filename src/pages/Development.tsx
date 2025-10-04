import React from 'react';
import './Projects.css';
import './Development.css';
import { FaGithub, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';
import { SiGit } from 'react-icons/si';
import socialProfiles from '../data/social';

const Development: React.FC = () => {
  const githubUrl = `https://github.com/${socialProfiles.githubUsername}`;
  const pinnedUrl = `${githubUrl}?tab=repositories`;

  return (
    <div className="development-container">
      <div className="development-header">
        <h1 className="development-title"><SiGit /> Development Journey</h1>
        <p className="development-subtitle">Explore my code, contributions, and open source work</p>
      </div>

      <div className="dev-cards-grid">
        <a className="dev-card flip-card" href={githubUrl} target="_blank" rel="noreferrer">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-icon"><FaGithub /></div>
              <h3>GitHub Profile</h3>
              <p>View my complete profile</p>
            </div>
            <div className="flip-card-back">
              <FaGithub className="back-icon" />
              <h3>Let's Connect</h3>
              <p>Explore repositories, contributions & activity</p>
              <span className="cta-text">Click to visit →</span>
            </div>
          </div>
        </a>

        <a className="dev-card flip-card" href={pinnedUrl} target="_blank" rel="noreferrer">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-icon"><FaCode /></div>
              <h3>Repositories</h3>
              <p>Browse my projects</p>
            </div>
            <div className="flip-card-back">
              <FaCodeBranch className="back-icon" />
              <h3>Code Portfolio</h3>
              <p>Web, mobile, AI & tooling projects</p>
              <span className="cta-text">Explore now →</span>
            </div>
          </div>
        </a>

        <div className="dev-card stats-card">
          <div className="stats-content">
            <div className="stat-icon"><FaStar /></div>
            <h3>Open Source</h3>
            <p>Contributing to the community</p>
          </div>
        </div>
      </div>

      <div className="github-contributions">
        <h2 className="contributions-title">Contribution Graph</h2>
        <div className="contributions-wrapper">
          <img
            src={`https://ghchart.rshah.org/${socialProfiles.githubUsername}`}
            alt={`GitHub Contributions for ${socialProfiles.githubUsername}`}
            className="contributions-chart"
          />
        </div>
      </div>
    </div>
  );
};

export default Development;


