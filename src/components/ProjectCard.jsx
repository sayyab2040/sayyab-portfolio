import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Github,
  Package,
  Search,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  Terminal
} from "lucide-react";
import BarChart from "./BarChart.jsx";
import CircularProgress from "./CircularProgress.jsx";
import MiniLineChart from "./MiniLineChart.jsx";
import ProgressBar from "./ProgressBar.jsx";

const caseStudyLinks = {
  travel: "#travera",
  devops: "#devops",
  qa: "#qa",
  commerce: "#ecommerce"
};

export default function ProjectCard({ project, index }) {
  const { Icon } = project;
  const reverse = index % 2 === 1;

  return (
    <motion.article
      className={`white-tech-card card-cut-corner glow-card grid overflow-hidden rounded-[2rem] shadow-premium lg:grid-cols-[1.04fr_0.96fr] ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <div
        className={`project-visual-panel dark-inner-panel relative min-h-[22rem] overflow-hidden bg-[#050505] p-4 sm:p-5 ${
          project.visual === "travel" ? "project-visual-panel--travera" : ""
        }`}
      >
        <div className="absolute inset-0 dark-grid opacity-45" />
        <div className="section-blob -left-16 top-10 h-64 w-64 bg-violetAccent/25" />
        <div className="section-blob bottom-[-5rem] right-[-5rem] h-72 w-72 bg-skyAccent/20" />
        <ProjectMockup type={project.visual} />
      </div>

      <div className="relative flex flex-col justify-between p-5 sm:p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="inline-flex rounded-full border border-amber/20 bg-amber/10 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.16em] text-amber">
                {project.category}
              </span>
              <h3 className="mt-5 text-balance font-display text-2xl font-black leading-tight text-white sm:text-[1.72rem]">
                {project.title}
              </h3>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber via-purpleAccent to-skyAccent p-3 text-[#030014] shadow-[0_18px_55px_rgba(250,204,21,0.22)]">
              <Icon size={22} />
            </span>
          </div>

          <p className="mt-4 text-pretty text-sm font-medium leading-7 text-slate-300 sm:text-[0.96rem]">
            {project.description}
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.features.slice(0, 8).map((feature) => (
              <div key={feature} className="white-chip flex items-start gap-2 rounded-2xl px-3 py-2.5 text-xs font-bold leading-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-amber" size={15} />
                <span className="break-words">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span className="skill-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <a className="primary-button mt-6 w-full sm:w-auto" href={caseStudyLinks[project.visual]}>
            View Case Study <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectMockup({ type }) {
  if (type === "devops") return <DevOpsMockup />;
  if (type === "qa") return <QAMockup />;
  if (type === "commerce") return <CommerceMockup />;
  return <TravEraQaVisual />;
}

function TravEraQaVisual() {
  return (
    <motion.div
      className="travera-project-visual relative z-10 flex h-full min-h-[21rem] items-center justify-center overflow-hidden rounded-[1.55rem] border border-cyan-300/25 bg-[#030b1d] shadow-premium"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <span className="absolute inset-8 rounded-full bg-skyAccent/15 blur-3xl" aria-hidden="true" />
      <motion.img
        className="travera-project-image relative z-10 block h-full w-full object-contain object-center"
        src="/assets/qa-visual.webp"
        alt="TravEra AI travel planning platform visual"
        width="800"
        height="800"
        loading="lazy"
        decoding="async"
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

function Window({ title, children }) {
  return (
    <div className="dark-inner-panel relative z-10 h-full min-h-[21rem] overflow-hidden rounded-[1.55rem] border border-cyan-300/25 bg-[#050505] shadow-premium">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
        </div>
        <span className="truncate pl-4 text-[0.62rem] font-black uppercase tracking-[0.18em] text-cyan-100/70">{title}</span>
      </div>
      <div className="h-[calc(100%-3rem)] p-4">{children}</div>
    </div>
  );
}

function DevOpsMockup() {
  const nodes = [
    { label: "GitHub", Icon: Github },
    { label: "Jenkins", Icon: Settings },
    { label: "Docker", Icon: Package },
    { label: "Sonar", Icon: ShieldCheck },
    { label: "Cloud", Icon: Server },
    { label: "Grafana", Icon: Gauge }
  ];

  return (
    <Window title="CI/CD Pipeline Live Flow">
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="relative rounded-[1.6rem] border border-cyan-300/20 bg-[#0B0712] p-5">
          <div className="absolute left-8 right-8 top-12 hidden h-1 rounded-full bg-[#111018] md:block" />
          <motion.div
            className="absolute left-8 right-8 top-12 hidden h-1 origin-left rounded-full bg-gradient-to-r from-violetAccent via-skyAccent to-tealAccent md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.88 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div className="relative grid grid-cols-3 gap-4 md:grid-cols-6">
            {nodes.map(({ label, Icon }, index) => (
              <motion.div
                key={label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-[#111018] text-cyan-100 shadow-premium">
                  <Icon size={18} />
                  <span className="absolute -right-1 -top-1 status-dot" />
                </span>
                <span className="mt-2 text-[0.66rem] font-black text-slate-300">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.4rem] border border-cyan-300/20 bg-[#0B0712] p-4 font-mono text-xs">
            {[
              ["git push origin main", "SUCCESS"],
              ["jenkins build #42", "RUNNING"],
              ["docker compose up", "PASSED"],
              ["grafana scrape", "ACTIVE"]
            ].map(([line, state], index) => (
              <div key={line} className="mb-2 flex items-center justify-between gap-3 rounded-xl bg-[#111018] px-3 py-2 text-slate-300">
                <span className="truncate"><Terminal size={12} className="mr-2 inline text-cyan-200" />{line}</span>
                <span className="rounded bg-emerald/10 px-2 py-0.5 text-[0.58rem] font-black text-emerald">{state}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            {["44 sec build", "Grade A quality"].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-300/20 bg-[#0B0712] p-3">
                <span className="status-dot" />
                <p className="mt-3 text-sm font-black text-white">{item}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B0712] p-3">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-amber">Health</p>
              <MiniLineChart data={[77, 82, 80, 91, 95, 99]} color="green" height={50} />
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

function QAMockup() {
  const rows = [
    ["Auth Suite", "Pass", "text-emerald"],
    ["Checkout Flow", "Pass", "text-emerald"],
    ["API Payloads", "Pass", "text-emerald"],
    ["Mobile Nav", "Review", "text-amber"]
  ];

  return (
    <Window title="QA Automation Command Center">
      <div className="grid h-full gap-4 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Test Case Table</span>
              <ShieldCheck size={17} className="text-emerald" />
            </div>
            <div className="space-y-2">
              {rows.map(([name, status, color]) => (
                <div key={name} className="flex items-center justify-between rounded-xl bg-[#111018] px-3 py-2">
                  <span className="text-xs font-bold text-slate-300">{name}</span>
                  <span className={`text-xs font-black ${color}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-skyAccent/20 px-2 py-1 text-[0.62rem] font-black text-cyan-100">GET</span>
              <span className="text-xs font-black text-emerald">200 OK</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-[#111018]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-skyAccent to-tealAccent"
                style={{ width: "64%" }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4 text-center">
            <CircularProgress value={95} size={96} />
            <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Pass Rate</p>
          </div>
          <div className="rounded-[1.5rem] border border-amber/20 bg-amber/10 p-4">
            <AlertTriangle size={18} className="text-amber" />
            <p className="mt-3 text-sm font-black text-white">Bug report card</p>
            <p className="mt-1 text-xs font-medium text-slate-400">JIRA-482 nav overlap verified</p>
          </div>
        </div>
      </div>
    </Window>
  );
}

function CommerceMockup() {
  return (
    <Window title="Marketplace Operations Console">
      <div className="grid h-full gap-4 md:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <div className="flex items-center justify-between">
              <Search size={17} className="text-cyan-200" />
              <span className="rounded-full bg-emerald/10 px-2 py-1 text-[0.62rem] font-black text-emerald">High Demand</span>
            </div>
            <p className="mt-5 text-3xl font-black text-white">91/100</p>
            <p className="mt-1 text-xs font-bold text-slate-400">Product research score</p>
          </div>
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Supplier Compare</p>
            {["Factory A - $2.45", "Factory B - $2.10", "Factory C - $2.25"].map((row, index) => (
              <div key={row} className="mt-3 flex items-center justify-between rounded-xl bg-[#111018] px-3 py-2 text-xs font-bold text-slate-300">
                <span>{row}</span>
                <Star size={13} className={index === 1 ? "text-amber" : "text-slate-600"} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Competitor Chart</p>
              <BarChart3 size={17} className="text-teal-200" />
            </div>
            <BarChart
              height={112}
              data={[
                { label: "A", value: 42 },
                { label: "B", value: 70 },
                { label: "C", value: 54 },
                { label: "D", value: 88 }
              ]}
            />
          </div>
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#0B0712] p-4">
            <div className="flex flex-wrap gap-2">
              {["keyword map", "listing SEO", "Amazon VA", "sourcing", "margin check"].map((item) => (
                <span key={item} className="dark-chip text-[0.65rem] uppercase tracking-[0.12em]">{item}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 text-cyan-100">
              <ShoppingCart size={18} />
              <p className="text-sm font-black">Listing optimization 86%</p>
            </div>
            <div className="mt-3">
              <ProgressBar value={86} showValue={false} color="yellow" />
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
