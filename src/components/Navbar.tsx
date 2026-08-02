"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo from "@/components/Logo";
import { navLinks, site } from "@/lib/site";
import {
  ClockIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  PhoneIcon,
  StarIcon,
} from "@/components/Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  // Compact the bar once the visitor leaves the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes. Adjusting state during render
  // (rather than in an effect) avoids a frame where the old page is gone but
  // the menu is still open.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Freeze the page behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Utility strip — scrolls away, keeps the phone number above the fold */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative z-40 hidden border-b border-white/10 bg-char/80 md:block">
        <div className="container-brand flex h-9 items-center justify-between text-[11px] tracking-wide text-white/55">
          <p className="flex items-center gap-2">
            <StarIcon className="h-3 w-3 text-brand" />
            <span className="font-semibold text-white/80">{site.rating.value}★</span>
            <span>· {site.rating.count}+ ratings on Google</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5 text-brand" />
              {site.hours.summary}
            </span>
            <a
              href={`tel:${site.phones[0].tel}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-brand" />
              {site.phones[0].label}
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Sticky navbar                                                     */}
      {/* ---------------------------------------------------------------- */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-ink/95 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.9)] backdrop-blur-md"
            : "border-white/5 bg-ink"
        }`}
      >
        {/* Hairline red pulse along the bottom edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden"
        >
          <span className="block h-full w-1/3 animate-streak bg-gradient-to-r from-transparent via-brand to-transparent" />
        </span>

        <nav
          aria-label="Main"
          className={`container-brand flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Brand ------------------------------------------------------- */}
          <Link
            href="/"
            className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label={`${site.name} — home`}
          >
            <Logo size={scrolled ? 34 : 40} />
          </Link>

          {/* Desktop links ---------------------------------------------- */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block px-4 py-2 font-heading text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                      active ? "text-brand" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand"
                      />
                    )}
                    {/* Underline sweep on hover for inactive links */}
                    {!active && (
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-white/40 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-x-100"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA ------------------------------------------------- */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/pricing"
              className="group relative overflow-hidden bg-brand px-6 py-3 font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-brand-light"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/25 transition-transform duration-500 group-hover:translate-x-full"
              />
              <span className="relative">Join Now</span>
            </Link>
          </div>

          {/* Mobile toggle ----------------------------------------------- */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center border border-white/15 text-white transition-colors hover:border-brand hover:text-brand lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Mobile drawer                                                     */}
      {/* ---------------------------------------------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-24 sm:pt-28 lg:hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 hazard opacity-60" />

            <nav aria-label="Mobile" className="container-brand relative flex-1 overflow-y-auto">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={link.href}
                        className={`flex items-baseline gap-4 py-4 font-display text-3xl uppercase transition-colors sm:py-5 sm:text-4xl ${
                          active ? "text-brand" : "text-white hover:text-brand"
                        }`}
                      >
                        <span className="font-heading text-xs tracking-[0.3em] text-white/30">
                          0{i + 1}
                        </span>
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.45 }}
                className="mt-8 pb-12"
              >
                <Link
                  href="/pricing"
                  className="block bg-brand py-4 text-center font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Join Now
                </Link>

                <div className="mt-8 space-y-3 text-sm text-white/60">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <PhoneIcon className="h-4 w-4 text-brand" />
                      {p.label}
                    </a>
                  ))}
                  <p className="flex items-center gap-3">
                    <ClockIcon className="h-4 w-4 text-brand" />
                    {site.hours.summary}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={site.socials.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid h-11 w-11 place-items-center border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-brand"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={site.socials.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid h-11 w-11 place-items-center border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-brand"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
