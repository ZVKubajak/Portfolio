import sections from "../lib/sections";

const Header = () => {
  return (
    <header className="relative z-50">
      <div className="fixed top-0 w-full bg-white opacity-75 border-b-2 border-b-gray-300 shadow-lg shadow-black/10">
        <div className="flex flex-wrap justify-evenly w-4/5 mx-auto text-xl space-x-4 py-2">
          {sections.map((section, index) => (
            <a key={index}>{section.name}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
