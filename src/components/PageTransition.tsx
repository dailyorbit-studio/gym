"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Route-change choreography. Rendered from `app/template.tsx`, which Next
 * remounts on every navigation — so `initial` replays each time without
 * needing an AnimatePresence exit phase that App Router can't await.
 *
 * Two things happen together: a red bar wipes across the top of the viewport,
 * and the incoming page fades up into place.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <>
      {/* Progress wipe — sits above the sticky navbar */}
      <motion.div
        key={`wipe-${pathname}`}
        aria-hidden
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{
          scaleX: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay: 0.5 },
        }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-dark via-brand-light to-brand"
      />

      {/* Incoming page */}
      <motion.div
        key={`page-${pathname}`}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
