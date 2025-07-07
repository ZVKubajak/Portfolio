import byteclubPNG from "../assets/byte-club.png";
import ragChatbotPNG from "../assets/rag-chatbot.png";
import stellabytePNG from "../assets/stellabyte.png";
import lifeguardRTPNG from "../assets/lifeguard-rt.png";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  site: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: "Byte Club",
    description:
      "Byte Club is an AI-powered food review app and is my team's biggest project yet. Although it's not released, you can check out our slides for details on its architecture and technical features.",
    technologies: [
      "Aerospike",
      "Zod",
      "JWT",
      "Redis",
      "TypeScript",
      "React Native",
      "Expo",
      "Express",
      "DigitalOcean",
      "AI",
    ],
    image: byteclubPNG,
    site: "",
    link: "https://docs.google.com/presentation/d/1iOjyOw4eTKpZ7pYSLlNu0btY9SRFsKFRHFo1cMeUjzg/edit?usp=sharing",
  },
  {
    name: "RAG Chatbot",
    description:
      "A retrieval-augmented generation chatbot built on a Qdrant vector database. Users can upload PDF, TXT, CSV, XLS files as well as scrape websites when given a link. Includes rate limiting and session storing.",
    technologies: [
      "OpenAI",
      "Qdrant",
      "Redis",
      "Prisma",
      "MongoDB",
      "TypeScript",
    ],
    image: ragChatbotPNG,
    site: "https://rag-chatbot-production-ffa2.up.railway.app",
    link: "https://github.com/ZVKubajak/rag-chatbot",
  },
] as const;

export const otherProjects: Project[] = [
  {
    name: "Stellabyte",
    description:
      "Stellabyte is a cloud storage platform built on Amazon S3 and Prisma + MongoDB. User's can store files while turning them into artwork with a celestial aesthetic.",
    technologies: [
      "TypeScript",
      "React",
      "Prisma",
      "MongoDB",
      "Zod",
      "JWT",
      "AWS S3",
    ],
    image: stellabytePNG,
    site: "https://stellabyte-production.up.railway.app",
    link: "https://github.com/ZVKubajak/Stellabyte",
  },
  {
    name: "Lifeguard RT",
    description:
      "Frontend application leveraging local storage for tracking lifeguard rotations on the job. This was my first ever project released in July 2024, and it was used and commended by pool supervisors when I worked as a lifeguard.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: lifeguardRTPNG,
    site: "https://zvkubajak.github.io/Lifeguard-Rotation-Tracker/",
    link: "https://github.com/ZVKubajak/Lifeguard-Rotation-Tracker",
  },
] as const;
