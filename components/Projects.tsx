"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    id: "01", name: "Open Up", color: "#4f8ef7",
    status: "In Private Development",
    tagColor: "text-accent border-accent/25",
    description: "Reinforcement learning–powered campus recommendation engine. Dynamic reward weighting, multi-armed bandit exploration, and a continuous optimization loop that improves with every user signal.",
    stack: ["Reinforcement Learning","Python","FastAPI","React","PostgreSQL"],
    highlight: "Dynamic weighting · Feedback loop · RL optimization",
  },
  {
    id: "02", name: "PDF Talker", color: "#00e5b0",
    status: "In Private Development",
    tagColor: "text-accent3 border-accent3/25",
    description: "Retrieval-Augmented Generation system for intelligent document interaction. Semantic chunking, dense vector retrieval, and a context-aware generation layer produce answers grounded in your documents.",
    stack: ["RAG","LangChain","FAISS","Next.js","Python"],
    highlight: "Semantic retrieval · Grounded generation · Document QA",
  },
];

export default function Projects() {
  const { ref, inView } = useReveal();
  return (
    <section id="projects" ref={ref} className="relative z-10 px-8 md:px-14 py-28">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:.7 }} className="mb-14">
        <SectionLabel num="02" label="Projects" />
        <h2 className="font-syne font-bold leading-[1.05] text-white/95" style={{ fontSize:"clamp(28px,4vw,52px)" }}>
          Stealth-mode builds.
          <br />
          <span className="text-white/30">Real systems. Real constraints.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl">
        {projects.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity:0, y:36 }}
            animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:.85, ease:[.22,1,.36,1], delay:i*.18 }}
            className="group relative p-8 bg-bg2 border border-white/[0.07] cut hover:border-white/[0.13] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background:`radial-gradient(500px circle at 40% 0%, ${p.color}07, transparent 65%)` }} />

            <div className="flex justify-between items-start mb-6">
              <span className="font-syne font-bold text-6xl text-white/[0.04] leading-none select-none">{p.id}</span>
              <span className={`text-[9px] tracking-[0.16em] uppercase border px-2.5 py-1 ${p.tagColor}`}>{p.status}</span>
            </div>

            <h3 className="font-syne font-bold text-3xl text-white/85 mb-4 group-hover:text-white transition-colors">{p.name}</h3>
            <p className="text-[13px] leading-[1.85] text-white/35 mb-5 font-light">{p.description}</p>

            <div className="text-[10px] tracking-[0.1em] uppercase mb-5 pb-5 border-b border-white/[0.06]" style={{ color:p.color }}>
              {p.highlight}
            </div>

            <div className="flex flex-wrap gap-2 mb-7">
              {p.stack.map(s => (
                <span key={s} className="text-[9px] tracking-[0.08em] uppercase px-2.5 py-1 bg-bg border border-white/[0.07] text-white/30">{s}</span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/[0.05]" />
              <span className="text-[9px] tracking-[0.16em] uppercase text-white/20">Coming Soon</span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:.7 }}
        className="mt-8 text-[10px] tracking-[0.14em] uppercase text-white/20 text-center">
        More systems in private development — architecture revealed on request.
      </motion.p>
    </section>
  );
}
