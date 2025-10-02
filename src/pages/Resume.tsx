import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="resume-actions">
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noreferrer">View PDF</a>
        <a className="resume-button outline" href="/resume.pdf" download>Download</a>
      </div>
      <div className="resume-frame">
        <iframe title="Resume" src="/resume.pdf" />
      </div>
    </div>
  );
};

export default Resume;


