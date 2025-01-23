export const personalInfo = {
  name: {
    first: "Karina",
    last: "Tovar",
    full: "Karina Tovar",
    formal: "Karina Tovar Castro"
  },
  role: "Lead Product Designer",
  contact: {
    email: "hello@karinatovar.com",
    phone: "" // Add if needed
  },
  location: "East Coast, USA",
  social: {
    linkedin: {
      handle: "karina-tovar-castro",
      url: "https://www.linkedin.com/in/karina-tovar-castro/"
    },
    github: {
      handle: "karina-tc",
      url: "https://github.com/karina-tc"
    },
    threads: {
      handle: "karinasteethgap",
      url: "https://www.threads.net/@karinasteethgap"
    }
  },
  website: "https://karinatovar.com"
} as const;

// Helper function to generate email link with subject and body
export function getEmailLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  return `mailto:${personalInfo.contact.email}${queryString ? `?${queryString}` : ''}`;
} 