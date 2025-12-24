import "../styles/page.css";

export default function NotFound() {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Page not found</h2>
      <p className="lead">That link doesn’t exist. Use the navigation to go back.</p>
    </div>
  );
}