"use client";

import { motion, useReducedMotion } from "motion/react";

export type WatermelonStep = {
  id: string;
  label: string;
  number: string;
};

type StepIndicatorProps = {
  activeId: string;
  onStepChange: (id: string) => void;
  steps: readonly WatermelonStep[];
};

/**
 * Adapted from Watermelon UI's Step Indicator registry component.
 * Source: https://registry.watermelon.sh/r/step-indicator.json
 */
export function StepIndicator({
  activeId,
  onStepChange,
  steps,
}: StepIndicatorProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="wm-step-indicator" aria-label="Canonical migration phases">
      {steps.map((step) => {
        const active = step.id === activeId;

        return (
          <button
            className="wm-step-indicator__step"
            type="button"
            aria-current={active ? "step" : undefined}
            key={step.id}
            onClick={() => onStepChange(step.id)}
          >
            {active ? (
              <motion.span
                className="wm-step-indicator__active"
                layoutId="watermelon-active-phase"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
                }
              />
            ) : null}
            <span className="wm-step-indicator__number">{step.number}</span>
            <span className="wm-step-indicator__label">{step.label}</span>
          </button>
        );
      })}
    </div>
  );
}
