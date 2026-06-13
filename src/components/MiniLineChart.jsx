import { motion } from "framer-motion";
import { useId } from "react";

export default function MiniLineChart({ data = [30, 50, 35, 70, 85, 95], color = "cyan", height = 60 }) {
  const gradientId = useId();
  const maxValue = Math.max(...data);
  const colorClass = {
    cyan: "#22D3EE",
    purple: "#A855F7",
    yellow: "#FACC15",
    green: "#22C55E"
  }[color];

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - (value / maxValue) * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg
      viewBox={`0 0 100 100`}
      height={height}
      className="w-full"
      preserveAspectRatio="none"
    >
      {/* Grid lines */}
      <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(168, 85, 247, 0.12)" strokeWidth="0.5" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(34, 211, 238, 0.12)" strokeWidth="0.5" />
      <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(168, 85, 247, 0.12)" strokeWidth="0.5" />

      {/* Area under line */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colorClass} stopOpacity="0.3" />
          <stop offset="100%" stopColor={colorClass} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={points}
        fill={`url(#${gradientId})`}
        initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
        whileInView={{ strokeDasharray: 100, strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Line */}
      <motion.polyline
        points={points}
        fill="none"
        stroke={colorClass}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
        whileInView={{ strokeDasharray: 100, strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Data points */}
      {data.map((value, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - (value / maxValue) * 100;
        return (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r={index === data.length - 1 ? "2.1" : "1.45"}
            fill={index === data.length - 1 ? "#FACC15" : colorClass}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          />
        );
      })}
    </svg>
  );
}
