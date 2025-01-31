interface CaseStudyMeta {
  title: string;
  description: string;
  subheading: string;
  company: string;
  role: string;
  status: string;
  timeline: string;
  focusAreas: string;
  lastUpdated?: string;
}

export const caseStudies: Record<string, CaseStudyMeta> = {
  // Tropic Supplierverse
  beyondContracts: {
    title: "Beyond Contracts",
    description: "How we rebuilt Tropic to make suppliers the heart of our platform. Evolving from contract focused to a true spend management solution.",
    subheading: "Building Financial Clarity",
    company: "Tropic",
    role: "Lead Product Designer",
    status: "Launched",
    timeline: "H2 2024 — H1 2025",
    focusAreas: "Product Design, Strategy, Information Architecture, Architecture, Systems Design, UX Research",
    lastUpdated: "January 2025"
  },
  // Tropic Ask AI
  askTropic: {
    title: "Ask Tropic",
    description: "How we created a new AI-powered assistant to help Tropic customers get answers to their questions.",
    subheading: "Assisted Intelligence",
    company: "Tropic",
    role: "Lead Product Designer",
    status: "In Beta",
    timeline: "December 2024",
    focusAreas: "Product Design, Information Architecture, Design Engineering",
    lastUpdated: "January 2025"
  },
  // Tropic Supplier Intelligence
  supplierIntelligence: {
    title: "Supplier Intelligence",
    description: "How we created a new product for Tropic that highlighted its data and created a new intelligent platform.",
    subheading: "Data as a Service",
    company: "Tropic",
    role: "Lead Product Designer",
    status: "Launched",
    timeline: "Q1 2024 - Q3 2024",
    focusAreas: "Product Design, Strategy, Information Architecture, Systems Design, UXR",
    lastUpdated: "January 2025"
  },
  // Mystery / Glue
  peopleGlue: {
    title: "People Glue",
    description: "How we rebranded and redesigned Mystery into Glue to help companies create a more connected and engaged workforce.",
    subheading: "Connecting Employees",
    company: "Mystery / Glue",
    role: "Sr. Product Designer",
    status: "Launched",
    timeline: "2022 - 2023",
    focusAreas: "Product Design, Design Systems",
    lastUpdated: "January 2025"
  }
};

// Helper function to get a case study by ID
export function getCaseStudy(id: keyof typeof caseStudies): CaseStudyMeta {
  return caseStudies[id];
} 