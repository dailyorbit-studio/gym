"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Trailing words rendered in red. */
  accent?: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  /** Breadcrumb label for the current page. */
  crumb: string;
};

/**
 * Shared inner-page banner: parallax photograph, breadcrumb, oversized title.
 * Keeps every non-home page opening on the same beat.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  imageAlt,
  crumb,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[42svh] items-end overflow-hidden pb-12 pt-20 sm:min-h-[52svh] sm:pb-16 sm:pt-24 lg:min-h-[58svh] lg:pb-20"
    >
      <motion.div
        style={reduce ? { scale: 1.1 } : { y, scale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 to-transparent"
      />

      <div className="container-brand relative">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-2 font-heading text-[11px] uppercase tracking-[0.24em] text-white/40"
        >
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span aria-hidden className="text-brand">
            /
          </span>
          <span className="text-white/70">{crumb}</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.5 }}
          className="mb-4 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.32em] text-brand"
        >
          <span aria-hidden className="h-px w-8 bg-brand" />
          {eyebrow}
        </motion.p>

        <h1 className="max-w-4xl text-[clamp(2.6rem,8vw,6rem)] leading-[0.9]">
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={reduce ? undefined : { y: "115%" }}
              animate={reduce ? undefined : { y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {title}
              {accent && <span className="text-brand"> {accent}</span>}
            </motion.span>
          </span>
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
