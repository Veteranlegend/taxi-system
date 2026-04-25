import type { Metadata } from "next";
import BeirutAirportTaxiContent from "@/components/BeirutAirportTaxiContent";

export const metadata: Metadata = {
  title: "Beirut Airport Taxi | Fast WhatsApp Booking",
  description:
    "Book a reliable Beirut airport taxi via WhatsApp. 24/7 service for airport pickups and drop-offs across Lebanon. Fixed pricing, no hidden fees.",
  alternates: { canonical: "https://www.directtaxilebanon.com/beirut-airport-taxi" },
  openGraph: {
    title: "Beirut Airport Taxi | Fast WhatsApp Booking",
    description:
      "Book a reliable Beirut airport taxi via WhatsApp. 24/7 service for airport pickups and drop-offs across Lebanon.",
    url: "https://www.directtaxilebanon.com/beirut-airport-taxi",
    images: [
      {
        url: "/images/airport.jpg",
        width: 1200,
        height: 630,
        alt: "Beirut Airport Taxi — Direct Taxi Lebanon",
      },
    ],
  },
};

export default function BeirutAirportTaxiPage() {
  return <BeirutAirportTaxiContent />;
}
