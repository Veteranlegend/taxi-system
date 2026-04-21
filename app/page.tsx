import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direct Taxi Lebanon — Book Airport Transfers & Rides via WhatsApp",
  description:
    "Fast, reliable taxi service across Lebanon. Book airport transfers, intercity rides, and private tours directly via WhatsApp. Available 24/7. Serving Beirut, Tripoli, Batroun and all of Lebanon.",
  alternates: { canonical: "https://www.directtaxilebanon.com" },
  openGraph: {
    title: "Direct Taxi Lebanon — Book Airport Transfers & Rides via WhatsApp",
    description:
      "Fast, reliable taxi service across Lebanon. Book via WhatsApp — airport transfers, intercity rides, and private tours. Available 24/7.",
    url: "https://www.directtaxilebanon.com",
    images: [
      {
        url: "/images/hero-rawshe.jpg",
        width: 1200,
        height: 630,
        alt: "Rawshe Rock, Beirut — Direct Taxi Lebanon",
      },
    ],
  },
};

import HomePageContent from "@/components/HomePageContent";
import FaqJsonLd from "@/components/FaqJsonLd";

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HomePageContent />
    </>
  );
}
