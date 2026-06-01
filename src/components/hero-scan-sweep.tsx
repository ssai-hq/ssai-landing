"use client";

import { useEffect, useRef } from "react";

const CYCLE_MS = 9000;

// Possible sweep directions: each defines start & end background-position pairs
// for the two gradients (horizontal beam, vertical beam).
type SweepVector = {
  // horizontal gradient: angle, startPos, endPos
  hAngle: number;
  hStart: string;
  hEnd: string;
  // vertical gradient: angle, startPos, endPos
  vAngle: number;
  vStart: string;
  vEnd: string;
};

function randomSweep(): SweepVector {
  // Pick a random direction for the horizontal beam
  const hDir = Math.random();
  // Pick a random direction for the vertical beam
  const vDir = Math.random();

  // Randomize entry/exit edges and offsets
  const hOffset = Math.round(Math.random() * 30 - 15); // -15% to +15%
  const vOffset = Math.round(Math.random() * 30 - 15);

  let hAngle: number, hStart: string, hEnd: string;
  let vAngle: number, vStart: string, vEnd: string;

  if (hDir < 0.5) {
    // Left to right
    hAngle = 90;
    hStart = `${-70 + hOffset}% 0`;
    hEnd = `${170 + hOffset}% 0`;
  } else {
    // Right to left
    hAngle = 270;
    hStart = `${170 + hOffset}% 0`;
    hEnd = `${-70 + hOffset}% 0`;
  }

  if (vDir < 0.5) {
    // Top to bottom
    vAngle = 180;
    vStart = `0 ${-55 + vOffset}%`;
    vEnd = `0 ${155 + vOffset}%`;
  } else {
    // Bottom to top
    vAngle = 0;
    vStart = `0 ${155 + vOffset}%`;
    vEnd = `0 ${-55 + vOffset}%`;
  }

  return { hAngle, hStart, hEnd, vAngle, vStart, vEnd };
}

export function HeroScanSweep() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    function runCycle() {
      if (cancelled || !el) return;

      const sweep = randomSweep();

      // Set the gradient with randomized angles
      el.style.background = [
        `linear-gradient(${sweep.hAngle}deg, transparent 0%, rgba(37, 75, 241, 0.12) 48%, transparent 72%)`,
        `linear-gradient(${sweep.vAngle}deg, transparent 0%, rgba(37, 75, 241, 0.08) 46%, transparent 74%)`,
      ].join(", ");
      el.style.backgroundSize = "38% 100%, 100% 30%";
      el.style.backgroundRepeat = "no-repeat";

      // Animate with Web Animations API — same timing structure as original keyframes
      const animation = el.animate(
        [
          {
            offset: 0,
            opacity: 0,
            backgroundPosition: `${sweep.hStart}, ${sweep.vStart}`,
          },
          {
            offset: 0.18,
            opacity: 0,
            backgroundPosition: `${sweep.hStart}, ${sweep.vStart}`,
          },
          {
            offset: 0.3,
            opacity: 1,
          },
          {
            offset: 0.74,
            opacity: 0.75,
            backgroundPosition: `${sweep.hEnd}, ${sweep.vEnd}`,
          },
          {
            offset: 1,
            opacity: 0,
            backgroundPosition: `${sweep.hEnd}, ${sweep.vEnd}`,
          },
        ],
        {
          duration: CYCLE_MS,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)", // expo-out equivalent
          fill: "forwards",
        }
      );

      animation.onfinish = () => {
        if (!cancelled) runCycle();
      };
    }

    runCycle();

    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={ref} className="hero-scan-sweep" aria-hidden="true" />;
}
