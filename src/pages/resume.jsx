import "../styles/page.css";

export default function Resume() {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Résumé</h2>
        <p>Education, experience, and technical background</p>
      </div>

      {/* EDUCATION */}
      <div className="card">
        <h3>Education</h3>

        <div className="resume-block">
          <strong>University of Maryland, College Park</strong>
          <div className="muted">Bachelor of Science in Computer Science · Sep 2025 – Present</div>
          <div className="muted">
            College Park Scholars (Science, Technology, and Society)
          </div>
          <p className="lead">
            Relevant Coursework: CMSC 131 (Object-Oriented Programming in Java),
            INAG 110, ENES 210, ENGL 101, CPSS 100
          </p>
        </div>

        <div className="resume-block">
          <strong>Marriotts Ridge High School</strong>
          <div className="muted">Aug 2021 – May 2025</div>
          <p className="lead">
            GPA: 3.69/4.00 (Unweighted), 4.5 (Weighted) · SAT: 1500 (EBRW 710, Math 790)
          </p>
          <p className="lead">
            Dual Enrollment (Howard Community College): Advanced Python,
            Calculus I, Business Calculus, Calculus II, Linear Algebra
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="card">
        <h3>Experience</h3>

        <div className="resume-block">
          <strong>Research Intern — Northeastern University, Center for Drug Discovery</strong>
          <div className="muted">Oct 2024 – Dec 2024</div>
          <p className="lead">
            Conducted literature reviews on the public health effects of cannabinoids
            under faculty mentorship. Utilized ChemDraw, SciFinder, PubMed, EndNote,
            and RePORTER to collect, analyze, and organize research data.
          </p>
        </div>

        <div className="resume-block">
          <strong>Academic Tutor and Grader — Kumon North America</strong>
          <div className="muted">Sep 2024 – Present</div>
          <p className="lead">
            Graded student work, provided detailed feedback, and assisted students
            with understanding core academic concepts.
          </p>
        </div>

        <div className="resume-block">
          <strong>Information Technology Intern — S & A Technologies LLC</strong>
          <div className="muted">Jul 2024 – Aug 2024</div>
          <p className="lead">
            Organized and managed data using spreadsheets and reviewed Java and
            Python code to identify errors and suggest improvements.
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h3>Skills & Certifications</h3>

        <p className="lead">
          <strong>Programming:</strong> Java, Python, JavaScript, MATLAB, C/C++
        </p>
        <p className="lead">
          <strong>Certifications:</strong> PCEP – Certified Entry-Level Python Programmer,
          Introduction to Responsible AI, Introduction to Generative AI,
          Introduction to Large Language Models
        </p>
        <p className="lead">
          <strong>Languages:</strong> English (Native), Tamil (Native),
          Spanish (Basic Proficiency)
        </p>
      </div>

      {/* ACTIVITIES */}
      <div className="card">
        <h3>Activities & Music</h3>

        <p className="lead">
          Selected multiple times for Maryland All-State Chorus and Howard County
          Gifted and Talented Chorus. Actively involved in chamber choir, a cappella,
          and Indian classical (Carnatic) music performance and instruction.
        </p>
      </div>
    </section>
  );
}