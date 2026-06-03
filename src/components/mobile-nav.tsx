"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Flow", href: "#flow" },
  { label: "Not", href: "#not" },
  { label: "Thesis", href: "#thesis" },
  { label: "Contact", href: "mailto:hello@ssai.dev" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="relative z-50 flex h-8 w-8 items-center justify-center"
      >
        <div className="flex w-[18px] flex-col gap-[5px]">
          <span
            className="block h-[1.5px] w-full bg-current transition-all duration-200"
            style={{
              transform: open ? "translateY(3.25px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[1.5px] w-full bg-current transition-all duration-200"
            style={{
              transform: open ? "translateY(-3.25px) rotate(-45deg)" : "none",
            }}
          />
        </div>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className="fixed top-0 right-0 z-40 flex h-dvh w-[240px] flex-col transition-transform duration-200"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          background: "var(--surface-bg)",
          borderLeft: "1px solid var(--surface-rule)",
        }}
      >
        <nav className="flex flex-col gap-1 px-5 pt-20">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-[15px] font-medium text-text-mid transition-colors hover:bg-[var(--surface-hover)] hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
