"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    let ticking = false;
    const handleMove = (e: PointerEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
          document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div className="spotlight" />;
}
