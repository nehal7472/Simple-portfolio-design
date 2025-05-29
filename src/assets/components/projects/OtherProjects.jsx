import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function OtherProjects() {
  return (
    <div className="bg-secondaryBgColor dark:bg-darkPrimaryBgColor py-2 px-4 md:py-24 md:px-52 ">
      <h2 className="flex items-center gap-4 my-8 pb-4 text-xl md:text-4xl dark:text-darkTextColor">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">Other Projects</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <!-- Project one --> */}
        <div
          className="flex flex-col sm:flex-row md:flex-row gap-3 items-center
         md:items-start justify-between"
        >
          <motion.img
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src="blog.png"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center items-center md:items-start w-full"
          >
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4 className="dark:text-darkTextColor">Blog Website</h4>
              <p className="hidden md:block dark:text-darkTextColor">
                Built with a clean and responsive design, it features a
                dynamic..
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p className="dark:text-darkTextColor">React</p>
              <p className="dark:text-darkTextColor">Tailwind</p>
              <p className="dark:text-darkTextColor">Figma</p>
              <p className="dark:text-darkTextColor">Daisy</p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                href="https://github.com/nehal7472/Blogs"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                target="_blank"
                href="https://simple-blogs-flax.vercel.app/"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </motion.div>
        </div>

        {/* project 2 */}
        <div
          className="flex flex-col sm:flex-row md:flex-row gap-3 items-center
         md:items-start justify-between"
        >
          <motion.img
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src="poky.png"
            alt="poky"
            className="w-[115px] h-[115px] rounded-md"
          />
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center i w-full items-center md:items-start"
          >
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4 className="dark:text-darkTextColor">Find Pokemon!</h4>
              <p className="hidden md:block dark:text-darkTextColor">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p className="dark:text-darkTextColor">React</p>
              <p className="dark:text-darkTextColor">Context API</p>
              <p className="dark:text-darkTextColor">Figma</p>
              <p className="dark:text-darkTextColor">Tailwind</p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                href="https://github.com/nehal7472/Searching-Pokemon"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                target="_blank"
                href="https://simple-blogs-flax.vercel.app/"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </motion.div>
        </div>

        {/*  Project 3  */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-3  justify-between items-center md:items-start">
          <motion.img
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src="todo.png"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center  w-full items-center md:items-start"
          >
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4 className="dark:text-darkTextColor">Todo List</h4>
              <p className="hidden md:block dark:text-darkTextColor">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p className="dark:text-darkTextColor">Tailwind</p>
              <p className="dark:text-darkTextColor">Css</p>
              <p className="dark:text-darkTextColor">Figma</p>
              <p className="dark:text-darkTextColor">React</p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                href="https://github.com/nehal7472/React-JS-Todo-List"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                target="_blank"
                href="https://nehaltodo.netlify.app/"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </motion.div>
        </div>

        {/*  Project 4  */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-3  justify-between items-center md:items-start">
          <motion.img
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src="clock.png"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center  w-full items-center md:items-start"
          >
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4 className="dark:text-darkTextColor">Wall Clock</h4>
              <p className="hidden md:block dark:text-darkTextColor">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p className="dark:text-darkTextColor">Html</p>
              <p className="dark:text-darkTextColor">Css</p>
              <p className="dark:text-darkTextColor">Figma</p>
              <p className="dark:text-darkTextColor">Javascript</p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                href="https://github.com/nehal7472/Wall-Clock"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl text-gray-600 dark:text-darkTextColor"
                target="_blank"
                href="https://nehal7472.github.io/Wall-Clock/"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
