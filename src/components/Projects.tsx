import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../lib/projects";
import { Monitor } from "lucide-react";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center space-y-8">
      <SectionHeading>My Projects</SectionHeading>

      <h2 className="text-2xl xl:text-3xl 2xl:text-4xl">Best Work</h2>

      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* <h2>Other Projects</h2> */}
    </section>
  );
};

type ProjectProps = (typeof projects)[number];

const Project = ({
  name,
  description,
  technologies,
  image,
  site,
  link,
}: ProjectProps) => {
  return (
    <article className="group relative w-4/5 xl:w-[640px] xl:h-[320px] bg-gray-100 border border-gray-200 text-left overflow-hidden mx-auto mb-4 md:mb-8 last:mb-0">
      <div className="flex flex-col h-full xl:w-1/2 px-5 py-8 group-even:float-right">
        <div className="flex">
          <h3 className="text-2xl font-semibold">{name}</h3>

          <div className="flex mt-1">
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none focus:scale-110"
            >
              <Monitor
                size={24}
                className="ml-4 cursor-pointer outline-none hover:scale-110 active:scale-90 transition"
              />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none focus:scale-110"
            >
              <Github
                size={24}
                className="ml-2 cursor-pointer outline-none hover:scale-110 active-scale:90 transition"
              />
            </a>
          </div>
        </div>

        <p className="leading-snug sm:leading-normal mt-2 lg:mb-4 text-gray-700">
          {description}
        </p>

        <ul className="flex flex-wrap mt-4 gap-2 xl:mt-auto">
          {technologies.map((technology, index) => (
            <li
              className="bg-neutral-700 px-3 py-1 text-[11px] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <img
        src={image}
        alt="Project Image"
        className="hidden xl:block absolute top-8 -right-40 w-[452px] h-[300px] rounded-t-lg shadow-2xl object-cover object-left group-even:right-[initial] group-even:-left-40"
      />
    </article>
  );
};

export default Projects;
