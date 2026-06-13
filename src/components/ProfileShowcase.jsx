import { motion } from "framer-motion";
import { Cloud, Code2, ShieldCheck, Workflow } from "lucide-react";

const photo = "/assets/profile-orbit-clean.png";

const badges = [
  { label: "Full-Stack", Icon: Code2, className: "left-0 top-[25%] lg:-left-1", delay: 0 },
  { label: "QA Automation", Icon: ShieldCheck, className: "right-1 top-[25%] lg:right-2", delay: 0.18 },
  { label: "DevOps", Icon: Cloud, className: "left-2 bottom-[28%] lg:left-1", delay: 0.36 },
  { label: "Product Ops", Icon: Workflow, className: "right-2 bottom-[22%] lg:right-3", delay: 0.54 }
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 8) % 94}%`,
  top: `${(index * 41 + 13) % 88}%`,
  delay: index * 0.16,
  size: index % 5 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
  tone: index % 5 === 0 ? "bg-amber/80 shadow-[0_0_16px_rgba(250,204,21,0.75)]" : "bg-cyan-200/75 shadow-[0_0_16px_rgba(34,211,238,0.75)]"
}));

export default function ProfileShowcase() {
  return (
    <motion.div
      className="relative z-10 mx-auto flex w-full max-w-[34rem] items-center justify-center px-2 py-2 lg:-mt-3"
      initial={{ opacity: 0, x: 42 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <div className="relative flex h-[24rem] w-full max-w-[21rem] items-center justify-center sm:h-[29rem] sm:max-w-[31rem] lg:h-[min(30rem,calc(100vh-9rem))] lg:max-w-[34rem]">
        <motion.div
          aria-hidden
          className="absolute h-[20rem] w-[20rem] rounded-full bg-gradient-to-br from-purpleAccent/30 via-skyAccent/14 to-amber/12 blur-3xl sm:h-[27rem] sm:w-[27rem]"
          animate={{ opacity: [0.34, 0.62, 0.34], scale: [0.98, 1.05, 0.98] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden className="absolute h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),rgba(10,0,20,0.92)_58%,transparent_72%)] blur-sm sm:h-[24rem] sm:w-[24rem]" />
        <motion.div
          aria-hidden
          className="absolute h-[16rem] w-[16rem] rounded-full border border-cyan-300/45 shadow-[0_0_34px_rgba(34,211,238,0.22)] sm:h-[23rem] sm:w-[23rem]"
          animate={{ opacity: [0.58, 1, 0.58], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="absolute h-[18rem] w-[18rem] rounded-full border border-purple-400/30 sm:h-[27rem] sm:w-[27rem]"
        />
        <div
          aria-hidden
          className="absolute h-[20rem] w-[20rem] rounded-full border border-dashed border-amber/25 sm:h-[29rem] sm:w-[29rem]"
        />
        <div
          aria-hidden
          className="absolute h-[14rem] w-[14rem] rounded-full border border-cyan-300/20 sm:h-[20rem] sm:w-[20rem]"
        />
        <motion.div
          aria-hidden
          className="absolute h-[12rem] w-[23rem] -rotate-[13deg] rounded-[50%] border-t border-cyan-200/35 sm:h-[16rem] sm:w-[33rem]"
          animate={{ opacity: [0.45, 0.85, 0.45], y: [0, -5, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute h-[11rem] w-[22rem] rotate-[17deg] rounded-[50%] border-b border-purple-400/35 sm:h-[15rem] sm:w-[32rem]"
          animate={{ opacity: [0.36, 0.72, 0.36], y: [0, 5, 0] }}
          transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        <div aria-hidden className="dot-matrix absolute right-5 top-10 h-28 w-28 opacity-25 sm:right-10 sm:top-12" />
        <div aria-hidden className="absolute bottom-7 left-1/2 h-12 w-56 -translate-x-1/2 rounded-full bg-black/50 blur-xl sm:w-[20rem]" />
        <div
          aria-hidden
          className="absolute bottom-10 left-1/2 z-[18] h-14 w-[15rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.14),rgba(168,85,247,0.10)_44%,rgba(5,0,13,0.28)_70%,transparent_86%)] opacity-70 blur-lg sm:w-[20rem]"
        />
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 z-[21] h-10 w-[14rem] -translate-x-1/2 rounded-[50%] border-t border-cyan-200/18 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),rgba(124,58,237,0.10)_45%,transparent_76%)] sm:w-[19rem]"
        />

        {particles.map((particle) => (
          <motion.span
            aria-hidden
            key={particle.id}
            className={`absolute rounded-full ${particle.tone} ${particle.size}`}
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.12, 0.8, 0.12], y: [0, -14, 0] }}
            transition={{ duration: 4.3 + particle.id * 0.08, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
          />
        ))}

        {badges.map(({ label, Icon, className, delay }) => (
          <motion.div
            key={label}
            className={`absolute z-30 hidden md:block ${className}`}
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.2 + delay, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-[#050505] px-3 py-1.5 text-[0.7rem] font-black text-cyan-50 shadow-lg shadow-black/40">
              <Icon size={14} className="text-amber" />
              {label}
            </span>
          </motion.div>
        ))}

        <motion.img
          aria-hidden
          src={photo}
          className="absolute z-[19] h-[21rem] w-auto max-w-[20rem] object-contain opacity-20 blur-[2px] sm:h-[27.5rem] sm:max-w-[28rem] lg:h-[min(28rem,calc(100vh-9.5rem))] lg:max-w-[29rem]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 76%, rgba(0,0,0,0.68) 88%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 0%, #000 76%, rgba(0,0,0,0.68) 88%, transparent 100%)",
            filter:
              "brightness(1.08) saturate(1.04) drop-shadow(0 0 8px rgba(255,255,255,0.24)) drop-shadow(0 0 18px rgba(56,189,248,0.26)) drop-shadow(0 0 28px rgba(168,85,247,0.20))"
          }}
          animate={{ y: [0, -10, 0], scale: [1.012, 1.025, 1.012] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src={photo}
          alt="Sayyab Ashraf"
          className="relative z-[22] h-[21rem] w-auto max-w-[20rem] object-contain sm:h-[27.5rem] sm:max-w-[28rem] lg:h-[min(28rem,calc(100vh-9.5rem))] lg:max-w-[29rem]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.96) 86%, rgba(0,0,0,0.72) 93%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.96) 86%, rgba(0,0,0,0.72) 93%, transparent 100%)",
            filter:
              "drop-shadow(0 0 4px rgba(255,255,255,0.62)) drop-shadow(-6px 0 15px rgba(168,85,247,0.28)) drop-shadow(6px 0 15px rgba(56,189,248,0.30)) drop-shadow(0 28px 44px rgba(0,0,0,0.68))"
          }}
          initial={{ opacity: 0, x: 36, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.7, ease: "easeOut" },
            x: { duration: 0.7, ease: "easeOut" },
            scale: { duration: 0.7, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ rotateX: 3, rotateY: -4, scale: 1.02 }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1 left-1/2 z-[25] h-12 w-[14rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(5,0,13,0.72)_0%,rgba(20,6,38,0.42)_38%,rgba(56,189,248,0.08)_58%,transparent_78%)] blur-[1px] sm:w-[18rem]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-7 left-1/2 z-[26] h-8 w-[12rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(56,189,248,0.08)_28%,rgba(168,85,247,0.06)_52%,transparent_74%)] opacity-70 blur-md sm:w-[16rem]"
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-[4.2rem] left-1/2 z-[27] h-px w-[12rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent sm:bottom-[5rem] sm:w-[18rem]"
          animate={{ opacity: [0.42, 0.85, 0.42], scaleX: [0.94, 1.02, 0.94] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
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
