"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-triggerable ScrollReveal:
 * Adds `.in` when an element scrolls into view, and removes `.in` when it leaves.
 * This ensures animations replay smoothly every time the user scrolls up or down.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          } else {
            // Remove 'in' when out of view so animation replays on scroll back
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight * 0.5 || rect.bottom < 0) {
              entry.target.classList.remove("in");
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
