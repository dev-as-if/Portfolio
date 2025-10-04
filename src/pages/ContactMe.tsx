import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';
import socialProfiles from '../data/social';

const ContactMe: React.FC = () => {

  const [userData, setUserData] = useState<IContactMe>()

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">I'm always open to discussing new projects, opportunities, or partnerships</p>
      </div>

      <div className="contact-grid">
        {/* Profile Card with 3D Effect */}
        <div className="profile-card-3d">
          <div className="profile-card-inner">
            <div className="profile-image-wrapper">
              <img
                src={userData.profilePicture.url || (process.env.PUBLIC_URL + '/images/profile.jpg')}
                onError={(e: any) => {
                  e.currentTarget.onerror = null;
                  try {
                    const local = require('../images/profile.jpg');
                    e.currentTarget.src = local.default || local;
                  } catch (_) {
                    e.currentTarget.src = process.env.PUBLIC_URL + '/logo192.png';
                  }
                }}
                alt={userData.name}
                className="profile-avatar-3d"
              />
              <div className="profile-glow"></div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{userData?.name}</h2>
              <p className="profile-title">{userData.title}</p>
              <p className="profile-description">{userData.summary}</p>
              <p className="profile-company">{userData.companyUniversity}</p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods">
          <a href={`mailto:${userData.email}`} className="contact-method-card email-card">
            <div className="method-icon"><FaEnvelope /></div>
            <div className="method-content">
              <h3>Email Me</h3>
              <p>{userData.email}</p>
            </div>
          </a>

          <a href={`tel:${userData.phoneNumber}`} className="contact-method-card phone-card">
            <div className="method-icon"><FaPhoneAlt /></div>
            <div className="method-content">
              <h3>Call Me</h3>
              <p>{userData.phoneNumber}</p>
            </div>
          </a>

          <a href={userData.linkedinLink} target="_blank" rel="noopener noreferrer" className="contact-method-card linkedin-card">
            <div className="method-icon"><FaLinkedin /></div>
            <div className="method-content">
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>

          <a href={`https://github.com/${socialProfiles.githubUsername}`} target="_blank" rel="noopener noreferrer" className="contact-method-card github-card">
            <div className="method-icon"><FaGithub /></div>
            <div className="method-content">
              <h3>GitHub</h3>
              <p>View my code</p>
            </div>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="contact-cta">
        <h2>Ready to start a project?</h2>
        <p>Let's build something amazing together!</p>
        <a href={`mailto:${userData.email}`} className="cta-button">
          <FaEnvelope /> Get In Touch
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
