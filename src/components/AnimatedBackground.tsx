"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityDir: number;
  color: string;
};

const COLORS = [
  "rgba(13, 148, 136, 0.9)", // teal
  "rgba(10, 37, 64, 0.75)", // navy
  "rgba(20, 184, 166, 0.7)", // teal light
  "rgba(22, 58, 92, 0.65)", // navy light
];

function particleCount(width: number) {
  if (width < 640) return 28;
  if (width < 1024) return 42;
  return 58;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = particleCount(w);
      if (particlesRef.current.length !== count) {
        particlesRef.current = Array.from({ length: count }, () =>
          createParticle(w, h, true),
        );
      }
    };

    const createParticle = (
      w: number,
      h: number,
      randomY: boolean,
    ): Particle => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + Math.random() * 40,
      size: 2 + Math.random() * 2,
      speedY: 0.08 + Math.random() * 0.18,
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: 0.15 + Math.random() * 0.15,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particlesRef.current) {
        if (!reducedMotionRef.current) {
          p.y -= p.speedY;
          p.x += p.speedX;
          p.opacity += p.opacityDir * 0.0012;
          if (p.opacity <= 0.12 || p.opacity >= 0.3) p.opacityDir *= -1;

          if (p.y < -10) {
            Object.assign(p, createParticle(w, h, false), { y: h + 10 });
          }
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
        }

        ctx.beginPath();
        ctx.globalAlpha = Math.min(0.3, Math.max(0.15, p.opacity));
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-slate-soft/40 backdrop-blur-[0.5px]" />
    </div>
  );
}
