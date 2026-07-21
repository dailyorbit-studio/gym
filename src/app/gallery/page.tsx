import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Inside Kandivali's 9000 Sq Ft Gym",
  description:
    "Take a look inside Creed Culture Gym, Kandivali West — the red steel training floor, plate-loaded machines, cardio deck, group class studio and premium change rooms.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Creed Culture Gym, Kandivali West",
    description:
      "Photos from inside our 9000+ sq ft facility — equipment, interiors, classes and community.",
    url: `${site.url}/gallery`,
    images: [{ url: "/images/gym-floor-wide.webp", width: 1728, height: 1152 }],
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
        imageAlt="Backlit supplement and apparel display wall inside Creed Culture Gym"
      />

      <section className="py-14 sm:py-18 lg:py-28">
        <div className="container-creed">
          <SectionHeading
            align="center"
            eyebrow="The facility"
            title="Every corner of"
            accent="9000 sq ft"
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
                className="font-semibold text-creed underline-offset-4 hover:underline"
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
        body="Book a free trial and see the scale of the place in person. Kandivali West, open every day until 11 PM."
        image={img.machinesRow}
        primaryHref="/contact"
        primaryLabel="Plan Your Visit"
      />
    </>
  );
}
