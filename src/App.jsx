import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const TravEraCaseStudy = lazy(() => import("./components/TravEraCaseStudy.jsx"));
const DevOpsPipeline = lazy(() => import("./components/DevOpsPipeline.jsx"));
const QATesting = lazy(() => import("./components/QATesting.jsx"));
const Ecommerce = lazy(() => import("./components/Ecommerce.jsx"));
const ResumeEducation = lazy(() => import("./components/ResumeEducation.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

export default function App() {
  useEffect(() => {
    let frameId = null;
    let restoreScrollBehavior = null;

    const scrollToHash = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      restoreScrollBehavior?.();

      const id = window.location.hash.slice(1);
      if (!id) return;

      let attempts = 0;
      let stableFrames = 0;
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      restoreScrollBehavior = () => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        restoreScrollBehavior = null;
      };

      const findTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          const desiredTop = id === "home" ? 0 : 90;
          const top = target.getBoundingClientRect().top;
          const contentReady = id === "home" || Boolean(target.querySelector(":scope > section"));

          if (Math.abs(top - desiredTop) > 1) {
            window.scrollTo(0, window.scrollY + top - desiredTop);
            stableFrames = 0;
          } else {
            stableFrames += 1;
          }

          if (contentReady && stableFrames >= 30) {
            restoreScrollBehavior();
            return;
          }
        }

        attempts += 1;
        if (attempts < 360) {
          frameId = window.requestAnimationFrame(findTarget);
        } else {
          restoreScrollBehavior();
        }
      };

      frameId = window.requestAnimationFrame(findTarget);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      restoreScrollBehavior?.();
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0014] text-ink">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-[4rem] sm:pt-[4.25rem]">
        <Hero />
        <DeferredSection id="about" minHeight="min-h-[2850px] md:min-h-[1150px]" Component={About} />
        <DeferredSection id="skills" minHeight="min-h-[4200px] md:min-h-[2050px]" Component={Skills} />
        <DeferredSection id="projects" minHeight="min-h-[7800px] md:min-h-[3300px]" Component={Projects} />
        <DeferredSection id="travera" minHeight="min-h-[3700px] md:min-h-[1650px]" Component={TravEraCaseStudy} />
        <DeferredSection id="devops" minHeight="min-h-[2700px] md:min-h-[1400px]" Component={DevOpsPipeline} />
        <DeferredSection id="qa" minHeight="min-h-[3000px] md:min-h-[1150px]" Component={QATesting} />
        <DeferredSection id="ecommerce" minHeight="min-h-[2600px] md:min-h-[1050px]" Component={Ecommerce} />
        <DeferredSection id="resume" minHeight="min-h-[1750px] md:min-h-[950px]" Component={ResumeEducation} />
        <DeferredSection id="contact" minHeight="min-h-[1900px] md:min-h-[900px]" Component={Contact} />
      </main>
      <Footer />
    </div>
  );
}

function DeferredSection({ id, minHeight, Component }) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "1600px 0px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={containerRef} id={id} className={minHeight}>
      {shouldRender ? (
        <Suspense fallback={<SectionLoader />}>
          <Component sectionId={null} />
        </Suspense>
      ) : null}
    </div>
  );
}

function SectionLoader() {
  return (
    <div className="flex min-h-72 items-center justify-center bg-[#0A0014]" role="status" aria-label="Loading section">
      <span className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
        <span className="block h-full w-1/2 rounded-full bg-[#FACC15]" />
      </span>
    </div>
  );
}
