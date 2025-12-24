import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

let lastPathname = null;

export default function PageTransition({ children }) {
  const location = useLocation();
  const [state, setState] = useState("enter");
  const directionRef = useRef("forward");

  useEffect(() => {
    if (lastPathname !== null) {
      directionRef.current =
        location.pathname.length > lastPathname.length
          ? "forward"
          : "backward";
    }
    lastPathname = location.pathname;

    setState("enter");
    return () => setState("exit");
  }, [location.pathname]);

  return (
    <div
      className={`page page-${state} slide-${directionRef.current}`}
    >
      {children}
    </div>
  );
}