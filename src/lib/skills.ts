import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaRocket,
  FaAws,
  FaDigitalOcean,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiJsonwebtokens,
  SiZod,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiAerospike,
  SiRedis,
  SiTailwindcss,
  SiHuggingface,
} from "react-icons/si";

type Skill = {
  icon: IconType;
  color: string;
  text: string;
  link: string;
};

const skills: Skill[] = [
  {
    icon: FaHtml5,
    color: "#FF803B",
    text: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    icon: FaCss3,
    color: "#3EABDC",
    text: "CSS",
    link: "https://www.w3schools.com/css/",
  },
  {
    icon: SiTypescript,
    color: "#3078C6",
    text: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  {
    icon: FaNodeJs,
    color: "#8CC84B",
    text: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    icon: FaReact,
    color: "#57C4DC",
    text: "React",
    link: "https://react.dev",
  },
  {
    icon: SiExpress,
    color: "#DCD8D8",
    text: "Express",
    link: "https://expressjs.com",
  },
  {
    icon: SiJsonwebtokens,
    color: "#FB005C",
    text: "JWT",
    link: "https://jwt.io",
  },
  {
    icon: SiZod,
    color: "#B4D0FF",
    text: "Zod",
    link: "https://zod.dev",
  },
  {
    icon: SiPostgresql,
    color: "#6698C2",
    text: "PSQL",
    link: "https://www.postgresql.org",
  },
  {
    icon: SiMongodb,
    color: "#5BAE52",
    text: "MongoDB",
    link: "https://www.mongodb.com",
  },
  {
    icon: SiPrisma,
    color: "#FFFFFF",
    text: "Prisma",
    link: "https://www.prisma.io",
  },
  {
    icon: SiAerospike,
    color: "#F8F411",
    text: "Aerospike",
    link: "https://aerospike.com",
  },
  {
    icon: SiRedis,
    color: "#FF4438",
    text: "Redis",
    link: "https://redis.io",
  },
  {
    icon: FaRocket,
    color: "#DC244D",
    text: "Qdrant",
    link: "https://qdrant.tech",
  },
  {
    icon: FaAws,
    color: "#F6FFFF",
    text: "AWS",
    link: "https://aws.amazon.com",
  },
  {
    icon: FaDigitalOcean,
    color: "#0169FF",
    text: "DigitalOcean",
    link: "https://www.digitalocean.com",
  },
  {
    icon: SiTailwindcss,
    color: "#00BCFF",
    text: "Tailwind",
    link: "https://tailwindcss.com",
  },
  {
    icon: SiHuggingface,
    color: "#FFD21F",
    text: "AI",
    link: "https://huggingface.co",
  },
  {
    icon: FaPython,
    color: "#FFE770",
    text: "Python",
    link: "https://www.python.org",
  },
] as const;

export default skills;
