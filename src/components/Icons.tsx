/**
 * Inline SVG icon set. Kept local so the site ships zero icon-font/library
 * weight and every glyph inherits `currentColor`.
 */

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function DumbbellIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 9v6M6.5 7v10M17.5 7v10M20.5 9v6M6.5 12h11" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.7s5.2 4 5.2 9.1a5.2 5.2 0 0 1-10.4 0c0-1.6.6-2.9 1.4-4 .3 1 .9 1.8 1.8 2.1-.4-2.6.6-5.4 2-7.2Z" />
      <path d="M12 21.3a2.6 2.6 0 0 0 2.6-2.6c0-1.7-2.6-4-2.6-4s-2.6 2.3-2.6 4A2.6 2.6 0 0 0 12 21.3Z" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.3 5.9a4.7 4.7 0 0 0-6.7 0L12 7.5l-1.6-1.6a4.7 4.7 0 1 0-6.7 6.7l8.3 8.3 8.3-8.3a4.7 4.7 0 0 0 0-6.7Z" />
      <path d="M2.6 12.6h4l1.6-2.6 2 5 2-3.4 1.2 1h6" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18V5.5l11-2V16" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </svg>
  );
}

export function LotusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.2c2 2 3 4 3 6.2s-1 4-3 5.6c-2-1.6-3-3.4-3-5.6s1-4.2 3-6.2Z" />
      <path d="M9 16c-2.6-.6-4.4-2-5.4-4.2 2.4-.9 4.4-.6 6 .8" />
      <path d="M15 16c2.6-.6 4.4-2 5.4-4.2-2.4-.9-4.4-.6-6 .8" />
      <path d="M3 15.4c1.7 3 4.7 4.5 9 4.5s7.3-1.5 9-4.5" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ScreenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="4.2" width="18.4" height="12.4" rx="1.8" />
      <path d="M8.5 20.2h7M12 16.6v3.6M10 8.4l4 2.2-4 2.2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 17.8-6.2 3.5 1.4-7-5.2-4.8 7-.8L12 2.2l3 6.5 7 .8-5.2 4.8 1.4 7Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.2 3.5h3l1.6 4-2 1.4a12.5 12.5 0 0 0 6.3 6.3l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.3" r="2.7" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.8V12l3.4 2" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21.9v-8.2h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V4a22 22 0 0 0-2.5-.1c-2.6 0-4.4 1.6-4.4 4.4v2.2H7v3.2h2.9v8.2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.1a9.8 9.8 0 0 0-8.4 14.8L2.1 22l5.2-1.4A9.8 9.8 0 1 0 12 2.1Zm0 1.8a8 8 0 0 1 6.6 12.5l-.3.4.9 3-3.1-.8-.4.2A8 8 0 1 1 12 3.9Zm-3.6 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.2-.7l.5-.6.3-.5v-.5l-.8-2c-.2-.5-.4-.5-.6-.5Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 4.5 5.8v5.5c0 4.6 3.1 8.4 7.5 9.9 4.4-1.5 7.5-5.3 7.5-9.9V5.8Z" />
      <path d="m8.8 12 2.2 2.3 4.2-4.6" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6 8.4 8.4M15.6 15.6l2.8 2.8M18.4 5.6 15.6 8.4M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.2 5.1a3.4 3.4 0 0 1 0 6.5M17.5 14.4a6.2 6.2 0 0 1 3.7 5.6" />
    </svg>
  );
}

/** Program slug -> icon component, used by the program cards. */
export const programIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  dumbbell: DumbbellIcon,
  flame: FlameIcon,
  heart: HeartIcon,
  music: MusicIcon,
  lotus: LotusIcon,
  target: TargetIcon,
  screen: ScreenIcon,
};
