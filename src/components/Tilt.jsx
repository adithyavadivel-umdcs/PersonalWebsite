import { useRef } from "react";

/** Wraps content in a surface that tilts toward the mouse in 3D. */
export default function Tilt({ as = "div", max = 6, className = "", children, ...rest }) {
  const Tag = as;
  const ref = useRef(null);

  function onPointerMove(e) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
  }

  function onPointerLeave() {
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  }

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
