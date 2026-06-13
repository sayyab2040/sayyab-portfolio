import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle2, Gauge, Github, Package, Server, Settings, ShieldCheck, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { devOpsMetrics } from "../data/portfolioData.js";
import MiniLineChart from "./MiniLineChart.jsx";
import SectionTitle from "./SectionTitle.jsx";

const pipelineStages = [
  { label: "Code", desc: "Feature implementation and commits", Icon: Terminal },
  { label: "GitHub", desc: "Repository workflow and branches", Icon: Github },
  { label: "Jenkins CI/CD", desc: "Build, test, and release jobs", Icon: Settings },
  { label: "Docker", desc: "Containerized deployment runtime", Icon: Package },
  { label: "SonarQube", desc: "Quality and security checks", Icon: ShieldCheck },
  { label: "Cloud", desc: "AWS EC2, Linux, Nginx", Icon: Server },
  { label: "Grafana", desc: "Monitoring and health signals", Icon: Gauge }
];

export default function DevOpsPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % pipelineStages.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="devops" className="section-offset section-panel dark-band">
      <div className="absolute inset-0 dark-grid opacity-[0.38]" />
      <div className="section-blob -left-28 top-24 h-96 w-96 bg-royal/20" />
      <div className="section-blob right-[-8rem] top-1/3 h-[28rem] w-[28rem] bg-tealAccent/20" />

      <div className="section-shell">
        <SectionTitle
          label="DEVOPS WORKFLOW"
          title="From code to deployment and monitoring"
          subtitle="A technical view of version control, CI/CD, container builds, quality gates, cloud deployment, Nginx routing, and Grafana monitoring."
        />

        <div className="mb-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="gradient-border glow-card dark-glass-strong rounded-[2.1rem] p-5"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="dark-inner-panel overflow-hidden rounded-[1.55rem] border border-cyan-300/20 bg-[#050505] font-mono shadow-premium">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
                </div>
                <span className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-cyan-100/70">jenkins-build-logs</span>
              </div>
              <div className="space-y-3 p-4">
                {[
                  ["git push origin main", "SUCCESS"],
                  ["webhook triggered pipeline run #42", "RUNNING"],
                  ["docker build target image", "SUCCESS"],
                  ["sonarqube quality gate analysis", "PASSED"],
                  ["deploy containers to cloud server", "SUCCESS"],
                  ["grafana monitoring loop", "ACTIVE"]
                ].map(([task, status], index) => {
                  const active = index === activeStep % 6;
                  return (
                    <motion.div
                      key={task}
                      className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-xs transition ${
                        active
                          ? "border-cyan-300/45 bg-[#111018] text-white"
                          : "border-purple-300/15 bg-[#0B0712] text-slate-400"
                      }`}
                      animate={active ? { scale: [1, 1.012, 1] } : {}}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="min-w-0 truncate">
                        <span className={`mr-2 inline-block h-2 w-2 rounded-full ${active ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" : "bg-slate-700"}`} />
                        {task}
                      </span>
                      <span className={`shrink-0 rounded px-2 py-1 text-[0.58rem] font-black ${status === "RUNNING" ? "bg-cyan-300/10 text-cyan-200" : "bg-emerald/10 text-emerald"}`}>
                        {status}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="gradient-border glow-card dark-glass rounded-[2.1rem] p-5"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="dark-inner-panel rounded-[1.55rem] border border-cyan-300/20 bg-[#050505] p-5 dark-grid">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Operational Loops</p>
              <div className="mt-5 grid gap-4">
                {["Repository Versioning", "Container Build Cycles", "Quality Gates Scan", "Grafana Monitoring Loops"].map((label, index) => {
                  const active = Math.floor(activeStep / 2) === index || (index === 3 && activeStep >= 6);
                  return (
                    <div key={label} className={`rounded-2xl border p-4 transition ${active ? "border-cyan-300/45 bg-[#111018]" : "border-purple-300/15 bg-[#0B0712]"}`}>
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-200">{label}</p>
                        <span className={active ? "status-dot" : "h-2 w-2 rounded-full bg-slate-700"} />
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#111018]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-violetAccent via-skyAccent to-tealAccent"
                          animate={{ width: active ? "94%" : "34%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="gradient-border glow-card dark-glass rounded-[2.1rem] p-5 sm:p-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Delivery Pipeline</p>
              <h3 className="mt-1 text-2xl font-black text-white">Code to monitoring flow</h3>
            </div>
            <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1.5 text-xs font-black text-emerald">
              <span className="status-dot mr-2" />
              Workflow Active
            </span>
          </div>

          <div className="dark-inner-panel relative overflow-x-auto rounded-[1.55rem] border border-cyan-300/20 p-4 pb-5">
            <div className="absolute left-8 right-8 top-12 hidden h-1 rounded-full bg-[#111018] md:block" />
            <motion.div
              className="absolute left-8 top-12 hidden h-1 rounded-full bg-gradient-to-r from-violetAccent via-skyAccent to-tealAccent md:block"
              animate={{ width: ["0%", "91%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative flex min-w-[930px] justify-between gap-4">
              {pipelineStages.map(({ label, desc, Icon }, index) => (
                <motion.article
                  key={label}
                  className={`w-32 rounded-[1.35rem] border p-3.5 text-center transition ${
                    index === activeStep
                      ? "border-cyan-300/50 bg-[#111018] text-white shadow-cyan"
                      : "border-purple-300/15 bg-[#0B0712] text-slate-400"
                  }`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-cyan">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 text-xs font-black">{label}</p>
                  <p className="mt-1 min-h-8 text-[0.62rem] font-semibold leading-4 text-slate-500">{desc}</p>
                  <span className={`mx-auto mt-3 block h-2 w-2 rounded-full ${index === activeStep ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" : "bg-slate-700"}`} />
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {devOpsMetrics.map((metric, index) => (
            <MetricCard metric={metric} index={index} key={metric.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }) {
  const { Icon } = metric;

  return (
    <motion.article
      className="gradient-border glow-card dark-glass rounded-[1.65rem] p-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
          <Icon size={20} />
        </span>
        <CheckCircle2 size={17} className="text-emerald" />
      </div>
      <div className="mt-5 text-2xl font-black text-white sm:text-3xl">
        {typeof metric.value === "number" ? <CountUp value={metric.value} suffix={metric.suffix} /> : metric.value}
      </div>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.15em] text-slate-400">{metric.label}</p>
      <div className="graph-panel-white mt-4 rounded-2xl p-3">
        <MiniLineChart
          data={index % 2 === 0 ? [30, 48, 44, 62, 78, 96] : [70, 74, 81, 86, 91, 99]}
          color={index === 1 ? "yellow" : index === 2 ? "green" : "cyan"}
          height={50}
        />
      </div>
    </motion.article>
  );
}

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 18 });
  const [display, setDisplay] = useState(0);
  const decimals = Number.isInteger(value) ? 0 : 1;

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(latest));
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
