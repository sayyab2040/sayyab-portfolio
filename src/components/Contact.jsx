import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Share2, Sparkles } from "lucide-react";
import { useState } from "react";
import { contactDetails } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojzpyzq";

export default function Contact({ sectionId = "contact" }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id={sectionId || undefined} className="section-offset section-panel dark-band">
      <div className="absolute inset-0 dark-grid opacity-[0.36]" />
      <div className="section-blob left-[-8rem] top-24 h-96 w-96 bg-purpleAccent/25" />
      <div className="section-blob right-[-8rem] bottom-20 h-96 w-96 bg-skyAccent/20" />

      <div className="section-shell">
        <SectionTitle
          label="LET'S CONNECT"
          title="Ready to build something professional?"
          subtitle="Open to software engineering, full-stack development, QA automation, DevOps, internship, remote, and product-focused technical roles."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            className="gradient-border glow-card dark-glass rounded-[2rem] p-5 sm:p-7"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Contact Channels</p>
                <h3 className="mt-1 text-2xl font-black text-white">Direct links</h3>
              </div>
              <Share2 className="text-teal-200" size={25} />
            </div>

            <div className="grid gap-4">
              {contactDetails.map(({ label, value, href, Icon }, index) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    whileHover={href ? { x: 6 } : undefined}
                  >
                    <Wrapper
                      className="group flex items-center gap-4 rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] p-4 shadow-premium transition hover:border-amber/50 hover:bg-[#111018]"
                      href={href || undefined}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-cyan">
                        <Icon size={19} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.64rem] font-black uppercase tracking-[0.18em] text-slate-500">{label}</span>
                        <span className="mt-1 block break-words text-sm font-bold text-slate-200 group-hover:text-cyan-100">{value}</span>
                      </span>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            className="gradient-border glow-card dark-glass-strong rounded-[2rem] p-5 sm:p-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <ContactNetwork />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your Name" name="name" autoComplete="name" />
              <Field label="Your Email" name="email" type="email" autoComplete="email" />
            </div>
            <div className="mt-4">
              <Field label="Message Subject" name="subject" />
            </div>
            <label className="mt-4 grid gap-2">
              <span className="text-sm font-black text-slate-200">Message Content</span>
              <textarea
                className="form-field min-h-36 resize-y"
                name="message"
                required
                placeholder="Write your message detail here..."
              />
            </label>

            <button
              className="primary-button mt-5 w-full sm:w-auto"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"} <Send size={16} />
            </button>

            {status === "success" ? (
              <p className="mt-4 rounded-2xl border border-emerald/25 bg-emerald/10 px-4 py-3 text-sm font-bold text-emerald">
                Message sent successfully. I will get back to you soon.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="mt-4 rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm font-bold text-red-300">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactNetwork() {
  return (
    <div className="dark-inner-panel relative min-h-60 overflow-hidden rounded-[1.6rem] border border-cyan-300/20 bg-[#050505] p-5 dark-grid">
      <div className="absolute left-10 top-16 h-px w-[64%] bg-gradient-to-r from-skyAccent via-tealAccent to-transparent" />
      <div className="absolute bottom-14 left-24 h-px w-[48%] bg-gradient-to-r from-purpleAccent via-skyAccent to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent" />

      <div
        className="absolute right-5 top-5 rounded-[1.35rem] border border-cyan-300/20 bg-[#0B0712] p-4 shadow-premium"
      >
        <MessageCircle className="text-cyan-200" size={21} />
        <p className="mt-3 text-sm font-black text-white">Recruiter Form</p>
        <p className="mt-1 text-xs font-semibold text-slate-500">Message node</p>
      </div>

      <div
        className="absolute bottom-5 left-5 rounded-[1.35rem] border border-purple-300/20 bg-[#0B0712] p-4 shadow-premium"
      >
        <Mail className="text-teal-200" size={21} />
        <p className="mt-3 text-sm font-black text-white">Sayyab Ashraf</p>
        <p className="mt-1 text-xs font-semibold text-slate-500">Software Engineer</p>
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-violetAccent via-royal to-tealAccent text-white shadow-glow">
        <Sparkles size={24} />
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-slate-200">{label}</span>
      <input
        className="form-field"
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={label}
      />
    </label>
  );
}
