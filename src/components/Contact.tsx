import SectionHeading from "./SectionHeading";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center">
      <SectionHeading>Contact Me</SectionHeading>

      <p className="mt-4 md:mt-6 lg:mt-8 text-[15px] md:text-lg lg:text-xl">
        Contact me directly at{" "}
        <a
          href="mailto:zvkubajak@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          zvkubajak@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="flex flex-col mt-8 gap-y-4 md:text-lg lg:text-2xl sm:mx-auto sm:w-4/5 md:w-full lg:w-4/5 2xl:w-3/4">
        <input
          type="email"
          placeholder="Email"
          className="bg-white border border-gray-200 rounded-lg px-2 py-1.5"
        />

        <textarea
          placeholder="Message"
          className="resize-none h-32 lg:h-40 bg-white border border-gray-200 rounded-lg px-2 py-1.5"
        />

        <button
          type="submit"
          // className="flex w-28 md:w-30 2xl:w-36 bg-slate-950 text-slate-50 text-xl md:text-2xl 2xl:text-3xl px-5 py-1 rounded-full"
          className="flex group bg-slate-950 text-slate-50 rounded-full text-xl md:text-2xl 2xl:text-3xl w-26 2xl:w-41 md:w-29.5 gap-x-2 px-5 py-1 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Submit
          <Send
            size={20}
            className="hidden 2xl:block mt-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          />
        </button>
      </form>
    </section>
  );
};

export default Contact;
