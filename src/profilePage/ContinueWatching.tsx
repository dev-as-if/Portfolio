import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import Grey from '../images/grey.jpg';
import Daredevil2 from '../images/daredevil2.jpeg';
import MindHunter from '../images/mindhunter.jpg';
import MoneyHeist from '../images/moneyheist.jpg';
import PeakyBlinders from '../images/peakyblinder.jpg';
import Dark from '../images/dark.jpg';
import Witcher from '../images/witcher.jpg';
import StrangerThings from '../images/strangerthings.jpeg';

type ProfileType = 'recruiter' | 'developer' | 'student' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Certifications", imgSrc: `${MindHunter}`, link: "/certifications" },
    { title: "Blogs", imgSrc: `${Dark}`, link: "/blogs" },
    { title: "Contact Me", imgSrc: `${PeakyBlinders}`, link: "/contact-me" }
  ],
  developer: [
    { title: "Development", imgSrc: `${Witcher}`, link: "/development" },
    { title: "Skills", imgSrc: `${Daredevil2}`, link: "/certifications" },
    { title: "Project", imgSrc: `${MoneyHeist}`, link: "/contact-me" },
    { title: "Blogs", imgSrc: `${StrangerThings}`, link: "/blogs" },
  ],
  student: [
    { title: "Skills", imgSrc: `${Daredevil2}`, link: "/certifications" },
    { title: "Blogs", imgSrc: `${Grey}`, link: "/blogs" },
    { title: "Contact Me", imgSrc: `${PeakyBlinders}`, link: "/contact-me" }
  ],
  adventurer: [
    { title: "Certifications", imgSrc: `${MindHunter}`, link: "/certifications" },
    { title: "Blogs", imgSrc: `${Witcher}`, link: "/blogs" },
    { title: "Contact Me", imgSrc: `${PeakyBlinders}`, link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
