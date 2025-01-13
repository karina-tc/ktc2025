import type { ImageMetadata } from 'astro';

import renumerate from "../assets/icons/cv-renumerate.png";
import tropic from "../assets/icons/cv-tropic.png";
import mystery from "../assets/icons/cv-glue.png";
import teikametrics from "../assets/icons/cv-teikametrics.png";
import rejoiner from "../assets/icons/cv-rejoiner.png";

import venly from "../assets/icons/cv-venly.png";
import mit from "../assets/icons/cv-mit.png";
import massart from "../assets/icons/cv-massart.png";
import utep from "../assets/icons/cv-utep.png";

interface Company {
  logo: ImageMetadata;
  name: string;
  role: string;
  period: string;
  description: string;
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

export const workExperience: YearSection[] = [
  {
    year: "Now",
    companies: [
      {
        logo: renumerate,
        name: "Renumerate",
        role: "Fractional Product Designer",
        period: "2024-Present",
        description: "Helped out with the branding and kicked off the product strategy and design.",
      },
    ],
  },
  {
    year: "2024",
    companies: [
      {
        logo: tropic,
        name: "Tropic",
        role: "Lead Product Designer",
        period: "2024-Present",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.tropicapp.io",
      },
      {
        logo: tropic,
        name: "Tropic",
        role: "Senior Product Designer",
        period: "2023-2024",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.tropicapp.io",
      },
    ],
  },
  {
    year: "2023",
    companies: [
      {
        logo: mystery,
        name: "Mystery / Glue",
        role: "Senior Product Designer",
        period: "2022-2023",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.glue.co",
      },
    ],
  },
  {
    year: "2022",
    companies: [
      {
        logo: teikametrics,
        name: "Teikametrics",
        role: "Staff Product Designer",
        period: "2021-2022",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.teikametrics.com",
      },
      {
        logo: teikametrics,
        name: "Teikametrics",
        role: "Senior Product Designer",
        period: "2020-2021",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.teikametrics.com",
      },
    ],
  },
  {
    year: "2020",
    companies: [
      {
        logo: rejoiner,
        name: "Rejoiner",
        role: "Product Owner",
        period: "2019-2020",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.rejoiner.com",
      },
      {
        logo: rejoiner,
        name: "Rejoiner",
        role: "Design Intern",
        period: "2014-2020",
        description: "My motivation is to build products that aim to help people have happier days. Life is too short to be ruined by awful experiences. Every product needs to be crafted for human joy.",
        companyUrl: "https://www.rejoiner.com",
      },
    ],
  },
];

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