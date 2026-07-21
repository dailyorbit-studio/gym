import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { img } from "@/lib/images";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location | Gym in Kandivali West, Mumbai",
  description:
    "Visit Creed Culture Gym at Charkop Industrial Estate, Kandivali West, Mumbai 400067. Call +91 93247 20086, message us on WhatsApp, or send an enquiry. Open daily until 11 PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Creed Culture Gym | Kandivali West, Mumbai",
    description:
      "Find us at Charkop Industrial Estate, Kandivali West. Call, WhatsApp or drop by — open every day until 11 PM.",
    url: `${site.url}/contact`,
    images: [{ url: "/images/gym-floor-wide.webp", width: 1728, height: 1152 }],
  },
};

const VISIT_MSG = encodeURIComponent(
  "Hi Creed Culture Gym! I'd like to visit the gym and book a free trial session.",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Come say hello"
        title="Find us in"
        accent="Kandivali West"
        subtitle="Charkop Industrial Estate, five minutes from Hindustan Naka. Walk in any day until 11 PM."
        image={img.floorWide}
        imageAlt="The Creed Culture Gym training floor seen from the entrance"
      />

      {/* ================================================================= */}
      {/* Quick contact tiles                                               */}
      {/* ================================================================= */}
      <section className="border-b border-white/10 bg-coal">
        {/* `gap-px` over a light background paints hairline dividers that stay
            correct at every column count, unlike per-item borders. */}
        <div className="container-creed">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: PinIcon,
                label: "Address",
                value: `${site.address.locality}, ${site.address.city} ${site.address.postalCode}`,
                href: site.mapsLink,
                external: true,
              },
              {
                icon: PhoneIcon,
                label: "Call us",
                value: site.phones[0].label,
                href: `tel:${site.phones[0].tel}`,
              },
              {
                icon: WhatsAppIcon,
                label: "WhatsApp",
                value: "Chat with the team",
                href: `${site.whatsapp.href}?text=${VISIT_MSG}`,
                external: true,
              },
              {
                icon: ClockIcon,
                label: "Hours",
                value: site.hours.summary,
              },
            ].map((tile, i) => {
              const content = (
                <>
                  <span className="mb-4 grid h-11 w-11 place-items-center border border-white/15 text-creed transition-all duration-400 group-hover:border-creed group-hover:bg-creed group-hover:text-white">
                    <tile.icon className="h-5 w-5" />
                  </span>
                  <span className="block font-heading text-[10px] uppercase tracking-[0.26em] text-white/40">
                    {tile.label}
                  </span>
                  <span className="mt-1.5 block text-sm font-medium text-white">
                    {tile.value}
                  </span>
                </>
              );

              return (
                <SectionReveal
                  key={tile.label}
                  delay={i * 0.08}
                  className="group bg-coal px-4 py-7 sm:px-6 sm:py-9 lg:px-8"
                >
                  {tile.href ? (
                    <a
                      href={tile.href}
                      target={tile.external ? "_blank" : undefined}
                      rel={tile.external ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Form + details                                                    */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-creed grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Details */}
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Questions?"
              accent="We answer."
              subtitle="Call either number, message us on WhatsApp, or send the form across — a real person replies, usually within the hour."
            />

            <SectionReveal delay={0.12} className="mt-10 space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-creed">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    The Gym
                  </h3>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-white/55">
                    {fullAddress}
                  </address>
                  <a
                    href={site.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-heading text-[11px] uppercase tracking-[0.22em] text-creed underline-offset-4 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-creed">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    Call Us
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {site.phones.map((p) => (
                      <li key={p.tel}>
                        <a
                          href={`tel:${p.tel}`}
                          className="text-sm text-white/55 transition-colors hover:text-creed"
                        >
                          {p.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-creed">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    Opening Hours
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {site.hours.detail}
                    <br />
                    <span className="text-white/40">
                      Call ahead to confirm morning opening on public holidays.
                    </span>
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-creed">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    Follow Along
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={site.socials.instagram.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-xs text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-creed hover:text-creed"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      {site.socials.instagram.handle}
                    </a>
                    <a
                      href={site.socials.facebook.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-xs text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-creed hover:text-creed"
                    >
                      <FacebookIcon className="h-4 w-4" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Form */}
          <SectionReveal direction="left" delay={0.1}>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Map                                                               */}
      {/* ================================================================= */}
      <section className="border-t border-white/10">
        <div className="relative">
          <iframe
            title={`Google Map showing ${site.name} in ${site.address.locality}, ${site.address.city}`}
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-[20rem] w-full grayscale-[0.35] contrast-[1.1] sm:h-[26rem] lg:h-[32rem]"
          />

          {/* Floating address card */}
          <div className="pointer-events-none absolute inset-0 hidden items-center lg:flex">
            <div className="container-creed">
              <div className="pointer-events-auto max-w-sm border border-creed/50 bg-ink/95 p-8 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                <h2 className="text-2xl text-white">{site.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {fullAddress}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                  <ClockIcon className="h-4 w-4 text-creed" />
                  {site.hours.summary}
                </p>
                <div className="mt-6">
                  <MagneticButton
                    href={site.mapsLink}
                    variant="primary"
                    fullWidth
                  >
                    Get Directions
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* WhatsApp CTA                                                      */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden border-t border-white/10 bg-coal py-14 sm:py-16 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hazard opacity-70"
        />
        <div className="container-creed relative flex flex-col items-center gap-8 text-center">
          <SectionReveal>
            <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)]">
              <WhatsAppIcon className="h-8 w-8" />
            </span>
            <h2 className="text-[clamp(2rem,6vw,4rem)] leading-[0.92]">
              Prefer to just <span className="text-creed">message us?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
              Send us a WhatsApp and we&apos;ll sort out your trial slot, answer
              pricing questions and tell you exactly where to park. No forms
              required.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <MagneticButton
                href={`${site.whatsapp.href}?text=${VISIT_MSG}`}
                variant="primary"
                className="px-6 py-3.5 sm:px-9 sm:py-4"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us Now
              </MagneticButton>
              <MagneticButton
                href={`tel:${site.phones[1].tel}`}
                variant="outline"
                className="px-6 py-3.5 sm:px-9 sm:py-4"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phones[1].label}
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
