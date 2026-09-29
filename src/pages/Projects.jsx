import "../styles/page.css";

export default function Projects() {
  const projects = [
    {
      title: "AWS SATv2 Findings Assistant",
      year: "2026",
      description:
        "Developed a privacy-first Python application that processes AWS SATv2/Prowler assessment exports, automatically redacting sensitive cloud infrastructure data and generating AI-ready remediation summaries without exposing confidential cloud resources. Built an automated findings analysis pipeline that streams large CSV files, normalizes multiple SATv2/Prowler export formats, and classifies and prioritizes security findings into HTML and Markdown reports to accelerate remediation workflows. Implemented automated privacy validation and comprehensive unit tests to ensure sensitive infrastructure data is never included in AI-ready outputs, while maintaining reliable parsing, classification, and reporting across assessment formats.",
      tags: ["Python", "Pandas", "Pytest", "HTML", "Git"],
    },
    {
      title: "Personal Portfolio",
      year: "2026",
      description:
        "Built a single-page portfolio with React and Vite to present my background, projects, and resume in a clean, responsive interface. Structured the site for straightforward updates and deployed it with AWS S3, CloudFront, Route 53, and HTTPS.",
      tags: ["React", "Vite", "AWS", "Responsive UI"],
    },
  ];

  return (
    <section className="section">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Selected work aligned with the current resume</p>
      </div>

      <div className="grid3">
        {projects.map((project) => (
          <article className="item hoverlift project-card" key={project.title}>
            <div className="resume-row">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
            <div className="meta">
              {project.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
