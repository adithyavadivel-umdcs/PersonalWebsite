import "../styles/page.css";
import Tilt from "../components/Tilt";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section className="section page-top">
      <div className="page-head" data-reveal>
        <span className="section-index">// work</span>
        <h1>
          Selected <span className="gradient">Projects</span>
        </h1>
        <p className="lead">Selected work aligned with the current resume.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Tilt
            as="article"
            max={4}
            className="card spot project-card"
            key={project.title}
            data-reveal
            style={{ "--d": i }}
          >
            <div className="project-top">
              <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="project-kind">{project.kind}</p>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="meta">
              {project.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
