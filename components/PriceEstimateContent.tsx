"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import PriceEstimator from "@/components/PriceEstimator";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PriceEstimateContent() {
  const { t } = useLanguage();

  return (
    <LandingPageLayout
      title={t.priceEstimatePage}
      description={t.priceEstimatePageDescription}
    >
      <PriceEstimator continuePath="/request" />
    </LandingPageLayout>
  );
}
