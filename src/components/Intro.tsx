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
    <section className="flex flex-col items-center space-y-8 mx-8 md:mx-28 lg:mx-56 xl:mx-80">
      <div className="relative">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          className="border-4 border-white shadow-xl rounded-full size-28"
        />

        <span className="hidden sm:block absolute bottom-0 right-0 text-4xl">
          👋
        </span>
      </div>

      <p className="sm:hidden text-center text-2xl">
        Hey, I'm Zander! 👋 I am a{" "}
        <span className="font-semibold">full-stack web developer</span>{" "}
        specializing in{" "}
        <span className="font-semibold">
          TypeScript, React, TailwindCSS, Prisma,
        </span>{" "}
        and more.
      </p>

      <p className="hidden sm:block text-center text-2xl lg:text-3xl 2xl:text-4xl/12">
        {greeting}! My name is Zander, and I am a{" "}
        <span className="font-semibold">full-stack web developer</span>. I
        specialize in{" "}
        <span className="font-semibold">
          TypeScript, React, TailwindCSS, Prisma,
        </span>{" "}
        and more. Creating{" "}
        <span className="italic">type-safe applications</span> is my
        passion.
      </p>
    </section>
  );
};

export default Intro;
