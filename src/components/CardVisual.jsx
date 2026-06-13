import { motion, useReducedMotion } from "framer-motion";

const cardVisuals = {
  "Core Software Engineering": {
    src: "/assets/card-visuals/core-software-visual.webp",
    alt: "Core Software Engineering visual",
    width: 800,
    height: 639
  },
  "Frontend / App Development": {
    src: "/assets/card-visuals/frontend-app-visual.webp",
    alt: "Frontend App Development visual",
    width: 800,
    height: 590
  },
  "Backend / Database / APIs": {
    src: "/assets/card-visuals/backend-api-visual.webp",
    alt: "Backend Database API visual",
    width: 800,
    height: 592,
    compact: true
  },
  "QA / Testing": {
    src: "/assets/card-visuals/qa-testing-visual.webp",
    alt: "QA Testing workflow visual",
    width: 800,
    height: 551,
    compact: true
  },
  "DevOps / Cloud / Deployment": {
    src: "/assets/card-visuals/devops-cloud-visual.webp",
    alt: "DevOps Cloud Deployment visual",
    width: 800,
    height: 634,
    compact: true
  },
  "E-commerce / Product Operations": {
    src: "/assets/card-visuals/ecommerce-ops-visual.webp",
    alt: "E-commerce Product Operations visual",
    width: 800,
    height: 697
  }
};

export default function CardVisual({ title, index }) {
  const prefersReducedMotion = useReducedMotion();
  const visual = cardVisuals[title];

  if (!visual) {
    return null;
  }

  const motionDistance = prefersReducedMotion ? 0 : 18;

  return (
    <motion.div
      className={`card-visual-stage${visual.compact ? " card-visual-stage--compact" : ""}`}
      variants={{
        hidden: { opacity: 0, y: motionDistance, scale: prefersReducedMotion ? 1 : 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.1 + index * 0.035,
            ease: "easeOut"
          }
        },
        hover: prefersReducedMotion
          ? {}
          : {
              y: -6,
              scale: 1.02,
              transition: { duration: 0.26, ease: "easeOut" }
            }
      }}
    >
      <span className="card-visual-glow" aria-hidden="true" />
      <img
        className="card-visual"
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}
