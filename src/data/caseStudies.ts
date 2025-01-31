import tropicImage from "../assets/blog/ruby-on-rails.png";

export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Tropic",
    subtitle: "Beyond Contracts",
    description:
      "I am an artist, turned product designer, who likes to code and make things. That just means that I am obsessed over how",
    tags: ["Product Design", "Strategy", "Design Engineering"],
    image: tropicImage,
    imageAlt: "Tropic platform interface showing supplier management features",
    href: "/work/beyond-contracts",
  },
  {
    title: "Tropic",
    subtitle: "Ask Tropic",
    description:
      "I am an artist, turned product designer, who likes to code and make things. That just means that I am obsessed over how",
    tags: ["Product Design", "Strategy", "Design Engineering"],
    image: tropicImage,
    imageAlt: "Tropic platform interface showing supplier management features",
    href: "/work/ask-tropic",
  },
  {
    title: "Tropic",
    subtitle: "Building Supplier Intelligence",
    description:
      "I am an artist, turned product designer, who likes to code and make things. That just means that I am obsessed over how",
    tags: ["Product Design", "Strategy", "Design Engineering"],
    image: tropicImage,
    imageAlt: "Tropic platform interface showing supplier management features",
    href: "/work/tropic",
  },
]; 