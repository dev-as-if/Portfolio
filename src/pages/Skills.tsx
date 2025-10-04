import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import { Skill } from '../types';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiMongodb, SiExpress, SiNestjs, SiTailwindcss, SiGithub } from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaPython: <FaPython />,
  SiMongodb: <SiMongodb />,
  SiExpress: <SiExpress />,
  SiNestjs: <SiNestjs />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiTailwindcss: <SiTailwindcss />,
  FaGitAlt: <FaGitAlt />,
  SiGithub: <SiGithub />,
};

// Skill logos organized in layers for the scrolling animation
const skillLayers = [
  // Layer 1 - scrolling right
  [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
  ],
  // Layer 2 - scrolling left
  [
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
    { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
    { icon: <SiExpress />, name: 'Express', color: '#000000' },
    { icon: <SiNestjs />, name: 'NestJS', color: '#E0234E' },
    { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
  ],
  // Layer 3 - scrolling right
  [
    { icon: <SiGithub />, name: 'GitHub', color: '#181717' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5' },
    { icon: <SiGooglecloud />, name: 'GCP', color: '#4285F4' },
    { icon: <SiRubyonrails />, name: 'Rails', color: '#CC0000' },
    { icon: <SiSpringboot />, name: 'Spring', color: '#6DB33F' },
    { icon: <SiPhp />, name: 'PHP', color: '#777BB4' },
    { icon: <SiHeroku />, name: 'Heroku', color: '#430098' },
    { icon: <SiNetlify />, name: 'Netlify', color: '#00C7B7' },
  ],
];


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-page">
      {/* Auto-scrolling Hero Section */}
      <div className="skills-hero">
        <div className="hero-content">
          <h1 className="hero-title">Technical Skills</h1>
          <p className="hero-subtitle">Technologies I work with</p>
        </div>
        
        <div className="scrolling-container">
          {skillLayers.map((layer, layerIndex) => (
            <div 
              key={layerIndex} 
              className={`scroll-layer ${layerIndex % 2 === 0 ? 'scroll-right' : 'scroll-left'}`}
            >
              {/* Duplicate the layer twice for seamless infinite scroll */}
              {[...Array(3)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="scroll-content">
                  {layer.map((skill, skillIndex) => (
                    <div 
                      key={`${layerIndex}-${duplicateIndex}-${skillIndex}`} 
                      className="skill-logo-item"
                      style={{ '--skill-color': skill.color } as React.CSSProperties}
                    >
                      <div className="skill-logo-icon">{skill.icon}</div>
                      <span className="skill-logo-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Existing Skills Content */}
      <div className="skills-container">
        {Object.keys(skillsByCategory).map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skillsByCategory[category].map((skill: any, idx: number) => (
                <div key={idx} className="skill-card">
                  <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                  <h3 className="skill-name">
                    {skill.name.split('').map((letter: any, i: number) => (
                      <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                        {letter}
                      </span>
                    ))}
                  </h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
