import { motion } from "motion/react";
import transition from "../lib/transition";
import sections from "../lib/sections";

const Header = () => {
  return (
    <header className="relative z-50">
      <motion.div
        className="fixed top-0 w-full bg-white border-b-2 border-b-gray-300 shadow-lg shadow-black/10 lg:bg-inherit lg:border-none lg:shadow-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
      >
        <div className="flex flex-wrap justify-evenly w-4/5 mx-auto text-xl font-semibold space-x-4 py-2 lg:mt-8 lg:w-1/2 lg:bg-white lg:opacity-90 lg:border lg:border-gray-500 lg:shadow-lg lg:shadow-black/15 lg:rounded-full lg:space-x-0 xl:w-2/5 2xl:w-1/3">
          {sections.map((section, index) => (
            <motion.a className="hover:text-blue-900 transition" key={index} href={section.reference}>
              {section.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
