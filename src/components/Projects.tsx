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
  isSolo,
  roles,
  technologies,
  site,
  link,
}: ProjectProps) => {
  return (
    <article className="relative bg-gray-100 border border-black/40 rounded-lg shadow-md text-left px-2 py-1">
      <div className="flex items-center gap-1.5">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>

        {isSolo ? (
          <div
            className="w-1/5 bg-yellow-300
   text-black text-center text-sm font-semibold rounded-full pb-0.5"
          >
            Solo
          </div>
        ) : (
          <div
            className="w-1/5 bg-purple-500
   text-white text-center text-sm font-semibold rounded-full pb-0.5"
          >
            Group
          </div>
        )}
      </div>

      <p className="leading-snug mt-3">{description}</p>

      <ul className="flex flex-wrap w-4/5 gap-1 text-[14px] mt-3">
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="bg-slate-800 text-slate-50 border rounded-full px-3"
          >
            {technology}
          </li>
        ))}
      </ul>

      {roles && (
        <div className="hidden sm:block">
          <h4 className="text-lg font-semibold mt-3">My Roles:</h4>

          <ul className="text-sm leading-snug ml-2 mt-0.5">
            {roles.map((role, index) => (
              <li key={index}>• {role}</li>
            ))}
          </ul>
        </div>
      )}

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

      {/* <div className="flex mt-4">
        <button className="flex bg-white text-lg border border-black/25 rounded-lg gap-1 px-2 py-0.5">
          <Monitor size={20} className="mt-1" />
          Live Site
        </button>
        <button className="flex bg-blue-500 text-white text-lg border-2 border-gray-400 rounded-lg gap-1 px-2 py-0.5">
          <Github size={20} className="mt-1" />
          Repository
        </button>
      </div> */}
    </article>
  );
};

export default Projects;
