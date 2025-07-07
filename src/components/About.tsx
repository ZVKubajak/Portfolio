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
        and 6 months contracting at{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/company/green-tea-technology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Green Tea Technology
        </a>
        , I've built production-ready websites, mobile apps, and AI systems. I
        focus on practical backend features such as rate limiting with Redis,
        JWT-based API auth, and cursor-based pagination, while also being
        proficient with frontend development and Tailwind styling.
        <br />
        <br />
        <span className="font-bold">I also work an an AI integrator</span>, with
        experience building custom chatbots and integrating AI features into
        real-world apps.
        <br />
        <br />
        <span className="font-bold">
          I'm now looking for a full-time position
        </span>{" "}
        where I can grow, collaborate with a team, and build applications that
        make an impact.
      </p>
    </motion.section>
  );
};

export default About;
