import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const resumePath = `${process.env.PUBLIC_URL}/resume.pdf`;
  
  return (
    <div className="resume-container">
      <div className="resume-actions">
        <a className="resume-button" href={resumePath} target="_blank" rel="noreferrer">View PDF</a>
        <a className="resume-button outline" href={resumePath} download>Download</a>
      </div>
      <div className="resume-frame">
        <iframe title="Resume" src={resumePath} />
      </div>
    </div>
  );
};

export default Resume;


