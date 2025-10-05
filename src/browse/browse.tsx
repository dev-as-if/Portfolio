import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.jpg';
import greyImage from '../images/grey.jpg';
import redImage from '../images/red.jpg';
import yellowImage from '../images/yellow.jpg';
import Coder from '../images/_.gif';
import Stranger from '../images/stranger.gif';
import TomCruise from '../images/TomCruise.gif';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      image: blueImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif" // Dark storm clouds
    },
    {
      name: "developer",
      image: greyImage,
      backgroundGif: `${Coder}` // Flickering neon lights
    },
    {
      name: "student",
      image: redImage,
      backgroundGif: `${Stranger}` // Dark, abstract digital lights
    },
    {
      name: "adventurer",
      image: yellowImage,
      backgroundGif: `${TomCruise}` // Dark ocean waves at night
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard  
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
