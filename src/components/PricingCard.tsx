"use client";

import { motion, useReducedMotion } from "framer-motion";

import MagneticButton from "@/components/MagneticButton";
import { CheckIcon } from "@/components/Icons";
import type { Plan } from "@/lib/site";
import { site, whatsappLink } from "@/lib/site";

type PricingCardProps = {
  plan: Plan;
  index?: number;
};

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
  const reduce = useReducedMotion();
  const featured = plan.featured;

  const joinLink = whatsappLink(
    `Hi ${site.name}! I'd like to join the ${plan.duration} membership (${inr(plan.price)}). Please share the next steps.`,
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -8 }}
      className={`group relative flex h-full flex-col p-6 transition-[border-color,box-shadow] duration-400 sm:p-7 lg:p-10 ${
        featured
          ? "z-10 border-2 border-brand bg-gradient-to-b from-char to-ink shadow-[0_34px_80px_-30px_rgba(225,29,42,0.75)] lg:scale-[1.05]"
          : "border border-white/10 bg-char hover:border-brand/50 hover:shadow-[0_28px_60px_-28px_rgba(225,29,42,0.45)]"
      }`}
    >
      {/* Most-popular flag */}
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand px-4 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_-8px_rgba(225,29,42,0.9)]">
          {plan.badge}
        </span>
      )}

      <header>
        <h3 className={`text-2xl sm:text-3xl ${featured ? "text-brand" : "text-white"}`}>
          {plan.name}
        </h3>
        <p className="mt-2 font-heading text-[11px] uppercase tracking-[0.26em] text-white/40">
          {plan.duration} membership
        </p>
      </header>

      {/* Price */}
      <div className="mt-7 flex items-end gap-2">
        {/* Scales with the column so "₹16,500" never overflows a tablet card. */}
        <span className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] leading-none text-white">
          {inr(plan.price)}
        </span>
      </div>
      <p className="mt-2 text-sm text-white/45">
        Works out to{" "}
        <span className="font-semibold text-white/75">{inr(plan.perMonth)}</span> per month
      </p>

      <p className="mt-5 border-l-2 border-brand/60 pl-4 text-sm italic leading-relaxed text-white/60">
        {plan.tagline}
      </p>

      {/* Features */}
      <ul className="mt-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-white/65">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                featured ? "bg-brand text-white" : "bg-white/10 text-brand"
              }`}
            >
              <CheckIcon className="h-3 w-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-9">
        <MagneticButton
          href={joinLink}
          variant={featured ? "primary" : "outline"}
          fullWidth
        >
          Join Now
        </MagneticButton>
        <p className="mt-3 text-center text-[11px] text-white/35">
          Opens WhatsApp · we reply within the hour
        </p>
      </div>
    </motion.article>
  );
}
