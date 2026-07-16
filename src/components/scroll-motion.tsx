"use client";

import { useLayoutEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const NAV_SELECTOR = "[data-section-nav][href^='#']";

export function ScrollMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(NAV_SELECTOR),
    );
    const sections = navLinks
      .map((link) => {
        const id = link.hash.slice(1);
        const element = document.getElementById(id);
        return element ? { element, id } : null;
      })
      .filter((entry): entry is { element: HTMLElement; id: string } => entry !== null)
      .filter(
        (entry, index, entries) =>
          entries.findIndex((candidate) => candidate.id === entry.id) === index,
      );

    let revealObserver: IntersectionObserver | null = null;
    let animationFrame = 0;
    let reducedMotion = motionPreference.matches;
    const settleTimers = new Set<number>();

    const reveal = (target: HTMLElement, animate: boolean) => {
      target.dataset.revealState = animate ? "visible" : "settled";
      target.dataset.revealSeen = "true";
      revealObserver?.unobserve(target);

      if (!animate) return;
      const timer = window.setTimeout(() => {
        if (target.dataset.revealState === "visible") {
          target.dataset.revealState = "settled";
        }
        settleTimers.delete(timer);
      }, 1000);
      settleTimers.add(timer);
    };

    const configureReveals = () => {
      revealObserver?.disconnect();
      revealObserver = null;
      settleTimers.forEach((timer) => window.clearTimeout(timer));
      settleTimers.clear();
      reducedMotion =
        motionPreference.matches || !("IntersectionObserver" in window);
      root.dataset.scrollMotion = reducedMotion ? "reduced" : "ready";

      if (!reducedMotion) {
        revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) reveal(entry.target as HTMLElement, true);
            });
          },
          { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
        );
      }

      revealTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const alreadySeen = target.dataset.revealSeen === "true";
        const alreadyInView = bounds.top < window.innerHeight * 0.9;

        if (reducedMotion || alreadySeen || alreadyInView) {
          reveal(target, false);
          return;
        }

        target.dataset.revealState = "pending";
        revealObserver?.observe(target);
      });
    };

    const updateScrollState = () => {
      animationFrame = 0;
      const scrollTop = window.scrollY;
      const activationLine = scrollTop + window.innerHeight * 0.32;
      let currentSection = "";

      sections.forEach(({ element, id }) => {
        const sectionTop = element.getBoundingClientRect().top + scrollTop;
        if (sectionTop <= activationLine) currentSection = id;
      });

      navLinks.forEach((link) => {
        const current = link.hash === `#${currentSection}`;
        link.dataset.current = current ? "true" : "false";
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const queueScrollUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScrollState);
    };

    const handleMotionPreference = () => {
      configureReveals();
      queueScrollUpdate();
    };

    configureReveals();
    updateScrollState();

    motionPreference.addEventListener("change", handleMotionPreference);
    window.addEventListener("scroll", queueScrollUpdate, { passive: true });
    window.addEventListener("resize", queueScrollUpdate, { passive: true });

    return () => {
      revealObserver?.disconnect();
      motionPreference.removeEventListener("change", handleMotionPreference);
      window.removeEventListener("scroll", queueScrollUpdate);
      window.removeEventListener("resize", queueScrollUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      settleTimers.forEach((timer) => window.clearTimeout(timer));
      root.removeAttribute("data-scroll-motion");
    };
  }, []);

  return null;
}
