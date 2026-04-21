import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price Estimate — Taxi Fares Across Lebanon",
  description:
    "Get a free price estimate for your taxi ride in Lebanon before booking. See approximate fares for airport transfers and intercity routes — no commitment required.",
  alternates: { canonical: "https://www.directtaxilebanon.com/price-estimate" },
  openGraph: {
    title: "Price Estimate — Taxi Fares Across Lebanon",
    description:
      "Get a free taxi price estimate for Lebanon before booking. Approximate fares for airport transfers and intercity routes.",
    url: "https://www.directtaxilebanon.com/price-estimate",
    images: [
      {
        url: "/images/hero-rawshe.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Taxi Lebanon — Price Estimate",
      },
    ],
  },
};

import PriceEstimateContent from "@/components/PriceEstimateContent";

export default function PriceEstimatePage() {
  return <PriceEstimateContent />;
}
