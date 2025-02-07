import stellabytePNG from "../../public/stellabyte.png";
import codeBountyPNG from "../../public/code-bounty.png";
import digbiAIPNG from "../../public/digbi-ai.png";
import lifeguardRTPNG from "../../public/lifeguard-rt.png";
import quotefulPNG from "../../public/quoteful.png";
import bookPagePNG from "../../public/book-page.png";
import employeeTrackerPNG from "../../public/employee-tracker.png";
import cashGuardianPNG from "../../public/cash-guardian.png";

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
    site: "",
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
    site: "",
    link: "https://github.com/ZVKubajak/codeBounty",
  },
  {
    name: "Digbi AI",
    description:
      "Innovative text-to-video (TTV) chatbot powered by the OpenAI and D-ID APIs. When given a JSON file and prompt, it returns a video of the selected face speaking the AI generated response.",
    technologies: ["React", "TypeScript", "JWT", "PSQL", "AWS S3", "OpenAI"],
    image: digbiAIPNG,
    site: "",
    link: "https://github.com/ZVKubajak/Digbi-AI",
  },
  {
    name: "Lifeguard RT",
    description:
      "Frontend application designed to track lifeguard rotations. This is my first ever project, and it was used and commended by my coworkers in the summer of 2024.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: lifeguardRTPNG,
    site: "",
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
    site: "",
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
    site: "",
    link: "https://github.com/ZVKubajak/book-page",
  },
  {
    name: "Employee Tracker",
    description:
      "CLI application for a SQL database that keeps track of departments, roles, managers, and employees.",
    technologies: ["PSQL", "TypeScript", "Inquirer"],
    image: employeeTrackerPNG,
    site: "",
    link: "https://github.com/ZVKubajak/employee-tracker",
  },
  {
    name: "Cash Guardian",
    description:
      "Finance tracker that watches monthly income and expenses using responsive charts to display data. My first group project.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Chart.js"],
    image: cashGuardianPNG,
    site: "",
    link: "https://github.com/ZVKubajak/cash-guardian",
  },
] as const;
