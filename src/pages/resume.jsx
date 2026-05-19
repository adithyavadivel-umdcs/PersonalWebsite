import "../styles/page.css";

const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Kotlin", "Python", "MATLAB", "C/C++", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Tools",
    items: ["React.js", "Vite", "Firebase", "Git"],
  },
  {
    label: "Coursework",
    items: [
      "Object Oriented Programming",
      "Data Structures and Algorithms",
      "Discrete Structures",
      "Databases",
    ],
  },
];

const experiences = [
  {
    company: "Northeastern University - Center for Drug Discovery",
    role: "Research Intern",
    location: "Boston, MA",
    dates: "Oct 2024 - Dec 2024",
    bullets: [
      "Supported academic research workflows by reviewing scientific literature related to drug discovery and public health outcomes.",
      "Organized findings across research tools and databases to improve reference tracking, source analysis, and synthesis quality.",
      "Worked in a detail-oriented environment that required structured documentation, accuracy, and clear communication.",
    ],
  },
  {
    company: "Aegle Nutrition",
    role: "Quality Control Intern",
    location: "Carrollton, TX",
    dates: "Jul 2024 - Oct 2024",
    bullets: [
      "Assisted with quality control processes by documenting checks, reviewing product information, and maintaining consistency across records.",
      "Contributed to process reliability by catching discrepancies early and helping keep operational data organized.",
      "Strengthened analytical and process-focused thinking while working in a fast-moving, standards-driven setting.",
    ],
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    year: "2026",
    stack: ["React", "Vite", "AWS", "CloudFront"],
    description:
      "Built and iterated on a personal portfolio site to present projects, résumé content, and contact information with a clean, responsive UI and production deployment workflow.",
  },
  {
    name: "Media Rental Manager",
    year: "2025",
    stack: ["Java", "OOP", "Data Structures"],
    description:
      "Developed a media rental system that models customers, inventory, and rental rules using object-oriented design, collections, and maintainable application logic.",
  },
  {
    name: "Passport Project",
    year: "2025",
    stack: ["JavaScript", "HTML", "CSS"],
    description:
      "Created an interactive web project focused on structured front-end development, clean presentation, and reliable user-facing behavior.",
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "PCEP Certified Entry-Level Python Programmer",
];

export default function Resume() {
  return (
    <section className="section resume-page">
      <div className="card resume-shell">
        <div className="resume-header">
          <div className="resume-identity">
            <h1 className="resume-name">Adithya Vadivel</h1>
            <p className="resume-role">Computer Science &amp; Data Science Student</p>
            <p className="resume-school">University of Maryland</p>
          </div>

          <div className="resume-actions">
            <a className="btn primary resume-btn" href="/Adithya_Vadivel_Resume.pdf" download>
              Download Resume
            </a>
            <a className="btn resume-btn" href="mailto:avadivel@umd.edu">
              Email
            </a>
            <a
              className="btn resume-btn"
              href="https://www.linkedin.com/in/adithya-vadivel-45882b233/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn resume-btn"
              href="https://github.com/adithyavadivel-umdcs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="resume-meta-grid">
          <div className="fact">
            <span className="fact-label">Email</span>
            <span>avadivel@umd.edu</span>
          </div>
          <div className="fact">
            <span className="fact-label">Phone</span>
            <span>443-985-6246</span>
          </div>
          <div className="fact">
            <span className="fact-label">Degree</span>
            <span>B.S. in Computer Science and Data Science</span>
          </div>
          <div className="fact">
            <span className="fact-label">Timeline</span>
            <span>Sept 2025 - May 2028</span>
          </div>
          <div className="fact">
            <span className="fact-label">GPA</span>
            <span>3.7/4.0</span>
          </div>
        </div>

        <div className="resume-section-grid">
          <div className="card resume-panel">
            <h3>Education</h3>
            <div className="resume-block">
              <div className="resume-row">
                <strong>University of Maryland, College Park</strong>
                <span className="resume-date">Sept 2025 - May 2028</span>
              </div>
              <div className="muted">Bachelor of Science in Computer Science and Data Science</div>
              <div className="resume-detail-grid">
                <p className="lead resume-inline">
                  <strong>Organizations:</strong> College Park Scholars - Science, Technology, and Society
                </p>
                <p className="lead resume-inline">
                  <strong>Achievements:</strong> Academic Honors, Dean&apos;s List
                </p>
                <p className="lead resume-inline">
                  <strong>Coursework:</strong> Object Oriented Programming, Data Structures and Algorithms, Discrete Structures, Databases
                </p>
              </div>
            </div>
          </div>

          <div className="card resume-panel">
            <h3>Technical Skills</h3>
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
          <h3>Experience</h3>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
                <div className="resume-row">
                  <div>
                    <strong>{experience.role}</strong>
                    <div className="muted">{experience.company}</div>
                  </div>
                  <div className="timeline-meta">
                    <span>{experience.location}</span>
                    <span>{experience.dates}</span>
                  </div>
                </div>
                <ul className="resume-list">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-section-grid">
          <div className="card resume-panel">
            <h3>Projects</h3>
            <div className="project-preview-grid">
              {projects.map((project) => (
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

          <div className="card resume-panel">
            <h3>Certifications</h3>
            <div className="certification-list">
              {certifications.map((certification) => (
                <div className="certification-item" key={certification}>
                  <span className="certification-dot" aria-hidden="true" />
                  <span>{certification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
