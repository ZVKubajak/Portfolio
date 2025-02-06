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

      <div className="space-y-8">
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
  site,
  link,
}: ProjectProps) => {
  return (
    <article className="relative bg-gray-100 border border-black/40 rounded-lg shadow-md text-left px-2 py-1">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>

      <p className="leading-snug mt-3">{description}</p>

      <ul className="flex flex-wrap w-3/4 gap-1 text-[14px] mt-3">
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="bg-slate-800 text-slate-50 border rounded-full px-3"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="absolute -bottom-4 right-4 z-10 bg-gray-200 border border-black/40 rounded-full shadow-md h-8 space-x-2.5 px-2 border-">
        <a
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-none"
        >
          <button className="cursor-pointer mt-1 outline-none focus:scale-110 hover:scale-110 active:scale-90 transition">
            <Monitor size={24} />
          </button>
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-none"
        >
          <button className="cursor-pointer mt-1 outline-none focus:scale-110 hover:scale-110 active:scale-90 transition">
            <Github size={24} />
          </button>
        </a>
      </div>
    </article>
  );
};

export default Projects;
