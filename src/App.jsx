import About from "./components/About.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Contact from "./components/Contact.jsx";
import DevOpsPipeline from "./components/DevOpsPipeline.jsx";
import Ecommerce from "./components/Ecommerce.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import QATesting from "./components/QATesting.jsx";
import ResumeEducation from "./components/ResumeEducation.jsx";
import Skills from "./components/Skills.jsx";
import TravEraCaseStudy from "./components/TravEraCaseStudy.jsx";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      }, 0);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0014] text-ink">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-[4rem] sm:pt-[4.25rem]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TravEraCaseStudy />
        <DevOpsPipeline />
        <QATesting />
        <Ecommerce />
        <ResumeEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
