import "../styles/page.css";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/profile-pic/profile-web.jpg";
import Typewriter from "../components/Typewriter";
import Tilt from "../components/Tilt";
import EcgLine from "../components/EcgLine";
import { ArrowIcon, MailIcon } from "../components/Icons";
import { links, marqueeSkills } from "../data/profile";

const ROLES = [
  "software in Java and Python.",
  "small tools on AWS.",
  "clean, simple web pages.",
];


const ORBIT_TAGS = ["Java", "Python", "AWS", "SQL"];

const CURRENTLY = [
  { label: "Working", value: "Software Developer Intern at CMS" },
  { label: "Studying", value: "CS + Data Science at UMD, class of 2028" },
  { label: "Certified", value: "AWS Cloud Practitioner · PCEP Python" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>
            <span className="heart-dot" aria-hidden="true" />
            Computer Science &amp; Data Science Student
          </p>

          <h1 className="hero-title" data-reveal style={{ "--d": 1 }}>
            Hi, I’m <span className="gradient">Adithya</span>.
          </h1>

          <p className="hero-sub" data-reveal style={{ "--d": 2 }}>
            I build <Typewriter words={ROLES} />
          </p>

          <p className="lead" data-reveal style={{ "--d": 3 }}>
            I&apos;m a <strong>Computer Science and Data Science student</strong> at the{" "}
            <strong>University of Maryland</strong> building clean, practical software and
            sharpening my fundamentals through hands-on projects.
          </p>

          <div className="btnrow" data-reveal style={{ "--d": 4 }}>
            <Link className="btn primary" to="/projects">
              View Projects <ArrowIcon />
            </Link>
            <Link className="btn" to="/resume">
              Résumé
            </Link>
            <a className="btn" href={`mailto:${links.email}`}>
              <MailIcon /> Email Me
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal style={{ "--d": 2 }}>
          <Tilt className="avatar-tilt" max={10}>
            <div className="avatar-ring">
              <img className="avatar-photo" src={profilePhoto} alt="Adithya Vadivel" />
            </div>
            {ORBIT_TAGS.map((tag, i) => (
              <span key={tag} className={`orbit-tag orbit-${i}`}>
                {tag}
              </span>
            ))}
          </Tilt>

          <div className="card spot id-card">
            <div className="id-head">
              <span className="id-cross" aria-hidden="true" />
              <span>About me</span>
              <span className="id-status">● Active</span>
            </div>
            <div className="id-row"><span>Role</span><strong>Software Dev Intern, CMS</strong></div>
            <div className="id-row"><span>School</span><strong>University of Maryland</strong></div>
            <div className="id-row"><span>Major</span><strong>CS + Data Science</strong></div>
            <div className="id-row"><span>Graduating</span><strong>May 2028</strong></div>
            <div className="id-row"><span>Email</span><strong>{links.email}</strong></div>
          </div>
        </div>
      </section>

      <div className="hero-ecg" data-reveal>
        <EcgLine beats={8} speed={4} />
      </div>

      <div className="marquee" aria-label="Skill stack" data-reveal>
        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span className="marquee-item" key={`${skill}-${i}`} aria-hidden={i >= marqueeSkills.length}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="section-title" data-reveal>
          <span className="section-index">01</span>
          <h2>About</h2>
        </div>

        <div className="card spot about-card" data-reveal>
          <div className="about-text">
            <p className="lead">
              I am a student at the University of Maryland with a focus on computer science,
              data science, and practical software development. I enjoy building structured
              applications, improving front-end polish, and strengthening the fundamentals that
              support reliable engineering work.
            </p>
            <p className="lead">
              My academic work has included coursework in object oriented programming, data
              structures and algorithms, discrete structures, and databases. I am especially
              interested in opportunities where strong implementation, analytical thinking, and
              clean collaboration matter.
            </p>
            <p className="lead">
              I have experience with Java, Kotlin, Python, MATLAB, C/C++, HTML, CSS, JavaScript,
              SQL, React, Vite, Firebase, and Git. My work so far includes academic projects,
              portfolio development, and internships that demanded careful documentation,
              consistency, and attention to detail.
            </p>
            <p className="lead">
              I&apos;m looking for internships, research, and technical environments where I can
              contribute, learn quickly, and keep building a strong engineering foundation.
            </p>
          </div>

          <dl className="currently">
            {CURRENTLY.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cta card spot border-anim" data-reveal>
        <div>
          <h2>Let&apos;s build something.</h2>
          <p className="lead">Open to internships, research, and collaborative projects.</p>
        </div>
        <Link className="btn primary" to="/contact">
          Get in touch <ArrowIcon />
        </Link>
      </section>
    </>
  );
}
