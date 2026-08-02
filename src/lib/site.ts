/**
 * ============================================================================
 *  ⚙️  EDIT THIS FILE TO RE-BRAND THE WHOLE SITE
 * ============================================================================
 *  Everything a gym owner would want to change lives here — name, address,
 *  phone numbers, socials, pricing, programs, reviews. Change the values in
 *  this one file and the entire website updates: navbar, footer, page copy,
 *  SEO metadata, WhatsApp links and the Google structured data.
 *
 *  All values below are DEMO PLACEHOLDERS ("Forge Fitness", "Metro City",
 *  dummy phone numbers, sample reviews). Swap them for the real business.
 * ============================================================================
 */

export const site = {
  /* ---- Identity --------------------------------------------------------- */
  name: "Forge Fitness",
  tagline: "Where Strength Is Built",
  url: "https://forgefitness.example.com", // ← replace with the live domain
  description:
    "Forge Fitness is a 10,000 sq ft premium strength, CrossFit and cardio facility. Rated 4.8★ by 500+ members. Personal training, group classes and open floor daily until 11 PM.",

  /**
   * Brand lockup + campaign words. `wordmark` is the two-tone logo text
   * (first word white, second word red); `hero` drives the big homepage
   * headline and the intro animation ("Forge Your Strength").
   */
  brand: {
    wordmark: { first: "FORGE", second: "FITNESS" },
    caption: "Strength & Conditioning",
    hero: { pre: "Forge Your", accent: "Strength" },
  },

  /* ---- Location (DEMO — replace with the real address) ------------------ */
  address: {
    line1: "123 Fitness Avenue",
    line2: "Central Business District",
    locality: "Downtown",
    region: "State",
    city: "Metro City",
    postalCode: "100001",
    country: "IN",
  },

  /** Map marker coordinates — used for the embedded map + directions link. */
  geo: { lat: 19.076, lng: 72.8777 },

  /* ---- Contact (DEMO numbers) ------------------------------------------ */
  phones: [
    { label: "+91 98765 43210", tel: "+919876543210" },
    { label: "+91 98765 43211", tel: "+919876543211" },
  ],

  whatsapp: {
    number: "919876543210",
    href: "https://wa.me/919876543210",
  },

  socials: {
    instagram: {
      handle: "@forgefitness",
      href: "https://www.instagram.com/",
      followers: "5K+",
    },
    facebook: {
      handle: "Forge Fitness",
      href: "https://www.facebook.com/",
    },
  },

  hours: {
    summary: "Open daily until 11:00 PM",
    detail: "Mon – Sun · 5:00 AM to 11:00 PM",
    /** schema.org openingHours shorthand */
    schema: ["Mo-Su 05:00-23:00"],
  },

  facility: {
    area: "10,000",
    areaLabel: "Sq Ft of Training Floor",
  },

  rating: {
    value: 4.8,
    count: 500,
    reviews: 480,
  },

  /**
   * Coordinate-based embed + directions link so the demo map always renders
   * cleanly. When you have the real listing, swap these for a place-based
   * Google Maps embed / share URL.
   */
  mapsEmbed:
    "https://maps.google.com/maps?q=19.0760,72.8777&z=15&output=embed",
  mapsLink: "https://www.google.com/maps/dir/?api=1&destination=19.0760,72.8777",
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.locality}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/** "10,000 sq ft" — reused across body copy. */
export const areaLabel = `${site.facility.area} sq ft`;

