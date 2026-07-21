import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MagneticButton from "@/components/MagneticButton";
import { ArrowRightIcon } from "@/components/Icons";
import { img } from "@/lib/images";
import { navLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "That page doesn't exist — but the gym is still open until 11 PM.",
};

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80svh] items-center overflow-hidden py-24">
      <Image
        src={img.deadlift}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/88" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40"
      />

      <div className="container-creed relative">
        <p className="mb-4 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.32em] text-creed">
          <span aria-hidden className="h-px w-8 bg-creed" />
          Error 404
        </p>

        <h1 className="text-[clamp(4rem,18vw,13rem)] leading-[0.82] text-creed drop-shadow-[0_0_50px_rgba(225,29,42,0.4)]">
          404
        </h1>

        <h2 className="mt-4 text-[clamp(1.8rem,5vw,3.5rem)] leading-[0.95] text-white">
          This rep doesn&apos;t exist
        </h2>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
          The page you were looking for has been re-racked. The floor is still open
          though — pick a direction below and keep moving.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="/" variant="primary" className="px-6 py-3.5 sm:px-9 sm:py-4">
            Back to Home
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="/pricing" variant="outline" className="px-6 py-3.5 sm:px-9 sm:py-4">
            See Memberships
          </MagneticButton>
        </div>

        {/* Quick links */}
        <nav aria-label="Site sections" className="mt-14 border-t border-white/10 pt-8">
          <p className="mb-4 font-heading text-[11px] uppercase tracking-[0.26em] text-white/35">
            Or jump to
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-creed"
                >
                  <span aria-hidden className="h-px w-0 bg-creed transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
