import SectionHeading from "./SectionHeading";
import Swal from "sweetalert2";
import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const web3Form = new FormData();
      web3Form.append("access_key", "985c671f-072e-4140-9d08-87d707cdc162");
      web3Form.append("subject", "Message From Your Portfolio");
      web3Form.append("message", formData.message);
      web3Form.append("replyto", formData.email);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Form,
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success) {
        Swal.fire({
          icon: "success",
          titleText: "Message Sent",
          text: "Thanks for getting in touch!",
          background: "#1D293D",
          color: "#FFF",
          confirmButtonText: "Continue",
          confirmButtonColor: "#00BC7D",
        }).then(() => {
          setFormData({ email: "", message: "" });
        });
      } else {
        throw Error;
      }
    } catch (error) {
      console.error("handleSubmit Error:", error);
      setIsSubmitting(false);

      Swal.fire({
        icon: "error",
        titleText: "Whoops!",
        text: "An error has occurred. Please try again.",
        background: "#1D293D",
        color: "#FFF",
        confirmButtonText: "Continue",
        confirmButtonColor: "#00BC7D",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="scroll-mt-32 mb-20 mt-28 mx-auto w-4/5 md:w-3/5 xl:w-1/2 text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="mt-4 md:mt-6 lg:mt-8 text-gray-700 text-[15px] md:text-lg lg:text-xl dark:text-gray-200">
        Contact me directly at{" "}
        <a
          href="mailto:zvkubajak@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 dark:text-white"
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
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          maxLength={100}
          placeholder="Email"
          className="bg-white border border-gray-200 rounded-lg px-2 py-1.5 dark:bg-gray-950 dark:border-gray-700"
        />

        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          minLength={10}
          maxLength={1000}
          placeholder="Message"
          className="resize-none h-32 lg:h-40 bg-white border border-gray-200 rounded-lg px-2 py-1.5 dark:bg-gray-950 dark:border-gray-700"
        />

        <button
          type="submit"
          className="flex justify-center group bg-slate-900 hover:bg-slate-950 text-slate-50 rounded-full text-xl md:text-2xl 2xl:text-3xl w-32 md:w-40 2xl:w-48 gap-x-2 py-1 md:py-1.5 2xl:py-2 cursor-pointer outline-none hover:scale-110 active:scale-95 transition dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 dark:border dark:border-gray-700"
        >
          {isSubmitting ? (
            <>Submitting...</>
          ) : (
            <>
              Submit
              <Send
                size={24}
                className="hidden 2xl:block opacity-75 mt-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
              />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
