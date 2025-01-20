// Assets
import flower from "../assets/illustrations/flower.svg";
import sheet from "../assets/illustrations/sheet.svg";
import hand from "../assets/illustrations/hand.svg";
import scribble from "../assets/illustrations/scribble.svg";
import { personalInfo, getEmailLink } from './metadata';

export const details = [
  { label: "Experience", value: "10 years" },
  { label: "Level", value: "Super IC" },
  { label: "Location", value: "East Coast, USA" },
  { label: "Role", value: "Lead Product Designer" },
  { label: "Company", value: "Tropic" },
] as const;

export const links = [
  { icon: hand, href: "/resume", text: "Resume" },
  { icon: sheet, href: "/work", text: "Work Samples" },
  { icon: flower, href: "/about", text: "About Me" },
  { icon: scribble, href: "/philosophy", text: "My Philosophy" },
] as const;

export const contactInfo = {
  email: personalInfo.contact.email,
  subject: "Hello Karina!",
  body: "I'm reaching out to you because...",
} as const; 
