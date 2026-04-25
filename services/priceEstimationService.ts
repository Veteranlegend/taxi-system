import type { PricingLocation, PriceEstimate, TripType } from "@/types/pricing";

// ---------------------------------------------------------------------------
// Location data
// All GPS coordinates are real. Road distances are manually verified.
// ---------------------------------------------------------------------------

export const PRICING_LOCATIONS: PricingLocation[] = [
  // Far North
  { id: "akkar",     label: "Akkar (Halba)",       lat: 34.5483, lng: 36.0786, isAirport: false },
  { id: "dinniyeh",  label: "Dinniyeh",            lat: 34.4200, lng: 36.0900, isAirport: false },
  // North Lebanon
  { id: "tripoli",   label: "Tripoli",             lat: 34.4367, lng: 35.8497, isAirport: false },
  { id: "mina",      label: "Mina (Tripoli)",      lat: 34.4397, lng: 35.8237, isAirport: false },
  { id: "zgharta",   label: "Zgharta",             lat: 34.3997, lng: 35.8928, isAirport: false },
  { id: "ehden",     label: "Ehden / Bcharre",     lat: 34.3028, lng: 35.9578, isAirport: false },
  { id: "koura",     label: "Koura",               lat: 34.2700, lng: 35.7800, isAirport: false },
  { id: "chekka",    label: "Chekka",              lat: 34.3150, lng: 35.7350, isAirport: false },
  { id: "batroun",   label: "Batroun",             lat: 34.2569, lng: 35.6600, isAirport: false },
  // Mount Lebanon — North
  { id: "byblos",    label: "Byblos (Jbeil)",      lat: 34.1217, lng: 35.6486, isAirport: false },
  { id: "bikfaya",   label: "Bikfaya",             lat: 33.9200, lng: 35.6900, isAirport: false },
  { id: "ghazir",    label: "Ghazir / Sarba",      lat: 33.9800, lng: 35.6300, isAirport: false },
  { id: "jounieh",   label: "Jounieh",             lat: 33.9817, lng: 35.6186, isAirport: false },
  { id: "faraya",    label: "Faraya",              lat: 34.0028, lng: 35.9039, isAirport: false },
  // Mount Lebanon — Metn
  { id: "antelias",  label: "Antelias / Dbayeh",   lat: 33.9000, lng: 35.5800, isAirport: false },
  { id: "broummana", label: "Broummana / Beit Mery",lat: 33.8700, lng: 35.6200, isAirport: false },
  // Mount Lebanon — South
  { id: "aley",      label: "Aley",                lat: 33.8100, lng: 35.5900, isAirport: false },
  { id: "chouf",     label: "Chouf / Deir el Qamar",lat: 33.6900, lng: 35.5800, isAirport: false },
  { id: "jezzine",   label: "Jezzine",             lat: 33.5400, lng: 35.5800, isAirport: false },
  { id: "damour",    label: "Damour",              lat: 33.7300, lng: 35.4400, isAirport: false },
  // Beirut
  { id: "beirut",    label: "Beirut",              lat: 33.8886, lng: 35.4955, isAirport: false },
  { id: "airport",   label: "Beirut Airport",      lat: 33.8209, lng: 35.4884, isAirport: true  },
  // South Lebanon
  { id: "sidon",     label: "Sidon (Saida)",       lat: 33.5633, lng: 35.3706, isAirport: false },
  { id: "tyre",      label: "Tyre (Sour)",         lat: 33.2705, lng: 35.2037, isAirport: false },
  { id: "nabatieh",  label: "Nabatieh",            lat: 33.3778, lng: 35.4839, isAirport: false },
  { id: "marjeyoun", label: "Marjeyoun",           lat: 33.3600, lng: 35.5900, isAirport: false },
  { id: "bintjbeil", label: "Bint Jbeil",          lat: 33.1200, lng: 35.4300, isAirport: false },
  { id: "hasbaya",   label: "Hasbaya",             lat: 33.4000, lng: 35.6900, isAirport: false },
  // Bekaa Valley
  { id: "aanjar",    label: "Aanjar",              lat: 33.7300, lng: 35.9300, isAirport: false },
  { id: "chtaura",   label: "Chtaura",             lat: 33.8139, lng: 35.8592, isAirport: false },
  { id: "zahle",     label: "Zahle",               lat: 33.8461, lng: 35.9016, isAirport: false },
  { id: "baalbek",   label: "Baalbek",             lat: 34.0042, lng: 36.2117, isAirport: false },
  { id: "hermel",    label: "Hermel",              lat: 34.3900, lng: 36.3800, isAirport: false },
  { id: "rachaya",   label: "Rachaya",             lat: 33.5000, lng: 35.8600, isAirport: false },
  { id: "yammouneh", label: "Yammouneh",           lat: 34.0700, lng: 36.0400, isAirport: false },
];

// ---------------------------------------------------------------------------
// Road distance table (km) — curated manually for accuracy.
// Keys are two location IDs joined by "|", sorted alphabetically.
// Haversine is used as fallback for pairs not listed here.
// ---------------------------------------------------------------------------

