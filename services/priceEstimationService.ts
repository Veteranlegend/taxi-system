import type { PricingLocation, PriceEstimate, TripType } from "@/types/pricing";

// ---------------------------------------------------------------------------
// Location data
// All GPS coordinates are real. Road distances are manually verified.
// ---------------------------------------------------------------------------

export const PRICING_LOCATIONS: PricingLocation[] = [
  { id: "tripoli",  label: "Tripoli",           lat: 34.4367, lng: 35.8497, isAirport: false },
  { id: "mina",     label: "Mina (Tripoli)",     lat: 34.4397, lng: 35.8237, isAirport: false },
  { id: "zgharta",  label: "Zgharta",            lat: 34.3997, lng: 35.8928, isAirport: false },
  { id: "chekka",   label: "Chekka",             lat: 34.3150, lng: 35.7350, isAirport: false },
  { id: "batroun",  label: "Batroun",            lat: 34.2569, lng: 35.6600, isAirport: false },
  { id: "byblos",   label: "Byblos (Jbeil)",     lat: 34.1217, lng: 35.6486, isAirport: false },
  { id: "jounieh",  label: "Jounieh",            lat: 33.9817, lng: 35.6186, isAirport: false },
  { id: "beirut",   label: "Beirut",             lat: 33.8886, lng: 35.4955, isAirport: false },
  { id: "airport",  label: "Beirut Airport",     lat: 33.8209, lng: 35.4884, isAirport: true  },
  { id: "faraya",   label: "Faraya",             lat: 34.0028, lng: 35.9039, isAirport: false },
  { id: "ehden",    label: "Ehden / Bcharre",    lat: 34.3028, lng: 35.9578, isAirport: false },
];

// ---------------------------------------------------------------------------
// Road distance table (km) — curated manually for accuracy.
// Keys are two location IDs joined by "|", sorted alphabetically.
// Haversine is used as fallback for pairs not listed here.
// ---------------------------------------------------------------------------

const ROAD_DISTANCES_KM: Record<string, number> = {
  // North Lebanon internal
  "mina|tripoli":       5,
  "tripoli|zgharta":   12,
  "mina|zgharta":      13,
  "chekka|tripoli":    20,
  "chekka|mina":       21,
  "chekka|zgharta":    25,
  "batroun|chekka":    10,

  // North → Batroun
  "batroun|mina":      29,
  "batroun|tripoli":   30,
  "batroun|zgharta":   35,

  // Mid-Lebanon
  "batroun|byblos":    22,
  "byblos|chekka":     32,
  "byblos|tripoli":    50,
  "byblos|mina":       51,
  "byblos|zgharta":    55,
  "batroun|jounieh":   42,
  "byblos|jounieh":    22,
  "jounieh|tripoli":   68,
  "jounieh|mina":      69,
  "jounieh|zgharta":   72,

  // → Beirut
  "beirut|jounieh":    20,
  "beirut|byblos":     42,
  "beirut|batroun":    62,
  "beirut|chekka":     70,
  "beirut|tripoli":    88,
  "beirut|mina":       88,
  "beirut|zgharta":    93,

  // → Airport
  "airport|beirut":    12,
  "airport|jounieh":   30,
  "airport|byblos":    54,
  "airport|batroun":   74,
  "airport|chekka":    82,
  "airport|tripoli":  105,
  "airport|mina":     105,
  "airport|zgharta":  110,

  // Mountain routes
  "ehden|zgharta":     35,
  "ehden|tripoli":     47,
  "ehden|mina":        48,
  "batroun|faraya":    55,
  "byblos|faraya":     45,
  "faraya|jounieh":    38,
  "beirut|faraya":     58,
  "faraya|tripoli":    60,
  "faraya|mina":       61,
  "airport|faraya":    65,
  "airport|ehden":    120,
  "beirut|ehden":     100,
};

// ---------------------------------------------------------------------------
// Trip type classification
// ---------------------------------------------------------------------------

const LOCAL_GROUPS: string[][] = [
  ["tripoli", "mina", "zgharta"],
  ["batroun", "chekka"],
];

function classifyTrip(from: PricingLocation, to: PricingLocation): TripType {
  if (from.isAirport || to.isAirport) return "airport";
  for (const group of LOCAL_GROUPS) {
    if (group.includes(from.id) && group.includes(to.id)) return "local";
  }
  return "intercity";
}

// ---------------------------------------------------------------------------
// Pricing config per trip type
// ---------------------------------------------------------------------------

const PRICING_CONFIG = {
  local: {
    base: 5,
    ratePerKm: 0.80,
    minFare: 7,
    rangePct: 0.20,
    minMargin: 3,
  },
  intercity: {
    base: 5,
    ratePerKm: 0.70,
    minFare: 20,
    rangePct: 0.15,
    minMargin: 5,
  },
  airport: {
    base: 15,
    ratePerKm: 0.60,
    minFare: 35,
    rangePct: 0.13,
    minMargin: 8,
  },
} as const;

// ---------------------------------------------------------------------------
// Distance helpers
// ---------------------------------------------------------------------------

const MOUNTAIN_LOCATIONS = new Set(["faraya", "ehden"]);

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getRoadDistanceKm(from: PricingLocation, to: PricingLocation): number {
  const key = [from.id, to.id].sort().join("|");
  if (ROAD_DISTANCES_KM[key] !== undefined) return ROAD_DISTANCES_KM[key];

  // Fallback: Haversine + road factor.
  // Mountain routes need a higher factor due to winding altitude roads.
  const isMountain = MOUNTAIN_LOCATIONS.has(from.id) || MOUNTAIN_LOCATIONS.has(to.id);
  const roadFactor = isMountain ? 1.45 : 1.28;
  return haversineKm(from.lat, from.lng, to.lat, to.lng) * roadFactor;
}

// ---------------------------------------------------------------------------
// Pricing calculation
// ---------------------------------------------------------------------------

function roundTo2(n: number): number {
  return Math.round(n / 2) * 2;
}

function calculatePriceRange(
  tripType: TripType,
  distanceKm: number
): { minPrice: number; maxPrice: number } {
  const cfg = PRICING_CONFIG[tripType];
  const center = Math.max(cfg.minFare, cfg.base + distanceKm * cfg.ratePerKm);
  const margin = Math.max(cfg.minMargin, center * cfg.rangePct);
  return {
    minPrice: roundTo2(Math.max(cfg.minFare - cfg.minMargin, center - margin)),
    maxPrice: roundTo2(center + margin),
  };
}

// ---------------------------------------------------------------------------
// Public service
// ---------------------------------------------------------------------------

export const PriceEstimationService = {
  getLocations(): PricingLocation[] {
    return PRICING_LOCATIONS;
  },

  getLocationById(id: string): PricingLocation | undefined {
    return PRICING_LOCATIONS.find((l) => l.id === id);
  },

  estimate(from: PricingLocation, to: PricingLocation): PriceEstimate {
    const tripType = classifyTrip(from, to);
    const distanceKm = Math.round(getRoadDistanceKm(from, to));
    const { minPrice, maxPrice } = calculatePriceRange(tripType, distanceKm);
    return { from, to, tripType, minPrice, maxPrice, distanceKm };
  },
};
