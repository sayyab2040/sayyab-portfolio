import { motion } from "framer-motion";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: `${(index * 37 + 9) % 100}%`,
  y: `${(index * 23 + 17) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 9 + (index % 6),
  size: index % 4 === 0 ? 3 : 1.6,
  color:
    index % 5 === 0
      ? "rgba(250,204,21,0.62)"
      : index % 3 === 0
        ? "rgba(168,85,247,0.38)"
        : index % 3 === 1
          ? "rgba(34,211,238,0.40)"
          : "rgba(148,163,184,0.25)"
}));

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(124,58,237,0.18), transparent 30%), radial-gradient(circle at 80% 30%, rgba(14,165,233,0.14), transparent 32%), linear-gradient(135deg, #0A0014, #0B0018, #030014)"
        }}
      />
      <div className="absolute inset-0 dark-grid opacity-[0.34]" />
      <div className="absolute inset-0 dot-matrix opacity-[0.055]" />
      <div className="absolute inset-0 wave-lines opacity-[0.10]" />

      <motion.div
        className="absolute -left-40 -top-32 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22), transparent 68%)" }}
        animate={{ opacity: [0.52, 0.76, 0.52], scale: [1, 1.04, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12rem] top-28 h-[35rem] w-[35rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.16), transparent 70%)" }}
        animate={{ opacity: [0.40, 0.68, 0.40], scale: [1.02, 0.98, 1.02] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[28%] h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(147,51,234,0.14), transparent 70%)" }}
        animate={{ opacity: [0.38, 0.62, 0.38], scale: [0.98, 1.04, 0.98] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute left-[58%] top-[8%] h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(250,204,21,0.095), transparent 70%)" }}
        animate={{ opacity: [0.18, 0.34, 0.18], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,13,0.06),rgba(5,0,13,0.72))]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: particle.color
          }}
          animate={{ opacity: [0.10, 0.72, 0.10], y: [0, -10, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
