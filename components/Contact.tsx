"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const { ref, inView } = useReveal();
  const a = (d = 0) => ({
    initial: { opacity:0, y:18 },
    animate: inView ? { opacity:1, y:0 } : {},
    transition: { duration:.7, delay:d },
  });
  return (
    <section id="contact" ref={ref} className="relative z-10 px-8 md:px-14 py-28">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div {...a(0)} className="flex justify-center">
          <SectionLabel num="05" label="Contact" />
        </motion.div>

        <motion.h2 {...a(.1)} className="font-syne font-bold text-white/95 leading-[1.0] mb-5" style={{ fontSize:"clamp(36px,6vw,72px)" }}>
          Let&apos;s build something
          <br />
          <span className="hollow font-serif italic" style={{ fontFamily:"var(--font-instrument)", fontStyle:"italic" }}>real.</span>
        </motion.h2>

        <motion.p {...a(.22)} className="text-[13px] text-white/35 mb-12 max-w-md mx-auto leading-[1.85] font-light">
          Looking for opportunities to learn, build, and contribute to real-world engineering and machine learning projects. Open to internships and collaborations.
        </motion.p>

        <motion.div {...a(.34)} className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a href="mailto:shivanshu2211maurya@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Shivanshu,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect..." target="_blank" rel="noopener" className="cut bg-accent text-bg font-mono text-[11px] tracking-[0.14em] uppercase px-10 py-4 no-underline hover:bg-white transition-colors duration-200">
            Send a Message →
          </a>
          <a href="https://www.linkedin.com/in/shivanshumaurya2203" target="_blank" rel="noopener" className="cut border border-white/10 text-white/50 font-mono text-[11px] tracking-[0.14em] uppercase px-10 py-4 no-underline hover:border-accent/50 hover:text-accent transition-all duration-200">
            LinkedIn ↗
          </a>
          <a href="https://github.com/shivanshu-2205" target="_blank" rel="noopener" className="cut border border-white/10 text-white/50 font-mono text-[11px] tracking-[0.14em] uppercase px-10 py-4 no-underline hover:border-accent/50 hover:text-accent transition-all duration-200">
            GitHub ↗
          </a>
        </motion.div>

        <motion.div {...a(.46)} className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/[0.05] pt-10">
          {[
            ["Email","shivanshu2211maurya@gmail.com","mailto:shivanshu2211maurya@gmail.com"],
            ["Location","Kanpur, India","#"],
            ["Availability","Open to Roles","#"],
          ].map(([label,val,href]) => (
            <div key={label} className="text-center">
              <p className="text-[9px] tracking-[0.18em] uppercase text-white/20 mb-2">{label}</p>
              <a href={href} className="text-[11px] text-white/55 hover:text-accent transition-colors duration-200 no-underline font-mono">{val}</a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
