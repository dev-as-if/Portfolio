import React from 'react';
import './Projects.css';
import './CompetitiveCoding.css';
import { FaCode } from 'react-icons/fa';
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

  const logo = (label: string) => {
    switch (label) {
      case 'LeetCode':
        return 'https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png';
      case 'GeeksforGeeks':
        return 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png';
      case 'HackerRank':
        return 'https://files.prepinsta.com/wp-content/uploads/2025/03/what-is-hackerrank-platform.webp';
      case 'Codeforces':
        return 'https://sta.codeforces.com/s/72481/images/codeforces-logo-with-telegram.png';
      case 'CodeChef':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CodeChef_Logo.svg/1200px-CodeChef_Logo.svg.png';
      default:
        return '';
    }
  };

  return (
    <div className="projects-container">
      <div className="cc-grid">
        {links.length === 0 ? (
          <div className="cc-card">
            <div className="cc-details">
              <h3><FaCode /> Competitive Coding</h3>
              <p>Profiles coming soon. Add your handles in <code>src/data/social.ts</code>.</p>
            </div>
          </div>
        ) : (
          links.map((link) => (
            <a key={link.label} className="cc-card" href={link.href} target="_blank" rel="noreferrer">
              {logo(link.label) && <img className="cc-logo" src={logo(link.label)} alt={link.label} />}
              <div className="cc-details">
                <h3>{link.label}</h3>
                <p>Visit my {link.label} profile.</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default CompetitiveCoding;


