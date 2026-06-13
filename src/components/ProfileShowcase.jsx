import { motion, useInView, useReducedMotion } from "framer-motion";
import { Cloud, Code2, ShieldCheck, Workflow } from "lucide-react";
import { useRef } from "react";

const photo = "/assets/profile-orbit.webp";

const badges = [
  { label: "Full-Stack", Icon: Code2, className: "left-0 top-[25%] lg:-left-1" },
  { label: "QA Automation", Icon: ShieldCheck, className: "right-1 top-[25%] lg:right-2" },
  { label: "DevOps", Icon: Cloud, className: "left-2 bottom-[28%] lg:left-1" },
  { label: "Product Ops", Icon: Workflow, className: "right-2 bottom-[22%] lg:right-3" }
];

const particles = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 8) % 94}%`,
  top: `${(index * 41 + 13) % 88}%`,
  size: index % 4 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
  tone: index % 4 === 0 ? "bg-amber/80" : "bg-cyan-200/70"
}));

export default function ProfileShowcase() {
  const stageRef = useRef(null);
  const isInView = useInView(stageRef, { amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const orbitIsActive = isInView && !prefersReducedMotion;

  return (
    <motion.div
      ref={stageRef}
      className="relative z-10 mx-auto flex w-full max-w-[34rem] items-center justify-center px-2 py-2 lg:-mt-3"
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <div className="relative flex h-[24rem] w-full max-w-[21rem] items-center justify-center sm:h-[29rem] sm:max-w-[31rem] lg:h-[min(30rem,calc(100vh-9rem))] lg:max-w-[34rem]">
        <div
          aria-hidden
          className="absolute h-[19rem] w-[19rem] rounded-full bg-gradient-to-br from-purpleAccent/24 via-skyAccent/12 to-amber/10 opacity-70 blur-2xl sm:h-[26rem] sm:w-[26rem]"
        />
        <div aria-hidden className="absolute h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),rgba(10,0,20,0.92)_58%,transparent_72%)] sm:h-[24rem] sm:w-[24rem]" />
        <div
          aria-hidden
          className="absolute h-[16rem] w-[16rem] rounded-full border border-cyan-300/45 shadow-[0_0_24px_rgba(34,211,238,0.18)] sm:h-[23rem] sm:w-[23rem]"
        />
        <div aria-hidden className="absolute h-[18rem] w-[18rem] rounded-full border border-purple-400/30 sm:h-[27rem] sm:w-[27rem]" />
        <motion.div
          aria-hidden
          className="absolute h-[20rem] w-[20rem] rounded-full border border-dashed border-amber/25 sm:h-[29rem] sm:w-[29rem]"
          animate={orbitIsActive ? { rotate: 360 } : { rotate: 0 }}
          transition={orbitIsActive ? { duration: 42, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
        />
        <div aria-hidden className="absolute h-[14rem] w-[14rem] rounded-full border border-cyan-300/20 sm:h-[20rem] sm:w-[20rem]" />
        <div aria-hidden className="absolute h-[12rem] w-[23rem] -rotate-[13deg] rounded-[50%] border-t border-cyan-200/35 sm:h-[16rem] sm:w-[33rem]" />
        <div aria-hidden className="absolute h-[11rem] w-[22rem] rotate-[17deg] rounded-[50%] border-b border-purple-400/35 sm:h-[15rem] sm:w-[32rem]" />

        <div aria-hidden className="dot-matrix absolute right-5 top-10 h-28 w-28 opacity-25 sm:right-10 sm:top-12" />
        <div aria-hidden className="absolute bottom-7 left-1/2 h-10 w-56 -translate-x-1/2 rounded-full bg-black/45 blur-lg sm:w-[20rem]" />
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 z-[21] h-10 w-[14rem] -translate-x-1/2 rounded-[50%] border-t border-cyan-200/18 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),rgba(124,58,237,0.10)_45%,transparent_76%)] sm:w-[19rem]"
        />

        {particles.map((particle) => (
          <span
            aria-hidden
            key={particle.id}
            className={`absolute rounded-full opacity-70 ${particle.tone} ${particle.size}`}
            style={{ left: particle.left, top: particle.top }}
          />
        ))}

        {badges.map(({ label, Icon, className }) => (
          <div key={label} className={`absolute z-30 hidden md:block ${className}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-[#050505] px-3 py-1.5 text-[0.7rem] font-black text-cyan-50 shadow-lg shadow-black/30">
              <Icon size={14} className="text-amber" />
              {label}
            </span>
          </div>
        ))}

        <motion.img
          src={photo}
          alt="Sayyab Ashraf Software Engineer profile portrait"
          width="1050"
          height="974"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="relative z-[22] h-[21rem] w-auto max-w-[20rem] object-contain sm:h-[27.5rem] sm:max-w-[28rem] lg:h-[min(28rem,calc(100vh-9.5rem))] lg:max-w-[29rem]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.96) 86%, rgba(0,0,0,0.72) 93%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.96) 86%, rgba(0,0,0,0.72) 93%, transparent 100%)",
            filter: "drop-shadow(-4px 0 10px rgba(168,85,247,0.20)) drop-shadow(4px 0 10px rgba(56,189,248,0.22)) drop-shadow(0 20px 28px rgba(0,0,0,0.48))"
          }}
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={prefersReducedMotion ? undefined : { rotateX: 2, rotateY: -3, scale: 1.01 }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1 left-1/2 z-[25] h-12 w-[14rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(5,0,13,0.72)_0%,rgba(20,6,38,0.42)_38%,rgba(56,189,248,0.08)_58%,transparent_78%)] sm:w-[18rem]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[4.2rem] left-1/2 z-[27] h-px w-[12rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent sm:bottom-[5rem] sm:w-[18rem]"
        />

        <div className="absolute -bottom-3 z-30 hidden w-full max-w-[20rem] grid-cols-2 gap-2 sm:grid md:hidden">
          {badges.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/25 bg-[#050505] px-3 py-2 text-[0.68rem] font-black text-cyan-50 shadow-lg"
            >
              <Icon size={13} className="text-amber" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
