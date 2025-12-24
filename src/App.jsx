import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Resume from "./pages/resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    
    <>
      <Navbar />

      <main className="wrap">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
  path="/resume"
  element={
    <PageTransition>
      <Resume />
    </PageTransition>
  }
/>

          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Adithya Vadivel</div>
          <div>Built with React + CSS</div>
        </footer>
      </main>
    </>
  );
}

export default App;
