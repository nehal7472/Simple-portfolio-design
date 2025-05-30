/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function FeaturedProjects({ darkMode }) {
  return (
    <div
      id="projects"
      className={`py-2 px-4 md:py-24 md:px-52 ${
        darkMode ? "bg-darkSecondaryBgColor" : ""
      }`}
    >
      <h2
        className={`flex flex-wrap items-center gap-4 my-8 pb-4 text-center sm:text-left text-xl md:text-4xl dark:text-darkTextColor ${
          darkMode ? "text-white" : "text-textColor"
        }`}
      >
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">Featured Projects</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>

      <div className="flex flex-col gap-16 items-center justify-center">
        {/* First Project */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          <motion.img
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src="portfolio.png"
            alt=""
            className="w-full md:max-w-[450px] h-[220px] rounded-md"
          />
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center items-center md:items-start gap-4 w-full md:max-w-[450px]"
          >
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2 ">
              <h3
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Personal Portfolio
              </h3>
              <p
                className={`hidden md:block dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Welcome to my portfolio website built with React, styled using
                Tailwind CSS, and enhanced with DaisyUI components. .
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                React Js
              </p>
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Tailwind
              </p>
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Figma
              </p>
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                daisy ui
              </p>
            </div>
            <div className="flex gap-2">
              <a
                className={`text-2xl text-gray-600 dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
                href="https://github.com/nehal7472/personal-portfolio-nehal"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className={`text-2xl text-gray-600 dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
                target="_blank"
                href="https://personal-portfolio-nehal-ahsanul-haque-nehals-projects.vercel.app/"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center items-center md:items-end gap-4 w-full md:max-w-[450px]"
          >
            <div className="flex flex-col items-end gap-2 border-b-2 border-gray-600 pb-2">
              <h3
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Bookstore e-commerce
              </h3>
              <p
                className={`text-right hidden md:block dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                This is a full-featured Bookstore E-commerce website built with
                the MERN stack (MongoDB, Express.js, React, Node.js).
              </p>
            </div>
            <div className="flex flex-wrap justify-end gap-4">
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Node
              </p>
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Express
              </p>
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                React
              </p>
              <p
                className={`dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
              >
                Mongo db
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <a
                className={`text-2xl text-gray-600 dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
                href="https://github.com/nehal7472/BookStore-Using-MERN"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className={`text-2xl text-gray-600 dark:text-darkTextColor ${
                  darkMode ? "text-white" : "text-textColor"
                }`}
                target="_blank"
                href="https://github.com/nehal7472/BookStore-Using-MERN"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </motion.div>
          <motion.img
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src="bookStore.png"
            alt=""
            className="w-full md:max-w-[450px] h-[220px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
