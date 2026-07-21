"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  /** How far the button drifts toward the cursor, in px. */
  strength?: number;
  /** Stretch to the full width of the parent. */
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-creed text-white border border-creed hover:bg-creed-light hover:border-creed-light shadow-[0_14px_38px_-14px_rgba(225,29,42,0.8)]",
  outline:
    "bg-transparent text-white border border-white/25 hover:border-creed hover:text-white",
  ghost: "bg-white text-ink border border-white hover:bg-white/90",
};

/**
 * Primary CTA. Drifts toward the pointer on hover (a "magnetic" button) and
 * sweeps a light bar across on hover. Falls back to a plain button when the
 * visitor prefers reduced motion.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  strength = 14,
  fullWidth = false,
  disabled = false,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 260, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Pointer offset from centre, normalised to [-1, 1] then scaled.
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2 * strength);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2 * strength);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  const shell =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden " +
    "px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-[0.16em] " +
    "transition-colors duration-300 " +
    (fullWidth ? "w-full " : "") +
    (disabled ? "pointer-events-none opacity-50 " : "") +
    variants[variant] +
    " " +
    className;

  const inner = (
    <>
      {/* Light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const isExternal = href?.startsWith("http") || href?.startsWith("tel:") || href?.startsWith("mailto:");

  return (
    <motion.span
      ref={ref}
      style={reduce ? undefined : { x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${fullWidth ? "block w-full" : "inline-block"} will-change-transform`}
    >
      {href ? (
        isExternal ? (
          <a
            href={href}
            aria-label={ariaLabel}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={shell}
          >
            {inner}
          </a>
        ) : (
          <Link href={href} aria-label={ariaLabel} className={shell}>
            {inner}
          </Link>
        )
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={shell}>
          {inner}
        </button>
      )}
    </motion.span>
  );
}
