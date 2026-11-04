import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/effects";

/** Counts from 0 to `to` the first time it scrolls into view. */
export default function CountUp({ to, duration = 1400, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? to : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * to));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
