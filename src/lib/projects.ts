import stellabytePNG from "../assets/stellabyte.png";
import codeBountyPNG from "../assets/code-bounty.png";
import digbiAIPNG from "../assets/digbi-ai.png";
import lifeguardRTPNG from "../assets/lifeguard-rt.png";
import quotefulPNG from "../assets/quoteful.png";
import bookPagePNG from "../assets/book-page.png";
import employeeTrackerPNG from "../assets/employee-tracker.png";
import cashGuardianPNG from "../assets/cash-guardian.png";

export const projects = [
  {
    name: "Stellabyte",
    description:
      "Mobile-first cloud storage application with a cosmic twist. My goal with Stellabyte was to practice Zod schema validation and media queries using TailwindCSS.",
    technologies: [
      "React",
      "TypeScript",
      "JWT",
      "Zod",
      "Prisma",
      "AWS S3",
      "Tailwind",
    ],
    image: stellabytePNG,
    site: "https://stellabyte-production.up.railway.app",
    link: "https://github.com/ZVKubajak/Stellabyte",
  },
  {
    name: "codeBounty",
    description:
      "Mock-Fiverr website where developers accept job listings posted by clients. Completely internal system with no third-party APIs. First time using Apollo GraphQL.",
    technologies: [
      "React",
      "TypeScript",
      "JWT",
      "GraphQL",
      "MongoDB",
      "React Bootstrap",
    ],
    image: codeBountyPNG,
    site: "https://codebounty-production.up.railway.app",
    link: "https://github.com/ZVKubajak/codeBounty",
  },
  {
    name: "Digbi AI",
    description:
      "Innovative text-to-video (TTV) chatbot powered by the OpenAI and D-ID APIs. When given a JSON file and prompt, it returns a video of the selected face speaking the AI generated response.",
    technologies: ["React", "TypeScript", "JWT", "PSQL", "AWS S3", "OpenAI"],
    image: digbiAIPNG,
    site: "https://www.digbiai.com",
    link: "https://github.com/ZVKubajak/Digbi-AI",
  },
  {
    name: "Lifeguard RT",
    description:
      "Frontend application designed to track lifeguard rotations. This is my first ever project, and it was used and commended by my coworkers in the summer of 2024.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: lifeguardRTPNG,
    site: "https://zvkubajak.github.io/Lifeguard-Rotation-Tracker",
    link: "https://github.com/ZVKubajak/Lifeguard-Rotation-Tracker",
  },
] as const;

export const otherProjects = [
  {
    name: "Quoteful",
    description:
      "Write or generate quotes with the help of AI and share your thoughts with other users. Although it lacks media queries, it was good practice for learning TailwindCSS and Prisma.",
    technologies: [
      "React",
      "TypeScript",
      "JWT",
      "Tailwind",
      "Prisma",
      "OpenAI",
    ],
    image: quotefulPNG,
    site: "https://quoteful-production.up.railway.app",
    link: "https://github.com/ZVKubajak/Quoteful",
  },
  {
    name: "Book Page",
    description:
      "The online library for searching up books and keeping track of your favorite reads.",
    technologies: [
      "React",
      "TypeScript",
      "JWT",
      "PSQL",
      "NYT API",
      "Google Books API",
    ],
    image: bookPagePNG,
    site: "https://book-page-production.up.railway.app",
    link: "https://github.com/ZVKubajak/book-page",
  },
  {
    name: "Employee Tracker",
    description:
      "CLI application for a SQL database that keeps track of departments, roles, managers, and employees.",
    technologies: ["PSQL", "TypeScript", "Inquirer"],
    image: employeeTrackerPNG,
    site: "https://github.com/ZVKubajak/employee-tracker",
    link: "https://github.com/ZVKubajak/employee-tracker",
  },
  {
    name: "Cash Guardian",
    description:
      "Finance tracker that watches monthly income and expenses using responsive charts to display data. My first group project.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Chart.js"],
    image: cashGuardianPNG,
    site: "https://zvkubajak.github.io/cash-guardian",
    link: "https://github.com/ZVKubajak/cash-guardian",
  },
] as const;
