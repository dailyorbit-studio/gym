"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ChevronDownIcon } from "@/components/Icons";
import { faqs } from "@/lib/site";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-heading text-base font-medium uppercase tracking-wide transition-colors duration-300 sm:text-lg ${
                    isOpen ? "text-creed" : "text-white group-hover:text-creed"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-creed bg-creed text-white"
                      : "border-white/20 text-white/60 group-hover:border-creed group-hover:text-creed"
                  }`}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-l-2 border-creed/50 pb-7 pl-5 text-sm leading-relaxed text-white/60 sm:text-base">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
