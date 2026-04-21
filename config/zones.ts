import { Zone } from "@/types/zone";

export const zones: Zone[] = [
  {
    id: 1,
    slug: "tripoli",
    name: "Tripoli",
    isActive: true,
    acceptPickup: true,
    acceptDropoff: true,
    supportedServices: ["local", "airport"],
  },
  {
    id: 2,
    slug: "batroun",
    name: "Batroun",
    isActive: true,
    acceptPickup: true,
    acceptDropoff: true,
    supportedServices: ["local"],
  },
  {
    id: 3,
    slug: "beirut",
    name: "Beirut",
    isActive: false,
    acceptPickup: false,
    acceptDropoff: false,
    supportedServices: [],
  },
];