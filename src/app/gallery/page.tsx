import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { img } from "@/lib/images";
import { areaLabel, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery | Inside ${site.name}`,
  description: `Take a look inside ${site.name} — the red steel training floor, plate-loaded machines, cardio deck, group class studio and premium change rooms.`,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery | ${site.name}`,
    description: `Photos from inside our ${areaLabel} facility — equipment, interiors, classes and community.`,
    url: `${site.url}/gallery`,
    images: [{ url: "/images/gym-floor-wide.webp", width: 1728, height: 876 }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Look inside"
        title="Red steel,"
        accent="black floors"
        subtitle="No stock photos of the lobby. This is the room you'll actually be training in."
        image={img.proShop}
        imageAlt="Backlit supplement and apparel display wall inside the gym"
      />

      <section className="py-14 sm:py-18 lg:py-28">
        <div className="container-brand">
          <SectionHeading
            align="center"
            eyebrow="The facility"
            title="Every corner of the"
            accent="floor"
            subtitle="Filter by area, then click any photo to open it full size. Arrow keys move between shots."
          />

          <SectionReveal delay={0.12} className="mt-14">
            <Gallery />
          </SectionReveal>

          <SectionReveal delay={0.2} className="mt-16 text-center">
            <p className="text-sm text-white/45">
              Plenty more on Instagram —{" "}
              <a
                href={site.socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                {site.socials.instagram.handle}
              </a>{" "}
              ({site.socials.instagram.followers} followers)
            </p>
          </SectionReveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Photos only go so far"
        title="Come stand"
        accent="on the floor"
        body="Book a free trial and see the scale of the place in person. Open every day until 11 PM."
        image={img.machinesRow}
        primaryHref="/contact"
        primaryLabel="Plan Your Visit"
      />
    </>
  );
}
