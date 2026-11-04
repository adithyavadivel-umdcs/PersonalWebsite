import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/effects";

/** Types and deletes each phrase in turn. `words` must be a stable array. */
export default function Typewriter({ words, typeMs = 65, deleteMs = 32, holdMs = 1700 }) {
  // Always start empty so the prerendered HTML and the first client render match.
  const [text, setText] = useState("");

  useEffect(() => {
    if (prefersReducedMotion()) {
      const t = setTimeout(() => setText(words[0]), 0);
      return () => clearTimeout(t);
    }
    let index = 0;
    let length = 0;
    let deleting = false;
    let timer;

    function tick() {
      const word = words[index];
      if (!deleting) {
        length += 1;
        setText(word.slice(0, length));
        if (length === word.length) {
          deleting = true;
          timer = setTimeout(tick, holdMs);
          return;
        }
      } else {
        length -= 1;
        setText(word.slice(0, length));
        if (length === 0) {
          deleting = false;
          index = (index + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? deleteMs : typeMs);
    }

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, typeMs, deleteMs, holdMs]);

  return (
    <span className="typewriter">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
