"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { StarIcon } from "@/components/Icons";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 6500;

export default function TestimonialCarousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback((next: number, direction: number) => {
    setState([(next + testimonials.length) % testimonials.length, direction]);
  }, []);

  // Auto-advance, paused on hover/focus so readers aren't rushed.
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, paused, reduce, go]);

  const item = testimonials[index];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 48 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -48 }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Oversized quote glyph */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 left-0 select-none font-display text-[5rem] leading-none text-creed/15 sm:-top-8 sm:text-[9rem] lg:text-[12rem]"
      >
        “
      </span>

      {/* Reserve height so the card doesn't jump between slides of different
          lengths — taller on narrow screens where the quote wraps more. */}
      <div className="relative min-h-[24rem] sm:min-h-[19rem] lg:min-h-[16rem]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-0 sm:pl-8 lg:pl-10"
            aria-live="polite"
          >
            <div className="mb-5 flex gap-1 text-creed" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${i < item.rating ? "" : "opacity-25"}`}
                  aria-hidden
                />
              ))}
            </div>

            <p className="text-lg font-light leading-relaxed text-white/85 sm:text-xl lg:text-2xl">
              {item.quote}
            </p>

            <footer className="mt-7 flex items-center gap-4">
              <span
                aria-hidden
                className="grid h-12 w-12 shrink-0 place-items-center border border-creed/50 bg-creed/10 font-display text-lg text-creed"
              >
                {item.name.charAt(0)}
              </span>
              <span>
                <cite className="block font-heading text-sm font-semibold uppercase not-italic tracking-[0.16em] text-white">
                  {item.name}
                </cite>
                <span className="mt-0.5 block text-xs text-white/40">{item.role}</span>
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Controls ------------------------------------------------------- */}
      <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
        <div className="flex gap-2" role="tablist" aria-label="Choose a review">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1} of ${testimonials.length}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`h-1.5 transition-all duration-400 ${
                i === index ? "w-10 bg-creed" : "w-4 bg-white/20 hover:bg-white/45"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            aria-label="Previous review"
            className="grid h-11 w-11 place-items-center border border-white/15 text-white/70 transition-colors hover:border-creed hover:text-creed"
          >
            <span aria-hidden className="text-lg leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            aria-label="Next review"
            className="grid h-11 w-11 place-items-center border border-white/15 text-white/70 transition-colors hover:border-creed hover:text-creed"
          >
            <span aria-hidden className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
