import type { CaseStudyMeta } from "../types/CaseStudy";

export const caseStudies: Record<string, CaseStudyMeta> = {
  beyondContracts: {
    title: "Beyond Contracts",
    description: "How we rebuilt Tropic to make suppliers the heart of our platform. Evolving from contract focused to a true spend management solution.",
    subheading: "Building Financial Clarity",
    company: "Tropic",
    role: "Lead Product Designer",
    status: "Launched",
    timeline: "H2 2024 — H1 2025",
    focusAreas: "Product Design, Strategy, Information Architecture, Architecture, Systems Design, UX Research"
  },
  // Add more case studies here
  supplierPortal: {
    title: "Supplier Portal",
    description: "Creating a dedicated space for suppliers to manage their relationship with customers.",
    subheading: "Empowering Suppliers",
    company: "Tropic",
    role: "Lead Product Designer",
    status: "In Progress",
    timeline: "H1 2024",
    focusAreas: "Product Design, User Research, Information Architecture"
  },
  // ... more case studies
};

// Helper function to get a case study by ID
export function getCaseStudy(id: keyof typeof caseStudies): CaseStudyMeta {
  return caseStudies[id];
} 