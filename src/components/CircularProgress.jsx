import { motion } from "framer-motion";
import { useId } from "react";

export default function CircularProgress({ value = 85, size = 80, label = "" }) {
  const gradientId = useId();
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(168, 85, 247, 0.18)"
            strokeWidth="4"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="4"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="58%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-lg font-black text-white">{value}%</p>
        </div>
      </div>
      {label && <p className="text-center text-xs font-bold uppercase text-slate-400">{label}</p>}
    </div>
  );
}
