import { motion } from "framer-motion";

export default function ProgressBar({ value = 85, label = "", showValue = true, color = "cyan", className = "" }) {
  const colorMap = {
    cyan: "from-cyan-400 to-cyan-300",
    purple: "from-purple-500 to-purple-400",
    yellow: "from-amber to-amber/80",
    green: "from-emerald to-emerald/80"
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</span>}
          {showValue && <span className="text-sm font-black text-white">{value}%</span>}
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full border border-purple-400/25 bg-[#111018]">
        <motion.div
          className={`progress-fill h-full origin-left rounded-full bg-gradient-to-r ${colorMap[color]} shadow-[0_0_10px_rgba(34,211,238,0.22)]`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
