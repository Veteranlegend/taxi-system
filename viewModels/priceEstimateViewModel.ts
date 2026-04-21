import type { PriceEstimate, TripType } from "@/types/pricing";

export type PriceEstimateViewModel = {
  rangeLabel: string;
  distanceLabel: string;
  tripTypeLabel: string;
  tripTypeBadgeStyle: string;
  disclaimer: string;
};

const TRIP_TYPE_LABELS: Record<TripType, string> = {
  local:      "Local ride",
  intercity:  "Intercity",
  airport:    "Airport transfer",
};

const TRIP_TYPE_BADGE_STYLES: Record<TripType, string> = {
  local:      "border-slate-200 bg-slate-50 text-slate-600",
  intercity:  "border-sky-200 bg-sky-50 text-sky-700",
  airport:    "border-emerald-200 bg-emerald-50 text-emerald-700",
};

export const PriceEstimateViewModelMapper = {
  toViewModel(estimate: PriceEstimate): PriceEstimateViewModel {
    return {
      rangeLabel:       `$${estimate.minPrice} – $${estimate.maxPrice}`,
      distanceLabel:    `~${estimate.distanceKm} km by road`,
      tripTypeLabel:    TRIP_TYPE_LABELS[estimate.tripType],
      tripTypeBadgeStyle: TRIP_TYPE_BADGE_STYLES[estimate.tripType],
      disclaimer:
        "Approximate only. Final price depends on traffic, waiting time, and luggage. Confirm with driver via WhatsApp.",
    };
  },
};
