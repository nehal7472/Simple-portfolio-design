import About from "./assets/components/about/About";
import Navbar from "./assets/components/header/Navbar";
import HeroSection from "./assets/components/hero-section/HeroSection";
import Experience from "./assets/components/experience/Experience";
import Contacts from "./assets/components/contacts/Contacts";
import Footer from "./assets/components/footer/Footer";
import FeaturedProjects from "./assets/components/projects/FeaturedProjects";
import OtherProjects from "./assets/components/projects/OtherProjects";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Contacts />
      <Footer />
    </>
  );
}
