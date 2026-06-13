import { motion } from "framer-motion";
import { Download, FileText, GraduationCap, Sparkles } from "lucide-react";
import { education, identity, resume } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";

export default function ResumeEducation() {
  return (
    <section id="resume" className="section-offset section-panel light-band">
      <div className="absolute inset-0 animated-grid opacity-[0.30]" />
      <div className="absolute inset-0 wave-lines opacity-[0.10]" />
      <div className="section-blob right-[-8rem] top-24 h-80 w-80 bg-purpleAccent/20" />
      <div className="section-blob left-[-8rem] bottom-14 h-80 w-80 bg-skyAccent/10" />

      <div className="section-shell">
        <SectionTitle
          label="RESUME & EDUCATION"
          title="Academic background and professional direction"
          subtitle="A concise view of academic background and professional positioning across software engineering, QA automation, DevOps, and product operations."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            className="gradient-border glow-card dark-glass-strong rounded-[2.1rem] p-5 text-white sm:p-7"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="dark-grid rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-glow">
                <FileText size={24} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-black sm:text-3xl">Professional Resume</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-slate-300 sm:text-[0.96rem]">
                Complete qualifications across full-stack development, QA automation, DevOps pipelines, cloud deployment, and marketplace analytics.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Software Engineer", "Full-Stack Dev", "QA Automation", "DevOps Pipelines", "Product Ops"].map((item) => (
                  <span className="dark-chip" key={item}>{item}</span>
                ))}
              </div>

              <div className="mt-7 rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-cyan-200" size={19} />
                  <div>
                    <p className="text-sm font-black text-white">Profile summary</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">
                      Product-focused engineering profile for application development, quality, delivery, and operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                {resume.isAvailable ? (
                  <a className="primary-button w-full sm:w-auto" href={resume.url} download={resume.fileName}>
                    Download Resume <Download size={18} />
                  </a>
                ) : (
                  <a className="primary-button w-full sm:w-auto" href={`mailto:${identity.email}?subject=Request for Resume - Sayyab Ashraf`}>
                    Request Resume Copy <Download size={18} />
                  </a>
                )}
                {!resume.isAvailable ? (
                  <p className="mt-3 text-xs font-semibold text-slate-500">Resume file is not currently attached, so this opens an email request.</p>
                ) : null}
              </div>
            </div>
          </motion.article>

          <motion.div
            className="gradient-border glow-card glass-card-strong rounded-[2rem] p-5 sm:p-7"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber">Academic Timeline</p>
                <h3 className="mt-1 text-2xl font-black text-white">Education history</h3>
              </div>
              <GraduationCap className="text-amber" size={28} />
            </div>

            <div className="relative grid gap-4">
              <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-violetAccent via-skyAccent to-tealAccent sm:block" />
              {education.map(({ title, place, period, Icon }, index) => (
                <motion.article
                  key={`${title}-${period}`}
                  className="relative grid gap-4 rounded-[1.45rem] border border-purple-300/25 bg-[#0B0712] p-4 shadow-premium sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-cyan">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-black text-white">{title}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-400">{place}</p>
                  </div>
                  <span className="w-fit rounded-full border border-amber/25 bg-amber/10 px-3 py-1.5 text-xs font-black text-amber">
                    {period}
                  </span>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
