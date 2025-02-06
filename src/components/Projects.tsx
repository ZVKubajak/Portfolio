import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../lib/projects";
import { Monitor } from "lucide-react";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center space-y-8">
      <SectionHeading>My Projects</SectionHeading>

      <h2 className="text-2xl xl:text-4xl 2xl:text-5xl">Best Work</h2>

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
    <article className="text-left bg-gray-100 w-[672px] h-[320px] mx-auto border border-black/5 overflow-hidden sm:pr-8 relative">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="mt-2  text-gray-700">{description}</p>

        <ul className="flex flex-wrap mt-4 gap-2">
          {technologies.map((technology, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[11.2px] uppercase tracking-wider text-white rounded-full"
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
        className="absolute top-8 -right-40 w-[452px] rounded-t-lg shadow-2xl h-[300px] object-cover object-left"
      />
    </article>
  );
};

export default Projects;
