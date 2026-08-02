"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

import { CloseIcon } from "@/components/Icons";
import { galleryImages, type GalleryCategory, type GymImage } from "@/lib/images";

type Filter = "all" | GalleryCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "interior", label: "Interior" },
  { id: "equipment", label: "Equipment" },
  { id: "classes", label: "Classes" },
  { id: "community", label: "Community" },
];

type GalleryProps = {
  /** Limit the number of tiles (used for the home-page teaser). */
  limit?: number;
  showFilters?: boolean;
};

/**
 * Masonry gallery with category tabs and a keyboard-navigable lightbox.
 * Layout uses CSS columns so portrait and landscape shots interleave without
 * cropping.
 */
export default function Gallery({ limit, showFilters = true }: GalleryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const items = useMemo(() => {
    const filtered =
      filter === "all"
        ? galleryImages
        : galleryImages.filter((i) => i.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length,
      ),
    [items.length],
  );

  // Lightbox keyboard controls + scroll lock.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current: GymImage | null = active === null ? null : items[active];

  return (
    <>
      {/* Filter tabs ---------------------------------------------------- */}
      {showFilters && (
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {filters.map((f) => {
            const selected = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilter(f.id);
                  setActive(null);
                }}
                aria-pressed={selected}
                className={`relative px-4 py-2.5 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 sm:px-5 sm:text-[11px] sm:tracking-[0.2em] ${
                  selected ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="gallery-filter"
                    transition={
                      reduce ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 30 }
                    }
                    className="absolute inset-0 -z-10 bg-brand"
                  />
                )}
                {!selected && (
                  <span aria-hidden className="absolute inset-0 -z-10 border border-white/10" />
                )}
                {f.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry -------------------------------------------------------- */}
      <motion.div
        layout={!reduce}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((image, i) => (
            <motion.button
              key={image.src}
              type="button"
              layout={!reduce}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(i)}
              aria-label={`View larger: ${image.caption}`}
              className="group relative block w-full break-inside-avoid overflow-hidden border border-white/10 bg-char text-left transition-colors duration-400 hover:border-brand/60"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />

              {/* Caption veil */}
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-heading text-[10px] uppercase tracking-[0.26em] text-brand">
                  {image.category}
                </span>
                <span className="mt-1 block font-display text-lg uppercase leading-tight text-white">
                  {image.caption}
                </span>
              </span>

              {/* Corner rule that draws on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0 w-0.5 bg-brand transition-all duration-500 group-hover:h-full"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox ------------------------------------------------------- */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[80] grid place-items-center bg-ink/96 p-3 pb-24 pt-20 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-12 w-12 place-items-center border border-white/20 bg-ink/80 text-white transition-colors hover:border-brand hover:text-brand sm:right-8 sm:top-8"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            {/* Prev / next — pinned to the sides on tablet and up, docked to a
                thumb-friendly bar along the bottom on phones. */}
            <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-4 sm:inset-x-auto sm:bottom-auto sm:left-6 sm:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:justify-between">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="grid h-12 w-12 place-items-center border border-white/20 bg-ink/80 text-white transition-colors hover:border-brand hover:text-brand"
              >
                <span aria-hidden className="text-xl leading-none">‹</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="grid h-12 w-12 place-items-center border border-white/20 bg-ink/80 text-white transition-colors hover:border-brand hover:text-brand"
              >
                <span aria-hidden className="text-xl leading-none">›</span>
              </button>
            </div>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-full max-w-5xl sm:px-16"
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(max-width: 640px) 94vw, 80vw"
                className="mx-auto max-h-[58svh] w-auto border border-white/10 object-contain sm:max-h-[74svh]"
              />
              <figcaption className="mt-4 text-center">
                <span className="font-display text-xl uppercase text-white">
                  {current.caption}
                </span>
                <span className="mt-1 block font-heading text-[11px] uppercase tracking-[0.26em] text-white/40">
                  {active! + 1} / {items.length} · {current.category}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
