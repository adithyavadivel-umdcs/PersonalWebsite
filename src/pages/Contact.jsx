import { useState } from "react";
import "../styles/page.css";
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "../components/Icons";
import { links } from "../data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website message from ${name || "Someone"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\n${message}`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section page-top">
      <div className="page-head" data-reveal>
        <span className="section-index">// contact</span>
        <h1>
          Let&apos;s <span className="gradient">connect</span>.
        </h1>
        <p className="lead">Want to connect? Send a message.</p>
      </div>

      <div className="contact-grid">
        <div className="card spot border-anim" data-reveal>
          <form className="form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
            </label>

            <label className="field">
              <span>Your Email</span>
              <input
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to talk about?"
                required
              />
            </label>

            <button className="btn primary" type="submit">
              Send message <ArrowIcon />
            </button>
            <p className="small">
              Or email me directly: <a className="link" href={`mailto:${links.email}`}>{links.email}</a>
            </p>
          </form>
        </div>

        <aside className="contact-links">
          <p className="small" data-reveal>Feel free to check these out!</p>
          {[
            { href: links.github, label: "GitHub", sub: "adithyavadivel-umdcs", icon: GithubIcon, external: true },
            { href: links.linkedin, label: "LinkedIn", sub: "Adithya Vadivel", icon: LinkedinIcon, external: true },
            { href: `mailto:${links.email}`, label: "Email", sub: links.email, icon: MailIcon },
            { href: links.resumePdf, label: "Resume PDF", sub: "Download", icon: DownloadIcon, download: true },
          ].map(({ href, label, sub, icon, external, download }, i) => (
            <a
              key={label}
              className="link-card card spot"
              href={href}
              data-reveal
              style={{ "--d": i + 1 }}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              {...(download ? { download: true } : {})}
            >
              <span className="icon-badge">{icon()}</span>
              <span className="link-text">
                <strong>{label}</strong>
                <span>{sub}</span>
              </span>
              <ArrowIcon className="link-arrow" />
            </a>
          ))}
        </aside>
      </div>
    </section>
  );
}
