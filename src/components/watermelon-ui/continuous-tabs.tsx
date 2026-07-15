"use client";

import { motion, useReducedMotion } from "motion/react";

export type ContinuousTab = {
  id: string;
  label: string;
  meta?: string;
};

type ContinuousTabsProps = {
  activeId: string;
  ariaLabel: string;
  items: readonly ContinuousTab[];
  onChange: (id: string) => void;
};

/**
 * Adapted from Watermelon UI's Continuous Tabs registry component.
 * Source: https://registry.watermelon.sh/r/continuous-tabs.json
 */
export function ContinuousTabs({
  activeId,
  ariaLabel,
  items,
  onChange,
}: ContinuousTabsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="wm-tabs" role="tablist" aria-label={ariaLabel}>
      {items.map((item) => {
        const active = item.id === activeId;

        return (
          <button
            className="wm-tabs__tab"
            type="button"
            role="tab"
            aria-selected={active}
            key={item.id}
            onClick={() => onChange(item.id)}
          >
            {active ? (
              <motion.span
                className="wm-tabs__active"
                layoutId="watermelon-protocol-active-tab"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                }
              />
            ) : null}
            <span className="wm-tabs__number">{item.meta}</span>
            <span className="wm-tabs__label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
