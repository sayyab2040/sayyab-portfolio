import { motion } from "framer-motion";
import { AlertTriangle, Server, ShieldCheck } from "lucide-react";
import { qaTools, qaWorkflow } from "../data/portfolioData.js";
import CircularProgress from "./CircularProgress.jsx";
import ProgressBar from "./ProgressBar.jsx";
import SectionTitle from "./SectionTitle.jsx";

const metrics = [
  ["Pass Rate", "95%", "text-emerald"],
  ["Test Cases", "120+", "text-skyAccent"],
  ["Bug Reports", "30+", "text-amber"],
  ["API Checks", "50+", "text-violetAccent"]
];

export default function QATesting({ sectionId = "qa" }) {
  return (
    <section id={sectionId || undefined} className="section-offset section-panel light-band">
      <div className="absolute inset-0 animated-grid opacity-[0.30]" />
      <div className="absolute inset-0 wave-lines opacity-[0.10]" />
      <div className="section-blob right-[-8rem] top-20 h-80 w-80 bg-purpleAccent/20" />
      <div className="section-blob left-[-7rem] bottom-16 h-80 w-80 bg-skyAccent/10" />

      <div className="section-shell">
        <SectionTitle
          label="QUALITY ASSURANCE"
          title="Testing workflows built for reliability"
          subtitle="Structured testing workflows, pass/fail evidence, API checks, bug reporting, and documentation shown as a live quality dashboard."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            className="gradient-border glow-card glass-card-strong rounded-[2.1rem] p-5 sm:p-7"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber">Testing Workflow</p>
                <h3 className="mt-1 text-2xl font-black text-white">Quality execution loop</h3>
              </div>
              <span className="rounded-full border border-amber/25 bg-amber/10 px-3 py-1.5 text-xs font-black text-amber">
                Active Loop
              </span>
            </div>

            <div className="relative grid gap-3">
              <div className="absolute left-5 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-violetAccent via-skyAccent to-tealAccent sm:block" />
              {qaWorkflow.map((step, index) => (
                <motion.article
                  key={step}
                  className="relative flex items-center gap-4 rounded-[1.35rem] border border-purple-300/25 bg-[#0B0712] p-4 shadow-premium"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ x: 6 }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-xs font-black text-white shadow-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-black text-slate-200">{step}</p>
                  <span className="ml-auto status-dot" />
                </motion.article>
              ))}
            </div>
          </motion.div>

          <QAConsole />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {qaTools.map(({ title, description, Icon }, index) => (
            <motion.article
              key={title}
              className="gradient-border glow-card glass-card rounded-[1.35rem] p-5 card-3d"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber/10 text-amber">
                <Icon size={19} />
              </span>
              <h3 className="mt-4 text-sm font-black text-white">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QAConsole() {
  const testCases = [
    { name: "POST /api/auth/login", status: "Passed", latency: "48ms", type: "API" },
    { name: "GET /api/user/profile", status: "Passed", latency: "24ms", type: "API" },
    { name: "Cart Checkout Flow", status: "Passed", latency: "1.2s", type: "UI" },
    { name: "Responsive Navigation", status: "Review", latency: "410ms", type: "UI" }
  ];

  return (
    <motion.div
      className="gradient-border glow-card dark-glass-strong rounded-[2.1rem] p-4 sm:p-5"
      initial={{ opacity: 0, x: 26 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="dark-inner-panel dark-grid rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Automated QA Core</p>
            <h3 className="mt-1 text-2xl font-black text-white">Active Test Runner</h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1.5 text-xs font-black text-emerald">
            <span className="status-dot" />
            Suite Ready
          </span>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {metrics.map(([label, value, color], index) => (
            <motion.article
              key={label}
              className="rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] p-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: index * 0.04 }}
            >
              <p className="text-[0.64rem] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
              <p className={`mt-2 text-2xl font-black ${color}`}>{value}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-100">Test Suite Runs</p>
              <ShieldCheck size={17} className="text-emerald" />
            </div>
            <div className="space-y-2">
              {testCases.map((tc) => (
                <div key={tc.name} className="flex items-center justify-between gap-3 rounded-xl bg-[#111018] px-3 py-2">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-black text-slate-200">{tc.name}</p>
                    <p className="mt-0.5 text-[0.62rem] font-semibold text-slate-500">{tc.type} | {tc.latency}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-black ${tc.status === "Passed" ? "bg-emerald/10 text-emerald" : "bg-amber/10 text-amber"}`}>
                    {tc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-4 text-center">
              <CircularProgress value={95} size={96} />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Pass Rate</p>
            </div>

            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-xl bg-skyAccent/10 px-2 py-1 text-xs font-black text-cyan-100">
                  <Server size={14} />
                  API Test
                </span>
                <span className="text-xs font-black text-emerald">200 OK</span>
              </div>
              <div className="mt-4">
                <ProgressBar value={92} showValue={false} color="cyan" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.55rem] border border-amber/20 bg-amber/10 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber/20 text-amber">
              <AlertTriangle size={19} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-white">Bug Report Card</p>
                <span className="rounded bg-amber/20 px-2 py-0.5 text-[0.62rem] font-black text-amber">2 Open</span>
              </div>
              <p className="mt-2 text-xs font-medium leading-5 text-slate-300">
                Jira issue verified with expected result, actual result, severity, environment, and reproduction steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
