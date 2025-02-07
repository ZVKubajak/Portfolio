import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { projects } from "../lib/projects";

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

export default Projects;
