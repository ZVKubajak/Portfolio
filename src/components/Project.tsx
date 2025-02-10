import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "../lib/projects";
import { Monitor, Github } from "lucide-react";

type ProjectProps = (typeof projects)[number];

const Project = ({
  name,
  description,
  technologies,
  image,
  site,
  link,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-4 md:mb-8 last:mb-0"
    >
      <article className="relative xl:w-[640px] xl:h-[320px] bg-gray-100 hover:bg-gray-200 transition border border-gray-200 rounded-xl text-left overflow-hidden mx-auto dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-gray-700">
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

          <p className="leading-snug sm:leading-normal mt-2 lg:mb-4 text-gray-700 dark:text-inherit">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 xl:mt-auto">
            {technologies.map((technology, index) => (
              <li
                key={index}
                className="bg-neutral-700 px-3 py-1 text-[11px] uppercase tracking-wider text-white rounded-full"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={image}
          alt="Project Image"
          className="hidden xl:block absolute top-8 -right-40 w-[452px] h-[300px] rounded-t-lg shadow-2xl object-cover object-left group-even:right-[initial] group-even:-left-40 transition group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </article>
    </motion.div>
  );
};

export default Project;
