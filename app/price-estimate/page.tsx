import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import PriceEstimator from "@/components/PriceEstimator";

export default function PriceEstimatePage() {
  return (
    <LandingPageLayout
      title="Price Estimate"
      description="Select your pickup location and destination to get an approximate price range. No commitment — just an honest estimate before you decide to contact."
    >
      <PriceEstimator continuePath="/request" />
    </LandingPageLayout>
  );
}
