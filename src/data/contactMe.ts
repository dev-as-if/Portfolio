import { ContactMe } from '../types';

const BASE = (process.env.PUBLIC_URL || '');

export const contactMeData: ContactMe = {
  profilePicture: { url: `${BASE}/images/profile.jpg` },
  name: 'Asif Alam',
  title: 'Software Developer',
  summary:
    'Open for opportunities in innovative teams. I enjoy building impactful products and learning continuously.',
  companyUniversity: 'Marwadi University',
  linkedinLink: 'https://www.linkedin.com/in/asifalam26/',
  email: 'developer.asif@outlook.com',
  phoneNumber: '9798425043',
};

export default contactMeData;


