/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection({ darkMode }) {
  return (
    <>
      <section className="w-full h-[calc(100vh-80px)] mt-[80px]">
        <div
          className={`w-full h-full bg-[url('hero.png')] bg-cover bg-center flex flex-col items-center justify-center gap-10 px-4 text-center relative ${
            darkMode ? "bg-darkPrimaryBgColor" : "bg-white"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center justify-center gap-4 z-10"
          >
            <h1
              className={`text-2xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-green-500 font-bold ${
                darkMode
                  ? "bg-gradient-to-r from-green-500 via-blue-500 to-blue-500"
                  : ""
              }`}
            >
              Ahsanul Haque Nehal
            </h1>
            <p
              className={`text-lg sm:text-xl font-medium ${
                darkMode ? "text-blue-100" : "text-white"
              }`}
            >
              Passionate Front-End Developer Crafting Engaging Web Experiences
            </p>
          </motion.div>
          <MdKeyboardDoubleArrowDown
            className={`text-[50px] z-10 text-green-500 ${
              darkMode ? "text-blue-500" : "text-white"
            }`}
          />
        </div>
      </section>
    </>
  );
}
