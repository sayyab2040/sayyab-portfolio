import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { identity, navLinks } from "../data/portfolioData.js";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = null;
    const updateActive = () => {
      frameId = null;
      setScrolled(window.scrollY > 18);

      const sections = navLinks
        .map((link) => ({ href: link.href, el: document.querySelector(link.href) }))
        .filter((section) => section.el);
      if (!sections.length) return;

      const offset = Math.max(120, window.innerHeight * 0.34);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (atBottom) {
        setActive(sections[sections.length - 1].href);
        return;
      }

      const current = sections.reduce(
        (match, section) => (section.el.offsetTop <= window.scrollY + offset ? section : match),
        sections[0]
      );
      if (current) setActive(current.href);
    };

    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] w-full overflow-x-clip border-b border-yellow-300/45 bg-[#FACC15] transition-all duration-300 ${
        scrolled ? "shadow-[0_14px_38px_rgba(0,0,0,0.34)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
      }`}
    >
      <nav
        className={`relative mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 pr-5 transition-all duration-300 sm:px-6 sm:pr-8 lg:px-8 lg:pr-10 xl:pr-12 ${
          scrolled ? "py-2" : "py-2.5"
        }`}
      >
        <a className="group flex min-w-0 items-center gap-2.5 text-[#050505] sm:gap-3" href="#home" onClick={() => setOpen(false)}>
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#050505] text-sm font-black text-[#FACC15] shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
            SA
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-yellow-300/60 bg-[#F59E0B] text-white">
              <Sparkles size={9} />
            </span>
          </span>
          <span className="min-w-0 max-w-[9.75rem] sm:max-w-none">
            <span className="block truncate text-sm font-black text-[#050505] drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">{identity.name}</span>
            <span className="block truncate text-[0.63rem] font-black uppercase tracking-[0.12em] text-[rgba(5,5,5,0.75)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)] sm:text-[0.66rem] sm:tracking-[0.16em]">
              {identity.role}
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 items-center justify-end gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} link={link} active={active === link.href} />
          ))}
        </div>

        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/20 bg-[#050505] text-white shadow-[0_10px_24px_rgba(0,0,0,0.26)] transition hover:bg-[#111018] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -25, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 25, scale: 0.9 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-2 w-[calc(100%-1rem)] max-w-7xl overflow-hidden border-t border-black/15 bg-[#FACC15] p-2 pr-3 shadow-[0_20px_50px_rgba(0,0,0,0.26)] sm:mx-auto sm:w-full sm:pr-4 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="grid gap-1 sm:grid-cols-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                    active === link.href
                      ? "bg-[#050505] text-[#FACC15] shadow-[inset_0_-2px_0_rgba(250,204,21,0.85)]"
                      : "text-[#050505] hover:bg-[rgba(5,5,5,0.12)] hover:text-[#050505]"
                  }`}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ link, active }) {
  return (
    <a
      className={`group relative inline-flex items-center overflow-hidden rounded-full px-2.5 py-2 text-[0.74rem] font-extrabold transition xl:px-3 xl:text-[0.78rem] ${
        active
          ? "bg-[#050505] text-[#FACC15] shadow-[inset_0_-2px_0_rgba(250,204,21,0.9)]"
          : "text-[#050505] hover:bg-[rgba(5,5,5,0.12)] hover:text-[#050505]"
      }`}
      href={link.href}
    >
      <span className="relative z-10">{link.label}</span>
      {!active ? (
        <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 rounded-full bg-[#050505] transition group-hover:scale-x-100" />
      ) : null}
    </a>
  );
}
