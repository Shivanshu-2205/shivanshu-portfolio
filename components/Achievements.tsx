"use client";
import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import SectionLabel from "./SectionLabel";

const achievementCategories = [
  {
    title: "Machine Learning & Systems",
    items: [
      "Designed a reinforcement learning–based recommendation system for campus networking (Open Up)",
      "Conceptualizing a RAG-based AI system that allows users to interact with documents (PDF Talker)",
      "Implemented a Graph Convolutional Network (GCN) model for node classification problems",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "Built a real-time chat application demonstrating event-driven communication systems",
      "Experienced in designing end-to-end ML pipelines and system architectures",
    ],
  },
  {
    title: "Problem Solving",
    items: [
      "Strong foundation in Data Structures and Algorithms",
      "Active practice in Competitive Programming and algorithmic problem solving",
    ],
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

export default function Achievements() {
  const { ref, inView } = useReveal();
  const animate = (delay = 0, dir: "up" | "left" | "right" = "up") => ({
    ...rv(delay, dir),
    animate: inView ? { opacity: 1, y: 0, x: 0 } : {},
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative z-10 px-8 md:px-14 py-28 overflow-hidden"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-20" />

      <div className="max-w-5xl">
        {/* Section Header */}
        <motion.div {...animate(0, "left")}>
          <SectionLabel num="04" label="Achievements" />
          <h2
            className="font-syne font-bold leading-[1.05] mb-16 text-white/95"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            Achievements & Highlights
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {achievementCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              {...animate(0.1 * (catIdx + 1), "up")}
              className="space-y-6"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                <h3 className="font-syne font-bold text-base text-white/90">
                  {category.title}
                </h3>
              </div>

              {/* Achievement Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 * (catIdx + 1) + 0.06 * (itemIdx + 1),
                    }}
                    className="group flex gap-3 items-start"
                  >
                    {/* Bullet */}
                    <div className="flex-shrink-0 w-1 h-1 rounded-full bg-accent/50 mt-2.5 group-hover:bg-accent transition-colors" />

                    {/* Text */}
                    <p className="text-sm leading-[1.6] text-white/65 font-light group-hover:text-white/80 transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-accent/30 via-accent/10 to-transparent mt-16 origin-left"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-px h-40 bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0 opacity-50" />
    </section>
  );
}
