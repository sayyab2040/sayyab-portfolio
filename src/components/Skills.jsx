import { motion } from "framer-motion";
import { Activity, Database, Layers, Radar, ShieldCheck, Terminal } from "lucide-react";
import { skills } from "../data/portfolioData.js";
import BarChart from "./BarChart.jsx";
import CircularProgress from "./CircularProgress.jsx";
import MiniLineChart from "./MiniLineChart.jsx";
import SectionTitle from "./SectionTitle.jsx";
import SkillCard from "./SkillCard.jsx";

const metrics = [
  { label: "Full-Stack Workflows", value: 88, Icon: Layers },
  { label: "QA Automation", value: 95, Icon: ShieldCheck },
  { label: "Cloud Delivery", value: 84, Icon: Terminal },
  { label: "Data/API Systems", value: 86, Icon: Database }
];

const tech = ["React", "Node.js", "REST APIs", "Selenium", "Jenkins", "Docker", "AWS EC2", "Grafana", "MongoDB", "Supabase"];

export default function Skills() {
  return (
    <section id="skills" className="section-offset section-panel dark-band">
      <div className="absolute inset-0 dark-grid opacity-45" />
      <div className="section-blob left-[-8rem] top-24 h-80 w-80 bg-skyAccent/20" />
      <div className="section-blob right-[-10rem] bottom-16 h-96 w-96 bg-purpleAccent/20" />

      <div className="section-shell">
        <SectionTitle
          label="SKILLS DASHBOARD"
          title="A practical engineering stack"
          subtitle="Six focused capability groups covering full-stack development, interfaces, APIs, QA automation, cloud deployment, monitoring, and marketplace operations."
        />

        <div className="mb-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="gradient-border glow-card dark-glass-strong rounded-[2rem] p-5 sm:p-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Capability Metrics</p>
                <h3 className="mt-1 text-2xl font-black text-white">Delivery readiness console</h3>
              </div>
              <span className="hidden rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1.5 text-xs font-black text-emerald sm:inline-flex">
                <span className="status-dot mr-2" />
                Active
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map(({ label, value, Icon }, index) => (
                <motion.article
                  key={label}
                  className="rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] p-4 shadow-premium"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-skyAccent text-white shadow-cyan">
                      <Icon size={19} />
                    </span>
                    <CircularProgress value={value} size={58} />
                  </div>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.13em] text-slate-300">{label}</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#111018]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violetAccent via-skyAccent to-tealAccent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="graph-panel-white mt-4 rounded-[1.35rem] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-amber">Capability Trend</span>
                <span className="text-xs font-black text-cyan-200">Live</span>
              </div>
              <MiniLineChart data={[48, 62, 58, 76, 84, 91]} color="cyan" height={74} />
            </div>
          </motion.div>

          <motion.div
            className="gradient-border glow-card dark-glass rounded-[2rem] p-5 sm:p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Tech Orbit</p>
                <h3 className="mt-1 text-2xl font-black text-white">Tools in motion</h3>
              </div>
              <Radar className="text-teal-200" size={24} />
            </div>
            <div className="dark-inner-panel relative min-h-[17rem] overflow-hidden rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-4 dark-grid">
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-300/20 animate-soft-spin" />
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-glow">
                <Activity size={28} />
              </div>
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tech.map((item, index) => (
                  <motion.span
                    key={item}
                    className="rounded-2xl border border-cyan-300/20 bg-[#111018] px-3 py-3 text-center text-xs font-black text-cyan-50 shadow-premium"
                    animate={{ y: [0, index % 2 ? 6 : -6, 0] }}
                    transition={{ duration: 4.5 + index * 0.12, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.45)" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="graph-panel-white mt-4 rounded-[1.35rem] p-4">
              <BarChart
                height={116}
                data={[
                  { label: "FE", value: 95 },
                  { label: "API", value: 88 },
                  { label: "QA", value: 98 },
                  { label: "Ops", value: 89 }
                ]}
              />
            </div>
          </motion.div>
        </div>

        <div className="skills-card-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
