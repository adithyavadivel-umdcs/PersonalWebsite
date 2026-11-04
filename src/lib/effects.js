import { useEffect } from "react";

/**
 * Tracks the pointer globally:
 *  - --cx / --cy on <html> drive the ambient cursor glow
 *  - --mx / --my on every `.spot` ancestor of the hovered element drive
 *    card spotlights and lit outlines
 */
export function usePointerVars() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let last = null;

    function apply() {
      frame = 0;
      if (!last) return;
      const { clientX: x, clientY: y, target } = last;
      root.style.setProperty("--cx", `${x}px`);
      root.style.setProperty("--cy", `${y}px`);

      let el = target instanceof Element ? target.closest(".spot") : null;
      while (el) {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${x - r.left}px`);
        el.style.setProperty("--my", `${y - r.top}px`);
        el = el.parentElement?.closest(".spot") ?? null;
      }
    }

    function onMove(e) {
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
}

/** Adds `.is-visible` to `[data-reveal]` elements as they scroll into view. */
export function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

/** Writes page scroll progress (0–1) to --scroll on <html>. */
export function useScrollProgress() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    function apply() {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0");
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(apply);
    }
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

function upsertHead(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Keeps <title>, description, canonical and social tags in sync on client-side navigation. */
export function useDocumentMeta(meta, canonicalUrl) {
  const { title, description } = meta;
  useEffect(() => {
    document.title = title;
    const metaTag = (key, name) => () => {
      const m = document.createElement("meta");
      m.setAttribute(key, name);
      return m;
    };
    upsertHead('meta[name="description"]', metaTag("name", "description"), "content", description);
    upsertHead('meta[property="og:title"]', metaTag("property", "og:title"), "content", title);
    upsertHead('meta[property="og:description"]', metaTag("property", "og:description"), "content", description);
    upsertHead('meta[property="og:url"]', metaTag("property", "og:url"), "content", canonicalUrl);
    upsertHead('meta[name="twitter:title"]', metaTag("name", "twitter:title"), "content", title);
    upsertHead('meta[name="twitter:description"]', metaTag("name", "twitter:description"), "content", description);
    upsertHead(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.rel = "canonical";
        return l;
      },
      "href",
      canonicalUrl
    );
  }, [title, description, canonicalUrl]);
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
