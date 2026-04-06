"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

const interests = [
  "ML Infrastructure","Recommender Systems","Optimization Algorithms",
  "RAG Architectures","Graph Neural Networks","Scalable Backends",
];

const rv = (delay = 0, dir: "up"|"left"|"right" = "up") => ({
  initial: {
    opacity: 0,
    y: dir === "up" ? 30 : 0,
    x: dir === "left" ? -30 : dir === "right" ? 30 : 0,
  },
  transition: { duration: .8, ease: [.22,1,.36,1], delay },
});

export default function About() {
  const { ref, inView } = useReveal();
  const animate = (delay = 0, dir: "up"|"left"|"right" = "up") => ({
    ...rv(delay, dir),
    animate: inView ? { opacity: 1, y: 0, x: 0 } : {},
  });

  return (
    <section id="about" ref={ref} className="relative z-10 px-8 md:px-14 py-28 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">

        {/* Left */}
        <motion.div {...animate(0, "left")}>
          <SectionLabel num="01" label="About" />
          <h2 className="font-syne font-bold leading-[1.05] mb-8 text-white/95" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
            Systems thinking,
            <br />
            <span className="hollow font-serif italic" style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic" }}>
              not just coding.
            </span>
          </h2>
          <div className="space-y-5 text-[13px] leading-[1.9] text-white/40 font-light">
            <p>I don&apos;t build features in isolation — I build <span className="text-white/75">complete intelligent systems</span>. From the data ingestion layer to the model training loop to the API contract and the final UI, I design with the full stack in view.</p>
            <p>My engineering approach is grounded in <span className="text-white/75">architecture, feedback loops, and deployment realities</span>. I treat ML systems the way senior engineers treat distributed systems — with care for failure modes, scalability, and long-term maintainability.</p>
            <p>I&apos;m not building tutorial projects. I&apos;m building systems with <span className="text-white/75">optimization loops, retrieval pipelines, and real inference constraints</span> — because that&apos;s what production requires.</p>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div {...animate(0.15, "right")} className="space-y-6">

          {/* Focus tags */}
          <div className="p-7 bg-bg2 border border-white/[0.07] cut">
            <p className="text-[9px] tracking-[0.18em] uppercase text-white/25 mb-5">Engineering Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, i) => (
                <motion.span key={item}
                  initial={{ opacity: 0, scale: .88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: .3 + i * .07 }}
                  className="cut-sm text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border border-accent/20 text-accent/75 hover:border-accent/55 hover:text-accent transition-all duration-200 cursor-none"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[["1+","Yrs. Building"],["3+","Systems Built"],["3+","Optimization"]].map(([v, l], i) => (
              <motion.div key={l}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: .5 + i * .1 }}
                className="p-4 bg-bg2 border border-white/[0.07] cut-sm text-center"
              >
                <p className="font-syne font-bold text-2xl text-accent mb-1">{v}</p>
                <p className="text-[9px] tracking-[0.12em] uppercase text-white/25">{l}</p>
              </motion.div>
            ))}
          </div>

          {/* Brand quote */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .7 }}
            className="p-6 border-l-2 border-accent/35 bg-accent/5">
            <p className="font-serif italic text-lg text-white/65 leading-relaxed" style={{ fontFamily: "var(--font-instrument)" }}>
              &ldquo;Designing Intelligent Systems That Scale.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
