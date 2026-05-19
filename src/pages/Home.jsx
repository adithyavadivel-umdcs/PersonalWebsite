import "../styles/page.css";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/profile-pic/DSC03637.JPG";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="card">
          <h1>
            Hi, I’m <span className="gradient">Adithya</span>.
          </h1>

          <p className="lead">
            I&apos;m a <strong>Computer Science and Data Science student</strong> at the{" "}
            <strong>University of Maryland</strong> building clean, practical
            software and sharpening my fundamentals through hands-on projects.
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
            <span className="tag">Kotlin</span>
            <span className="tag">Python</span>
            <span className="tag">MATLAB</span>
            <span className="tag">React</span>
            <span className="tag">AWS</span>
          </div>
        </div>

        <aside className="card profile">
          <div className="avatar-shell">
            <img
              className="avatar-photo"
              src={profilePhoto}
              alt="Adithya Vadivel"
            />
          </div>
          <div className="mini">
            <div><strong>School:</strong> University of Maryland</div>
            <div><strong>Major:</strong> Computer Science + Data Science</div>
            <div><strong>Expected Graduation:</strong> May 2028</div>
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
      I am a student at the University of Maryland with a focus on computer
      science, data science, and practical software development. I enjoy
      building structured applications, improving front-end polish, and
      strengthening the fundamentals that support reliable engineering work.
    </p>

    <p className="lead" style={{ maxWidth: "75ch" }}>
      My academic work has included coursework in object oriented programming,
      data structures and algorithms, discrete structures, and databases. I am
      especially interested in opportunities where strong implementation,
      analytical thinking, and clean collaboration matter.
    </p>

    <p className="lead" style={{ maxWidth: "75ch" }}>
      I have experience with Java, Kotlin, Python, MATLAB, C/C++, HTML, CSS,
      JavaScript, SQL, React, Vite, Firebase, and Git. My work so far includes
      academic projects, portfolio development, and internships that demanded
      careful documentation, consistency, and attention to detail.
    </p>

    <p className="lead" style={{ maxWidth: "75ch" }}>
      I&apos;m looking for internships, research, and technical environments where
      I can contribute, learn quickly, and keep building a strong engineering
      foundation.
    </p>
  </div>


          <div className="divider" />

          <div className="grid3">
            <div className="item">
              <h3>What I’m learning</h3>
              <p>Data structures, databases, software design, and production-minded front-end work.</p>
            </div>
            <div className="item">
              <h3>What I like building</h3>
              <p>Useful tools, polished interfaces, and projects with clear implementation choices.</p>
            </div>
            <div className="item">
              <h3>What I’m aiming for</h3>
              <p>Internships, research opportunities, and collaborative software projects.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
