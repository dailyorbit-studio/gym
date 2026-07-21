import Image from "next/image";
import Link from "next/link";

import { fullAddress, navLinks, programs, site } from "@/lib/site";
import { img } from "@/lib/images";
import {
  ArrowRightIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
} from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-coal">
      <div aria-hidden className="pointer-events-none absolute inset-0 hazard opacity-70" />

      {/* Final conversion band -------------------------------------------- */}
      <div className="relative border-b border-white/10">
        <div className="container-creed flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl">
              Ready to <span className="text-creed">forge your creed?</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/55">
              Walk in for a free trial session and a tour of the 9000+ sq ft floor. No
              card, no pressure.
            </p>
          </div>
          <Link
            href="/pricing"
            className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden bg-creed px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-creed-light"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/25 transition-transform duration-500 group-hover:translate-x-full"
            />
            <span className="relative">Join Now</span>
            <ArrowRightIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Columns ---------------------------------------------------------- */}
      <div className="container-creed relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid place-items-center rounded-lg bg-white p-2">
              <Image src={img.logo} alt="" width={1048} height={1081} className="h-10 w-auto" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl tracking-wide text-white">
                CREED <span className="text-creed">CULTURE</span>
              </span>
              <span className="mt-1 block font-heading text-[9px] uppercase tracking-[0.4em] text-white/40">
                Gym
              </span>
            </span>
          </Link>

          <p className="mt-6 text-sm leading-relaxed text-white/55">
            {site.tagline}. A 9000+ sq ft strength and conditioning facility built for
            people who take training seriously.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="flex text-creed" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={`h-4 w-4 ${i > 3 ? "opacity-35" : ""}`} />
              ))}
            </span>
            <span className="text-white/70">
              {site.rating.value} · {site.rating.count}+ ratings
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram — ${site.socials.instagram.handle}`}
              className="grid h-11 w-11 place-items-center border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-creed hover:text-creed"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.socials.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook — ${site.socials.facebook.handle}`}
              className="grid h-11 w-11 place-items-center border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-creed hover:text-creed"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Explore
          </h3>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-creed"
                >
                  <span
                    aria-hidden
                    className="h-px w-0 bg-creed transition-all duration-300 group-hover:w-4"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Programs */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Programs
          </h3>
          <ul className="mt-6 space-y-3">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link
                  href="/classes"
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-creed"
                >
                  <span
                    aria-hidden
                    className="h-px w-0 bg-creed transition-all duration-300 group-hover:w-4"
                  />
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <address className="not-italic">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Visit Us
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-white/55">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-creed" />
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed transition-colors hover:text-white"
              >
                {fullAddress}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel} className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-creed" />
                <a href={`tel:${p.tel}`} className="transition-colors hover:text-white">
                  {p.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-creed" />
              <span>{site.hours.summary}</span>
            </li>
          </ul>
        </address>
      </div>

      {/* Legal ------------------------------------------------------------ */}
      <div className="relative border-t border-white/10">
        <div className="container-creed flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-heading uppercase tracking-[0.28em]">
            Forge Your Creed · Kandivali West, Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
