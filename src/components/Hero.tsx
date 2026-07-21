"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import MagneticButton from "@/components/MagneticButton";
import { ArrowRightIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

const TRIAL_MSG = encodeURIComponent(
  "Hi Creed Culture Gym! I'd like to book a free trial session.",
);

/** Mask-reveal transition used for each headline line. */
const line = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: 0,
    transition: { delay: 0.15 + i * 0.13, duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll-linked parallax: photo drifts slower than the copy.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[86svh] items-center overflow-hidden lg:min-h-[92svh]"
    >
      {/* Backdrop ------------------------------------------------------- */}
      <motion.div
        style={reduce ? undefined : { y: imageY }}
        className="absolute inset-0 -z-10 scale-110"
      >
        <Image
          src={img.floorWide}
          alt="The main training floor at Creed Culture Gym, Kandivali West"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Legibility scrims */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/70"
      />

      {/* Sweeping red light streaks */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute -top-1/4 left-0 h-[150%] w-24 animate-streak bg-gradient-to-b from-transparent via-creed/25 to-transparent blur-xl" />
          <span
            className="absolute -top-1/4 left-0 h-[150%] w-10 animate-streak bg-gradient-to-b from-transparent via-creed/40 to-transparent blur-md"
            style={{ animationDelay: "2.6s" }}
          />
        </div>
      )}

      {/* Content -------------------------------------------------------- */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="container-creed relative py-20 sm:py-24 lg:py-32"
      >
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex max-w-full items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm sm:mb-7 sm:gap-3 sm:px-4"
        >
          <span className="flex shrink-0 text-creed" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${i > 3 ? "opacity-35" : ""}`}
              />
            ))}
          </span>
          <span className="font-heading text-[10px] uppercase tracking-[0.1em] text-white/80 sm:text-[11px] sm:tracking-[0.22em]">
            {site.rating.value} · {site.rating.count}+{" "}
            {/* "Google" is dropped on the narrowest phones to keep one line. */}
            <span className="hidden min-[400px]:inline">Google </span>ratings
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="max-w-4xl text-[clamp(3.2rem,11vw,9rem)] leading-[0.86]">
          <span className="block overflow-hidden pb-1">
            <motion.span
              variants={line}
              custom={0}
              initial={reduce ? undefined : "hidden"}
              animate={reduce ? undefined : "show"}
              className="block"
            >
              Forge Your
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              variants={line}
              custom={1}
              initial={reduce ? undefined : "hidden"}
              animate={reduce ? undefined : "show"}
              className="block text-creed drop-shadow-[0_0_38px_rgba(225,29,42,0.45)]"
            >
              Creed
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          <strong className="font-semibold text-white">9000+ sq ft</strong> of premium
          strength, CrossFit and cardio equipment in the heart of{" "}
          <strong className="font-semibold text-white">Kandivali West</strong>. Red steel,
          black floors, and a room full of people who show up. Open daily until 11 PM.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="/pricing"
            variant="primary"
            className="px-6 py-3.5 sm:px-9 sm:py-4"
          >
            Start Your Journey
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            href={`${site.whatsapp.href}?text=${TRIAL_MSG}`}
            variant="outline"
            className="px-6 py-3.5 sm:px-9 sm:py-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book a Free Trial
          </MagneticButton>
        </motion.div>

        {/* Micro trust row */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5 font-heading text-[10px] uppercase tracking-[0.16em] text-white/45 sm:mt-12 sm:gap-x-8 sm:gap-y-3 sm:text-[11px] sm:tracking-[0.24em]"
        >
          {["Strength & CrossFit", "Zumba & Yoga", "Certified Coaches", "Open till 11 PM"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="h-1 w-1 bg-creed" />
                {item}
              </li>
            ),
          )}
        </motion.ul>
      </motion.div>

      {/* Scroll indicator ----------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <Link
          href="#why"
          aria-label="Scroll to content"
          className="group flex flex-col items-center gap-3"
        >
          <span className="font-heading text-[10px] uppercase tracking-[0.34em] text-white/40 transition-colors group-hover:text-white/70">
            Scroll
          </span>
          <span className="relative grid h-10 w-6 place-items-start justify-center rounded-full border border-white/25 pt-2 transition-colors group-hover:border-creed">
            <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-creed" />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
