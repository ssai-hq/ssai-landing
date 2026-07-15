"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  ["scope", "Scope"],
  ["protocol", "Protocol"],
  ["proof", "Proof"],
  ["trust", "Trust"],
] as const;

/** Adapted from Watermelon UI's Continuous Tabs interaction pattern. */
export function WatermelonSiteNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.2, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="watermelon-site-nav" aria-label="Primary navigation">
      {links.map(([id, label]) => {
        const active = id === activeId;

        return (
          <a href={`#${id}`} key={id} onClick={() => setActiveId(id)}>
            {active ? (
              <motion.span
                className="watermelon-site-nav__active"
                layoutId="watermelon-site-nav-active"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                }
              />
            ) : null}
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
