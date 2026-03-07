"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science",
    institution: "Pranveer Singh Institute of Technology",
    duration: "2023 – 2027",
    description:
      "Focus areas include machine learning, data structures, algorithms, and system design. Actively building ML-based applications and intelligent systems as part of academic and personal projects.",
  },
  {
    degree: "Intermediate ",
    institution: "BLM Inter College, UP Board",
    duration: "2021 – 2022",
    description: "Scored 87% in UP Board exams. Focused on science stream with strong performance in mathematics.",
  },
];

const rv = (delay = 0, dir: "up" | "left" | "right" = "up") => ({
  initial: {
    opacity: 0,
    y: dir === "up" ? 30 : 0,
    x: dir === "left" ? -30 : dir === "right" ? 30 : 0,
  },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Education() {
  const { ref, inView } = useReveal();
  const animate = (delay = 0, dir: "up" | "left" | "right" = "up") => ({
    ...rv(delay, dir),
    animate: inView ? { opacity: 1, y: 0, x: 0 } : {},
  });

  return (
    <section
      id="education"
      ref={ref}
      className="relative z-10 px-8 md:px-14 py-28 overflow-hidden"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <div className="max-w-3xl">
        {/* Section Header */}
        <motion.div {...animate(0, "left")}>
          <SectionLabel num="03" label="Education" />
          <h2
            className="font-syne font-bold leading-[1.05] mb-16 text-white/95"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            Learning & Growth
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              {...animate(0.1 * (idx + 1), "up")}
              className="group relative"
            >
              <div className="relative border border-white/[0.08] rounded-lg p-8 hover:border-white/[0.15] transition-colors duration-300 bg-white/[0.02] backdrop-blur-sm">
                {/* Timeline dot */}
                <div className="absolute -left-5 top-8 w-3 h-3 rounded-full border-2 border-accent bg-bg" />

                <div className="space-y-4">
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white/95 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs tracking-widest text-white/40 uppercase font-mono">
                    {edu.duration}
                  </p>

                  <p className="text-sm leading-[1.8] text-white/60 font-light">
                    {edu.description}
                  </p>
                </div>

                {/* Accent line on hover */}
                <div className="absolute inset-0 border border-accent/0 rounded-lg group-hover:border-accent/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute right-0 top-1/2 w-px h-32 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0" />
    </section>
  );
}
