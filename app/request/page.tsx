import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Ride — Taxi Anywhere in Lebanon",
  description:
    "Request a taxi from anywhere in Lebanon. Select your pickup and destination, get an instant price estimate, and send your booking directly via WhatsApp.",
  alternates: { canonical: "https://www.directtaxilebanon.com/request" },
  openGraph: {
    title: "Request a Ride — Taxi Anywhere in Lebanon",
    description:
      "Request a taxi from anywhere in Lebanon. Get a price estimate and send your booking directly via WhatsApp.",
    url: "https://www.directtaxilebanon.com/request",
    images: [
      {
        url: "/images/lebanon-other.jpg",
        width: 1200,
        height: 630,
        alt: "Lebanon — Direct Taxi Lebanon",
      },
    ],
  },
};

import GenericRequestPage from "@/components/GenericRequestPage";

export default function RequestPage() {
  return <GenericRequestPage />;
}
