import javierIrigoyen from "../assets/people/javier-irigoyen.png";
import annaVonClemm from "../assets/people/anna-von-clemm.png";
import laurentBaumann from "../assets/people/laurent-baumann.png";
import sheetalBongale from "../assets/people/sheetal-bongale.png";
import ryanKuczka from "../assets/people/ryan-kuczka.png";
import michaelViscariello from "../assets/people/michael-viscariello.png";

export interface Testimonial {
  quote: {
    title: string;
    content: string;
  };
  author: {
    name: string;
    image: ImageMetadata;
    currentRole: string;
    pastRole: string;
    pastCompany: string;
  };
  reference: {
    number: string;
    link?: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      title: "Strategic Builder",
      content: "Karina is an incredibly resourceful and proactive designer. She quickly delivers UX prototypes and final solutions while seamlessly stepping into a PM role throughout the product development lifecycle, making her a valuable partner for any PM.",
    },
    author: {
      name: "Javier Irigoyen R.",
      image: javierIrigoyen,
      currentRole: "Product at Tiktok Shop",
      pastRole: "Worked directly with Javier",
      pastCompany: "From Teikametrics",
    },
    reference: {
      number: "NO. 001",
      link: "#",
    },
  },
  {
    quote: {
      title: "Can Do it All",
      content: "Karina really shines at UX but can do everything from graphic design to video to frontend code. For example, we were short on engineers and she completely re-themed our app over the course of a few days. It's fun to give her a set of requirements and then watch her think big and never put constraints on what she can/can't do.",
    },
    author: {
      name: "Anna Von Clemm",
      image: annaVonClemm,
      currentRole: "Product at Raptor Maps",
      pastRole: "Worked directly with Anna",
      pastCompany: "From Glue",
    },
    reference: {
      number: "NO. 002",
      link: "#",
    },
  },
  {
    quote: {
      title: "Super Fast",
      content: "I have never seen a designer this fast. We would discuss ideas, and the next day Karina would have MULTIPLE flows laid out, ready to be discussed and tweaked. I have worked with and managed many designers in the past. None of them is that fast.",
    },
    author: {
      name: "Laurent Baumann",
      image: laurentBaumann,
      currentRole: "Director of Product Design at Nex",
      pastRole: "Reported to Laurent",
      pastCompany: "From Glue",
    },
    reference: {
      number: "NO. 003",
      link: "#",
    },
  },
  {
    quote: {
      title: "Deep Understanding",
      content: "Karina's dedication to researching and understanding the user and their experience sets her apart. She goes above and beyond to gather user insights, ensuring that her designs are rooted in a deep understanding of their needs and expectations.",
    },
    author: {
      name: "Sheetal Bongale",
      image: sheetalBongale,
      currentRole: "Senior Data Analyst at Upshop",
      pastRole: "Worked alongside Sheetal",
      pastCompany: "From Glue",
    },
    reference: {
      number: "NO. 004",
      link: "#",
    },
  },
  {
    quote: {
      title: "Technical Prowess",
      content: "While Karina's focus at Rejoiner was on the product ownership and design, she had a solid grasp of the engineering that went into building the product as well. It was not uncommon for me to build out a functional, but bare-bones MVP of a feature and hand it off to Karina, only to come back the next day to a fully stylized and beautiful product.",
    },
    author: {
      name: "Ryan Kuczka",
      image: ryanKuczka,
      currentRole: "Principal Engineer at Red Ventures",
      pastRole: "Worked directly with Ryan",
      pastCompany: "From Rejoiner",
    },
    reference: {
      number: "NO. 005",
      link: "#",
    },
  },
  {
    quote: {
      title: "Action Oriented",
      content: "Karina is one of the most action oriented designers I've ever worked with; no task is too big or small. On top of providing first-class UX designs, she proactively bridged gaps between Product, Design, and Development to ensure projects were successful. Her professionalism and sense for what makes a great user experience is simply astounding.",
    },
    author: {
      name: "Michael Viscariello",
      image: michaelViscariello,
      currentRole: "Product Leader, Data & Growth Advisor",
      pastRole: "Worked directly with Michael",
      pastCompany: "From Tropic",
    },
    reference: {
      number: "NO. 006",
      link: "#",
    },
  },
]; 