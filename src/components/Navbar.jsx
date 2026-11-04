import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const linksRef = useRef(null);
  const indicatorRef = useRef(null);

  // Slide the glowing pill under a given link (or hide it).
  const moveIndicator = useCallback((el) => {
    const ind = indicatorRef.current;
    if (!ind) return;
    if (!el) {
      ind.style.opacity = "0";
      return;
    }
    ind.style.opacity = "1";
    ind.style.width = `${el.offsetWidth}px`;
    ind.style.transform = `translateX(${el.offsetLeft}px)`;
  }, []);

  const resetIndicator = useCallback(() => {
    moveIndicator(linksRef.current?.querySelector("a.active"));
  }, [moveIndicator]);

  useLayoutEffect(() => {
    resetIndicator();
    window.addEventListener("resize", resetIndicator);
    return () => window.removeEventListener("resize", resetIndicator);
  }, [pathname, resetIndicator]);

  useEffect(() => {
    const onScroll = () =>
      headerRef.current?.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Fonts can change link widths after first paint.
    document.fonts?.ready.then(resetIndicator);
    return () => window.removeEventListener("scroll", onScroll);
  }, [resetIndicator]);

  return (
    <header className="nav" ref={headerRef}>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Adithya Vadivel, home">
          <span className="brand-mark" aria-hidden="true">AV</span>
          <span className="brand-name">Adithya Vadivel</span>
        </Link>

        <nav
          className="navlinks"
          aria-label="Primary"
          ref={linksRef}
          onMouseLeave={resetIndicator}
        >
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "active" : "")}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
              onBlur={resetIndicator}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
