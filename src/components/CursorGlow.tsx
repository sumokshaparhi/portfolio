"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const glow = document.body;
      glow.style.setProperty("--x", `${e.clientX}px`);
      glow.style.setProperty("--y", `${e.clientY}px`);
      glow.style.setProperty(
        "background",
        `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(99,102,241,0.15), transparent 60%)`
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}