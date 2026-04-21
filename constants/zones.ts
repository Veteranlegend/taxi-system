import { ZoneSlug } from "@/types/zoneSlug";

export const ZONE_SLUGS = {
  TRIPOLI: "tripoli",
  BATROUN: "batroun",
  BEIRUT: "beirut",
} as const satisfies Record<string, ZoneSlug>;