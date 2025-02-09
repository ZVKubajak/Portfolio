import SectionHeading from "./SectionHeading";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-32 mt-20 mx-12 sm:mx-20 space-y-8 text-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="text-xl xl:text-xl/10 2xl:text-2xl/10 md:mx-auto md:w-3/4 lg:w-1/2">
        <span className="italic">With over a year of experience</span>, I've
        built multiple full-stack websites using modern tools such as{" "}
        <span className="underline underline-offset-2">React and Prisma</span>.
        I focus on writing clean, understandable code while maintaining type
        safety with{" "}
        <span className="underline underline-offset-2">
          TypeScript, Zod, and React Hook Form
        </span>
        . I enjoy{" "}
        <span className="font-bold">
          breaking down complex problems, handling errors, and finding elegant
          solutions
        </span>
        . Always eager to improve, I'm currently diving deeper into{" "}
        <span className="underline underline-offset-2">
          Next.js and Framer Motion
        </span>
        . I’m looking for a web developer role where I can{" "}
        <span className="font-bold">
          continue growing and building great applications
        </span>
        .
      </p>
    </motion.section>
  );
};

export default About;