/** Build a WhatsApp deep-link with a pre-filled, branded message. */
export function whatsappLink(message: string): string {
  return `${site.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

/** Primary navigation — shared by the navbar, mobile menu and footer. */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  Programs                                   */
/* -------------------------------------------------------------------------- */

export type Program = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "strength",
    title: "Strength & Weight Training",
    short: "Plate-loaded power, free weights and a rack for every lift.",
    description:
      "The heart of the gym. Rows of plate-loaded machines, a full dumbbell range and dedicated rack space so you never wait to lift. Built for hypertrophy, powerlifting and everything between.",
    image: "/images/gym-dumbbell-racks.webp",
    icon: "dumbbell",
    highlights: ["Full dumbbell range", "Plate-loaded machines", "Deadlift & squat racks"],
  },
  {
    slug: "crossfit",
    title: "CrossFit",
    short: "High-intensity functional conditioning in a coached group.",
    description:
      "Constantly varied, functional movement at high intensity. Coached WODs that build engine, grip and grit — scaled to your level from day one.",
    image: "/images/athlete-deadlift.webp",
    icon: "flame",
    highlights: ["Coached WODs", "Olympic lifting", "Beginner scaling"],
  },
  {
    slug: "cardio",
    title: "Cardio",
    short: "Treadmills, bikes and climbers on a dedicated cardio deck.",
    description:
      "A dedicated cardio deck with treadmills, cross-trainers and cycles. Steady-state or intervals — chase the number, then go lift.",
    image: "/images/gym-cardio-zone.webp",
    icon: "heart",
    highlights: ["Treadmills & cycles", "HIIT intervals", "Heart-rate zones"],
  },
  {
    slug: "zumba",
    title: "Zumba",
    short: "Dance-driven cardio that never feels like a workout.",
    description:
      "Latin rhythms, big energy and a room full of people moving together. The fastest 45 minutes in the building — and a serious calorie burn.",
    image: "/images/group-class-energy.webp",
    icon: "music",
    highlights: ["Group energy", "45-min sessions", "All fitness levels"],
  },
  {
    slug: "yoga",
    title: "Yoga",
    short: "Mobility, breath and recovery to keep you training.",
    description:
      "Structured flows that unlock hips, shoulders and spine. The mobility work that keeps heavy lifters lifting and keeps injuries away.",
    image: "/images/yoga-studio.webp",
    icon: "lotus",
    highlights: ["Mobility & flexibility", "Breathwork", "Active recovery"],
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    short: "One-on-one coaching, programming and accountability.",
    description:
      "A certified coach in your corner. Goal-specific programming, hands-on form correction and nutrition guidance — the fastest route from where you are to where you want to be.",
    image: "/images/personal-training.webp",
    icon: "target",
    highlights: ["1-on-1 coaching", "Custom programming", "Nutrition guidance"],
  },
  {
    slug: "online-classes",
    title: "Online Classes",
    short: "Train with our coaches from anywhere.",
    description:
      "Travelling or stuck at home? Join live sessions and follow coach-led programming remotely, so a missed week never turns into a missed month.",
    image: "/images/training-floor-light.webp",
    icon: "screen",
    highlights: ["Live sessions", "Train anywhere", "Coach check-ins"],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Membership                                  */
/* -------------------------------------------------------------------------- */

export type Plan = {
  name: string;
  duration: string;
  price: number;
  perMonth: number;
  tagline: string;
  featured: boolean;
  badge?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: 3500,
    perMonth: 3500,
    tagline: "Test the floor, no long commitment.",
    featured: false,
    features: [
      "Full gym & cardio floor access",
      "Strength and weight training",
      "Locker room access",
      "Open daily until 11:00 PM",
      "Free fitness assessment",
    ],
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: 9500,
    perMonth: 3167,
    tagline: "Long enough to see the change.",
    featured: false,
    features: [
      "Everything in Monthly",
      "Group classes — CrossFit, Zumba, Yoga",
      "Monthly body composition check",
      "Personalised workout plan",
      "One free PT session",
    ],
  },
  {
    name: "6-Month",
    duration: "6 Months",
    price: 16500,
    perMonth: 2750,
    tagline: "The plan our strongest members choose.",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Quarterly",
      "Unlimited group & online classes",
      "Quarterly coach programming review",
      "Two free PT sessions",
      "Membership freeze up to 15 days",
      "Priority access to new equipment",
    ],
  },
];

export const faqs = [
  {
    q: "Can I freeze my membership?",
    a: "Yes. Six-month members can freeze for up to 15 days — useful for travel, exams or recovery. Just tell the front desk before the freeze starts and we will extend your end date by the same number of days.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Absolutely. Walk in or book a slot on WhatsApp and get a complimentary trial session with a full tour of the floor. No card, no pressure — come train and see if this is your kind of room.",
  },
  {
    q: "How do personal training add-ons work?",
    a: "Personal training is priced separately from your membership and sold in session packs. Quarterly members get one free PT session and six-month members get two, so you can try a coach before committing to a pack.",
  },
  {
    q: "What are your timings?",
    a: "We are open every single day and run right through until 11:00 PM, so late finishes at work are never an excuse. Call the front desk for the current morning opening time.",
  },
  {
    q: "Is there a joining fee or hidden charge?",
    a: "No hidden charges. The price you see is the price you pay for the duration listed. Any add-on — personal training, nutrition plans or merchandise — is always quoted upfront.",
  },
  {
    q: "Do I need experience to start?",
    a: "Not at all. Every new member gets a fitness assessment and a floor walkthrough. Our coaches will show you the machines, set your starting weights and scale any class to your level.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                Testimonials                                 */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    name: "Rohit S.",
    role: "Member since 2023",
    quote:
      "Easily the best equipped gym I've trained at. The plate-loaded section alone is worth the membership, and the floor is big enough that you're never waiting for a bench at 8 PM.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Zumba & Strength",
    quote:
      "I joined for Zumba and ended up falling in love with weight training. The trainers actually correct your form instead of just standing around. Genuinely welcoming for women.",
    rating: 5,
  },
  {
    name: "Amit K.",
    role: "Personal Training client",
    quote:
      "Down 14 kg in five months with my coach here. The programming was tailored to my knee issue and nothing ever felt like a generic plan copied from somewhere else.",
    rating: 5,
  },
  {
    name: "Sneha D.",
    role: "Member since 2024",
    quote:
      "The 11 PM closing is a lifesaver with my shift timings. Clean, air-conditioned, brilliant music and the red-and-black interior genuinely makes you want to train harder.",
    rating: 4,
  },
  {
    name: "Faizan A.",
    role: "CrossFit",
    quote:
      "A massive floor and it never feels crowded. Coaches push you without being obnoxious about it. Best value for money you will find anywhere.",
    rating: 5,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Structured data                                */
/* -------------------------------------------------------------------------- */

/** schema.org LocalBusiness/Gym payload injected into the root layout. */
export const gymJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Gym", "HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": `${site.url}/#gym`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/gym-floor-wide.webp`,
  logo: `${site.url}/images/brand-logo.png`,
  telephone: site.phones.map((p) => p.tel),
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: `${site.address.locality}, ${site.address.city}`,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "23:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.reviews,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [site.socials.instagram.href, site.socials.facebook.href],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Memberships",
    itemListElement: plans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} Membership`,
      price: plan.price,
      priceCurrency: "INR",
      category: "Gym Membership",
    })),
  },
  amenityFeature: [
    "Strength & Weight Training",
    "CrossFit",
    "Cardio Zone",
    "Zumba",
    "Yoga",
    "Personal Training",
    "Online Classes",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
};
