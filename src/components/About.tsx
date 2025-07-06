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
        <span className="font-bold">
          With over a year of hands-on experience
        </span>{" "}
        and currently contracting at{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/company/green-tea-technology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Green Tea Technology
        </a>
        , I've contributed to a range of projects—including full-stack web apps,
        mobile applications, and retrieval-augmented generation (RAG) chatbots.
        I specialize in writing clean, robust backend code with a strong
        emphasis on type safety, but I’m equally comfortable working on the
        frontend—building smooth client-side logic and styling interfaces with
        care. <span className="font-bold">I also work an an AI integrator</span>
        , with experience building multiple custom chatbots and integrating AI
        features into real-world applications. I’ve even worked on training
        lightweight AI models for client-specific use cases. I'm now{" "}
        <span className="font-bold">looking for a full-time position</span>{" "}
        where I can grow, collaborate with a team, and build applications that
        make an impact.
      </p>
    </motion.section>
  );
};

export default About;
