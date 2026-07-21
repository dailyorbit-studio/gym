import Image from "next/image";

import MagneticButton from "@/components/MagneticButton";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { img } from "@/lib/images";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  body?: string;
  image?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

const TRIAL_MSG = encodeURIComponent(
  "Hi Creed Culture Gym! I'd like to book a free trial session.",
);

/** Full-bleed closing call-to-action used at the foot of most pages. */
export default function CtaBand({
  eyebrow = "Your first session is free",
  title: heading,
  accent,
  body = "Walk in, take the tour, train on the floor. Then decide. No card required, no pressure — just 9000+ sq ft waiting for you.",
  image = img.deadlift,
  primaryHref = "/pricing",
  primaryLabel = "See Membership Plans",
}: CtaBandProps) {
  return (
    <section className="grain relative isolate overflow-hidden py-16 sm:py-20 lg:py-32">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/85" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/30"
      />
      <div aria-hidden className="absolute inset-0 -z-10 hazard opacity-60" />

      {/* Red edge rules */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-creed/70" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-creed/70" />

      <div className="container-creed relative text-center">
        <SectionReveal>
          <p className="mb-5 flex items-center justify-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.32em] text-creed">
            <span aria-hidden className="h-px w-8 bg-creed" />
            {eyebrow}
            <span aria-hidden className="h-px w-8 bg-creed" />
          </p>

          <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,7vw,5rem)] leading-[0.9]">
            {heading}
            {accent && <span className="text-creed"> {accent}</span>}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {body}
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <MagneticButton href={primaryHref} variant="primary" className="px-6 py-3.5 sm:px-9 sm:py-4">
              {primaryLabel}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={`${site.whatsapp.href}?text=${TRIAL_MSG}`}
              variant="outline"
              className="px-6 py-3.5 sm:px-9 sm:py-4"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book a Free Trial
            </MagneticButton>
          </div>

          <p className="mt-8 font-heading text-[11px] uppercase tracking-[0.26em] text-white/35">
            {site.address.locality}, {site.address.city} · {site.hours.summary}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
