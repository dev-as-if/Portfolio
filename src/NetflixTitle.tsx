import React, { useEffect, useState, useCallback } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png';

const NetflixTitle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const startAnimation = useCallback(() => {
    // Play sound
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    
    // Start animation
    setIsAnimating(true);
    
    // Navigate after animation completes
    const timer = setTimeout(() => {
      navigate('/browse');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  // Handle click to skip the wait
  const handleClick = () => {
    if (!isAnimating) {
      startAnimation();
    }
  };

  // Start automatically after component mounts
  useEffect(() => {
    const autoStartTimer = setTimeout(() => {
      if (!isAnimating) {
        startAnimation();
      }
    }, 4000);

    return () => {
      clearTimeout(autoStartTimer);
    };
  }, [isAnimating, startAnimation]);

  return (
    <div 
      className="netflix-container" 
      onClick={handleClick}
    >
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`} 
      />
    </div>
  );
};

export default NetflixTitle;
