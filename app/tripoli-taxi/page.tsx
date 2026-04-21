import type { Metadata } from "next";
import ZoneLandingPage from "@/components/ZoneLandingPage";
import { ZONE_PAGES } from "@/constants/zonePages";

export const metadata: Metadata = {
  title: "Tripoli Taxi — Airport Transfers & Intercity Rides from Tripoli",
  description:
    "Book a taxi from Tripoli, Lebanon via WhatsApp. Airport transfers to Beirut, intercity rides, and private tours. Fast reply, fair prices, available 24/7.",
  alternates: { canonical: "https://www.directtaxilebanon.com/tripoli-taxi" },
  openGraph: {
    title: "Tripoli Taxi — Airport Transfers & Intercity Rides from Tripoli",
    description:
      "Book a taxi from Tripoli via WhatsApp. Airport transfers to Beirut, intercity rides, private tours. Available 24/7.",
    url: "https://www.directtaxilebanon.com/tripoli-taxi",
    images: [
      {
        url: "/images/tripoli-citadel.jpg",
        width: 1200,
        height: 630,
        alt: "Tripoli citadel, Lebanon — Direct Taxi Lebanon",
      },
    ],
  },
};

export default function TripoliTaxiPage() {
  return <ZoneLandingPage {...ZONE_PAGES.TRIPOLI} />;
}
