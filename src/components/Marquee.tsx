type MarqueeProps = {
  items: string[];
  /** Red band instead of the default outlined dark strip. */
  tone?: "red" | "dark";
};

/**
 * Endless scrolling strip of keywords — the industrial signage touch. The item
 * list is duplicated so the CSS translate can loop seamlessly at -50%.
 */
export default function Marquee({ items, tone = "dark" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      aria-hidden
      className={`relative flex overflow-hidden border-y py-3 sm:py-4 ${
        tone === "red" ? "border-creed-dark bg-creed" : "border-white/10 bg-coal"
      }`}
    >
      <div className="flex w-max animate-marquee items-center gap-6 pr-6 sm:gap-10 sm:pr-10">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-10">
            <span
              className={`font-display text-xl uppercase tracking-wide sm:text-2xl lg:text-3xl ${
                tone === "red" ? "text-white" : "text-white/25"
              }`}
            >
              {item}
            </span>
            <span
              className={`h-2 w-2 rotate-45 ${tone === "red" ? "bg-white/70" : "bg-creed"}`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
