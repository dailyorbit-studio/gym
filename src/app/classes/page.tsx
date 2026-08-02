import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { img } from "@/lib/images";
import { areaLabel, programs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Classes & Programs | Strength, CrossFit, Zumba & Yoga",
  description: `Strength training, CrossFit, cardio, Zumba, yoga, personal training and online classes at ${site.name}. Seven programs, one ${areaLabel} floor.`,
  alternates: { canonical: "/classes" },
  openGraph: {
    title: `Classes at ${site.name}`,
    description:
      "Seven programs under one roof — strength, CrossFit, cardio, Zumba, yoga, personal training and online classes.",
    url: `${site.url}/classes`,
    images: [{ url: "/images/gym-cardio-zone.webp", width: 1728, height: 876 }],
  },
};

/**
 * Indicative weekly group-class timetable. Update the times here and the table
 * below re-renders — no markup changes needed.
 */
const schedule = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  rows: [
    {
      time: "6:30 AM",
      slots: ["CrossFit", "Yoga", "CrossFit", "Yoga", "CrossFit", "Open Floor"],
    },
    {
      time: "8:00 AM",
      slots: ["Strength", "Strength", "Strength", "Strength", "Strength", "Strength"],
    },
    {
      time: "10:00 AM",
      slots: ["Zumba", "Cardio HIIT", "Zumba", "Cardio HIIT", "Zumba", "Open Floor"],
    },
    {
      time: "6:00 PM",
      slots: ["CrossFit", "Zumba", "CrossFit", "Zumba", "CrossFit", "Cardio HIIT"],
    },
    {
      time: "8:00 PM",
      slots: ["Strength", "Yoga", "Strength", "Yoga", "Strength", "Open Floor"],
    },
  ],
};

/** Colour-codes the timetable cells so the grid scans quickly. */
function slotTone(slot: string) {
  if (slot === "Open Floor") return "text-white/30";
  if (slot === "Zumba" || slot === "Yoga") return "text-white/75";
  return "text-brand";
}

export default function ClassesPage() {
  return (
    <>
      <PageHero
        crumb="Classes"
        eyebrow="Seven programs"
        title="Find your"
        accent="discipline"
        subtitle="Whether you want to add 40 kg to your squat or just move better on a Monday, there's a lane for you on our floor."
        image={img.cardioZone}
        imageAlt="Cardio zone with treadmills in front of the red industrial gear mural"
      />

      {/* ================================================================= */}
      {/* Program grid                                                      */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-brand">
          <SectionHeading
            eyebrow="What we offer"
            title="Programs under"
            accent="one roof"
            subtitle="Every membership includes access to the full floor. Group classes and coaching are included from the Quarterly plan up."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Weekly schedule                                                   */}
      {/* ================================================================= */}
      <section className="border-y border-white/10 bg-coal py-16 sm:py-20 lg:py-32">
        <div className="container-brand">
          <SectionHeading
            eyebrow="Weekly timetable"
            title="Group classes,"
            accent="every day"
            subtitle="Indicative schedule — call us on the day to confirm, as slots shift with festivals and coach availability. The main floor stays open until 11 PM regardless."
          />

          <SectionReveal delay={0.12} className="mt-14">
            {/* Full-bleed horizontal scroll keeps the grid readable on phones —
                the negative margins mirror the container gutters exactly. */}
            <div className="-mx-4 overflow-x-auto px-4 min-[480px]:-mx-5 min-[480px]:px-5 lg:mx-0 lg:px-0">
              <table className="w-full min-w-[46rem] border-collapse text-left">
                <caption className="sr-only">
                  Weekly group class schedule at {site.name}
                </caption>
                <thead>
                  <tr className="border-b border-white/15">
                    <th
                      scope="col"
                      className="py-4 pr-4 font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-brand"
                    >
                      Time
                    </th>
                    {schedule.days.map((day) => (
                      <th
                        key={day}
                        scope="col"
                        className="px-4 py-4 font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {schedule.rows.map((row) => (
                    <tr
                      key={row.time}
                      className="border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03]"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap py-5 pr-4 font-display text-lg uppercase text-white"
                      >
                        {row.time}
                      </th>
                      {row.slots.map((slot, i) => (
                        <td
                          key={`${row.time}-${schedule.days[i]}`}
                          className={`px-4 py-5 font-heading text-sm uppercase tracking-wide ${slotTone(slot)}`}
                        >
                          {slot}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-xs text-white/35">
              Sunday: open floor access only. Personal training and online sessions are
              scheduled directly with your coach.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Pick a plan,"
        accent="pick a class"
        body="Group classes are included from the Quarterly membership up. Start with a free trial session and see which room you belong in."
        image={img.groupClass}
        primaryHref="/pricing"
        primaryLabel="View Membership Plans"
      />
    </>
  );
}
