import { motion } from "motion/react";
import {
  MoveRight,
  Download,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const Intro = () => {
  const date = new Date();
  let greeting = "Hello";

  if (date.getHours() < 12) {
    greeting = "Good morning";
  } else if (date.getHours() < 18) {
    greeting = "Good afternoon";
  } else if (date.getHours() < 24) {
    greeting = "Good evening";
  }

  return (
    <section
      id="intro"
      className="scroll-mt-32 flex flex-col items-center space-y-8 2xl:space-y-12 mx-8 md:mx-28 lg:mx-56 xl:mx-80"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            className="border-4 border-white shadow-xl rounded-full size-28"
          />
        </motion.div>

        <motion.span
          className="hidden sm:block absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          👋
        </motion.span>
      </div>

      <motion.p
        className="sm:hidden text-center text-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        Hey, I'm Zander! 👋 I am a{" "}
        <span className="font-semibold">full-stack web developer</span>{" "}
        specializing in{" "}
        <span className="font-semibold">
          TypeScript, React, TailwindCSS, Prisma,
        </span>{" "}
        and more.
      </motion.p>

      <motion.p
        className="hidden sm:block text-center text-2xl lg:text-3xl 2xl:text-4xl/12"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        {greeting}! My name is Zander, and I am a{" "}
        <span className="font-semibold">full-stack web developer</span>. I
        specialize in{" "}
        <span className="font-semibold">
          TypeScript, React, TailwindCSS, Prisma,
        </span>{" "}
        and more. Creating{" "}
        <span className="italic">type-safe applications</span> is my passion.
      </motion.p>

      <motion.div
        className="w-full space-y-4 sm:space-y-2 lg:flex lg:justify-center lg:space-x-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
        }}
      >
        <div className="sm:flex sm:justify-center">
          <a href="#contact" className="outline-none">
            <button className="group flex rounded-full bg-slate-900 text-slate-50 text-2xl px-4 py-1.5 mb-2 sm:mb-0 mx-auto sm:mx-2 lg:mx-0.5 xl:mx-1 2xl:mx-1.5 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-slate-50 dark:text-neutral-900">
              Contact Me{" "}
              <MoveRight className="opacity-75 mt-1.5 ml-2 group-hover:translate-x-1 transition" />
            </button>
          </a>

          <button className="group flex rounded-full bg-slate-50 text-neutral-900 text-2xl lg:text-xl xl:text-2xl px-4 py-1.5 mx-auto sm:mb-1 sm:mx-2 lg:mx-0.5 xl:mx-1 2xl:mx-1.5 cursor-pointer border-2 border-gray-200 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-slate-900 dark:text-slate-50 dark:border-gray-700">
            Download Resume{" "}
            <Download className="opacity-75 mt-1 ml-2 group-hover:translate-y-1 transition" />
          </button>
        </div>

        <div className="flex justify-center space-x-4 lg:space-x-1 2xl:space-x-2 lg:mb-2">
          <a
            href="https://github.com/ZVKubajak"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
          >
            <button className="rounded-full bg-slate-50 text-neutral-900 p-2.5 border-2 border-gray-200 hover:bg-black hover:text-white hover:scale-105 active:scale-95 transition dark:bg-slate-900 dark:text-slate-50 dark:border-gray-700">
              <Github size={28} />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/zander-kubajak-b37792335/"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
          >
            <button className="rounded-full bg-slate-50 text-neutral-900 p-2.5 border-2 border-gray-200 hover:bg-sky-600 hover:text-white hover:scale-105 active:scale-95 transition dark:bg-slate-900 dark:text-slate-50 dark:border-gray-700">
              <Linkedin size={28} />
            </button>
          </a>
        </div>
      </motion.div>

      <div className="mt-4 text-gray-500 dark:text-inherit">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 2.4,
          }}
        >
          <ChevronDown size={40} />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 2.2,
          }}
        >
          <ChevronDown size={40} />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
        >
          <ChevronDown size={40} />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
