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
    link: null,
  },
  {
    id: "02", name: "We Chat", color: "#22d3ee",
    status: "Live / Public",
    tagColor: "text-cyan-400 border-cyan-400/25",
    description: "Real-time chat application with instant message delivery via WebSockets, secure JWT authentication, user profile management, and online/offline status indicators. Supports image sharing via Cloudinary and a full light/dark theme switch.",
    stack: ["React","Vite","Node.js","Express","MongoDB","Socket.io","Zustand","Cloudinary","JWT","Tailwind CSS"],
    highlight: "WebSocket messaging · Image uploads · User presence",
    link: "https://we-chat-pink.vercel.app/",
  },
  {
    id: "03", name: "Rabbithole Explorer", color: "#a855f7",
    status: "Live / Public",
    tagColor: "text-purple-400 border-purple-400/25",
    description: "AI-powered interactive knowledge exploration platform that lets users navigate information as a dynamic graph of interconnected ideas. Concepts become nodes, relationships become edges — forming a visual rabbit hole of discovery that evolves with every click.",
    stack: ["React Flow","Next.js","Node.js","OpenAI API","Neo4j","Redis","MongoDB","Tailwind CSS"],
    highlight: "Graph-based UI · Real-time expansion · Knowledge graph",
    link: "https://rabbit-hole-explorer-rho.vercel.app/",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 max-w-7xl">
        {projects.map((p, i) => {
          const CardWrapper = p.link
            ? ({ children, className, ...rest }: React.ComponentPropsWithoutRef<"a"> & { children: React.ReactNode }) => (
                <a href={p.link!} target="_blank" rel="noopener noreferrer" className={className} {...rest}>{children}</a>
              )
            : ({ children, className, ...rest }: React.ComponentPropsWithoutRef<"div"> & { children: React.ReactNode }) => (
                <div className={className} {...rest}>{children}</div>
              );

          return (
            <motion.div key={p.id}
              initial={{ opacity:0, y:36 }}
              animate={inView?{opacity:1,y:0}:{}}
              transition={{ duration:.85, ease:[.22,1,.36,1], delay:i*.18 }}
            >
              <CardWrapper
                className={`group relative p-8 bg-bg2 border border-white/[0.07] cut hover:border-white/[0.13] transition-all duration-500 overflow-hidden block${p.link ? " cursor-pointer" : ""}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background:`radial-gradient(500px circle at 40% 0%, ${p.color}07, transparent 65%)` }} />

                <div className="flex justify-between items-start mb-6">
                  <span className="font-syne font-bold text-6xl text-white/[0.04] leading-none select-none">{p.id}</span>
                  <span className={`text-[9px] tracking-[0.16em] uppercase border px-2.5 py-1 ${p.tagColor}`}>{p.status}</span>
                </div>

                <h3 className="font-syne font-bold text-3xl text-white/85 mb-4 group-hover:text-white transition-colors flex items-center gap-3">
                  {p.name}
                  {p.link && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  )}
                </h3>
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
                  {p.link
                    ? <span className="text-[9px] tracking-[0.16em] uppercase text-white/20 group-hover:text-white/40 transition-colors">Visit Project ↗</span>
                    : <span className="text-[9px] tracking-[0.16em] uppercase text-white/20">Coming Soon</span>
                  }
                  <div className="flex-1 h-px bg-white/[0.05]" />
                </div>
              </CardWrapper>
            </motion.div>
          );
        })}
      </div>

      <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:.7 }}
        className="mt-8 text-[10px] tracking-[0.14em] uppercase text-white/20 text-center">
        More systems in private development — architecture revealed on request.
      </motion.p>
    </section>
  );
}
