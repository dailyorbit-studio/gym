"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  /** Which way the content travels in from. */
  direction?: Direction;
  /** Seconds to hold before starting. */
  delay?: number;
  duration?: number;
  /** Travel distance in px. */
  distance?: number;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: number;
  /** Replay every time the element scrolls into view. */
  repeat?: boolean;
  as?: ElementType;
};

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered fade/slide wrapper — the single place reveal motion is
 * defined, so every section on the site eases identically.
 *
 * With `stagger`, direct children are revealed one after another; the children
 * must be plain elements (they inherit the item variant automatically).
 */
export default function SectionReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 34,
  stagger,
  repeat = false,
  as = "div",
}: SectionRevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const off = offsets[direction];
  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, x: off.x * distance, y: off.y * distance };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 };

  const container: Variants = {
    hidden: stagger ? {} : hidden,
    show: stagger
      ? { transition: { staggerChildren: stagger, delayChildren: delay } }
      : {
          ...shown,
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
  };

  const item: Variants = {
    hidden,
    show: { ...shown, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: !repeat, amount: 0.18, margin: "0px 0px -60px 0px" }}
      variants={container}
    >
      {stagger
        ? // Each direct child becomes its own motion item so the group cascades.
          Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={item}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={item}>{children}</motion.div>
        : children}
    </MotionTag>
  );
}

/** Shared variants for callers that want to drive their own stagger groups. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const revealGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
