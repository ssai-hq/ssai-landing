"use client";

import { useEffect, useRef, useState } from "react";

const thesisLines = [
  "For years, production operations lived in dashboards, runbooks, Slack archaeology, and the heads of the engineers who happened to know the system best.",
  "That era is ending.",
  "The next operational owner will not be another dashboard. It will be a cognitive DevOps engineer that can receive work, inspect evidence, act within policy, and remember what it learned.",
  "SSAI is building that employee.",
  "The interface is not the workflow. It is the record, the policy surface, the memory review, the simulation lab, and the place where rare human judgment enters.",
  "Normal Mode operates the customer's infrastructure. Meta Mode operates the agent system that operates the infrastructure.",
  "The goal is not a human clicking approve forever. The goal is an organization prepared for a time where operational work is delegated, inspected, evaluated, and continually improved.",
];

export function ThesisReader() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          const index = Number(visible.target.dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    refs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-[920px] px-5 py-20 md:py-32">
      <div className="space-y-28 md:space-y-36">
        {thesisLines.map((line, index) => (
          <p
            key={line}
            ref={(node) => {
              refs.current[index] = node;
            }}
            data-index={index}
            className={[
              "scroll-thesis-line font-title text-[clamp(34px,5vw,64px)] leading-[1.12]",
              index === active ? "is-active" : "",
            ].join(" ")}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
