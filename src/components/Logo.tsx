import { site } from "@/lib/site";

type LogoProps = {
  /** Height of the mark in px; the wordmark scales alongside it. */
  size?: number;
  /** Hide the text lockup and render only the emblem. */
  markOnly?: boolean;
  /** Show the small caption line under the wordmark. */
  showCaption?: boolean;
  className?: string;
};

/**
 * Brand lockup, drawn entirely in SVG/text from `site.brand` — no image asset,
 * so re-branding is a one-line change in the config. The emblem is a dumbbell
 * inside a red-ringed tile; the wordmark is two-tone (first word white, second
 * word red).
 */
export default function Logo({
  size = 40,
  markOnly = false,
  showCaption = true,
  className = "",
}: LogoProps) {
  const { wordmark, caption } = site.brand;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Emblem */}
      <svg
        role="img"
        aria-label={`${site.name} logo`}
        viewBox="0 0 48 48"
        width={size}
        height={size}
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff3b47" />
            <stop offset="1" stopColor="#9e1119" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="#0a0a0a" />
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="10.5"
          fill="none"
          stroke="url(#logo-ring)"
          strokeWidth="2"
        />
        <g
          transform="translate(6.5,7) scale(1.45)"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.5 9v6M6.5 7v10M17.5 7v10M20.5 9v6" />
          <path d="M6.5 12h11" stroke="#e11d2a" strokeWidth="2" />
        </g>
        <rect x="16" y="38" width="16" height="1.6" rx="0.8" fill="#e11d2a" />
      </svg>

      {!markOnly && (
        <span className="leading-none">
          <span className="block font-display text-xl tracking-wide text-white">
            {wordmark.first} <span className="text-brand">{wordmark.second}</span>
          </span>
          {showCaption && (
            <span className="mt-0.5 block font-heading text-[9px] font-medium uppercase tracking-[0.4em] text-white/40">
              {caption}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
