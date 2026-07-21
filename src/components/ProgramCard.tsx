"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { ArrowRightIcon, programIcons } from "@/components/Icons";
import type { Program } from "@/lib/site";

type ProgramCardProps = {
  program: Program;
  index?: number;
  /** Show the bullet list of highlights (used on the Classes page). */
  detailed?: boolean;
  href?: string;
};

/**
 * Program tile: photo with a hover zoom, icon chip, and a lift + red glow on
 * hover. Used on both the home teaser row and the full Classes grid.
 */
export default function ProgramCard({
  program,
  index = 0,
  detailed = false,
  href = "/pricing",
}: ProgramCardProps) {
  const Icon = programIcons[program.icon];
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-char transition-[border-color,box-shadow] duration-400 hover:border-creed/60 hover:shadow-[0_28px_60px_-24px_rgba(225,29,42,0.55)]"
    >
      {/* Media --------------------------------------------------------- */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-char via-char/45 to-transparent"
        />
        {/* Red wash on hover */}
        <div
          aria-hidden
          className="absolute inset-0 bg-creed/25 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Icon chip */}
        {Icon && (
          <span className="absolute bottom-0 left-6 grid h-14 w-14 translate-y-1/2 place-items-center border border-white/15 bg-ink text-creed transition-all duration-400 group-hover:border-creed group-hover:bg-creed group-hover:text-white">
            <Icon className="h-6 w-6" />
          </span>
        )}
      </div>

      {/* Body ---------------------------------------------------------- */}
      <div className="flex flex-1 flex-col p-6 pt-12">
        <h3 className="text-2xl leading-tight text-white transition-colors duration-300 group-hover:text-creed">
          {program.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/55">
          {detailed ? program.description : program.short}
        </p>

        {detailed && (
          <ul className="mt-5 space-y-2">
            {program.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-xs text-white/50">
                <span aria-hidden className="h-1 w-3 bg-creed" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-creed group-hover:text-creed"
        >
          <span className="relative">
            Explore
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-0 bg-creed transition-all duration-400 group-hover:w-full"
            />
          </span>
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
