import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
// Removed: WorkPermit
import WorkExperience from './pages/WorkExperience';
// Removed: Recommendations
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
// Removed: Music
// Removed: Reading
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import Development from './pages/Development';
import CompetitiveCoding from './pages/CompetitiveCoding';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      {/** Work Permit route removed */}
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      {/** Recommendations route removed */}
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/development" element={<Layout><Development /></Layout>} />
      <Route path="/competitive-coding" element={<Layout><CompetitiveCoding /></Layout>} />
      <Route path="/resume" element={<Layout><Resume /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
    </Routes>
  );
};

export default App;
