import { useEffect, useRef } from "react";
import "../styles/page.css";
import { BadgeIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "../components/Icons";
import { certifications, experiences, links, resumeProjects, skillGroups } from "../data/profile";

/** Fills the timeline rail as the reader scrolls through it. */
function useTimelineProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let frame = 0;
    function apply() {
      frame = 0;
      const r = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (anchor - r.top) / r.height));
      el.style.setProperty("--progress", p.toFixed(3));
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
  return ref;
}

export default function Resume() {
  const timelineRef = useTimelineProgress();

  return (
    <section className="section page-top resume-page">
      <header className="resume-header" data-reveal>
        <div className="resume-identity">
          <span className="section-index">// résumé</span>
          <h1 className="resume-name">
            Adithya <span className="gradient">Vadivel</span>
          </h1>
          <p className="resume-role">Computer Science &amp; Data Science Student</p>
          <p className="resume-school">University of Maryland</p>
        </div>

        <div className="resume-actions">
          <a className="btn primary" href={links.resumePdf} download>
            <DownloadIcon /> Download Resume
          </a>
          <a className="btn" href={`mailto:${links.email}`}>
            <MailIcon /> Email
          </a>
          <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
          <a className="btn" href={links.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        </div>
      </header>

      <div className="resume-meta-grid">
        {[
          ["Email", links.email],
          ["Phone", "443-985-6246"],
          ["Degree", "B.S. in Computer Science and Data Science"],
          ["Timeline", "Sept 2025 - May 2028"],
        ].map(([label, value], i) => (
          <div className="fact card spot" key={label} data-reveal style={{ "--d": i }}>
            <span className="fact-label">{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <div className="resume-section-grid">
        <div className="card spot resume-panel" data-reveal>
          <h3 className="panel-title">Education</h3>
          <div className="resume-row">
            <strong>University of Maryland, College Park</strong>
            <span className="resume-date">Sept 2025 - May 2028</span>
          </div>
          <div className="muted">Bachelor of Science in Computer Science and Data Science</div>
          <div className="resume-detail-grid">
            <p><strong>Organizations:</strong> College Park Scholars - Science, Technology, and Society</p>
            <p><strong>Achievements:</strong> Academic Honors, Dean&apos;s List</p>
            <p>
              <strong>Coursework:</strong> Object Oriented Programming, Data Structures and
              Algorithms, Discrete Structures, Databases
            </p>
          </div>
        </div>

        <div className="card spot resume-panel" data-reveal style={{ "--d": 1 }}>
          <h3 className="panel-title">Technical Skills</h3>
          <div className="skill-group-list">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <p className="skill-label">{group.label}</p>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card resume-panel">
        <h3 className="panel-title">Experience</h3>
        <div className="timeline" ref={timelineRef}>
          <span className="timeline-rail" aria-hidden="true" />
          <span className="timeline-fill" aria-hidden="true" />
          {experiences.map((exp) => (
            <article
              className={`timeline-item${exp.current ? " is-current" : ""}`}
              key={`${exp.company}-${exp.role}`}
              data-reveal
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-body spot">
                <div className="resume-row">
                  <div>
                    <strong className="timeline-role">{exp.role}</strong>
                    <div className="muted">{exp.company}</div>
                  </div>
                  <div className="timeline-meta">
                    <span>{exp.dates}</span>
                    <span>{exp.location}</span>
                    {exp.employmentType && <span>{exp.employmentType}</span>}
                    {exp.healthcare && <span className="health-tag">✚ Healthcare</span>}
                  </div>
                </div>
                <ul className="resume-list">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section-grid">
        <div className="card spot resume-panel" data-reveal>
          <h3 className="panel-title">Projects</h3>
          <div className="project-preview-grid">
            {resumeProjects.map((project) => (
              <article className="resume-project" key={project.name}>
                <div className="resume-row">
                  <h4>{project.name}</h4>
                  <span className="project-year">{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="meta">
                  {project.stack.map((entry) => (
                    <span className="pill" key={entry}>
                      {entry}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="card spot resume-panel" data-reveal style={{ "--d": 1 }}>
          <h3 className="panel-title">Certifications</h3>
          <div className="certification-list">
            {certifications.map((certification) => (
              <div className="certification-item" key={certification}>
                <span className="icon-badge small"><BadgeIcon /></span>
                <span>{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
