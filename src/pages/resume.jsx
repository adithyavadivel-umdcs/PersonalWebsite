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
    company: "U.S. Centers for Medicare & Medicaid Services (CMS)",
    role: "Data Analyst Intern",
    employmentType: "Full-Time",
    location: "Woodlawn, MD",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Built Excel-based trackers, templates, and formula-driven analyses (PivotTables, lookups) used by staff to organize and monitor case data, reducing manual tracking effort.",
      "Analyzed claims and case-routing data using internal CMS systems, producing spreadsheets and summary dashboards that surfaced patterns for team decision-making.",
      "Advised on a SharePoint migration by restructuring folder hierarchies and metadata, recommending permission and access configurations, and documenting migration steps for team reference.",
      "Participated in requirements-gathering sessions with analysts and supervisors, documenting operational needs and translating them into structured specifications for internal tool improvements.",
      "Used AI-assisted tools to accelerate documentation and reporting workflows, improving turnaround time on internal deliverables.",
      "Collaborated with cross-functional teams, including analysts, supervisors, and program experts, to clarify system workflows and communicate findings to both technical and non-technical stakeholders.",
    ],
  },
  {
    company: "RAINN",
    role: "DevOps Engineer Intern",
    employmentType: "Part-Time",
    location: "Washington, DC",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Designed and implemented a standardized AWS resource tagging strategy, applying tags across existing cloud infrastructure and automating tag enforcement to improve resource organization and cost visibility.",
      "Researched AWS IAM best practices and drafted/reviewed IAM policy documents, identifying overly permissive access and recommending least-privilege configurations to strengthen cloud security.",
      "Investigated AWS SATv2 security assessment findings, documenting root causes and remediation steps to support ongoing infrastructure hardening efforts.",
      "Collaborated with the DevOps Engineer on cloud infrastructure support, contributing to system monitoring, troubleshooting, and technical documentation as part of routine operational maintenance.",
    ],
  },
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
    name: "AWS SATv2 Findings Assistant",
    year: "2026",
    stack: ["Python", "Pandas", "Pytest", "HTML", "Git"],
    description:
      "Developed a privacy-first Python application that processes AWS SATv2/Prowler assessment exports, automatically redacting sensitive cloud infrastructure data and generating AI-ready remediation summaries without exposing confidential cloud resources. Built an automated findings analysis pipeline that streams large CSV files, normalizes multiple SATv2/Prowler export formats, and classifies and prioritizes security findings into HTML and Markdown reports to accelerate remediation workflows. Implemented automated privacy validation and comprehensive unit tests to ensure sensitive infrastructure data is never included in AI-ready outputs, while maintaining reliable parsing, classification, and reporting across assessment formats.",
  },
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
            <a className="btn primary resume-btn" href="/assets/Adithya_Vadivel_Resume.pdf" download>
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
                    {experience.employmentType && <span>{experience.employmentType}</span>}
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
