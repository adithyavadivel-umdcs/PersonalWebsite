import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/effects";

const STRAND_A = "239,35,60"; // crimson
const STRAND_B = "45,212,191"; // clinical teal

/** Rotating DNA double helix drawn on a canvas that fills its parent. */
export default function DnaHelix({ pairs = 24, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = prefersReducedMotion();
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    }

    function dot(x, y, r, rgb, alpha) {
      ctx.fillStyle = `rgba(${rgb},${alpha})`;
      ctx.shadowColor = `rgba(${rgb},${alpha})`;
      ctx.shadowBlur = r * 4;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const amp = Math.min(width * 0.32, 90);
      const pad = 16;
      const step = (height - pad * 2) / (pairs - 1);

      for (let i = 0; i < pairs; i++) {
        const y = pad + i * step;
        const phase = t * 0.0011 + i * 0.42;
        const s = Math.sin(phase);
        const depth = Math.cos(phase); // >0: strand A in front
        const xA = cx + s * amp;
        const xB = cx - s * amp;

        const rung = ctx.createLinearGradient(xA, y, xB, y);
        rung.addColorStop(0, `rgba(${STRAND_A},0.35)`);
        rung.addColorStop(1, `rgba(${STRAND_B},0.35)`);
        ctx.strokeStyle = rung;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(xA, y);
        ctx.lineTo(xB, y);
        ctx.stroke();

        const front = 0.6 + 0.4 * Math.abs(depth);
        const back = 0.35;
        const rFront = 3.6 + Math.abs(depth) * 1.6;
        const rBack = 2.4;
        if (depth > 0) {
          dot(xB, y, rBack, STRAND_B, back);
          dot(xA, y, rFront, STRAND_A, front);
        } else {
          dot(xA, y, rBack, STRAND_A, back);
          dot(xB, y, rFront, STRAND_B, front);
        }
      }
    }

    function loop(t) {
      draw(t);
      if (visible) raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !reduceMotion;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [pairs]);

  return <canvas ref={canvasRef} className={`dna ${className}`} aria-hidden="true" />;
}
