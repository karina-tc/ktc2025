import testimonialImage from "../assets/people/javier.png";

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
      image: testimonialImage,
      currentRole: "Product at Tiktok Shop",
      pastRole: "Worked together at Teikametrics",
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
      image: testimonialImage,
      currentRole: "Product at Raptor Maps",
      pastRole: "Worked together at Glue",
    },
    reference: {
      number: "NO. 002",
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
      image: testimonialImage,
      currentRole: "Product at Raptor Maps",
      pastRole: "Worked together at Glue",
    },
    reference: {
      number: "NO. 003",
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
      image: testimonialImage,
      currentRole: "Product at Raptor Maps",
      pastRole: "Worked together at Glue",
    },
    reference: {
      number: "NO. 004",
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
      image: testimonialImage,
      currentRole: "Product at Raptor Maps",
      pastRole: "Worked together at Glue",
    },
    reference: {
      number: "NO. 005",
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
      image: testimonialImage,
      currentRole: "Product at Raptor Maps",
      pastRole: "Worked together at Glue",
    },
    reference: {
      number: "NO. 006",
      link: "#",
    },
  },
]; 