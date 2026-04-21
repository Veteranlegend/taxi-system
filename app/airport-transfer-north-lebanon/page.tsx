import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Transfer North Lebanon — Taxi to & from Beirut Airport",
  description:
    "Book an airport transfer from North Lebanon to Rafic Hariri International Airport. Reliable, punctual taxi service from Tripoli, Batroun, Denniyeh and surrounding areas.",
  alternates: { canonical: "https://www.directtaxilebanon.com/airport-transfer-north-lebanon" },
  openGraph: {
    title: "Airport Transfer North Lebanon — Taxi to & from Beirut Airport",
    description:
      "Book an airport transfer from North Lebanon to Beirut Airport. Reliable taxi from Tripoli, Batroun and surrounding areas.",
    url: "https://www.directtaxilebanon.com/airport-transfer-north-lebanon",
    images: [
      {
        url: "/images/tripoli-citadel.jpg",
        width: 1200,
        height: 630,
        alt: "North Lebanon — Airport Transfer Direct Taxi Lebanon",
      },
    ],
  },
};

import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import ZoneCard from "@/components/zone/ZoneCard";
import { SERVICES } from "@/constants/services";
import { ZoneService } from "@/services/zoneService";
import { ZoneViewModelMapper } from "@/viewModels/zoneViewModel";

export default function AirportTransferNorthLebanonPage() {
  const airportZones = ZoneService.getZonesByService(SERVICES.AIRPORT);
  const airportZoneViewModels = airportZones.map((zone) =>
    ZoneViewModelMapper.toViewModel(zone),
  );

  return (
    <LandingPageLayout
      title="Airport Transfer North Lebanon"
      description="Available airport transfer service zones in North Lebanon."
    >
      <ul>
        {airportZoneViewModels.map((zone) => (
          <ZoneCard key={zone.id} zone={zone} />
        ))}
      </ul>
    </LandingPageLayout>
  );
}
