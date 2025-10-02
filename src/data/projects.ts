import { Project } from '../types';
 
const BASE = (process.env.PUBLIC_URL || '');
// Use filenames; components will resolve from src/images or public/images

export const projectsData: Project[] = [
  {
    title: 'Coaching',
    description:
      'Cross-platform app for coaching institutes with role-based login. Features include fee tracking, study material upload, and quizzes using Firebase backend. Used by 200+ students.',
    techUsed: 'Flutter, Dart, Firebase',
    image: { url: `1.png` },
  },
  {
    title: 'Manage Your Money',
    description:
      'Income/expense tracking mobile app with category-wise insights, investment tips via Alpha Vantage API, and PDF reports. Firebase for auth and data storage.',
    techUsed: 'Flutter, Firebase, Alpha Vantage API, Dart',
    image: { url: `2.png` },
  },
  {
    title: 'Data Insighter',
    description:
      'AI-driven web app for dynamic visual reports and business insights. Integrates Gemini Flash 2.0 for visualization and chatbot analytics with one-click PDF export.',
    techUsed: 'Python, Streamlit, Plotly, Pandas, pdfkit, Gemini Flash 2.0',
    image: { url: `3.png` },
  },
  {
    title: 'Notes',
    description:
      'Web app to create, share, and access categorized study notes. Backend uses Java Servlets and JDBC with MySQL.',
    techUsed: 'Java Servlet, JSP, JDBC, HTML, CSS',
    image: { url: `4.png` },
  },
];

export default projectsData;


