import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection() {
  return (
    <>
      <section className="w-full h-[calc(100vh-80px)] mt-[80px]">
        <div className="w-full h-full bg-[url('heroImage.JPG')] bg-cover bg-center flex flex-col items-center justify-center gap-10 px-4 text-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h1 className="text-2xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-green-800 to-green-800 font-bold">
              Ahsanul Haque Nehal
            </h1>
            <p className="text-lg sm:text-xl text-green-700 dark:text-gray-300">
              front end developer
            </p>
          </motion.div>
          <MdKeyboardDoubleArrowDown className="text-[50px] text-green-600" />
        </div>
      </section>
    </>
  );
}
