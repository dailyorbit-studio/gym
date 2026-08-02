import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import Hero from "@/components/Hero";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import PricingCard from "@/components/PricingCard";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import StatCounter from "@/components/StatCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  ArrowRightIcon,
  ClockIcon,
  DumbbellIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/Icons";
import { img } from "@/lib/images";
import { areaLabel, plans, programs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Premium Gym, Strength & CrossFit`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      `${areaLabel} of premium strength, CrossFit and cardio equipment. Rated ${site.rating.value}★ by ${site.rating.count}+ members. Book your free trial today.`,
    url: site.url,
    images: [{ url: "/images/gym-floor-wide.webp", width: 1728, height: 876 }],
  },
};

/** "Why choose us" teaser blocks. */
const pillars = [
  {
    icon: DumbbellIcon,
    title: `${site.facility.area} Sq Ft Floor`,
    body: "Plate-loaded machines, a full dumbbell range and dedicated rack space. You never queue for a bench, even at peak hour.",
  },
  {
    icon: UsersIcon,
    title: "Coaches Who Coach",
    body: "Certified trainers who correct your form and program around your goals — not staff who stand around watching the clock.",
  },
  {
    icon: ClockIcon,
    title: "Open Until 11 PM",
    body: "Every single day. Early shifts, late shifts, Sunday mornings — the floor is open when your schedule finally lets you train.",
  },
  {
    icon: ShieldIcon,
    title: "Built To Last",
    body: "Red steel, black flooring, air conditioning and equipment maintained obsessively. A room that makes you want to work.",
  },
];

export default function HomePage() {
  const featured = programs.slice(0, 3);

  return (
    <>
      <Hero />

      {/* ================================================================= */}
      {/* Stats                                                             */}
      {/* ================================================================= */}
      <section
        aria-label="Gym at a glance"
        className="relative border-y border-white/10 bg-coal"
      >
        <div className="container-brand py-10 sm:py-12 lg:py-16">
          {/* `gap-px` over a light background draws the dividers, so they stay
              correct whether the grid is two columns or four. */}
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            <StatCounter value={10000} suffix="+" label="Sq Ft of Floor" index={0} />
            <StatCounter value={500} suffix="+" label="Happy Members" index={1} />
            <StatCounter value={4.8} decimals={1} suffix="★" label="Google Rating" index={2} />
            <StatCounter value={7} suffix="+" label="Programs" index={3} />
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Why choose us                                                     */}
      {/* ================================================================= */}
      <section id="why" className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="container-brand">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
            {/* Copy */}
            <div>
              <SectionHeading
                eyebrow={`Why ${site.name}`}
                title="Not another"
                accent="neighbourhood gym"
                subtitle="This is a serious training environment — the equipment, coaching and hours that let ordinary people build extraordinary bodies."
              />

              <SectionReveal className="mt-12 grid gap-8 sm:grid-cols-2" stagger={0.1}>
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="group">
                    <span className="mb-4 grid h-12 w-12 place-items-center border border-white/15 text-brand transition-all duration-400 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <pillar.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl text-white">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </SectionReveal>

              <SectionReveal delay={0.15} className="mt-11">
                <MagneticButton href="/about" variant="outline">
                  Our Story
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
              </SectionReveal>
            </div>

            {/* Split-layout photography */}
            <SectionReveal direction="left" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-3/4 overflow-hidden border border-white/10">
                    <Image
                      src={img.machinesRow}
                      alt="Row of red plate-loaded machines on the training floor"
                      fill
                      sizes="(max-width: 1024px) 45vw, 26vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden border border-white/10">
                    <Image
                      src={img.trainingLight}
                      alt="Morning light across the open training floor"
                      fill
                      sizes="(max-width: 1024px) 45vw, 26vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="relative aspect-square overflow-hidden border border-white/10">
                    <Image
                      src={img.cardioZone}
                      alt="Treadmills in front of the red gear mural in the cardio zone"
                      fill
                      sizes="(max-width: 1024px) 45vw, 26vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="relative aspect-3/4 overflow-hidden border border-white/10">
                    <Image
                      src={img.dumbbells}
                      alt="Full dumbbell rack under red racking"
                      fill
                      sizes="(max-width: 1024px) 45vw, 26vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-6 left-4 border border-brand bg-ink px-6 py-4 shadow-[0_20px_50px_-18px_rgba(225,29,42,0.8)] sm:left-1/2 sm:-translate-x-1/2">
                <p className="font-display text-3xl leading-none text-brand">
                  {site.facility.area}+
                </p>
                <p className="mt-1 font-heading text-[10px] uppercase tracking-[0.24em] text-white/50">
                  Square Feet
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Marquee
        items={["Strength", "CrossFit", "Cardio", "Zumba", "Yoga", "Personal Training"]}
      />

      {/* ================================================================= */}
      {/* Featured programs                                                 */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-brand">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Train your way"
              title="Programs built"
              accent="around results"
              subtitle="Seven disciplines under one roof. Lift heavy, chase your engine, or dance your way through cardio — it all counts."
              className="md:max-w-2xl"
            />
            <SectionReveal delay={0.15} className="shrink-0">
              <MagneticButton href="/classes" variant="outline">
                All Classes
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </SectionReveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} href="/classes" />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Pricing teaser                                                    */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden border-y border-white/10 bg-coal py-16 sm:py-20 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 hazard opacity-70" />
        <div className="container-brand relative">
          <SectionHeading
            align="center"
            eyebrow="Membership"
            title="Pick your"
            accent="commitment"
            subtitle="Transparent pricing, no joining fee, no hidden charges. The longer you commit, the less you pay per month."
          />

          <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          <SectionReveal delay={0.2} className="mt-14 text-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-brand"
            >
              <span className="relative">
                Compare plans &amp; read the FAQs
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-400 group-hover:w-full"
                />
              </span>
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Testimonials                                                      */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-brand grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Member stories"
              title="Rated"
              accent={`${site.rating.value}★ by ${site.rating.count}+`}
              subtitle={`${site.rating.reviews} Google reviews from people who train here every week. Here's what a few of them say.`}
            />

            <SectionReveal delay={0.18} className="mt-10">
              <div className="relative aspect-4/5 max-w-sm overflow-hidden border border-white/10">
                <Image
                  src={img.groupClass}
                  alt="A packed group class training together on the floor"
                  fill
                  // The container is capped at max-w-sm (384px), so anything
                  // wider than that is wasted bytes — and 80vw was under-
                  // fetching on phones, where it renders nearly full width.
                  sizes="(max-width: 448px) 92vw, 384px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent"
                />
                <p className="absolute bottom-5 left-5 font-heading text-[11px] uppercase tracking-[0.24em] text-white/70">
                  {site.socials.instagram.followers} on Instagram
                </p>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal
            direction="left"
            className="border border-white/10 bg-char p-5 sm:p-8 lg:p-12"
          >
            <TestimonialCarousel />
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Final CTA                                                         */}
      {/* ================================================================= */}
      <CtaBand title="Your first rep" accent="starts today" image={img.deadlift} />
    </>
  );
}
