const BEAT_WIDTH = 150;

/** One P-QRS-T heartbeat complex per BEAT_WIDTH units, on a baseline at y=30. */
function buildPath(beats) {
  let d = "M0 30";
  for (let i = 0; i < beats; i++) {
    const x = i * BEAT_WIDTH;
    d +=
      ` L${x + 40} 30 Q${x + 45} 23 ${x + 50} 30` + // P wave
      ` L${x + 58} 30 L${x + 62} 36 L${x + 68} 3 L${x + 74} 56 L${x + 79} 30` + // QRS
      ` L${x + 92} 30 Q${x + 101} 16 ${x + 110} 30` + // T wave
      ` L${x + BEAT_WIDTH} 30`;
  }
  return d;
}

/** Heart-monitor trace with a glowing pulse travelling along it. */
export default function EcgLine({ beats = 4, speed = 3, className = "" }) {
  const d = buildPath(beats);
  return (
    <svg
      className={`ecg ${className}`}
      viewBox={`0 0 ${beats * BEAT_WIDTH} 60`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ "--ecg-speed": `${speed}s` }}
    >
      <path className="ecg-base" d={d} pathLength="1000" vectorEffect="non-scaling-stroke" />
      <path className="ecg-pulse" d={d} pathLength="1000" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
