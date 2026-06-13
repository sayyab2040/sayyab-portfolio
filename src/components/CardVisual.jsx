import { motion, useReducedMotion } from "framer-motion";

const cardVisuals = {
  "Core Software Engineering": {
    src: "/assets/card-visuals/core-software-visual.png",
    alt: "Software architecture, code, workflow, and technical documentation illustration"
  },
  "Frontend / App Development": {
    src: "/assets/card-visuals/frontend-app-visual.png",
    alt: "Responsive website and mobile interface development illustration"
  },
  "Backend / Database / APIs": {
    src: "/assets/card-visuals/backend-api-visual.png",
    alt: "Database, API, server, and cloud infrastructure illustration",
    compact: true
  },
  "QA / Testing": {
    src: "/assets/card-visuals/qa-testing-visual.png",
    alt: "Software testing, bug tracking, checklist, and validation illustration",
    compact: true
  },
  "DevOps / Cloud / Deployment": {
    src: "/assets/card-visuals/devops-cloud-visual.png",
    alt: "DevOps, CI/CD, cloud deployment, and monitoring illustration",
    compact: true
  },
  "E-commerce / Product Operations": {
    src: "/assets/card-visuals/ecommerce-ops-visual.png",
    alt: "E-commerce products, analytics, logistics, and marketplace operations illustration"
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
      <img className="card-visual" src={visual.src} alt={visual.alt} loading="lazy" decoding="async" />
    </motion.div>
  );
}
