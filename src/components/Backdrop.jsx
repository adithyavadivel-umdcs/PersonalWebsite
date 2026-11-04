import ParticleField from "./ParticleField";

/** Fixed, decorative layers behind every page. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="grid-lines" />
      <ParticleField />
      <div className="cursor-glow" />
      <div className="grain" />
    </div>
  );
}
