"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Scope", "#scope"],
  ["Protocol", "#protocol"],
  ["Proof", "#proof"],
  ["Trust", "#trust"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div
      className="mobile-nav"
      data-open={open}
      data-animate={animate}
      ref={rootRef}
    >
      <button
        className="mobile-nav__trigger"
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onPointerDown={() => setAnimate(true)}
        onKeyDown={() => setAnimate(false)}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        className="mobile-nav__panel"
        id="mobile-navigation-panel"
        aria-label="Mobile navigation"
      >
        {links.map(([label, href], index) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
