import { useState } from "react";
import "../styles/page.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Website message from ${name || "Someone"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\n${message}`);
    window.location.href = `mailto:avadivel@umd.edu?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Quick message</p>
      </div>

      <div className="contact-grid">
        <div className="card">
          <p className="lead">
            Want to connect? Send a message. (This opens your email app—no backend.)
          </p>

          <div className="divider" />

          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
            </label>

            <label>
              Your Email
              <input value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} type="email" placeholder="you@example.com" required />
            </label>

            <label>
              Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What would you like to talk about?" required />
            </label>

            <button className="btn primary" type="submit">Send</button>
            <p className="small">
              Or email me directly: <a href="mailto:avadivel@umd.edu">avadivel@umd.edu</a>
            </p>
          </form>
        </div>

        <aside className="card">
          <h3 style={{ marginTop: 0 }}>Links</h3>
          <p className="small">Feel free to check these out!</p>
          <div className="divider" />
          <div className="btncol">
            <a className="btn" href="https://github.com/adithyavadivel-umdcs" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/adithya-vadivel-45882b233/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a
              className="btn"
              href="/Adithya_Vadivel_Resume.docx"
              download
            >
              Résumé
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}