import { useId } from "react";

export default function BarChart({ data = [
  { label: "React", value: 95 },
  { label: "Node.js", value: 88 },
  { label: "Docker", value: 82 },
  { label: "AWS", value: 78 }
], height = 140 }) {
  const gradientId = useId();
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div style={{ height }}>
      <svg viewBox="0 0 280 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        <line x1="35" y1="20" x2="35" y2="110" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" />
        <line x1="35" y1="110" x2="280" y2="110" stroke="rgba(34, 211, 238, 0.16)" strokeWidth="1" />

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 80;
          const x = 45 + index * 60;
          const y = 110 - barHeight;

          return (
            <g key={index}>
              <rect
                x={x - 15}
                y={y}
                width="30"
                height={barHeight}
                rx="4"
                fill={`url(#${gradientId})`}
              />
              <text
                x={x}
                y="125"
                textAnchor="middle"
                fontSize="10"
                fill="rgba(148, 163, 184, 0.8)"
                fontWeight="600"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="34%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
