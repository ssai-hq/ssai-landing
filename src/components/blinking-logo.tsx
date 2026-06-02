"use client";

import { useEffect, useState } from "react";

const GIF_DURATION = 1260;
const PAUSE_DURATION = 1000;

export function BlinkingLogo({ className }: { className?: string }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaying(true);
      setTimeout(() => setPlaying(false), GIF_DURATION);
    }, GIF_DURATION + PAUSE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <img
        src={playing ? `/blinking-double.gif?t=${Date.now()}` : "/blinking-static.png"}
        alt=""
        className="h-[1.1em] w-auto"
      />
      <span className="font-title text-[length:inherit] lowercase leading-none tracking-normal text-ink">
        ssai
      </span>
    </span>
  );
}
