import "../styles/page.css";

const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Kotlin", "Python", "TypeScript", "JavaScript", "C/C++", "SQL", "MATLAB", "HTML/CSS"],
  },
  {
    label: "Frameworks & Tools",
    items: ["React.js", "Vite", "Firebase", "Pandas", "Pytest", "Git"],
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
    role: "Software Developer Intern",
    employmentType: "Part-Time",
    location: "Woodlawn, MD",
    dates: "Sep 2026 - Present",
    bullets: [
      "Develop and maintain large-scale Medicare pricing applications (“Pricers”), implementing updates to core logic, configuration pipelines, and data models using Java, Maven, and Git.",
      "Convert internal SAS programs to Python under an HHS CIO directive to modernize legacy analytics code.",
      "Automate and monitor release workflows for annual, quarterly, and off-cycle Pricer updates using GitHub, Jira, Confluence, and Slack, ensuring seamless deployment across DEV, IMPL, and PROD environments.",
      "Conduct code reviews and partner with technical leads to enforce coding standards, security (CVE suppression), and SonarQube quality gates prior to production release.",
      "Build and validate automated pipelines that transform policy input files (CSV, YAML, Excel) into fee schedules and pricing files for Medicare claim reimbursement.",
    ],
  },
  {
    company: "U.S. Centers for Medicare & Medicaid Services (CMS)",
    role: "Data Analyst Intern",
    employmentType: "Full-Time",
    location: "Woodlawn, MD",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Built an animated, graphics-driven presentation application in TypeScript, implementing reusable slide components and programmatic chart animations to communicate case-routing workflows to staff and leadership.",
      "Automated recurring case-data reporting through formula-driven pipelines and pivot-based aggregations, eliminating manual tracking steps and reducing turnaround time on recurring deliverables.",
      "Queried and analyzed claims and case-routing data from internal CMS systems, transforming raw extracts into summary dashboards that surfaced patterns used for team decision-making.",
      "Translated stakeholder requirements into structured technical specifications for internal tooling, and documented a SharePoint migration covering folder hierarchy, metadata schema, and access configuration.",
    ],
  },
  {
    company: "RAINN",
    role: "DevOps Engineer Intern",
    employmentType: "Part-Time",
    location: "Washington, DC",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Root-caused an 8-month silent outage in a production CloudWatch → SNS → Lambda → Slack alerting pipeline by mining 30 days of logs to prove all 147 invocations returned 400 invalid_token, isolating error handling that never inspected the outbound HTTP status.",
      "Restored and hardened the Python notifier by rotating the dead webhook and migrating a hardcoded secret into SSM Parameter Store, adding status-code validation so delivery failures surface as real CloudWatch errors.",
      "Re-architected alarm routing, splitting URL/downtime alerts from infrastructure health alarms into dedicated Slack channels to cut noise and improve on-call signal.",
      "Authored least-privilege IAM policies in JSON and automated a standardized AWS resource tagging strategy across existing infrastructure, hardening security and improving cost visibility.",
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
      "Developed a privacy-first Python CLI that parses AWS SATv2/Prowler exports, redacts sensitive infrastructure data, and generates AI-ready remediation summaries without exposing raw CSV records. Engineered a streaming pipeline processing large CSVs in constant memory, normalizing multiple export schemas and classifying findings by severity into HTML/Markdown reports, backed by a Pytest privacy-validation suite.",
  },
  {
    name: "Personal Portfolio",
    year: "2026",
    stack: ["React", "Vite", "JavaScript", "AWS", "Git"],
    description:
      "Built and deployed a responsive single-page application with React and Vite using a component-based architecture. Implemented cloud hosting and CDN delivery on AWS S3 and CloudFront with Route 53 domain routing and HTTPS via Certificate Manager; optimized load times through asset bundling and cache-control tuning.",
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
