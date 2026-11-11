import "../styles/page.css";
import Tilt from "../components/Tilt";
import RepoBrowser, { GITHUB_USER } from "../components/RepoBrowser";
import { ArrowIcon, GithubIcon } from "../components/Icons";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <>
      <section className="section page-top">
        <div className="page-head" data-reveal>
          <span className="section-index">// work</span>
          <h1>
            <span className="gradient">Projects</span>
          </h1>
          <p className="lead">A few projects I&apos;m proud of, plus everything else on my GitHub.</p>
        </div>

        <div className="section-title" data-reveal>
          <span className="section-index">01</span>
          <h2>Featured</h2>
        </div>

        <div className="project-grid featured-grid">
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
              {project.repo && (
                <a
                  className="project-link"
                  href={`https://github.com/${GITHUB_USER}/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon /> View code <ArrowIcon />
                </a>
              )}
            </Tilt>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title" data-reveal>
          <span className="section-index">02</span>
          <h2>All my work</h2>
        </div>
        <RepoBrowser />
      </section>
    </>
  );
}
