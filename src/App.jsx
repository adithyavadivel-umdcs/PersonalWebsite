import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import PageTransition from "./components/PageTransition";
import { usePointerVars, useReveal, useScrollProgress } from "./lib/effects";
import { links } from "./data/profile";

import Home from "./pages/Home";
import Resume from "./pages/resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const ROUTES = [
  { path: "/", element: <Home /> },
  { path: "/resume", element: <Resume /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  const location = useLocation();

  usePointerVars();
  useScrollProgress();
  useReveal(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Backdrop />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="route-wipe" key={`wipe-${location.pathname}`} aria-hidden="true" />

      <Navbar />

      <main className="wrap">
        <Routes location={location} key={location.pathname}>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={<PageTransition>{element}</PageTransition>} />
          ))}
        </Routes>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Adithya Vadivel</div>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${links.email}`}>Email</a>
          </div>
          <div className="mono">Built with React · Canvas · CSS</div>
        </footer>
      </main>
    </>
  );
}

export default App;
