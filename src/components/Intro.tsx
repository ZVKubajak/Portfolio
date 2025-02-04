import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { Download } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

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
    <section className="flex flex-col items-center space-y-8 2xl:space-y-12 mx-8 md:mx-28 lg:mx-56 xl:mx-80">
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
          delay: 1,
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
          delay: 1,
        }}
      >
        <div className="space-y-2 sm:flex sm:justify-center">
          <button className="flex rounded-full bg-slate-900 text-slate-50 text-2xl px-4 py-1.5 mx-auto sm:mx-2 lg:mx-0.5 xl:mx-1 2xl:mx-1.5 outline-none focus:scale-110 hover:scale-110 transition">
            Contact Me <MoveRight className="mt-1 ml-2" />
          </button>

          <button className="flex rounded-full bg-slate-50 text-neutral-900 text-2xl lg:text-xl xl:text-2xl px-4 py-1.5 mx-auto sm:mb-1 sm:mx-2 lg:mx-0.5 xl:mx-1 2xl:mx-1.5 border-2 border-gray-200 outline-none focus:scale-110 hover:scale-110 transition">
            Download Resume <Download className="mt-1 ml-2" />
          </button>
        </div>

        <div className="flex justify-center space-x-4 lg:space-x-1 2xl:space-x-2 lg:mb-2">
          <button className="rounded-full bg-slate-50 text-neutral-900 p-2.5 border-2 border-gray-200">
            <Github size={28} />
          </button>
          <button className="rounded-full bg-slate-50 text-neutral-900 p-2.5 border-2 border-gray-200">
            <Linkedin size={28} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
