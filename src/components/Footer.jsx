import { identity, footerLinks } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-purple-300/20 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-4 py-7 sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-black text-white">{identity.name}</p>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-amber">{identity.role}</p>
          <p className="mt-3 text-xs font-semibold text-slate-500">
            Full-Stack Development | QA Automation | DevOps | E-commerce
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-500">
            Copyright 2026 {identity.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {footerLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-300/25 bg-[#0B0712] text-slate-300 shadow-premium transition hover:-translate-y-1 hover:border-amber/50 hover:bg-[#111018] hover:text-amber"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
