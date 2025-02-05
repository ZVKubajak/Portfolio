import { motion } from "motion/react";

const About = () => {
  return (
    <section className="mt-20 mx-12 sm:mx-20 space-y-8 text-center">
      <motion.h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
        About Me
      </motion.h1>

      <motion.p className="text-xl xl:text-xl/10 2xl:text-2xl/10 md:mx-auto md:w-3/4 lg:w-1/2">
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
      </motion.p>
    </section>
  );
};

export default About;
