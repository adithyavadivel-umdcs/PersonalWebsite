import "../styles/page.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="card">
          <h1>
            Hi, I’m <span className="gradient">Adithya</span>.
          </h1>

          <p className="lead">
            I’m a <strong>freshman Computer Science student</strong> at the{" "}
            <strong>University of Maryland</strong>. I like building clean, practical
            projects and improving my skills through hands-on work.
          </p>

          <div className="btnrow">
            <a className="btn primary" href="/projects">
              View Projects
            </a>
            <Link className="btn" to="/resume">
              Résumé
            </Link>
            <a className="btn" href="mailto:avadivel@umd.edu">
              Email Me
            </a>
          </div>

          <div className="tagrow" aria-label="Highlights">
            <div>Skill Stack: </div>
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">MATLAB</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">React</span>
          </div>
        </div>

        <aside className="card profile">
          <div className="avatar" aria-label="Profile initials">
            AV
          </div>
          <div className="mini">
            <div><strong>School:</strong> University of Maryland</div>
            <div><strong>Major:</strong> Computer Science + Data Science</div>
            <div><strong>Grade:</strong> Freshman</div>
            <div><strong>Email:</strong> avadivel@umd.edu</div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>About</h2>
          
        </div>

       <div className="card">
  <div className="about-text">
    <p className="lead" style={{ maxWidth: "75ch" }}>
      I am a freshman at the University of Maryland–College Park with a strong
      interest in the intersection of computer science, neuroscience, and emerging
      technologies. I plan to pursue a double major in Computer Science and
      Neuroscience, driven by my curiosity about how computational methods and
      artificial intelligence are transforming medicine and our understanding of
      the human brain.
    </p>

    <p className="lead" style={{ maxWidth: "75ch" }}>
      I am particularly interested in the development of technologies for
      neurological and developmental disorders, and how software systems can be
      designed to support diagnosis, treatment, and accessibility. My long-term
      academic interests include computational neuroscience and the application
      of machine learning to biological and cognitive data.
    </p>

    <p className="lead" style={{ maxWidth: "75ch" }}>
      I have experience programming in Java, Python, CSS, HTML, and React, and have completed
      coursework and projects that emphasize problem-solving, algorithmic thinking,
      and structured software development. I also have research experience,
      including conducting literature reviews and working with academic software
      tools to support data analysis and research workflows.
    </p>

    <p className="lead" style={{ maxWidth: "75ch" }}>
      Beyond research, I am highly motivated to gain hands-on experience in the
      software engineering industry. I am especially interested in roles that
      value strong fundamentals, collaborative development, and thoughtful system
      design. I am also passionate about computer science education and enjoy
      helping others understand technical concepts through clear explanations and
      structured learning.
    </p>
  </div>


          <div className="divider" />

          <div className="grid3">
            <div className="item">
              <h3>What I’m learning</h3>
              <p>Java, web basics, and project structure that’s easy to maintain.</p>
            </div>
            <div className="item">
              <h3>What I like building</h3>
              <p>Useful tools, clean UI, and projects I can explain clearly.</p>
            </div>
            <div className="item">
              <h3>What I’m aiming for</h3>
              <p>Internships, research, and collaborative student projects.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}