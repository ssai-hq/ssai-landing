"use client";

/**
 * Locally owned, interaction-scoped adaptations of the MIT-licensed
 * lucide-animated registry components reviewed on 2026-07-16.
 *
 * Registry sources:
 * - https://lucide-animated.com/r/shield-check.json
 * - https://lucide-animated.com/r/fingerprint.json
 * - https://lucide-animated.com/r/lock-keyhole.json
 * - https://lucide-animated.com/r/badge-percent.json
 * - https://lucide-animated.com/r/scan-text.json
 * - https://lucide-animated.com/r/refresh-ccw.json
 * - https://lucide-animated.com/r/waypoints.json
 * - https://lucide-animated.com/r/sparkles.json
 *
 * The registry uses div wrappers. These copies use spans so they remain valid
 * inside accordion buttons. Motion and SVG geometry otherwise follow the
 * reviewed upstream components.
 */

import type { Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { useCallback, useEffect } from "react";

export type FaqTopicIconComponent = (
  props: HTMLAttributes<HTMLSpanElement> & { animated?: boolean; size?: number },
) => ReactNode;

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  animated?: boolean;
  size?: number;
};

type AnimationControls = ReturnType<typeof useAnimation>;

function useHoverAnimation(
  controls: AnimationControls,
  animated?: boolean,
  onMouseEnter?: (event: MouseEvent<HTMLSpanElement>) => void,
  onMouseLeave?: (event: MouseEvent<HTMLSpanElement>) => void,
) {
  const shouldReduceMotion = useReducedMotion();
  const isExternallyControlled = typeof animated === "boolean";

  useEffect(() => {
    if (!isExternallyControlled || shouldReduceMotion) return;
    void controls.start(animated ? "animate" : "normal");
  }, [animated, controls, isExternallyControlled, shouldReduceMotion]);

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      onMouseEnter?.(event);
      if (!isExternallyControlled && !shouldReduceMotion) void controls.start("animate");
    },
    [controls, isExternallyControlled, onMouseEnter, shouldReduceMotion],
  );

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      onMouseLeave?.(event);
      if (!isExternallyControlled && !shouldReduceMotion) void controls.start("normal");
    },
    [controls, isExternallyControlled, onMouseLeave, shouldReduceMotion],
  );

  return { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave };
}

function IconFrame({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { children: ReactNode }) {
  return (
    <span
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </span>
  );
}

const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
};

const SHIELD_CHECK_VARIANTS: Variants = {
  normal: { opacity: 1, pathLength: 1, scale: 1 },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.72, 1],
    transition: { duration: 0.36, ease: [0.23, 1, 0.32, 1] },
  },
};

export function ShieldCheckAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <motion.path
          animate={controls}
          d="m9 12 2 2 4-4"
          initial="normal"
          variants={SHIELD_CHECK_VARIANTS}
        />
      </svg>
    </IconFrame>
  );
}

const FINGERPRINT_VARIANTS: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    opacity: [0, 1],
    pathLength: [0.12, 1],
    transition: { duration: 0.42, ease: [0.23, 1, 0.32, 1] },
  },
};

const fingerprintPaths = [
  "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
  "M14 13.12c0 2.38 0 6.38-1 8.88",
  "M17.29 21.02c.12-.6.43-2.3.5-3.02",
  "M2 12a10 10 0 0 1 18-6",
  "M2 16h.01",
  "M21.8 16c.2-2 .131-5.354 0-6",
  "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
  "M8.65 22c.21-.66.45-1.32.57-2",
  "M9 6.8a6 6 0 0 1 9 5.2v2",
] as const;

export function FingerprintAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        {fingerprintPaths.map((path) => (
          <motion.path
            animate={controls}
            d={path}
            key={path}
            initial="normal"
            variants={FINGERPRINT_VARIANTS}
          />
        ))}
      </svg>
    </IconFrame>
  );
}

export function LockKeyholeAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <motion.svg
        {...svgProps}
        animate={controls}
        height={size}
        initial="normal"
        transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
        variants={{
          normal: { rotate: 0, scale: 1 },
          animate: { rotate: [-3, 1, 0], scale: [0.96, 1.04, 1] },
        }}
        width={size}
      >
        <circle cx="12" cy="16" r="1" />
        <rect height="12" rx="2" width="18" x="3" y="10" />
        <motion.path
          animate={controls}
          d="M7 10V7a5 5 0 0 1 10 0v3"
          initial="normal"
          variants={{ normal: { pathLength: 1 }, animate: { pathLength: [0.72, 1] } }}
        />
      </motion.svg>
    </IconFrame>
  );
}

