export type PricingLocation = {
  id: string;
  label: string;
  lat: number;
  lng: number;
  isAirport: boolean;
};

export type TripType = "local" | "intercity" | "airport";

export type PriceEstimate = {
  from: PricingLocation;
  to: PricingLocation;
  tripType: TripType;
  minPrice: number;
  maxPrice: number;
  distanceKm: number;
};
