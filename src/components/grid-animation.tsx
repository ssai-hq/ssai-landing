"use client";

import { useEffect, useRef } from "react";

interface GridAnimationProps {
  gridCell?: number;
  dotSpacing?: number;
}

export function GridAnimation({
  gridCell = 21,
  dotSpacing = 42,
}: GridAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let cols = 24;
    let rows = 14;

    // Ripple state
    const ripples: { cx: number; cy: number; t: number; speed: number }[] = [];
    let lastRipple = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      recalcGrid();
    }

    resize();
    window.addEventListener("resize", resize);

    function recalcGrid() {
      cols = Math.floor(width / dotSpacing) + 1;
      rows = Math.floor(height / dotSpacing) + 1;
    }

    const baseOffsetX = () => {
      const raw = (width - (cols - 1) * dotSpacing) / 2;
      return Math.round(raw / gridCell) * gridCell;
    };
    const baseOffsetY = () => {
      const raw = (height - (rows - 1) * dotSpacing) / 2;
      return Math.round(raw / gridCell) * gridCell;
    };

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      const ox = baseOffsetX();
      const oy = baseOffsetY();

      // Spawn ripples periodically
      if (time - lastRipple > 3200) {
        ripples.push({
          cx: ox + Math.floor(Math.random() * cols) * dotSpacing,
          cy: oy + Math.floor(Math.random() * rows) * dotSpacing,
          t: time,
          speed: 0.04 + Math.random() * 0.03,
        });
        if (ripples.length > 4) ripples.shift();
        lastRipple = time;
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = ox + col * dotSpacing;
          const y = oy + row * dotSpacing;

          if (x < -4 || x > width + 4 || y < -4 || y > height + 4) continue;

          let rippleBoost = 0;
          for (const ripple of ripples) {
            const dist = Math.hypot(x - ripple.cx, y - ripple.cy);
            const age = (time - ripple.t) * ripple.speed;
            const ring = Math.abs(dist - age);
            if (ring < 40) {
              const fade = Math.max(0, 1 - (time - ripple.t) / 4500);
              rippleBoost += (1 - ring / 40) * fade;
            }
          }

          rippleBoost = Math.min(rippleBoost, 1);
          if (rippleBoost < 0.01) continue;

          const opacity = rippleBoost * 0.55;
          const radius = 1.2 + rippleBoost * 2.0;

          const r = Math.round(30 + rippleBoost * 10);
          const g = Math.round(60 + rippleBoost * 30);
          const b = Math.round(241 * (0.3 + rippleBoost * 0.7));

          ctx!.beginPath();
          ctx!.arc(x, y, radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx!.fill();

          if (rippleBoost > 0.2) {
            ctx!.beginPath();
            ctx!.arc(x, y, radius + 3, 0, Math.PI * 2);
            ctx!.fillStyle = `rgba(37, 75, 241, ${rippleBoost * 0.12})`;
            ctx!.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [gridCell, dotSpacing]);

  return (
    <canvas
      ref={canvasRef}
      className="grid-canvas"
      aria-hidden="true"
    />
  );
}
