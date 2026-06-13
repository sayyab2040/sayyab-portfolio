import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { aboutCards, lifecycle } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";

export default function About() {
  return (
    <section id="about" className="section-offset section-panel light-band">
      <div className="absolute inset-0 animated-grid opacity-35" />
      <div className="absolute inset-0 wave-lines opacity-[0.12]" />
      <div className="section-blob -left-24 top-20 h-72 w-72 bg-purpleAccent/20" />
      <div className="section-blob right-[-8rem] bottom-10 h-80 w-80 bg-skyAccent/10" />

      <div className="section-shell">
        <SectionTitle
          label="ENGINEERING PROFILE"
          title="Build, test, deploy, improve."
          subtitle="I work across planning, interface implementation, backend integration, testing, deployment, monitoring, and documentation so product ideas can move from concept to reliable delivery."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            className="gradient-border glow-card glass-card-strong rounded-[2rem] p-5 sm:p-7"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber via-purpleAccent to-skyAccent text-lg font-black text-[#050505] shadow-yellow">
                  SA
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber">Engineering Profile</p>
                  <h3 className="mt-1 font-display text-2xl font-black text-white">Build, test, deploy, improve.</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1.5 text-xs font-black text-emerald">
                <CheckCircle2 size={14} />
                Recruiter Ready
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-slate-300 sm:text-[0.96rem]">
              <p>
                I am a Software Engineer with hands-on experience across full-stack application development, mobile and web workflows, software testing, backend integration, DevOps workflows, cloud deployment, monitoring, and technical documentation.
              </p>
              <p>
                My work focuses on practical execution: authentication systems, role-based dashboards, booking workflows, API integration, database connectivity, test automation, CI/CD pipelines, Docker environments, cloud server deployment, and monitoring dashboards.
              </p>
              <p>
                I also connect software delivery with product operations through marketplace research, sourcing workflows, listing optimization, competitor analysis, and Amazon virtual assistance tasks.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Product thinking", "QA evidence", "Cloud delivery"].map((label, index) => (
                <motion.div
                  key={label}
                  className="rounded-2xl border border-purple-300/25 bg-[#111018] p-4 shadow-premium"
                  animate={{ y: [0, index % 2 ? 4 : -4, 0] }}
                  transition={{ duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={17} className="text-amber" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-slate-200">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.div
            className="gradient-border glow-card dark-glass-strong rounded-[2rem] p-5 sm:p-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="dark-grid rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-5 sm:p-6">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Lifecycle Visual</p>
                  <h3 className="mt-1 font-display text-2xl font-black text-white">From idea to operations</h3>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-black text-cyan-100">
                  Connected flow
                </span>
              </div>

              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent md:block" />
                {lifecycle.map(({ label, Icon }, index) => (
                  <motion.article
                    key={label}
                    className="relative rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] p-4 shadow-premium"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: index * 0.05 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111018] text-cyan-200 shadow-premium ring-1 ring-cyan-300/20">
                        <Icon size={19} />
                      </span>
                      <div>
                        <p className="text-sm font-black text-white">{label}</p>
                        <p className="mt-0.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      {index < lifecycle.length - 1 ? <ArrowRight className="ml-auto hidden text-cyan-300/70 md:block" size={16} /> : null}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map(({ title, description, Icon }, index) => (
            <motion.article
              key={title}
              className="gradient-border glow-card glass-card rounded-[1.45rem] p-5 card-3d"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111018] text-cyan-200 shadow-premium ring-1 ring-cyan-300/20">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
