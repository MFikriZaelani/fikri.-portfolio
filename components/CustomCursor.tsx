"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mx", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hoverable = target.closest("a, button, .ph-card, .stack-item, .social-item, .btn");
      if (hoverable) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor ${isActive ? "active" : ""}`}
        id="cursor"
      />
      <div
        ref={spotlightRef}
        className="grid-spotlight"
        id="spotlight"
      />
    </>
  );
}
