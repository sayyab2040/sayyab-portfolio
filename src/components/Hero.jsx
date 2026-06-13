import { motion } from "framer-motion";
import { ArrowRight, Code2, Download, Mail, Sparkles } from "lucide-react";
import { identity, resume, socials } from "../data/portfolioData.js";
import ProfileShowcase from "./ProfileShowcase.jsx";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  return (
    <section id="home" className="section-offset section-panel dark-band overflow-hidden">
      <div className="absolute inset-0 dark-grid opacity-[0.34]" />
      <div className="absolute inset-0 dot-matrix opacity-[0.07]" />
      <div className="absolute inset-0 wave-lines opacity-[0.11]" />
      <div className="section-blob -left-32 top-24 h-96 w-96 bg-purpleAccent/24" />
      <div className="section-blob right-[-9rem] top-20 h-[32rem] w-[32rem] bg-skyAccent/12" />
      <div className="section-blob bottom-[-8rem] left-[42%] h-[26rem] w-[26rem] bg-amber/10" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-[#2B0B45]/40 to-transparent" />

      <div className="section-shell grid min-h-[calc(100vh-4.25rem)] items-center gap-5 pb-5 pt-3 lg:grid-cols-[0.95fr_1.05fr] lg:gap-7 xl:gap-8">
        <motion.div className="relative z-10 min-w-0" variants={container} initial="hidden" animate="visible">
          <motion.div className="hero-main-card hero-panel white-futuristic-panel max-w-[585px] px-5 py-6 sm:px-6 sm:py-6 lg:px-7 lg:py-7 xl:px-8" variants={item}>
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-3"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="tech-icon-capsule flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Code2 size={19} />
                </span>
                <span className="section-label-yellow text-[0.72rem] sm:text-xs">Software Engineer</span>
              </motion.div>

              <h1 className="hero-title mt-5 max-w-full break-words font-display font-black text-white text-balance">
                <span className="block text-white">Hi, I&apos;m</span>
                <span className="block text-[#FACC15]">Sayyab Ashraf.</span>
            </h1>

              <p className="mt-3 max-w-full break-words text-balance font-display text-[1rem] font-black leading-snug text-[#050505] sm:text-xl xl:text-[1.25rem]">
                Full-Stack Developer <span className="text-[#FACC15]">&bull;</span> QA Automation <span className="text-[#7C3AED]">&bull;</span> DevOps
              </p>

              <p className="mt-4 max-w-[33rem] break-words text-[0.95rem] font-semibold leading-[1.65] text-[#D7D7E0] sm:text-[0.98rem]">
                {identity.statement}
              </p>

              <p className="mt-3 max-w-[33rem] break-words text-pretty text-sm font-medium leading-[1.62] text-[#A9A9B8] sm:text-[0.94rem]">
                {identity.intro}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a className="primary-button w-full sm:w-auto" href="#projects">
                  View Projects <ArrowRight size={17} />
                </a>
                <a
                  className="dark-button w-full sm:w-auto"
                  href={resume.isAvailable ? resume.url : `mailto:${identity.email}?subject=Resume Request`}
                  download={resume.isAvailable ? resume.fileName : undefined}
                >
                  Download Resume <Download size={17} />
                </a>
                <a className="dark-button w-full sm:w-auto" href="#contact">
                  Contact Me <Mail size={17} />
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0B0712] text-white shadow-premium transition hover:-translate-y-1 hover:border-[#FACC15]/70 hover:text-[#FACC15]"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                  >
                    <Icon size={17} />
                  </a>
                ))}
                <span className="hidden text-xs font-black uppercase tracking-[0.16em] text-[#A9A9B8] sm:inline">
                  Product-ready engineering
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <ProfileShowcase />
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-purple-300/20 bg-[#050505] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyan-100 shadow-premium lg:flex"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Sparkles size={14} />
        Product-ready engineering portfolio
      </motion.div>
    </section>
  );
}
