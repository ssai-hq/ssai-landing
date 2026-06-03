"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export function ExpandableTable({
  children,
  visibleRows = 4,
}: {
  children: ReactNode;
  visibleRows?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [overlayGone, setOverlayGone] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [cappedPx, setCappedPx] = useState(340);
  const [fullPx, setFullPx] = useState(340);

  const measure = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;

    // Full content height
    const full = inner.scrollHeight;
    setFullPx(full);

    // Capped height: header + first N rows
    const rows = inner.querySelectorAll("[data-econ-row]");
    const header = inner.querySelector("[data-econ-header]");
    let h = header ? (header as HTMLElement).offsetHeight : 0;
    for (let i = 0; i < Math.min(visibleRows, rows.length); i++) {
      h += (rows[i] as HTMLElement).offsetHeight;
    }
    setCappedPx(h + 1);
  }, [visibleRows]);

  useEffect(() => {
    const t = setTimeout(measure, 80);
    return () => clearTimeout(t);
  }, [measure]);

  const handleExpand = () => {
    setExpanded(true);
    setTimeout(() => setOverlayGone(true), 600);
  };

  // The wrapper animates between two known pixel values — this transitions smoothly
  const targetHeight = expanded ? fullPx : cappedPx;

  return (
    <div>
      <div
        ref={wrapRef}
        style={{
          height: `${targetHeight}px`,
          overflow: "hidden",
          transition: expanded
            ? "height 700ms cubic-bezier(0.23, 1, 0.32, 1)"
            : undefined,
        }}
      >
        <div ref={innerRef}>
          {children}
        </div>
      </div>

      {!overlayGone && (
        <div
          style={{
            opacity: expanded ? 0 : 1,
            transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: expanded ? "none" : undefined,
          }}
        >
          <div
            className="h-24 w-full -mt-24 relative z-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--surface-bg) 90%)",
            }}
          />
          <div className="flex justify-center pt-4">
            <button
              onClick={handleExpand}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted transition-micro hover:text-ink"
            >
              Show more
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
