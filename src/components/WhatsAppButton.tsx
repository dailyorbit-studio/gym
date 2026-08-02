"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

const CHAT_LINK = whatsappLink(
  `Hi ${site.name}! I'd like to know more about memberships and book a free trial.`,
);

/**
 * Persistent WhatsApp CTA. Appears after a short delay so it doesn't fight the
 * hero for attention, then stays pinned bottom-right on every page.
 */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
        >
          <a
            href={CHAT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${site.name} on WhatsApp`}
            className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
          >
            {/* Radar pulse */}
            {!reduce && (
              <span
                aria-hidden
                className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/60"
              />
            )}
            <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />

            {/* Desktop hover label */}
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-white px-3 py-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-ink opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block">
              Chat with us
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
