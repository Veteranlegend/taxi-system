import type { Metadata } from "next";
import ZoneLandingPage from "@/components/ZoneLandingPage";
import { ZONE_PAGES } from "@/constants/zonePages";

export const metadata: Metadata = {
  title: "Beirut Taxi — Airport Transfers & Rides from Beirut",
  description:
    "Book a taxi from Beirut, Lebanon via WhatsApp. Airport transfers to Rafic Hariri Airport, intercity rides, and private tours. Available 24/7.",
  alternates: { canonical: "https://www.directtaxilebanon.com/beirut-taxi" },
  openGraph: {
    title: "Beirut Taxi — Airport Transfers & Rides from Beirut",
    description:
      "Book a taxi from Beirut via WhatsApp. Airport transfers, intercity rides, private tours. Available 24/7.",
    url: "https://www.directtaxilebanon.com/beirut-taxi",
    images: [
      {
        url: "/images/beirut.jpg",
        width: 1200,
        height: 630,
        alt: "Beirut cityscape — Direct Taxi Lebanon",
      },
    ],
  },
};

export default function BeirutTaxiPage() {
  return <ZoneLandingPage {...ZONE_PAGES.BEIRUT} />;
}
