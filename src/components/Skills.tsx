import SectionHeading from "./SectionHeading";
import skills from "../lib/skills";

const Skills = () => {
  return (
    <section className="mt-28 mx-auto w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 2xl:w-1/3 text-center">
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 md:gap-x-3 lg:gap-x-4 2xl:gap-y-3 mt-12">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="border rounded-lg bg-amber-100/15 text-gray-800 text-lg 2xl:text-xl p-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
