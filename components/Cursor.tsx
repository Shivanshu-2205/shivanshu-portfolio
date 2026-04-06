"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dot.current || !ring.current) return;
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.current!.style.left = mx + "px";
      dot.current!.style.top  = my + "px";
    };
    const loop = () => {
      rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11;
      ring.current!.style.left = rx + "px";
      ring.current!.style.top  = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    const big   = () => { ring.current!.style.transform = "translate(-50%,-50%) scale(1.8)"; ring.current!.style.borderColor = "rgba(79,142,247,0.7)"; };
    const small = () => { ring.current!.style.transform = "translate(-50%,-50%) scale(1)";   ring.current!.style.borderColor = "rgba(79,142,247,0.3)"; };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach(el => { el.addEventListener("mouseenter", big); el.addEventListener("mouseleave", small); });
    raf = requestAnimationFrame(loop);
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot}  className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2" style={{ mixBlendMode:"screen", transition:"transform .1s" }} />
      <div ref={ring} className="fixed pointer-events-none z-[9998] w-10 h-10 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ border:"1px solid rgba(79,142,247,0.3)", transition:"transform .2s ease, border-color .2s ease" }} />
    </>
  );
}
