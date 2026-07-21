import SectionReveal from "@/components/SectionReveal";

type SectionHeadingProps = {
  /** Small red kicker above the title. */
  eyebrow?: string;
  title: string;
  /** Trailing words rendered in red, appended to the title. */
  accent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Consistent section header: red rule + kicker, oversized condensed title,
 * optional supporting line. Used on every page so rhythm stays identical.
 */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <SectionReveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-2.5 font-heading text-[10px] font-semibold uppercase tracking-[0.24em] text-creed sm:mb-4 sm:gap-3 sm:text-xs sm:tracking-[0.32em] ${
            centered ? "justify-center" : ""
          }`}
        >
          <span aria-hidden className="h-px w-6 shrink-0 bg-creed sm:w-8" />
          {eyebrow}
          {centered && <span aria-hidden className="h-px w-6 shrink-0 bg-creed sm:w-8" />}
        </p>
      )}

      {/* Fluid rather than stepped, so the headline never crowds a 320px screen
          or looks undersized on a 1440px one. */}
      <h2 className="text-[clamp(2rem,6.5vw,3.75rem)] leading-[0.92]">
        {title}
        {accent && <span className="text-creed"> {accent}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base lg:text-lg">
          {subtitle}
        </p>
      )}
    </SectionReveal>
  );
}
