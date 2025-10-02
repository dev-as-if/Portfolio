import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import socialProfiles from '../data/social';

const Development: React.FC = () => {
  const githubUrl = `https://github.com/${socialProfiles.githubUsername}`;
  const pinnedUrl = `${githubUrl}?tab=repositories`;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        <a className="project-card" href={githubUrl} target="_blank" rel="noreferrer" style={{ '--delay': `0s` } as React.CSSProperties}>
          <div className="project-details">
            <h3><FaGithub /> GitHub Profile</h3>
            <p>Explore my repositories, contributions and activity.</p>
          </div>
        </a>
        <a className="project-card" href={pinnedUrl} target="_blank" rel="noreferrer" style={{ '--delay': `0.1s` } as React.CSSProperties}>
          <div className="project-details">
            <h3>Repositories</h3>
            <p>Browse projects across web, mobile, AI and tooling.</p>
          </div>
        </a>
      </div>
      <div style={{ padding: 16 }}>
        <img
          src={`https://ghchart.rshah.org/${socialProfiles.githubUsername}`}
          alt={`GitHub Contributions for ${socialProfiles.githubUsername}`}
          style={{ width: '100%', height: 'auto', border: '1px solid rgba(255,255,255,0.08)', background: '#111', borderRadius: 4 }}
        />
      </div>
    </div>
  );
};

export default Development;


