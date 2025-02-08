import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <section className="mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center">
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-[15px] mt-4">
        Contact me directly at{" "}
        <span className="underline underline-offset-2">
          zvkubajak@gmail.com
        </span>{" "}
        or through this form.
      </p>

      <form className="flex flex-col mt-8 gap-y-4 md:text-lg lg:text-xl 2xl:text-2xl lg:w-3/4 lg:mx-auto">
        <input
          placeholder="Email"
          className="bg-white border border-gray-200 rounded-lg px-2 py-1.5"
        />

        <textarea
          placeholder="Message"
          className="resize-none bg-white border border-gray-200 rounded-lg px-2 py-1.5"
        />

        <button className="w-28 bg-slate-950 text-slate-50 text-xl px-5 py-1 rounded-full">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
