"use client";

import { useEffect, useRef } from "react";

const thesisParagraphs = [
  "For decades, implementation knowledge has lived in someone's head, a forgotten email thread, or a call nobody properly documented. Every project started from scratch. Every team reinvented the wheel.",
  "That era is over.",
  "Software implementation in the next decade will be won by the teams that turn every project into institutional knowledge and every engagement into a foundation for the next one.",
  "SSAI is building agentic systems to enable this.",
];

// Pre-compute word structure at module level
const paragraphWords = thesisParagraphs.map((p) => p.split(/\s+/));
let _idx = 0;
const wordEntries = paragraphWords.map((words) =>
  words.map((word) => ({ word, idx: _idx++ }))
);

export function ThesisReader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const words = c.querySelectorAll<HTMLSpanElement>("[data-wi]");
    const N = words.length;
    if (!N) return;

    function tick() {
      const r = c!.getBoundingClientRect();
      const s = -r.top;
      const tot = c!.offsetHeight - window.innerHeight;
      if (tot <= 0) return;
      const p = Math.max(0, Math.min(1, s / tot));
      const wp = p * (N + 4) - 2;
      for (let i = 0; i < N; i++) {
        const d = i - wp;
        let op: number;
        if (d < -1) op = 1;
        else if (d < 0) op = 0.5 + 0.5 * -d;
        else if (d < 1) op = 0.15 + 0.35 * (1 - d);
        else op = 0.15;
        words[i].style.opacity = String(op);
      }
    }

    tick();
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <div
      id="thesis-scroll"
      ref={containerRef}
      style={{ height: "400vh" }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="mx-auto w-full max-w-[760px] px-8 md:px-12">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
            Thesis
          </p>

          {wordEntries.map((words, pIdx) => (
            <p
              key={pIdx}
              className="thesis-scroll-line mb-16 last:mb-0"
              style={{ color: "var(--surface-ink)" }}
            >
              {words.map(({ word, idx }, wIdx) => (
                <span key={wIdx} data-wi={idx} style={{ opacity: 0.15 }}>
                  {word}
                  {wIdx < words.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
