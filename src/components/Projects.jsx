import { motion } from "framer-motion";
import { BarChart3, Bot, Cloud, ShieldCheck } from "lucide-react";
import { projects } from "../data/portfolioData.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionTitle from "./SectionTitle.jsx";

const overview = [
  { label: "TravEra", value: "AI Planner", Icon: Bot },
  { label: "DevOps", value: "99.9% Up", Icon: Cloud },
  { label: "QA", value: "95% Pass", Icon: ShieldCheck },
  { label: "Commerce", value: "91 Score", Icon: BarChart3 }
];

export default function Projects() {
  return (
    <section id="projects" className="section-offset section-panel light-band">
      <div className="absolute inset-0 animated-grid opacity-35" />
      <div className="absolute inset-0 wave-lines opacity-[0.10]" />
      <div className="section-blob left-[-8rem] top-32 h-80 w-80 bg-purpleAccent/20" />
      <div className="section-blob right-[-10rem] bottom-24 h-96 w-96 bg-skyAccent/10" />

      <div className="section-shell">
        <SectionTitle
          label="FEATURED WORK"
          title="Product, DevOps, QA, and operations work shown as live systems."
          subtitle="Each project is presented with a custom coded interface mockup so recruiters can scan product thinking, delivery workflow, test evidence, and operations capability."
        />

        <motion.div
          className="white-tech-card card-cut-corner glow-card mb-8 grid overflow-hidden rounded-[2rem] shadow-premium lg:grid-cols-[0.92fr_1.08fr]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -6 }}
        >
          <div className="dark-inner-panel relative overflow-hidden bg-navy p-5 text-white sm:p-7">
            <div className="absolute inset-0 dark-grid opacity-45" />
            <div className="section-blob -left-16 top-6 h-56 w-56 bg-purpleAccent/25" />
            <div className="section-blob right-[-6rem] bottom-0 h-64 w-64 bg-skyAccent/20" />
            <div className="relative">
              <span className="eyebrow border-amber/25 bg-amber/10 text-amber">Showcase Console</span>
              <h3 className="mt-5 max-w-xl font-display text-2xl font-black leading-tight text-white sm:text-3xl">
                A portfolio surface built like a product command center.
              </h3>
              <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                Recruiters can scan product thinking, test evidence, deployment workflow, and operations capability through visual systems instead of static descriptions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Coded visuals", "Animated pipelines", "Solid black UI", "Technical storytelling"].map((item) => (
                  <span className="dark-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[21rem] overflow-hidden p-5 animated-grid">
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {overview.map(({ label, value, Icon }, index) => (
                <motion.article
                  key={label}
                  className="gradient-border glow-card glass-card-strong rounded-[1.45rem] p-5"
                  animate={{ y: [0, index % 2 ? 7 : -7, 0] }}
                  transition={{ duration: 5.2 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-cyan">
                      <Icon size={19} />
                    </span>
                    <span className="status-dot" />
                  </div>
                  <p className="mt-8 text-xl font-black text-white">{label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-400">{value}</p>
                  <div className="mt-4 h-2 rounded-full bg-[#111018]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violetAccent via-skyAccent to-tealAccent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${78 + index * 5}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.08 }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
