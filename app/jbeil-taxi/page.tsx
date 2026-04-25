import type { Metadata } from "next";
import JbeilTaxiContent from "@/components/JbeilTaxiContent";

export const metadata: Metadata = {
  title: "Jbeil Taxi — Byblos | WhatsApp Booking",
  description:
    "Book a reliable taxi to and from Jbeil (Byblos) via WhatsApp. Airport transfers, Beirut rides, and intercity trips. Available 24/7 across Lebanon.",
  alternates: { canonical: "https://www.directtaxilebanon.com/jbeil-taxi" },
  openGraph: {
    title: "Jbeil Taxi — Byblos | WhatsApp Booking",
    description:
      "Book a reliable taxi to and from Jbeil (Byblos) via WhatsApp. Airport transfers, Beirut rides, and intercity trips. Available 24/7.",
    url: "https://www.directtaxilebanon.com/jbeil-taxi",
    images: [
      {
        url: "/images/jbeil.jpg",
        width: 1200,
        height: 630,
        alt: "Jbeil (Byblos) — Direct Taxi Lebanon",
      },
    ],
  },
};

export default function JbeilTaxiPage() {
  return <JbeilTaxiContent />;
}
