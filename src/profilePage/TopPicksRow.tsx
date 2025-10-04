import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaFile, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Daredevil1 from '../images/daredevil1.jpg';
import Daredevil2 from '../images/daredevil2.jpeg';
import Daredevil3 from '../images/daredevil3.jpg';
import MindHunter from '../images/mindhunter.jpg';
import MoneyHeist from '../images/moneyheist.jpg';
import PeakyBlinders from '../images/peakyblinder.jpg';
import Dark from '../images/dark.jpg';
import Witcher from '../images/witcher.jpg';
import Adolescence from '../images/Adolescence.webp';
import StrangerThings from '../images/strangerthings.jpeg';
import BetterCallSaul from '../images/BetterCallSaul.jpg';


type ProfileType = 'recruiter' | 'developer' | 'student' | 'adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Resume", imgSrc: `${Daredevil1}`, icon: <FaFile />, route: "/resume" },
    { title: "Certifications", imgSrc: `${MindHunter}`, icon: <FaCertificate />, route: "/certifications" },
    { title: "Projects", imgSrc: `${MoneyHeist}`, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: `${PeakyBlinders}`, icon: <FaEnvelope />, route: "/contact-me" },
    { title: "Skills", imgSrc: `${Daredevil3}`, icon: <FaCode />, route: "/skills" },
  ],
  developer: [
    { title: "Skills", imgSrc: `${Daredevil3}`, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: `${MoneyHeist}`, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Development", imgSrc: `${Witcher}`, icon: <FaFile />, route: "/development" },
    { title: "Certifications", imgSrc: `${MindHunter}`, route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: `${PeakyBlinders}`, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  student: [
    { title: "Certifications", imgSrc: `${Adolescence}`, route: "/certifications", icon: <FaCertificate /> },
    { title: "Competitive", imgSrc: `${Dark}`, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Skills", imgSrc: `${Daredevil1}`, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: `${StrangerThings}`, route: "/projects", icon: <FaProjectDiagram /> },
  ],
  adventurer: [
    { title: "Projects", imgSrc: `${MoneyHeist}`, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: `${MindHunter}`, route: "/certifications", icon: <FaCertificate /> },
    { title: "Skills", imgSrc: `${Daredevil2}`, route: "/skills", icon: <FaCode /> },
    { title: "Development", imgSrc: `${BetterCallSaul}`, route: "/development", icon: <FaFile /> },
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
