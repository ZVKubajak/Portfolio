import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { otherProjects } from "../lib/projects";
import { Monitor } from "lucide-react";
import { Github } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const OtherProject = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [count, setCount] = useState<number>(1);

  const updateCount = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setCount(index + 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;
    updateCount();
    emblaApi.on("select", updateCount);

    return () => {
      emblaApi.off("select", updateCount);
    };
  }, [emblaApi, updateCount]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <article className="w-[600px] mx-auto">
      <div
        className="flex justify-center select-none overflow-hidden max-w-3/5 mx-auto"
        ref={emblaRef}
      >
        <div className="flex w-full gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 bg-gray-100 hover:bg-gray-200 transition border border-gray-200 rounded-xl flex flex-col"
            >
              <img src={project.image} className="rounded-t-xl" />

              <div className="flex flex-col flex-grow px-4 py-6">
                <div className="flex">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>

                  <div className="flex mt-1">
                    <a
                      href={project.site}
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
                      href={project.link}
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

                <p className="text-left mt-4">{project.description}</p>

                <div className="mt-auto">
                  <ul className="flex flex-wrap mt-8 gap-2">
                    {project.technologies.map((technology, index) => (
                      <li
                        key={index}
                        className="bg-neutral-700 px-3 py-1 text-[11px] uppercase tracking-wider text-white rounded-full"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex ml-[132px] mt-3 space-x-2">
        <button
          onClick={prev}
          className={`border rounded-full ${
            count === 1 ? "text-gray-500" : "text-inherit"
          } transition`}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className={`border rounded-full ${
            count === 4 ? "text-gray-500" : "text-inherit"
          } transition`}
        >
          <ChevronRight size={28} />
        </button>

        <div className="ml-[228px] text-xl font-semibold">{count}/4</div>
      </div>
    </article>
  );
};

export default OtherProject;
