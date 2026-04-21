import ZoneLandingPage from "@/components/ZoneLandingPage";
import { ZONE_SLUGS } from "@/constants/zones";

export default function BatrounTaxiPage() {
  return (
    <ZoneLandingPage
      slug={ZONE_SLUGS.BATROUN}
      title="Batroun Taxi"
      description="Taxi service information for Batroun."
    />
  );
}