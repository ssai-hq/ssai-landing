"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ExpandableTable({
  children,
  visibleRows = 4,
}: {
  children: ReactNode;
  visibleRows?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [cappedHeight, setCappedHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el || expanded) return;

    const measure = () => {
      const rows = el.querySelectorAll("[data-econ-row]");
      const header = el.querySelector("[data-econ-header]");
      let h = header ? (header as HTMLElement).offsetHeight : 0;
      for (let i = 0; i < Math.min(visibleRows, rows.length); i++) {
        h += (rows[i] as HTMLElement).offsetHeight;
      }
      setCappedHeight(h + 1);
    };

    const t = setTimeout(measure, 50);
    return () => clearTimeout(t);
  }, [visibleRows, expanded]);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{
          maxHeight: expanded
            ? undefined
            : cappedHeight
              ? `${cappedHeight}px`
              : "340px",
          transition: expanded
            ? "max-height 600ms cubic-bezier(0.16, 1, 0.3, 1)"
            : undefined,
        }}
      >
        {children}
      </div>

      {!expanded && (
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-3">
          <div
            className="h-24 w-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--surface-bg) 90%)",
            }}
          />
          <button
            onClick={() => {
              const el = contentRef.current;
              if (el) {
                el.style.maxHeight = `${el.scrollHeight}px`;
                el.style.transition =
                  "max-height 600ms cubic-bezier(0.16, 1, 0.3, 1)";
              }
              setExpanded(true);
            }}
            className="relative -mt-1 font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted transition-micro hover:text-ink"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
