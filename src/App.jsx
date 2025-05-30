import About from "./assets/components/about/About";
import Navbar from "./assets/components/header/Navbar";
import HeroSection from "./assets/components/hero-section/HeroSection";
import Experience from "./assets/components/experience/Experience";
import Contacts from "./assets/components/contacts/Contacts";
import Footer from "./assets/components/footer/Footer";
import FeaturedProjects from "./assets/components/projects/FeaturedProjects";
import OtherProjects from "./assets/components/projects/OtherProjects";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <HeroSection darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <FeaturedProjects darkMode={darkMode} />
      <OtherProjects darkMode={darkMode} />
      <Contacts darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}
