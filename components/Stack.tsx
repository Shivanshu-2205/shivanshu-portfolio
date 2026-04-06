"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

const cats = [
  { label:"Machine Learning Systems", color:"text-accent  border-accent/15  bg-accent/[0.04]",  items:["PyTorch","TensorFlow","Scikit-learn","RL Algorithms","GNNs","RAG","LangChain","FAISS","HuggingFace"] },
  { label:"Backend Infrastructure",   color:"text-accent2 border-accent2/15 bg-accent2/[0.04]", items:["Python","FastAPI","Django","Node.js","PostgreSQL","Redis","REST APIs","GraphQL","Celery"] },
  { label:"Frontend Engineering",     color:"text-accent3 border-accent3/15 bg-accent3/[0.04]", items:["React","Next.js","TypeScript","Tailwind CSS","Framer Motion","Zustand"] },
  { label:"DevOps & Tooling",         color:"text-yellow-400/75 border-yellow-400/15 bg-yellow-400/[0.04]", items:["Docker","Git","Linux","CI/CD","Nginx","Vercel","Jupyter","W&B"] },
];

export default function Stack() {
  const { ref, inView } = useReveal();
  return (
    <section id="stack" ref={ref} className="relative z-10 px-8 md:px-14 py-28">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <motion.div initial={{ opacity:0,y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:.7 }} className="mb-14">
        <SectionLabel num="03" label="Engineering Stack" />
        <h2 className="font-syne font-bold leading-[1.05] text-white/95" style={{ fontSize:"clamp(28px,4vw,52px)" }}>
          Tools chosen for
          <br />
          <span className="text-white/30">production, not résumés.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl">
        {cats.map((c, i) => (
          <motion.div key={c.label}
            initial={{ opacity:0, y:24 }}
            animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:.7, delay:i*.11 }}
            className={`p-7 border cut ${c.color}`}
          >
            <h3 className="font-syne font-semibold text-sm tracking-wide mb-5">{c.label}</h3>
            <div className="flex flex-wrap gap-2">
              {c.items.map(it => (
                <span key={it} className="text-[10px] tracking-[0.08em] px-2.5 py-1 bg-bg/70 border border-white/[0.07] text-white/35 hover:text-white/65 hover:border-white/15 transition-all duration-200 cursor-none">{it}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
