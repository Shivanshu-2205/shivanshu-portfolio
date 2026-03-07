"use client";
import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    let W = c.width  = window.innerWidth;
    let H = c.height = window.innerHeight;
    let mx = -999, my = -999;
    const COUNT = Math.floor((W * H) / 20000);
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.28, vy: (Math.random()-.5)*.28,
    }));
    const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onResize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);
    let raf: number;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0||p.x>W) p.vx*=-1; if (p.y<0||p.y>H) p.vy*=-1;
        const d = Math.hypot(mx-p.x, my-p.y);
        const a = d < 150 ? 0.85 : 0.25;
        ctx.beginPath(); ctx.arc(p.x,p.y,1.4,0,Math.PI*2);
        ctx.fillStyle = `rgba(79,142,247,${a})`; ctx.fill();
      });
      for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
        const d = Math.hypot(pts[i].x-pts[j].x, pts[i].y-pts[j].y);
        if (d<120) { ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(79,142,247,${(1-d/120)*0.2})`; ctx.lineWidth=.5; ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("mousemove",onMouse); window.removeEventListener("resize",onResize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none opacity-45" />;
}
