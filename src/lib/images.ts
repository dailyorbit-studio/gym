/**
 * Manifest of every gym photo in /public/images, with intrinsic dimensions so
 * next/image can reserve layout space without a round-trip.
 *
 * These are demo photos. Drop replacements into /public/images using the same
 * filenames (and update the width/height here) to swap in a real gym's shots.
 */

export type GalleryCategory = "interior" | "equipment" | "classes" | "community";

export type GymImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export const galleryImages: GymImage[] = [
  {
    src: "/images/gym-floor-wide.webp",
    width: 1728,
    height: 876,
    alt: "Wide view of the main training floor with rows of red plate-loaded machines",
    caption: "The main floor",
    category: "interior",
  },
  {
    src: "/images/gym-machines-row.webp",
    width: 1728,
    height: 876,
    alt: "Row of red plate-loaded strength machines on the gym floor",
    caption: "Plate-loaded strength row",
    category: "equipment",
  },
  {
    src: "/images/gym-dumbbell-racks.webp",
    width: 1728,
    height: 876,
    alt: "Full dumbbell rack lined up beneath red racking",
    caption: "The full dumbbell range",
    category: "equipment",
  },
  {
    src: "/images/gym-cardio-zone.webp",
    width: 1728,
    height: 876,
    alt: "Treadmills in front of a red industrial gear mural in the cardio zone",
    caption: "Cardio deck under the gear wall",
    category: "equipment",
  },
  {
    src: "/images/gym-pro-shop.webp",
    width: 1728,
    height: 952,
    alt: "Backlit supplement and apparel display wall",
    caption: "Supplements & apparel counter",
    category: "interior",
  },
  {
    src: "/images/training-floor-light.webp",
    width: 1672,
    height: 941,
    alt: "Morning light across a dumbbell rack and open training floor",
    caption: "Standard is the standard",
    category: "interior",
  },
  {
    src: "/images/athlete-deadlift.webp",
    width: 1122,
    height: 1402,
    alt: "Athlete setting up for a heavy loaded barbell deadlift",
    caption: "Heavy days only",
    category: "classes",
  },
  {
    src: "/images/cardio-treadmills.webp",
    width: 1672,
    height: 941,
    alt: "Members running on treadmills beside floor-to-ceiling windows",
    caption: "Stronger than yesterday",
    category: "classes",
  },
  {
    src: "/images/group-class-energy.webp",
    width: 1672,
    height: 941,
    alt: "Packed group fitness class mid-jump with an instructor leading from the front",
    caption: "Group class, full house",
    category: "classes",
  },
  {
    src: "/images/personal-training.webp",
    width: 1122,
    height: 1402,
    alt: "Personal trainer coaching a member through a kettlebell goblet squat",
    caption: "One-on-one coaching",
    category: "classes",
  },
  {
    src: "/images/yoga-studio.webp",
    width: 1122,
    height: 1402,
    alt: "Member seated in a spinal twist on a mat in a calm yoga studio",
    caption: "Mobility & recovery",
    category: "classes",
  },
  {
    src: "/images/locker-room.webp",
    width: 1672,
    height: 941,
    alt: "Premium locker room with timber lockers and backlit vanity mirrors",
    caption: "Premium change rooms",
    category: "interior",
  },
];

/** Convenience lookups for pages that want one specific shot. */
export const img = {
  floorWide: "/images/gym-floor-wide.webp",
  machinesRow: "/images/gym-machines-row.webp",
  dumbbells: "/images/gym-dumbbell-racks.webp",
  cardioZone: "/images/gym-cardio-zone.webp",
  proShop: "/images/gym-pro-shop.webp",
  trainingLight: "/images/training-floor-light.webp",
  deadlift: "/images/athlete-deadlift.webp",
  treadmills: "/images/cardio-treadmills.webp",
  groupClass: "/images/group-class-energy.webp",
  personalTraining: "/images/personal-training.webp",
  yoga: "/images/yoga-studio.webp",
  lockerRoom: "/images/locker-room.webp",
  logo: "/images/brand-logo.png",
} as const;
