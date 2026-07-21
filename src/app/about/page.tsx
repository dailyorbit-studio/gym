import type { Metadata } from "next";
import Image from "next/image";

import CtaBand from "@/components/CtaBand";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import StatCounter from "@/components/StatCounter";
import {
  DumbbellIcon,
  FlameIcon,
  HeartIcon,
  LotusIcon,
  MusicIcon,
  ShieldIcon,
  SparkIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/Icons";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | The Story Behind Kandivali's 9000 Sq Ft Gym",
  description:
    "Creed Culture Gym was built as a masterpiece of fitness in Kandivali West — 9000+ sq ft of premium equipment, certified coaches and a community of 440+ members. This is our story.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Creed Culture Gym | Kandivali West, Mumbai",
    description:
      "The story behind Kandivali's 9000+ sq ft strength and conditioning facility — our values, our coaches, and the community we've built.",
    url: `${site.url}/about`,
    images: [{ url: "/images/gym-machines-row.webp", width: 1728, height: 1152 }],
  },
};

const values = [
  {
    icon: ShieldIcon,
    title: "No Compromises",
    body: "Every machine is commercial grade and maintained on a schedule. Cheap kit breaks people — we would rather buy once and buy right.",
  },
  {
    icon: UsersIcon,
    title: "Everyone Belongs",
    body: "First-timers and competitive lifters share the same floor. Nobody here is too new, too old or too out of shape to start.",
  },
  {
    icon: TargetIcon,
    title: "Progress Over Ego",
    body: "We measure the version of you from last month, not the person on the next bench. Small, stacked wins beat one heroic week.",
  },
  {
    icon: SparkIcon,
    title: "Consistency Wins",
    body: "That is why we stay open until 11 PM, every day. The best program in the world is the one you can actually show up for.",
  },
];

