import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  shadow-md transition-colors duration-300 dark:bg-darkPrimaryBgColor dark:text-darkTextColor${
        darkMode ? " bg-darkPrimaryBgColor" : " bg-white  "
      }`}
    >
      <nav className="h-[80px] flex flex-col md:flex-row justify-between items-center text-textColor px-8 md:px-16">
        <div className="flex justify-between  items-center w-full md:w-auto">
          <img src="logo.png" alt="" width="40" />
          <div className="md:hidden">
            <FiMenu className="w-6 h-8 text-textColor" />
          </div>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-4 mt-4 md:mt-0">
          <li>
            <a
              href="#about"
              className={`relative group px-2 py-1 dark:text-white hover:text-blue-600 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-textColor"
              }`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative">About</span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`relative group px-2 py-1 dark:text-white hover:text-blue-600 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-textColor"
              }`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative">Experience</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`relative group px-2 py-1 dark:text-white hover:text-blue-600 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-textColor"
              }`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative">Project</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className={`relative group px-2 py-1 dark:text-white hover:text-blue-600 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-textColor"
              }`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative">Contact</span>
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-0">
          <a href="/resume.pdf" download>
            <button
              className={`btn dark:bg-darkTextColor ${
                darkMode ? "text-white" : "text-textColor"
              }`}
            >
              Resume
            </button>
          </a>
          <button
            className={`btn dark:bg-darkTextColor ${
              darkMode ? "text-white" : "text-textColor"
            }`}
          >
            <a href="#contacts"> Hire Me</a>
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onClick={() => setDarkMode(!darkMode)}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
          </label>
        </div>
      </nav>
    </div>
  );
}