const ROAD_DISTANCES_KM: Record<string, number> = {
  // North Lebanon internal
  "mina|tripoli":          5,
  "tripoli|zgharta":      12,
  "mina|zgharta":         13,
  "chekka|tripoli":       20,
  "chekka|mina":          21,
  "chekka|zgharta":       25,
  "batroun|chekka":       10,
  "koura|tripoli":        18,
  "koura|mina":           19,
  "chekka|koura":         12,
  "batroun|koura":        20,
  "koura|zgharta":        22,

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

  // Akkar
  "akkar|tripoli":     42,
  "akkar|mina":        44,
  "akkar|zgharta":     38,
  "akkar|dinniyeh":    30,
  "akkar|chekka":      58,
  "akkar|batroun":     68,
  "akkar|beirut":     130,
  "akkar|airport":    140,
  "akkar|ehden":       55,

  // Dinniyeh
  "dinniyeh|tripoli":  25,
  "dinniyeh|mina":     27,
  "dinniyeh|zgharta":  20,
  "dinniyeh|chekka":   40,
  "dinniyeh|batroun":  50,
  "dinniyeh|beirut":  115,
  "dinniyeh|airport": 125,
  "dinniyeh|ehden":    30,

  // South Lebanon
  "beirut|sidon":      40,
  "airport|sidon":     45,
  "jounieh|sidon":     58,
  "byblos|sidon":      78,
  "batroun|sidon":    100,
  "tripoli|sidon":    128,
  "mina|sidon":       128,

  "beirut|tyre":       85,
  "airport|tyre":      90,
  "sidon|tyre":        45,
  "jounieh|tyre":     103,
  "tripoli|tyre":     170,

  "beirut|nabatieh":   65,
  "airport|nabatieh":  70,
  "sidon|nabatieh":    28,
  "tyre|nabatieh":     35,

  // Bekaa Valley
  "beirut|zahle":      52,
  "airport|zahle":     60,
  "jounieh|zahle":     65,
  "byblos|zahle":      75,
  "batroun|zahle":     90,
  "tripoli|zahle":     95,
  "mina|zahle":        95,
  "sidon|zahle":       80,

  "beirut|chtaura":    48,
  "airport|chtaura":   55,
  "zahle|chtaura":     10,

  "beirut|baalbek":       86,
  "airport|baalbek":      90,
  "zahle|baalbek":        35,
  "chtaura|baalbek":      42,
  "tripoli|baalbek":      70,
  "mina|baalbek":         72,
  "akkar|baalbek":        85,
  "dinniyeh|baalbek":     55,

  // Mount Lebanon — Metn / new areas
  "antelias|beirut":      12,
  "airport|antelias":     22,
  "antelias|jounieh":     10,
  "antelias|byblos":      32,
  "antelias|batroun":     52,
  "antelias|tripoli":     78,

  "broummana|beirut":     18,
  "airport|broummana":    28,
  "broummana|jounieh":    15,
  "broummana|zahle":      40,

  "bikfaya|beirut":       28,
  "airport|bikfaya":      38,
  "bikfaya|jounieh":      18,
  "bikfaya|byblos":       28,
  "bikfaya|zahle":        35,

  "ghazir|beirut":        22,
  "airport|ghazir":       30,
  "ghazir|jounieh":        5,
  "byblos|ghazir":        20,

  // Aley / Chouf / Damour
  "aley|beirut":          20,
  "airport|aley":         25,
  "aley|sidon":           40,
  "airport|damour":       18,
  "beirut|damour":        22,
  "damour|sidon":         22,

  "airport|chouf":        48,
  "beirut|chouf":         50,
  "chouf|sidon":          30,
  "aley|chouf":           30,

  "airport|jezzine":      65,
  "beirut|jezzine":       70,
  "jezzine|sidon":        30,
  "chouf|jezzine":        25,
  "jezzine|nabatieh":     28,

  // South Lebanon — new
  "airport|marjeyoun":   115,
  "beirut|marjeyoun":    120,
  "marjeyoun|nabatieh":   30,
  "marjeyoun|tyre":       50,
  "hasbaya|marjeyoun":    25,
  "airport|hasbaya":     105,
  "beirut|hasbaya":      110,
  "hasbaya|sidon":        65,

  "airport|bintjbeil":   120,
  "beirut|bintjbeil":    125,
  "bintjbeil|tyre":       25,
  "bintjbeil|nabatieh":   35,

  // Bekaa — new
  "airport|aanjar":       62,
  "beirut|aanjar":        55,
  "aanjar|chtaura":       14,
  "aanjar|zahle":         20,

  "airport|rachaya":      90,
  "beirut|rachaya":       95,
  "rachaya|sidon":        80,
  "rachaya|zahle":        50,
  "rachaya|hasbaya":      40,

  "airport|yammouneh":    85,
  "beirut|yammouneh":     88,
  "yammouneh|baalbek":    25,
  "yammouneh|zahle":      30,

  "airport|hermel":      155,
  "beirut|hermel":       160,
  "baalbek|hermel":       68,
  "tripoli|hermel":      100,
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

const MOUNTAIN_LOCATIONS = new Set(["faraya", "ehden", "broummana", "bikfaya", "jezzine", "rachaya", "yammouneh"]);

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
