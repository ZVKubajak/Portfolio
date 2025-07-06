import SectionHeading from "./SectionHeading";
import { motion } from "motion/react";
import skills from "../lib/skills";

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="scroll-mt-32 mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 md:gap-x-3 lg:gap-x-4 2xl:gap-y-3 mt-12 2xl:mt-16">
        {skills.map((skill, index) => (
          <a href={skill.link} target="_blank" rel="noopener noreferrer">
            <motion.li
              key={index}
              className="flex border shadow-sm sm:shadow-md border-gray-500 rounded-lg bg-amber-100/15 text-gray-800 text-lg 2xl:text-xl px-3 sm:px-4 md:px-3 py-1 sm:py-2 lg:py-2.5 2xl:py-3 dark:bg-gray-950 dark:text-sky-50 dark:border-gray-700 hover:border-white transition-colors duration-200"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <skill.icon
                size={24}
                color={skill.color}
                className="mt-0.75 mr-2"
              />
              {skill.text}
            </motion.li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
