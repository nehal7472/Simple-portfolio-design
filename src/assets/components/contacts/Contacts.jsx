import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="py-2 px-4 md:py-24 md:px-52 dark:bg-darkSecondaryBgColor "
    >
      <h2 className="flex items-center gap-4 my-8 pb-4 text-xl md:text-4xl dark:text-darkTextColor">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">Contact</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>

      <div className="flex flex-col items-center gap-8">
        <p className="text-center px-4 dark:text-darkTextColor">
          I am currently seeking employment, and I would appreciate it if you
          could contact me with any available job opportunities.
        </p>

        <motion.form
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full max-w-2xl space-y-6 px-4 sm:px-12 py-8"
        >
          <div className="flex items-center border border-borderColor rounded-lg px-6 py-4 text-xl">
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none bg-darkSecondaryBgColor text-textGray dark:text-darkTextColor"
            />
          </div>

          <div className="flex items-center border border-borderColor rounded-lg px-6 py-4 text-xl">
            <input
              type="email"
              placeholder="007cryptic@gmail.com"
              className="w-full outline-none bg-darkSecondaryBgColor text-textGray dark:text-darkTextColor"
            />
          </div>

          <div className="border border-borderColor rounded-lg px-6 py-4 text-xl">
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full outline-none bg-darkSecondaryBgColor text-textGray dark:text-darkTextColor resize-none dark:text-darkTextColor"
            ></textarea>
          </div>

          <button type="submit" className="btn text-2xl px-6 w-full sm:w-fit dark:text-darkTextColor">
            Submit
          </button>
        </motion.form>

        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-8 text-3xl text-textColor dark:text-darkTextColor"
        >
          <a target="_blank" href="https://github.com/nehal7472">
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ahsanul-haque-nehal/"
          >
            <FiLinkedin />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
