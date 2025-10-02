export interface SocialProfiles {
  githubUsername: string;
  linkedinUrl: string;
  email: string;
  leetcodeUsername?: string;
  leetcodeUrl?: string;
  codeforcesHandle?: string;
  codechefHandle?: string;
  gfgProfile?: string;
  hackerrankProfile?: string;
}

export const socialProfiles: SocialProfiles = {
  githubUsername: 'Code-Asif',
  linkedinUrl: 'https://www.linkedin.com/in/asifalam26/',
  email: 'developer.asif@outlook.com',
  leetcodeUsername: 'asifalam26',
  leetcodeUrl: 'https://leetcode.com/u/code_asif/',
  codeforcesHandle: undefined,
  codechefHandle: 'asif_cs26',
  gfgProfile: 'https://www.geeksforgeeks.org/user/asifcs26/',
  hackerrankProfile: 'https://www.hackerrank.com/profile/safety_asif_alam',
};

export default socialProfiles;


