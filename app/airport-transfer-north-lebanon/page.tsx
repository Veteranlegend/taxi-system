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
