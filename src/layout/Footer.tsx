import footerLogoSVG from "../assets/svgs/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="text-center text-gray-600">
      <img
        src={footerLogoSVG}
        alt="Footer Logo"
        className="mx-auto mb-1 sm:mb-2 size-[45px] sm:size-[55px] md:size-[60px] lg:size-[65px] xl:size-[70px]"
      />

      <div className="text-sm md:text-base mb-4 sm:mb-6 lg:mb-8 sm:mx-auto sm:w-[350px] md:w-full sm:space-y-2 md:space-y-0">
        <p>© 2025 Zander Kubajak. All rights reserved.</p>
        <p className="hidden sm:block">
          Built with React + TS + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
