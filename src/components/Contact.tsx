import SectionHeading from "./SectionHeading";
import sendEmail from "../services/sendEmail";
import Swal from "sweetalert2";
import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail(formData);

    if (success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for getting in touch.",
        icon: "success",
        confirmButtonText: "Continue"
      }).then(() => {
        setFormData({ email: "", message: "" });
      });
    } else {
      Swal.fire({
        title: "Whoops!",
        text: "An error has occurred. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="mt-4 md:mt-6 lg:mt-8 text-gray-700 text-[15px] md:text-lg lg:text-xl">
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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-8 gap-y-4 md:text-lg lg:text-2xl sm:mx-auto sm:w-4/5 md:w-full lg:w-4/5 2xl:w-3/4"
      >
        <input
          // type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          maxLength={100}
          placeholder="Email"
          className="bg-white border border-gray-200 rounded-lg px-2 py-1.5"
        />

        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          minLength={10}
          maxLength={500}
          placeholder="Message"
          className="resize-none h-32 lg:h-40 bg-white border border-gray-200 rounded-lg px-2 py-1.5"
        />

        <button
          type="submit"
          className="flex group bg-slate-900 hover:bg-slate-950 text-slate-50 rounded-full text-xl md:text-2xl 2xl:text-3xl w-26 2xl:w-41 md:w-29.5 gap-x-2 px-5 py-1 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Submit
          <Send
            size={20}
            className="hidden 2xl:block opacity-75 mt-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
