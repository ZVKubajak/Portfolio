import SectionHeading from "./SectionHeading";
import skills from "../lib/skills";

const Skills = () => {
  return (
    <section className="mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center">
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 md:gap-x-3 lg:gap-x-4 2xl:gap-y-3 mt-12 2xl:mt-16">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="border shadow-sm sm:shadow-md border-gray-500 rounded-lg bg-amber-100/15 text-gray-800 text-lg 2xl:text-xl px-3 sm:px-4 md:px-5 py-1 sm:py-2 lg:py-2.5 2xl:py-3"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
