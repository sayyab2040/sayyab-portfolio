import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, FileText, Package, Search, ShoppingCart, Star } from "lucide-react";
import { ecommerceCards } from "../data/portfolioData.js";
import BarChart from "./BarChart.jsx";
import ProgressBar from "./ProgressBar.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="section-offset section-panel light-band">
      <div className="absolute inset-0 animated-grid opacity-[0.30]" />
      <div className="absolute inset-0 wave-lines opacity-[0.10]" />
      <div className="section-blob left-[-9rem] top-28 h-80 w-80 bg-purpleAccent/20" />
      <div className="section-blob right-[-9rem] bottom-20 h-80 w-80 bg-skyAccent/10" />

      <div className="section-shell">
        <SectionTitle
          label="PRODUCT OPERATIONS"
          title="Marketplace research and e-commerce execution"
          subtitle="A secondary but professional view of product research, sourcing, listing optimization, competitor analysis, marketplace research, and Amazon VA workflows."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {ecommerceCards.map(({ title, description, Icon }, index) => (
              <motion.article
                key={title}
                className="gradient-border glow-card glass-card rounded-[1.45rem] p-5 card-3d"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber via-purpleAccent to-skyAccent text-[#030014] shadow-[0_18px_55px_rgba(250,204,21,0.22)]">
                  <Icon size={19} />
                </span>
                <h3 className="mt-4 text-base font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </motion.article>
            ))}
          </div>

          <ProductOpsDashboard />
        </div>
      </div>
    </section>
  );
}

function ProductOpsDashboard() {
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Business Operations Console</p>
            <h3 className="mt-1 text-2xl font-black text-white">Product Research Center</h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1.5 text-xs font-black text-emerald">
            <CheckCircle2 size={14} />
            Active
          </span>
        </div>

        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                  <Search size={18} />
                </span>
                <span className="rounded-full bg-emerald/10 px-2 py-1 text-[0.64rem] font-black text-emerald">Opportunity</span>
              </div>
              <p className="mt-5 text-3xl font-black text-white sm:text-4xl">91/100</p>
              <p className="mt-1 text-sm font-bold text-slate-400">Product research score</p>
              <div className="mt-4">
                <ProgressBar value={91} showValue={false} color="yellow" />
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Supplier Comparison</p>
                <Package size={17} className="text-teal-200" />
              </div>
              {["Factory A - $2.45/u", "Factory B - $2.10/u", "Factory C - $2.25/u"].map((row, index) => (
                <div key={row} className="mb-2 flex items-center justify-between rounded-xl bg-[#111018] px-3 py-2 text-xs font-bold text-slate-300">
                  <span>{row}</span>
                  <Star size={13} className={index === 1 ? "text-amber" : "text-slate-600"} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Competitor Analysis</p>
                <BarChart3 size={18} className="text-cyan-200" />
              </div>
              <BarChart
                height={132}
                data={[
                  { label: "A", value: 42 },
                  { label: "B", value: 68 },
                  { label: "C", value: 54 },
                  { label: "D", value: 86 }
                ]}
              />
            </div>

            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Listing Optimization</p>
                <FileText size={17} className="text-teal-200" />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-bold text-slate-300">Keyword coverage</span>
                <span className="font-black text-white">86%</span>
              </div>
              <div className="mt-3">
                <ProgressBar value={86} showValue={false} color="cyan" />
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-cyan-300/20 bg-[#0B0712] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-tealAccent/10 text-teal-200">
                  <ShoppingCart size={17} />
                </span>
                <div>
                  <p className="text-sm font-black text-white">Amazon VA Workflow</p>
                  <p className="text-xs font-semibold text-slate-500">Research, source, optimize, monitor</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["product sourcing", "keyword cluster", "listing audit", "price tracking", "margin review"].map((chip) => (
                  <span className="dark-chip text-[0.65rem]" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