const BADGE_VARIANTS: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, 18, 0],
    transition: { duration: 0.38, ease: [0.23, 1, 0.32, 1] },
  },
};

export function BadgePercentAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        <motion.path
          animate={controls}
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          initial="normal"
          variants={BADGE_VARIANTS}
        />
        <path d="m15 9-6 6" />
        <path d="M9 9h.01" />
        <path d="M15 15h.01" />
      </svg>
    </IconFrame>
  );
}

const SCAN_LINE_VARIANTS: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: (index: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: index * 0.045,
      duration: 0.28,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

export function ScanTextAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        {["M7 8h8", "M7 12h10", "M7 16h6"].map((path, index) => (
          <motion.path
            animate={controls}
            custom={index}
            d={path}
            initial="normal"
            key={path}
            variants={SCAN_LINE_VARIANTS}
          />
        ))}
      </svg>
    </IconFrame>
  );
}

export function RefreshCcwAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        <motion.g
          animate={controls}
          initial="normal"
          transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
          variants={{ normal: { rotate: 0 }, animate: { rotate: -50 } }}
        >
          <path d="M3 2v6h6" />
          <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
          <path d="M21 22v-6h-6" />
          <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
        </motion.g>
      </svg>
    </IconFrame>
  );
}

const WAYPOINT_VARIANTS: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: (index: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: index * 0.045,
      duration: 0.28,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

export function WaypointsAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        <motion.circle animate={controls} custom={0} cx="12" cy="4.5" r="2.5" initial="normal" variants={WAYPOINT_VARIANTS} />
        <motion.path animate={controls} custom={1} d="m10.2 6.3-3.9 3.9" initial="normal" variants={WAYPOINT_VARIANTS} />
        <motion.circle animate={controls} custom={0} cx="4.5" cy="12" r="2.5" initial="normal" variants={WAYPOINT_VARIANTS} />
        <motion.path animate={controls} custom={2} d="M7 12h10" initial="normal" variants={WAYPOINT_VARIANTS} />
        <motion.circle animate={controls} custom={0} cx="19.5" cy="12" r="2.5" initial="normal" variants={WAYPOINT_VARIANTS} />
        <motion.path animate={controls} custom={3} d="m13.8 17.7 3.9-3.9" initial="normal" variants={WAYPOINT_VARIANTS} />
        <motion.circle animate={controls} custom={0} cx="12" cy="19.5" r="2.5" initial="normal" variants={WAYPOINT_VARIANTS} />
      </svg>
    </IconFrame>
  );
}

const SPARKLE_VARIANTS: Variants = {
  normal: { fill: "none", y: 0 },
  animate: {
    fill: ["none", "currentColor", "none"],
    y: [0, -1, 0],
    transition: { duration: 0.44, ease: [0.23, 1, 0.32, 1] },
  },
};

const STAR_VARIANTS: Variants = {
  normal: { opacity: 1, scale: 1 },
  animate: (index: number) => ({
    opacity: [1, 0.28, 1],
    scale: [1, 0.68, 1],
    transition: {
      delay: index * 0.045,
      duration: 0.34,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

export function SparklesAnimated({
  animated,
  className,
  onMouseEnter,
  onMouseLeave,
  size = 20,
  ...props
}: IconProps) {
  const controls = useAnimation();
  const hover = useHoverAnimation(controls, animated, onMouseEnter, onMouseLeave);

  return (
    <IconFrame className={className} {...hover} {...props}>
      <svg {...svgProps} height={size} width={size}>
        <motion.path
          animate={controls}
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
          initial="normal"
          variants={SPARKLE_VARIANTS}
        />
        {["M20 3v4", "M22 5h-4", "M4 17v2", "M5 18H3"].map((path, index) => (
          <motion.path
            animate={controls}
            custom={index}
            d={path}
            initial="normal"
            key={path}
            style={{ originX: "50%", originY: "50%" }}
            variants={STAR_VARIANTS}
          />
        ))}
      </svg>
    </IconFrame>
  );
}
