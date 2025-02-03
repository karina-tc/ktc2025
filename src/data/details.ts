// Assets
import flower from "../assets/illustrations/flower.svg";
import flowerLight from "../assets/illustrations/flower-light.svg";
import sheet from "../assets/illustrations/sheet.svg";
import sheetLight from "../assets/illustrations/sheet-light.svg";
import hand from "../assets/illustrations/hand.svg";
import handLight from "../assets/illustrations/hand-light.svg";
import scribble from "../assets/illustrations/scribble.svg";
import scribbleLight from "../assets/illustrations/scribble-light.svg";
import { personalInfo, getEmailLink } from './metadata';

export const details = [
  { label: "Experience", value: "10 years" },
  { label: "Location", value: "East Coast, USA" },
  { label: "Role", value: "Lead Product Designer" },
  { label: "Company", value: "Tropic" },
] as const;

export const links = [
  { icon: sheet, iconLight: sheetLight, href: "/resume", text: "Resume" },
  { icon: scribble, iconLight: scribbleLight, href: "/work", text: "Work Samples" },
  { icon: flower, iconLight: flowerLight, href: "/about", text: "About Me" },
  { icon: hand, iconLight: handLight, href: "/philosophy", text: "My Philosophy" },
] as const;

export const contactInfo = {
  email: personalInfo.contact.email,
  subject: "Hello Karina!",
  body: "I'm reaching out to you because...",
} as const; 
