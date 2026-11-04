/**
 * Route content wrapper. Routes are keyed by pathname in App, so this
 * remounts on every navigation and replays the CSS entrance animation.
 */
export default function PageTransition({ children }) {
  return <div className="page">{children}</div>;
}
