/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFC",
        muted: "#9CA3AF",
        skyAccent: "#38BDF8",
        tealAccent: "#38BDF8",
        royal: "#9333EA",
        blackBase: "#0A0014",
        richBlack: "#050505",
        navy: "#0A0014",
        midnight: "#12031F",
        deep: "#1A0630",
        purpleBlack: "#2B0B45",
        midnightViolet: "#2B0B45",
        paper: "#F8FBFF",
        ice: "#EAF4FF",
        softCyan: "#ECFEFF",
        emerald: "#22C55E",
        amber: "#FACC15",
        amberDeep: "#F59E0B",
        violet: "#8B5CF6",
        violetAccent: "#7C3AED",
        purpleAccent: "#A855F7"
      },
      boxShadow: {
        glow: "0 24px 90px rgba(168, 85, 247, 0.22), 0 12px 45px rgba(14, 165, 233, 0.16)",
        glass: "0 26px 80px rgba(3, 0, 20, 0.34)",
        premium: "0 34px 100px rgba(3, 0, 20, 0.44)",
        cyan: "0 18px 55px rgba(20, 184, 166, 0.22)",
        violet: "0 24px 80px rgba(168, 85, 247, 0.28)",
        yellow: "0 18px 55px rgba(250, 204, 21, 0.24)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      keyframes: {
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.96)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        pulseLine: "pulseLine 2.5s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite"
      }
    }
  },
  plugins: []
};
