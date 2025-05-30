/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";

export default function About({ darkMode }) {
  return (
    <div
      id="about"
      className={`py-2 px-4 md:py-24 md:px-52 ${
        darkMode ? "bg-darkSecondaryBgColor" : ""
      }`}
    >
      <h2
        className={`flex items-center gap-4 my-8 pb-4 text-xl md:text-4xl dark:text-darkTextColor ${
          darkMode ? "text-white" : "text-textColor"
        }`}
      >
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">About Me</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`max-h-[400px] md:max-h-[500px] overflow-y-scroll md:overflow-hidden  text-justify text-sm sm:text-base leading-relaxed dark:text-darkTextColor ${
            darkMode ? "text-white" : "text-textColor"
          }`}
        >
          As a passionate and goal-driven Frontend Web Developer, I specialize
          in crafting responsive, user-friendly, and modern web interfaces using
          React.js, Next.js, and Tailwind CSS. With a strong foundation in the
          MERN stack, I bring full-stack capabilities,
          <br />
          <br />
          but my core strength and focus lie in frontend development—where
          performance, design, and user experience come together. I hold a B.Sc.
          in Computer Science from Daffodil International University and have
          professional experience as a Network Engineer, which taught me
          discipline, problem-solving, and real-world tech infrastructure.
          <br />
          <br />
          Now, my journey has fully transitioned into the world of web
          development, where I’m actively building and learning every day.
          Currently, I’m sharpening my skills in Next.js to create fast,
          SEO-friendly, and scalable web applications.
        </motion.p>
        <motion.img
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          src="about.png"
          alt="about me"
          className="w-full max-w-xs sm:max-w-sm md:max-w-[350px] max-h-[450px] rounded-md mx-auto md:mx-0"
        />
      </div>
    </div>
  );
}
