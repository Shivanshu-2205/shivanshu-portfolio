"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About",        href: "#about" },
  { label: "Projects",     href: "#projects" },
  { label: "Stack",        href: "#stack" },
  { label: "Education",    href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact",      href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: .7, ease: [.22,1,.36,1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-14 py-5 transition-all duration-500 ${scrolled ? "bg-[#07090e]/85 backdrop-blur-2xl border-b border-white/[0.05]" : ""}`}
      >
        <a href="#" className="font-syne font-bold text-[13px] tracking-[0.15em] uppercase text-white no-underline">
          SM<span className="text-accent ml-1">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-[10px] tracking-[0.18em] uppercase text-white/40 hover:text-white no-underline transition-colors duration-200">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="/resume.pdf" target="_blank" className="text-[10px] tracking-[0.14em] uppercase text-white/40 hover:text-white no-underline transition-colors duration-200">Resume ↗</a>
          <a href="#contact" className="cut-sm bg-accent text-bg text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 no-underline hover:bg-white transition-colors duration-200 font-mono">
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden flex flex-col gap-1.5 cursor-none" aria-label="menu">
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-syne font-bold text-3xl text-white/80 hover:text-accent no-underline transition-colors">{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
