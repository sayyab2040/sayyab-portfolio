import { motion } from "framer-motion";
import CardVisual from "./CardVisual.jsx";
import ProgressBar from "./ProgressBar.jsx";

const accents = [
  ["#7C3AED", "#22D3EE"],
  ["#9333EA", "#38BDF8"],
  ["#A855F7", "#FACC15"],
  ["#22D3EE", "#7C3AED"],
  ["#FACC15", "#9333EA"],
  ["#38BDF8", "#A855F7"]
];

const skillLevels = {
  "Core Software Engineering": 92,
  "Frontend / App Development": 95,
  "Backend / Database / APIs": 88,
  "QA / Testing": 98,
  "DevOps / Cloud / Deployment": 89,
  "E-commerce / Product Operations": 86
};

export default function SkillCard({ skill, index }) {
  const { Icon } = skill;
  const [from, to] = accents[index % accents.length];
  const proficiency = skillLevels[skill.title] || 85;

  return (
    <motion.article
      className="skill-card white-tech-card card-cut-corner glow-card h-full rounded-[1.55rem] p-5 shadow-premium sm:p-6"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.05, ease: "easeOut" }
        },
        hover: {
          y: -7,
          scale: 1.01,
          transition: { duration: 0.28, ease: "easeOut" }
        }
      }}
    >
      <div
        className="skill-card-glow absolute right-[-2.5rem] top-[-2.5rem] h-32 w-32 rounded-full blur-2xl"
        style={{ background: `${from}24` }}
      />
      <div
        className="skill-card-rail absolute left-0 top-8 h-24 w-1 rounded-r-full"
        style={{ background: `linear-gradient(180deg, ${from}, ${to})` }}
      />

      <div className="skill-card-content relative">
        <CardVisual title={skill.title} index={index} />

        <div className="skill-card-meta flex items-start justify-between gap-3">
          <span
            className="skill-card-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-premium ring-1 ring-white/10"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            <Icon size={24} />
          </span>
          <span className="skill-card-percentage yellow-chip text-[0.7rem]">{proficiency}%</span>
        </div>

        <h3 className="skill-card-title mt-5 text-lg font-black leading-tight text-white">{skill.title}</h3>
        <p className="skill-card-description mt-2 text-sm font-medium leading-6 text-slate-300">{skill.description}</p>

        <div className="skill-card-progress mt-4">
          <ProgressBar value={proficiency} label="" showValue={false} color="cyan" className="skill-progress" />
        </div>

        <div className="skill-card-tags mt-5 flex flex-wrap gap-2">
          {skill.items.map((chip) => (
            <span key={chip} className="dark-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
