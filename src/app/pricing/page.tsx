import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { CheckIcon } from "@/components/Icons";
import { img } from "@/lib/images";
import { faqs, plans, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gym Membership Kandivali | Plans from ₹16,500 / 6 Months",
  description:
    "Transparent gym membership pricing in Kandivali West — monthly, quarterly and 6-month plans starting at ₹16,500. No joining fee, no hidden charges. Free trial available.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Gym Membership in Kandivali | Creed Culture Gym Pricing",
    description:
      "Monthly, quarterly and 6-month memberships at Kandivali West's 9000+ sq ft gym. 6-month plan from ₹16,500. No joining fee.",
    url: `${site.url}/pricing`,
    images: [{ url: "/images/gym-dumbbell-racks.webp", width: 1728, height: 1152 }],
  },
};

/** Every plan includes these — stated once so the cards stay scannable. */
const included = [
  "Full access to the 9000+ sq ft floor",
  "Strength, cardio and functional zones",
  "Air-conditioned training areas",
  "Change rooms, lockers and showers",
  "Open every day until 11:00 PM",
  "No joining fee, ever",
];

/** FAQ structured data so the questions can surface directly in search. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        crumb="Pricing"
        eyebrow="Membership"
        title="Simple pricing,"
        accent="serious value"
        subtitle="No joining fee. No hidden charges. Just three straightforward plans and a floor worth every rupee."
        image={img.dumbbells}
        imageAlt="Full dumbbell racks lined up beneath red steel racking"
      />

      {/* ================================================================= */}
      {/* Plans                                                             */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-creed">
          <SectionHeading
            align="center"
            eyebrow="Choose your plan"
            title="Commit longer,"
            accent="pay less"
            subtitle="Our 6-month membership works out to ₹2,750 a month — the plan most of our members end up on."
          />

          <div className="mt-20 grid items-stretch gap-8 md:grid-cols-3 lg:gap-10">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-white/35">
            All prices in INR and inclusive of applicable taxes. Personal training packs
            are quoted separately — ask at the front desk.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Included in every plan                                            */}
      {/* ================================================================= */}
      <section className="border-y border-white/10 bg-coal py-14 sm:py-16 lg:py-24">
        <div className="container-creed grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <SectionHeading
            eyebrow="Always included"
            title="Every plan"
            accent="gets this"
            subtitle="Whichever duration you pick, the essentials never sit behind an upgrade."
          />

          <SectionReveal
            className="grid gap-x-8 gap-y-4 sm:grid-cols-2"
            stagger={0.07}
          >
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-creed/15 text-creed">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-white/65">{item}</span>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* FAQs                                                              */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-creed grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Questions"
              title="Before you"
              accent="sign up"
              subtitle="The things people ask us at the front desk most often. Still unsure? Call or WhatsApp — a human answers."
            />
          </div>

          <SectionReveal delay={0.1}>
            <FaqAccordion />
          </SectionReveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Still deciding?"
        title="Train once,"
        accent="on us"
        body="Book a free trial session before you commit to anything. Walk the floor, meet a coach, lift something heavy. Then pick your plan."
        image={img.floorWide}
        primaryHref="/contact"
        primaryLabel="Get In Touch"
      />
    </>
  );
}
