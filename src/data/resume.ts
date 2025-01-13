import type { ImageMetadata } from 'astro';
import workExperienceData from './resume.yaml';

// Import images
import renumerate from "../assets/icons/cv-renumerate.png";
import tropic from "../assets/icons/cv-tropic.png";
import mystery from "../assets/icons/cv-glue.png";
import teikametrics from "../assets/icons/cv-teikametrics.png";
import rejoiner from "../assets/icons/cv-rejoiner.png";

import venly from "../assets/icons/cv-venly.png";
import mit from "../assets/icons/cv-mit.png";
import massart from "../assets/icons/cv-massart.png";
import utep from "../assets/icons/cv-utep.png";

interface Achievement {
  text: string;
}

interface Company {
  logo: keyof typeof logoMap;
  name: string;
  role: string;
  period: string;
  intro: string;
  achievements: string[];
  companyUrl?: string;
}

interface YearSection {
  year: string;
  companies: Company[];
}

interface OtherExperience {
  logo: ImageMetadata;
  company: string;
  role: string;
}

interface Education {
  logo: ImageMetadata;
  institution: string;
  degree: string;
}

// Complete logo map with all images
const logoMap = {
  renumerate,
  tropic,
  mystery,
  teikametrics,
  rejoiner,
  venly,
  mit,
  massart,
  utep
};

// Process the YAML data to add the actual image imports
export const workExperience: YearSection[] = workExperienceData.workExperience.map((section: YearSection) => ({
  ...section,
  companies: section.companies.map((company: Company) => ({
    ...company,
    logo: logoMap[company.logo as keyof typeof logoMap] || '',  // Add fallback
  }))
}));

export const otherExperience: OtherExperience[] = [
  {
    logo: venly,
    company: "Venly",
    role: "Graphic Designer"
  },
  {
    logo: mit,
    company: "MIT",
    role: "Freelance Designer"
  },
  {
    logo: massart,
    company: "Massachusetts College of Art & Design",
    role: "Graphic Designer"
  },
  {
    logo: utep,
    company: "University of Texas at El Paso",
    role: "Graphic Designer"
  }
]; 

export const education: Education[] = [
  {
    logo: massart,
    institution: "Massachusetts College of Art & Design",
    degree: "MFA — Studio for Interrelated Media"
  },
  {
    logo: utep,
    institution: "University of Texas at El Paso",
    degree: "BFA — Graphic Design, Drawing"
  }
];