import "../styles/page.css";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      year: "2026",
      description:
        "Built a single-page portfolio with React and Vite to present my background, projects, and resume in a clean, responsive interface. Structured the site for straightforward updates and deployed it with AWS S3, CloudFront, Route 53, and HTTPS.",
      tags: ["React", "Vite", "AWS", "Responsive UI"],
    },
    {
      title: "Media Rental Manager",
      year: "2025",
      description:
        "Designed and implemented a media rental management system that models customers, media items, and rental plans using object-oriented design. Focused on clean class structure, collections, and reliable business logic.",
      tags: ["Java", "OOP", "Collections", "Algorithms"],
    },
    {
      title: "Passport Project",
      year: "2025",
      description:
        "Created an interactive web application with attention to layout, user-facing clarity, and maintainable front-end structure. Emphasized readable code, polished presentation, and consistent behavior across screens.",
      tags: ["JavaScript", "HTML", "CSS", "Frontend"],
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
