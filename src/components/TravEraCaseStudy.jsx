import { motion } from "framer-motion";
import { ArrowRight, Bell, Bot, CalendarCheck, CloudSun, Compass, DollarSign, LifeBuoy, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { traveraFlows, traveraModules } from "../data/portfolioData.js";
import MiniLineChart from "./MiniLineChart.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function TravEraCaseStudy({ sectionId = "travera" }) {
  return (
    <section id={sectionId || undefined} className="section-offset section-panel dark-band">
      <div className="absolute inset-0 dark-grid opacity-[0.38]" />
      <div className="section-blob left-[-8rem] top-24 h-96 w-96 bg-violetAccent/25" />
      <div className="section-blob right-[-9rem] top-1/3 h-[28rem] w-[28rem] bg-skyAccent/20" />
      <div className="section-blob bottom-[-8rem] left-[35%] h-80 w-80 bg-tealAccent/20" />

      <div className="section-shell">
        <SectionTitle
          label="CASE STUDY 01"
          title="TravEra, an AI travel planning and booking platform."
          subtitle="A connected product concept combining personalized trip planning, vendor bids, itinerary management, bookings, weather, messaging, reviews, emergency support, and notifications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <CaseBlock
            title="Problem"
            Icon={Compass}
            tone="from-rose-500/20 to-purple-500/10"
            text="Travel platforms are fragmented and users often need multiple services for planning, vendor communication, bookings, weather checks, reviews, and itinerary management."
          />
          <CaseBlock
            title="Solution"
            Icon={Bot}
            tone="from-teal-500/20 to-cyan-500/10"
            text="TravEra combines planning, vendor services, booking workflows, AI recommendations, weather, messaging, reviews, emergency support, and notifications into one connected platform."
          />
        </div>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="gradient-border glow-card dark-glass rounded-[2.15rem] p-5 sm:p-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-5 dark-grid">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Platform Modules</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {traveraModules.map((module, index) => (
                  <motion.div
                    key={module}
                    className="rounded-2xl border border-cyan-300/20 bg-[#0B0712] p-3 text-sm font-bold text-slate-200"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.025 }}
                    whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.36)" }}
                  >
                    <span className="status-dot mr-2 align-middle" />
                    {module}
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 space-y-5">
                {traveraFlows.slice(0, 2).map((flow, index) => (
                  <FlowCard flow={flow} key={flow.title} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          <TravEraProductConsole />
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ title, text, Icon, tone }) {
  return (
    <motion.article
      className="white-tech-card card-cut-corner glow-card rounded-[1.7rem] p-5 shadow-premium sm:p-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[#111018] p-3 text-cyan-100 shadow-premium">
        <Icon size={24} />
      </span>
      <h3 className="mt-4 font-display text-2xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm font-medium leading-7 text-slate-300 sm:text-[0.96rem]">{text}</p>
    </motion.article>
  );
}

function FlowCard({ flow, index }) {
  return (
    <motion.article
      className="rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] p-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay: index * 0.08 }}
    >
      <div className="flex items-center gap-2">
        <span className="status-dot" />
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">{flow.title}</h3>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {flow.steps.map((step, stepIndex) => (
          <div key={`${flow.title}-${step}`} className="flex items-center gap-2">
            <span className="rounded-xl border border-purple-300/20 bg-[#111018] px-3 py-2 text-xs font-bold text-slate-200">{step}</span>
            {stepIndex < flow.steps.length - 1 ? (
              <span>
                <ArrowRight size={14} className="text-cyan-300" />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function TravEraProductConsole() {
  const activity = [
    "AI route generated for Hunza valley",
    "Vendor bid accepted by traveler",
    "Emergency support contact verified"
  ];

  return (
    <motion.div
      className="gradient-border glow-card dark-glass-strong rounded-[2.15rem] p-4 sm:p-5"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div className="dark-inner-panel dark-grid rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Live Product Dashboard</p>
            <h3 className="mt-1 text-2xl font-black text-white">TravEra Core Console</h3>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[#0B0712] text-cyan-100">
            <Bell size={18} />
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
          <div
            className="rounded-[1.55rem] bg-gradient-to-br from-violetAccent via-royal to-skyAccent p-5 text-white shadow-premium"
          >
            <div className="flex items-center justify-between">
              <Bot size={24} />
              <span className="rounded-full bg-amber px-3 py-1 text-[0.68rem] font-black text-[#050505]">AI Planner</span>
            </div>
            <h4 className="mt-8 text-2xl font-black leading-none sm:text-3xl">Smart Trip Plan</h4>
            <p className="mt-2 text-sm font-bold text-cyan-50/80">Personalized recommendations, vendors, events, and route logic.</p>
          </div>

          <div className="grid gap-4">
            <Widget Icon={DollarSign} label="Vendor Bid" value="$420 offer" />
            <Widget Icon={CalendarCheck} label="Booking Status" value="Confirmed" />
            <Widget Icon={CloudSun} label="Weather" value="Gilgit 24C" />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Widget Icon={LifeBuoy} label="Emergency" value="24/7 support" compact />
          <Widget Icon={MessageCircle} label="Messaging" value="Review thread" compact />
          <Widget Icon={Users} label="Vendors" value="4 active bids" compact />
        </div>

        <div className="mt-4 rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Activity Stream</p>
            <ShieldCheck size={16} className="text-emerald" />
          </div>
          <div className="space-y-2">
            {activity.map((item) => (
              <div key={item} className="flex items-center justify-between gap-3 rounded-xl bg-[#111018] px-3 py-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="status-dot shrink-0" />
                  <span className="truncate text-xs font-bold text-slate-300">{item}</span>
                </div>
                <span className="shrink-0 text-[0.62rem] font-black text-slate-500">Live</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-purple-300/20 bg-[#050505] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-amber">Traveler Activity</span>
              <span className="text-[0.62rem] font-black text-cyan-200">+38%</span>
            </div>
            <MiniLineChart data={[26, 44, 39, 58, 74, 88]} color="purple" height={64} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Widget({ Icon, label, value, compact = false }) {
  return (
    <motion.article
      className={`rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] ${compact ? "p-4" : "p-5"} shadow-premium`}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
          <Icon size={17} />
        </span>
        <span className="status-dot" />
      </div>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </motion.article>
  );
}
