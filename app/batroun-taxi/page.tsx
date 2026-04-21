import type { Metadata } from "next";
import ZoneLandingPage from "@/components/ZoneLandingPage";
import { ZONE_PAGES } from "@/constants/zonePages";

export const metadata: Metadata = {
  title: "Batroun Taxi — Airport Transfers & Rides from Batroun",
  description:
    "Book a taxi from Batroun, Lebanon via WhatsApp. Airport transfers, intercity rides to Beirut and Tripoli, available 24/7 at fair prices.",
  alternates: { canonical: "https://www.directtaxilebanon.com/batroun-taxi" },
  openGraph: {
    title: "Batroun Taxi — Airport Transfers & Rides from Batroun",
    description:
      "Book a taxi from Batroun via WhatsApp. Airport transfers, intercity rides to Beirut and Tripoli. Available 24/7.",
    url: "https://www.directtaxilebanon.com/batroun-taxi",
    images: [
      {
        url: "/images/batroun.jpg",
        width: 1200,
        height: 630,
        alt: "Batroun, Lebanon — Direct Taxi Lebanon",
      },
    ],
  },
};

export default function BatrounTaxiPage() {
  return <ZoneLandingPage {...ZONE_PAGES.BATROUN} />;
}
