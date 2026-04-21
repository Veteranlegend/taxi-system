import type { PriceEstimate, TripType } from "@/types/pricing";

export type PriceEstimateViewModel = {
  rangeLabel: string;
  distanceLabel: string;
  tripTypeLabel: string;
  tripTypeBadgeStyle: string;
  disclaimer: string;
};

const TRIP_TYPE_LABELS_EN: Record<TripType, string> = {
  local:      "Local ride",
  intercity:  "Intercity",
  airport:    "Airport transfer",
};

const TRIP_TYPE_LABELS_AR: Record<TripType, string> = {
  local:      "رحلة محلية",
  intercity:  "بين المدن",
  airport:    "نقل مطار",
};

const TRIP_TYPE_BADGE_STYLES: Record<TripType, string> = {
  local:      "border-slate-200 bg-slate-50 text-slate-600",
  intercity:  "border-sky-200 bg-sky-50 text-sky-700",
  airport:    "border-emerald-200 bg-emerald-50 text-emerald-700",
};

export const PriceEstimateViewModelMapper = {
  toViewModel(estimate: PriceEstimate, lang?: string): PriceEstimateViewModel {
    const isAr = lang === "ar";
    return {
      rangeLabel:       `$${estimate.minPrice} – $${estimate.maxPrice}`,
      distanceLabel:    isAr
        ? `~${estimate.distanceKm} كم بالطريق`
        : `~${estimate.distanceKm} km by road`,
      tripTypeLabel:    isAr
        ? TRIP_TYPE_LABELS_AR[estimate.tripType]
        : TRIP_TYPE_LABELS_EN[estimate.tripType],
      tripTypeBadgeStyle: TRIP_TYPE_BADGE_STYLES[estimate.tripType],
      disclaimer:       isAr
        ? "تقريبي فقط. السعر النهائي يعتمد على حركة المرور ووقت الانتظار. تأكيد مع السائق عبر واتساب."
        : "Approximate only. Final price depends on traffic and waiting time. Confirm with driver via WhatsApp.",
    };
  },
};