const coaching = [
  {
    icon: DumbbellIcon,
    title: "Strength & Conditioning",
    body: "Programming for hypertrophy, powerlifting and general strength — with hands-on form correction from your first set.",
  },
  {
    icon: FlameIcon,
    title: "CrossFit & Functional",
    body: "Coached WODs, Olympic lifting technique and scaling that lets a complete beginner train beside a seasoned athlete.",
  },
  {
    icon: HeartIcon,
    title: "Fat Loss & Cardio",
    body: "Heart-rate-based conditioning plans paired with practical nutrition guidance you can actually keep to in Mumbai.",
  },
  {
    icon: MusicIcon,
    title: "Zumba & Group Energy",
    body: "High-energy instructors who make 45 minutes vanish — the most fun anyone has burning 500 calories.",
  },
  {
    icon: LotusIcon,
    title: "Yoga & Mobility",
    body: "Structured flows that unlock hips, shoulders and spine so heavy training days don't turn into injuries.",
  },
  {
    icon: TargetIcon,
    title: "1-on-1 Personal Training",
    body: "A coach who knows your history, your schedule and your goal — and adjusts the plan when life gets in the way.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Since day one"
        title="A masterpiece of"
        accent="fitness"
        subtitle="9000+ square feet in Kandivali West, built for people who are done making excuses."
        image={img.machinesRow}
        imageAlt="Rows of red plate-loaded strength machines at Creed Culture Gym"
      />

      {/* ================================================================= */}
      {/* Story                                                             */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-creed grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionReveal direction="right">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden border border-white/10">
                <Image
                  src={img.trainingLight}
                  alt="Morning light falling across the dumbbell racks and open training floor"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Inset detail shot */}
              <div className="absolute -bottom-10 -right-4 hidden w-48 overflow-hidden border-4 border-ink sm:block lg:-right-10 lg:w-60">
                <div className="relative aspect-square">
                  <Image
                    src={img.brandedPlate}
                    alt="Close-up of a Creed Culture branded machine plate"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built by lifters,"
              accent="for lifters"
            />
            <SectionReveal delay={0.1} className="mt-7 space-y-5 text-base leading-relaxed text-white/60">
              <p>
                Creed Culture started with a simple frustration: Kandivali had plenty of
                gyms, but almost none of them were built for people who take training
                seriously. Crowded floors. Waiting twenty minutes for a bench. Machines
                that had been broken since last winter.
              </p>
              <p>
                So we built the opposite. Over{" "}
                <strong className="font-semibold text-white">9000 square feet</strong> of
                floor in the Charkop Industrial Estate — exposed red steel, black rubber
                flooring, and enough commercial-grade equipment that peak hour feels like
                any other hour.
              </p>
              <p>
                Today more than{" "}
                <strong className="font-semibold text-white">
                  {site.rating.count} members
                </strong>{" "}
                call this place their second home, and{" "}
                <strong className="font-semibold text-white">
                  {site.rating.reviews} Google reviews
                </strong>{" "}
                average {site.rating.value} stars. But the thing we are proudest of is
                simpler than any number: people keep coming back.
              </p>
              <p className="border-l-2 border-creed pl-5 font-heading text-lg uppercase leading-snug tracking-wide text-white">
                &ldquo;{site.tagline}&rdquo; is not a slogan we wrote for a poster. It is
                the standard we hold the floor to every single day.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Stats                                                             */}
      {/* ================================================================= */}
      <section
        aria-label="Creed Culture in numbers"
        className="border-y border-white/10 bg-coal"
      >
        <div className="container-creed py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            <StatCounter value={9000} suffix="+" label="Sq Ft of Floor" index={0} />
            <StatCounter value={440} suffix="+" label="Active Members" index={1} />
            <StatCounter value={427} label="Google Reviews" index={2} />
            <StatCounter value={7} suffix="+" label="Programs Offered" index={3} />
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Values                                                            */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-creed">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Our"
            accent="creed"
            subtitle="Four principles that decide everything — from which machine we buy next to how we greet someone on their first day."
          />

          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <SectionReveal
                key={value.title}
                delay={i * 0.08}
                className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-char lg:p-9"
              >
                <span className="mb-6 grid h-14 w-14 place-items-center border border-white/15 text-creed transition-all duration-400 group-hover:border-creed group-hover:bg-creed group-hover:text-white">
                  <value.icon className="h-6 w-6" />
                </span>
                <p className="font-heading text-6xl leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-creed/20">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-2xl text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{value.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee tone="red" items={["Forge Your Creed", "Kandivali West", "Open Till 11 PM"]} />

      {/* ================================================================= */}
      {/* Coaching                                                          */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-creed grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The coaching floor"
              title="Trainers who"
              accent="actually train you"
              subtitle="Our coaches are certified, specialised and on the floor — not behind a desk. Whatever you walked in to achieve, someone here has coached it before."
            />

            <SectionReveal delay={0.15} className="mt-10">
              <div className="relative aspect-4/5 max-w-md overflow-hidden border border-white/10">
                <Image
                  src={img.personalTraining}
                  alt="A Creed Culture coach guiding a member through a kettlebell squat"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                />
              </div>
            </SectionReveal>
          </div>

          <SectionReveal className="grid gap-px self-start border border-white/10 bg-white/10 sm:grid-cols-2" stagger={0.07}>
            {coaching.map((area) => (
              <div
                key={area.title}
                className="group h-full bg-ink p-7 transition-colors duration-500 hover:bg-char"
              >
                <span className="mb-5 inline-grid h-11 w-11 place-items-center border border-white/15 text-creed transition-all duration-400 group-hover:border-creed group-hover:bg-creed group-hover:text-white">
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl text-white">{area.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{area.body}</p>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Facility split                                                    */}
      {/* ================================================================= */}
      <section className="border-t border-white/10 bg-coal py-16 sm:py-20 lg:py-32">
        <div className="container-creed">
          <SectionHeading
            eyebrow="Inside the building"
            title="More than a"
            accent="weights room"
            subtitle="Air-conditioned floors, a premium change room, and an in-house counter for supplements and Creed apparel."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                src: img.lockerRoom,
                title: "Premium Change Rooms",
                body: "Full-height lockers, clean showers and lit vanity mirrors.",
              },
              {
                src: img.proShop,
                title: "Supplements & Apparel",
                body: "Genuine stock at the counter, plus Creed Culture merchandise.",
              },
              {
                src: img.cardioZone,
                title: "Dedicated Cardio Deck",
                body: "Treadmills, cycles and cross-trainers under the gear wall.",
              },
            ].map((item, i) => (
              <SectionReveal
                key={item.title}
                delay={i * 0.1}
                className="group overflow-hidden border border-white/10 bg-char transition-colors duration-400 hover:border-creed/50"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white transition-colors group-hover:text-creed">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come see it yourself"
        title="Take the tour,"
        accent="then decide"
        body="Book a free trial session and we'll walk you through all 9000+ square feet — the floor, the coaches, the community. Bring your shoes."
        image={img.floorWide}
      />
    </>
  );
}
