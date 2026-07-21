import type { Metadata, Viewport } from "next";
import { Anton, Inter, Oswald } from "next/font/google";

import Footer from "@/components/Footer";
import LogoIntro from "@/components/LogoIntro";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { gymJsonLd, site } from "@/lib/site";

import "./globals.css";

/* Condensed display face for headlines — the industrial voice of the brand. */
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

/* Semi-condensed for eyebrows, nav and buttons. */
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

/* Neutral body face. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "gym in Kandivali West",
    "best gym Kandivali",
    "Creed Culture Gym",
    "fitness centre Mumbai",
    "CrossFit Kandivali",
    "personal trainer Kandivali West",
    "Zumba classes Kandivali",
    "gym membership Kandivali",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/gym-floor-wide.webp",
        width: 1728,
        height: 1152,
        alt: "The 9000+ sq ft training floor at Creed Culture Gym, Kandivali West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/images/gym-floor-wide.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Opt back into Next's navigation scroll override now that `html` uses
      // `scroll-behavior: smooth` for in-page anchors.
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-white">
        {/* LocalBusiness / Gym structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd) }}
        />

        <LogoIntro />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-creed focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
