import React, { useState } from 'react';
import './Projects.css';
import './CompetitiveCoding.css';
import { FaCode, FaTrophy, FaMedal } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';
import socialProfiles from '../data/social';

const CompetitiveCoding: React.FC = () => {
  const links = [
    (socialProfiles.leetcodeUrl || socialProfiles.leetcodeUsername) && {
      label: 'LeetCode',
      href: socialProfiles.leetcodeUrl || `https://leetcode.com/${socialProfiles.leetcodeUsername}/`,
    },
    socialProfiles.codeforcesHandle && {
      label: 'Codeforces',
      href: `https://codeforces.com/profile/${socialProfiles.codeforcesHandle}`,
    },
    socialProfiles.codechefHandle && {
      label: 'CodeChef',
      href: `https://www.codechef.com/users/${socialProfiles.codechefHandle}`,
    },
    socialProfiles.gfgProfile && { label: 'GeeksforGeeks', href: socialProfiles.gfgProfile },
    socialProfiles.hackerrankProfile && { label: 'HackerRank', href: socialProfiles.hackerrankProfile },
  ].filter(Boolean) as { label: string; href: string }[];

  const getIcon = (label: string) => {
    switch (label) {
      case 'LeetCode':
        return <SiLeetcode />;
      case 'GeeksforGeeks':
        return <SiGeeksforgeeks />;
      case 'HackerRank':
        return <FaCode />;
      case 'Codeforces':
        return <SiCodeforces />;
      case 'CodeChef':
        return <SiCodechef />;
      default:
        return <FaCode />;
    }
  };

  const getColor = (label: string) => {
    switch (label) {
      case 'LeetCode':
        return '#FFA116';
      case 'GeeksforGeeks':
        return '#2F8D46';
      case 'HackerRank':
        return '#00EA64';
      case 'Codeforces':
        return '#1F8ACB';
      case 'CodeChef':
        return '#5B4638';
      default:
        return '#e50914';
    }
  };

  return (
    <div className="competitive-container">
      <div className="competitive-header">
        <h1 className="competitive-title"><FaTrophy /> Competitive Programming</h1>
        <p className="competitive-subtitle">Problem solving across multiple platforms</p>
      </div>

      <div className="cc-grid">
        {links.length === 0 ? (
          <div className="cc-card empty-card">
            <div className="cc-icon"><FaCode /></div>
            <div className="cc-details">
              <h3>Competitive Coding</h3>
              <p>Profiles coming soon. Add your handles in <code>src/data/social.ts</code>.</p>
            </div>
          </div>
        ) : (
          links.map((link, index) => (
            <a 
              key={link.label} 
              className="cc-card tilt-card" 
              href={link.href} 
              target="_blank" 
              rel="noreferrer"
              style={{ '--platform-color': getColor(link.label), '--delay': `${index * 0.15}s` } as React.CSSProperties}
            >
              <div className="cc-card-inner">
                <div className="cc-icon" style={{ color: getColor(link.label) }}>
                  {getIcon(link.label)}
                </div>
                <div className="cc-details">
                  <h3>{link.label}</h3>
                  <p>View my {link.label} profile</p>
                  <div className="platform-badge">
                    <FaMedal /> Active
                  </div>
                </div>
                <div className="card-shine"></div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default CompetitiveCoding;


