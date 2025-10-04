import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaCertificate, FaAward } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { 
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (certifications.length === 0) return <div className="loading-container"><div className="loading-spinner"></div></div>;

  return (
    <div className="certifications-container">
      <div className="certifications-header" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <h1 className="certifications-main-title"><FaCertificate /> Certifications & Achievements</h1>
        <p className="certifications-main-subtitle">Professional credentials and learning milestones</p>
        <div className="cert-stats">
          <div className="stat-item">
            <FaAward className="stat-icon" />
            <span className="stat-number">{certifications.length}+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a 
            href={cert.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="certification-card parallax-card" 
            style={{ 
              '--delay': `${index * 0.15}s`,
              transform: `translateY(${scrollY * (0.05 + index * 0.01)}px)`
            } as React.CSSProperties}
          >
            <div className="cert-card-inner">
              <div className="certification-icon-wrapper">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date"><FaAward /> {cert.issuedDate}</span>}
              </div>
              <div className="certification-link animated-icon">
                <FaExternalLinkAlt />
              </div>
              <div className="cert-glow"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
