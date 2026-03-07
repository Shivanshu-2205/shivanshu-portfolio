"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const f = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: .85, ease: [.22, 1, .36, 1], delay: d },
});

const socials = [
  { label: "GitHub",   href: "https://github.com/Shivanshu-2205" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivanshumaurya2203" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax transforms
  const textY    = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const photoY   = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen z-10 overflow-hidden">

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Vertical accent line */}
      <div className="absolute left-[50%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent hidden lg:block" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── LEFT: Text Content ── */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col justify-center px-8 md:px-14 pt-28 pb-16 lg:pt-0 lg:pb-0"
        >
          {/* Eyebrow */}
          <motion.div {...f(0.15)} className="flex items-center gap-3 mb-8">
            <span className="w-7 h-px bg-accent block" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-accent">
               Open to Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.p {...f(0.28)} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-3">
            Shivanshu Maurya
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...f(0.38)}
            className="font-syne font-extrabold leading-[0.92] tracking-[-0.03em] mb-7"
            style={{ fontSize: "clamp(40px, 6.5vw, 80px)" }}
          >
            Machine Learning Enthusiast
            <br />
            <span className="hollow font-serif italic" style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic" }}>
              Building
            </span>
            <br />
            Real-World Projects
          </motion.h1>

          {/* Sub */}
          <motion.p {...f(0.5)} className="text-[13px] leading-[1.85] text-white/45 max-w-[420px] mb-10 font-light">
            I enjoy building intelligent applications that combine machine learning, backend systems, and user interfaces. Alongside this, I actively practice Data Structures and Algorithms to strengthen my problem-solving skills. I’m particularly interested in understanding how ML systems are designed and turning ideas into real, working products.
          </motion.p>

          {/* CTAs */}
          <motion.div {...f(0.62)} className="flex flex-wrap gap-3 mb-12">
            <a href="#projects" className="cut bg-accent text-bg font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3.5 no-underline hover:bg-white transition-colors duration-200">
              View Work →
            </a>
            <a href="/resume.pdf" target="_blank" className="cut border border-white/10 text-white/60 font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3.5 no-underline hover:border-accent hover:text-accent transition-all duration-200">
              Download CV
            </a>
            <a href="#contact" className="cut border border-white/10 text-white/60 font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3.5 no-underline hover:border-white/30 hover:text-white transition-all duration-200">
              Get in Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...f(0.74)} className="flex gap-5">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener"
                className="text-[9px] tracking-[0.18em] uppercase text-white/25 hover:text-accent no-underline transition-colors duration-200">
                {s.label} ↗
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Photo Panel ── */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [.22, 1, .36, 1], delay: 0.5 }}
          className="relative flex items-center justify-center px-8 md:px-16 lg:px-20 pt-0 pb-16 lg:pt-24 lg:pb-24"
        >
          {/* Ambient glow behind photo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-accent/8 blur-[80px]" />
          </div>

          <div className="relative w-full max-w-[380px]">

            {/* Corner decoration TL */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/60 z-10" />
            {/* Corner decoration BR */}
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/60 z-10" />

            {/* Photo container */}
            <div className="relative overflow-hidden photo-glow" style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}>

              {/* Scan line animation */}
              <div className="scan-line" />

              {/* Replace src with your photo path: /your-photo.jpg */}
              <div className="relative aspect-[3/4] w-full bg-bg3 flex items-center justify-center overflow-hidden">
                <Image src="/photo.jpg" alt="Shivanshu Maurya" fill className="object-cover" priority />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Bottom info strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-bg/95 to-transparent">
                <p className="font-syne font-bold text-white text-lg leading-tight">Shivanshu Maurya</p>
                <p className="text-[10px] tracking-[0.14em] uppercase text-accent mt-0.5">Code. Solve. Build. </p>
              </div>
            </div>

            {/* Status badge */}
            <div className="absolute -top-4 right-4 flex items-center gap-2 bg-bg border border-white/10 px-3 py-1.5 cut-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent3 animate-pulse" />
              <span className="text-[9px] tracking-[0.14em] uppercase text-white/50 font-mono">Available</span>
            </div>

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -left-6 top-12 bg-bg2 border border-white/[0.08] px-4 py-3 cut-sm hidden lg:block"
            >
              <p className="font-syne font-bold text-accent text-xl leading-none">3+</p>
              <p className="text-[9px] tracking-[0.12em] uppercase text-white/30 mt-1">Systems Built</p>
            </motion.div>

            {/* XP floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -right-6 bottom-12 bg-bg2 border border-white/[0.08] px-4 py-3 cut-sm hidden lg:block"
            >
              <p className="font-syne font-bold text-accent2 text-xl leading-none">Problem </p>
              <p className="text-[9px] tracking-[0.12em] uppercase text-white/30 mt-1">Solving Driven</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-14 hidden lg:flex items-end gap-3"
      >
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-accent/50" />
        <span className="text-[9px] tracking-[0.2em] uppercase text-white/20">Scroll</span>
      </motion.div>
    </section>
  );
}
