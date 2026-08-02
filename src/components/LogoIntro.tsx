"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const SEEN_KEY = "brand-intro-seen";

/** The flag never changes mid-render, so there is nothing to subscribe to. */
const noSubscribe = () => () => {};
const readSeen = () => sessionStorage.getItem(SEEN_KEY) !== null;
/** On the server, assume it has been seen so the curtain never lands in the HTML. */
const serverSeen = () => true;

/**
 * First-load brand curtain: the shield lands, a red bar wipes through the
 * wordmark, then the panel splits away to reveal the page.
 *
 * Shown once per browser session and skipped entirely for visitors who
 * prefer reduced motion.
 */
export default function LogoIntro() {
  const reduce = useReducedMotion();
  // Reading sessionStorage through useSyncExternalStore keeps hydration honest:
  // the server snapshot says "seen", then the client re-renders with the truth.
  const seen = useSyncExternalStore(noSubscribe, readSeen, serverSeen);
  const [finished, setFinished] = useState(false);

  const show = !reduce && !seen && !finished;

  useEffect(() => {
    if (!show) return;
    sessionStorage.setItem(SEEN_KEY, "1");
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setFinished(true), 2100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          aria-hidden
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        >
          {/* Splitting shutters */}
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ink"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.span
            className="absolute inset-x-0 bottom-0 h-1/2 bg-ink"
            initial={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          />

          <div className="relative flex flex-col items-center">
            {/* Shield on its white plate */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, filter: "blur(8px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid place-items-center rounded-2xl p-2 shadow-[0_0_80px_-10px_rgba(225,29,42,0.75)]"
            >
              <Logo size={112} markOnly />
            </motion.div>

            {/* Wordmark revealed by a red wipe */}
            <div className="relative mt-7 overflow-hidden px-2">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-2xl uppercase tracking-[0.14em] text-white sm:text-4xl"
              >
                {site.brand.hero.pre} <span className="text-brand">{site.brand.hero.accent}</span>
              </motion.p>
              <motion.span
                initial={{ x: "-110%" }}
                animate={{ x: "110%" }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-brand"
              />
            </div>

            {/* Loading rule */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
              className="mt-6 block h-px w-40 origin-left bg-gradient-to-r from-brand via-brand-light to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
