import { Link } from "react-router-dom";
import "../styles/page.css";
import { ArrowIcon } from "../components/Icons";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="glitch" data-text="404">404</h1>
      <p className="lead">That link doesn’t exist. Use the navigation to go back.</p>
      <Link className="btn primary" to="/">
        Back home <ArrowIcon />
      </Link>
    </section>
  );
}
