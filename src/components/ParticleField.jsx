import { useEffect, useRef } from "react";

// Crimson, light red, amber, plus a clinical teal accent.
const COLORS = ["239,35,60", "255,107,122", "255,159,90", "239,35,60", "45,212,191"];
const CROSS_CHANCE = 0.14;
const LINK_DIST = 130;
const MOUSE_RADIUS = 180;

/**
 * Full-screen constellation background. Particles drift, link to nearby
 * neighbours, and part around the cursor while drawing threads to it.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(120, (width * height) / 13000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        cross: Math.random() < CROSS_CHANCE,
      }));
      if (reduceMotion) draw();
    }

    function update() {
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_RADIUS && d > 0.1) {
          const force = (1 - d / MOUSE_RADIUS) * 0.9;
          p.x += (dx / d) * force;
          p.y += (dy / d) * force;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(255,120,135,${(1 - d / LINK_DIST) * 0.14})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < MOUSE_RADIUS * 1.25) {
          ctx.strokeStyle = `rgba(255,107,122,${(1 - md / (MOUSE_RADIUS * 1.25)) * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${p.c},0.85)`;
        if (p.cross) {
          // Small medical cross
          const arm = p.r * 3 + 2;
          const t = Math.max(1.2, p.r * 0.9);
          ctx.fillRect(p.x - arm, p.y - t / 2, arm * 2, t);
          ctx.fillRect(p.x - t / 2, p.y - arm, t, arm * 2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function loop() {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onPointerMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onPointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onVisibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(loop);
    }

    resize();
    if (!reduceMotion) raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
