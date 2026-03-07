"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

const diagrams = [
  { title:"ML Pipeline", color:"#4f8ef7", steps:[
    {l:"Data Ingestion",     s:"Streaming · Batch · ETL"},
    {l:"Feature Engineering",s:"Transforms · Embeddings"},
    {l:"Model Training",     s:"Distributed · Tracked"},
    {l:"Evaluation",         s:"Metrics · Baselines"},
    {l:"Serving",            s:"API · Edge · Cache"},
  ]},
  { title:"Feedback Optimization Loop", color:"#7c5cfc", steps:[
    {l:"User Signal",     s:"Clicks · Dwell · Actions"},
    {l:"Reward Modeling", s:"Bandit · RL Update"},
    {l:"Policy Update",   s:"Weights · Ranking"},
    {l:"A/B Experiment",  s:"Holdout · Metrics"},
    {l:"Deploy & Monitor",s:"Drift · Alerts"},
  ]},
  { title:"RAG Architecture", color:"#00e5b0", steps:[
    {l:"Document Ingestion",    s:"Parse · Chunk · Clean"},
    {l:"Embedding",             s:"Dense · Sparse vectors"},
    {l:"Vector Store",          s:"FAISS · Pinecone"},
    {l:"Retrieval",             s:"Semantic · Hybrid"},
    {l:"Augmented Generation",  s:"Grounded · Cited"},
  ]},
];

export default function Architecture() {
  const { ref, inView } = useReveal();
  return (
    <section id="architecture" ref={ref} className="relative z-10 px-8 md:px-14 py-28">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <motion.div initial={{ opacity:0,y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:.7 }} className="mb-14">
        <SectionLabel num="04" label="Architecture Thinking" />
        <h2 className="font-syne font-bold leading-[1.05] text-white/95" style={{ fontSize:"clamp(28px,4vw,52px)" }}>
          How I think about
          <br />
          <span className="text-white/30">intelligent systems.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl">
        {diagrams.map((d, di) => (
          <motion.div key={d.title}
            initial={{ opacity:0, y:28 }}
            animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:.8, delay:di*.14 }}
            className="p-7 bg-bg2 border border-white/[0.07] cut"
          >
            <div className="text-[10px] tracking-[0.18em] uppercase mb-6 pb-4 border-b border-white/[0.06]" style={{ color:d.color }}>
              {d.title}
            </div>
            <div className="space-y-0">
              {d.steps.map((step, si) => (
                <motion.div key={step.l}
                  initial={{ opacity:0, x:-10 }}
                  animate={inView?{opacity:1,x:0}:{}}
                  transition={{ delay: di*.14 + si*.08 + .3 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background:d.color, opacity:.75 }} />
                    {si < d.steps.length-1 && <div className="w-px flex-1 mt-1 mb-1" style={{ background:`linear-gradient(to bottom,${d.color}35,${d.color}08)`, minHeight:"18px" }} />}
                  </div>
                  <div className="pb-3.5">
                    <p className="text-[12px] font-mono text-white/70 leading-none mb-0.5">{step.l}</p>
                    <p className="text-[10px] text-white/25 tracking-wide">{step.s}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
