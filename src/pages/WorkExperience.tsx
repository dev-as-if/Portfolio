import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaStar } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) {
    return (
      <div className="work-experience-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading experience...</p>
        </div>
      </div>
    );
  }

  const getIcon = (type: string, index: number) => {
    if (type === "work") {
      return <FaBriefcase />;
    } else if (type === "education") {
      return <FaGraduationCap />;
    }
    return <FaCode />;
  };

  const getTimelineClass = (index: number, total: number) => {
    if (index === 0) return 'timeline-item first';
    if (index === total - 1) return 'timeline-item last';
    return 'timeline-item';
  };

  return (
    <div className="work-experience-container">
      {/* Header Section */}
      <div className="experience-header">
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-icon"><FaRocket /></span>
            Professional Journey
          </h1>
          <p className="subtitle">My career path and educational milestones</p>
          <div className="timeline-stats">
            <div className="stat-item">
              <span className="stat-number">{timeLineData.filter(item => item.timelineType === 'work').length}</span>
              <span className="stat-label">Work Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{timeLineData.filter(item => item.timelineType === 'education').length}</span>
              <span className="stat-label">Education</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-wrapper">
        <div className="timeline-container">
          {timeLineData.map((item, index) => (
            <div 
              key={index} 
              className={`${getTimelineClass(index, timeLineData.length)} ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Timeline Line */}
              <div className="timeline-line"></div>
              
              {/* Timeline Icon */}
              <div className={`timeline-icon ${item.timelineType}`}>
                {getIcon(item.timelineType, index)}
              </div>

              {/* Timeline Content */}
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="card-type">
                      <span className={`type-badge ${item.timelineType}`}>
                        {item.timelineType === 'work' ? <MdWork /> : <MdSchool />}
                        {item.timelineType === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>
                    <div className="card-date">{item.dateRange}</div>
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-title">
                      {item.timelineType === 'work' ? item.title : item.name}
                    </h3>
                    <h4 className="card-subtitle">
                      {item.timelineType === 'work' ? item.name : item.title}
                    </h4>
                    
                    {item.techStack && (
                      <div className="tech-stack">
                        <span className="tech-label">Technologies:</span>
                        <div className="tech-tags">
                          {item.techStack.split(', ').map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="card-description">
                      <p>{item.summaryPoints}</p>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="card-indicator"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* End Marker */}
          <div className="timeline-end">
            <div className="end-icon">
              <FaStar />
            </div>
            <div className="end-text">More to come...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
