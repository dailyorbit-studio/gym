"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  /** Rendered before the number, e.g. a currency symbol. */
  prefix?: string;
  /** Rendered after the number, e.g. "+" or "★". */
  suffix?: string;
  label: string;
  /** Decimal places — used for the 4.3 rating. */
  decimals?: number;
  duration?: number;
  index?: number;
};

/**
 * Counts up from zero the first time it scrolls into view. Visitors who prefer
 * reduced motion get the final number immediately.
 */
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  duration = 1.8,
  index = 0,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      // Dividers come from the parent's `gap-px` hairlines, so this only needs
      // to paint its own background over them.
      className="group relative bg-coal px-4 py-5 sm:px-6 sm:py-6 lg:px-8"
    >
      {/* Red accent that lights up on hover */}
      <span
        aria-hidden
        className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-creed transition-all duration-500 group-hover:h-full"
      />
      <p className="font-display text-[clamp(2rem,8vw,3.75rem)] leading-none text-white">
        {prefix}
        <span className="tabular-nums">{formatted}</span>
        <span className="text-creed">{suffix}</span>
      </p>
      <p className="mt-2.5 font-heading text-[10px] uppercase tracking-[0.2em] text-white/45 sm:mt-3 sm:text-[11px] sm:tracking-[0.26em]">
        {label}
      </p>
    </motion.div>
  );
}
