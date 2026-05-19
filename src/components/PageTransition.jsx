import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

let lastPathname = null;

export default function PageTransition({ children }) {
  const location = useLocation();
  const [state, setState] = useState("enter");
  const [direction, setDirection] = useState("forward");
  const directionRef = useRef("forward");

  useEffect(() => {
    if (lastPathname !== null) {
      directionRef.current =
        location.pathname.length > lastPathname.length
          ? "forward"
          : "backward";
    }
    lastPathname = location.pathname;

    setDirection(directionRef.current);
    setState("enter");
    return () => setState("exit");
  }, [location.pathname]);

  return (
    <div
      className={`page page-${state} slide-${direction}`}
    >
      {children}
    </div>
  );
}
