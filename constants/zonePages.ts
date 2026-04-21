import { ROUTES } from "@/constants/routes";
import { ZONE_SLUGS } from "@/constants/zones";
import { ZoneSlug } from "@/types/zoneSlug";

export type ZonePageDefinition = {
  title: string;
  description: string;
  href: string;
  slug: ZoneSlug;
};

export const ZONE_PAGES = {
  TRIPOLI: {
    title: "Tripoli Taxi",
    description: "Taxi service information for Tripoli.",
    href: ROUTES.TRIPOLI_TAXI,
    slug: ZONE_SLUGS.TRIPOLI,
  },
  BATROUN: {
    title: "Batroun Taxi",
    description: "Taxi service information for Batroun.",
    href: ROUTES.BATROUN_TAXI,
    slug: ZONE_SLUGS.BATROUN,
  },
  BEIRUT: {
    title: "Beirut Taxi",
    description: "Taxi service information for Beirut.",
    href: ROUTES.BEIRUT_TAXI,
    slug: ZONE_SLUGS.BEIRUT,
  },
} as const satisfies Record<string, ZonePageDefinition>;

export const ZONE_PAGE_LIST: ZonePageDefinition[] = [
  ZONE_PAGES.TRIPOLI,
  ZONE_PAGES.BATROUN,
  ZONE_PAGES.BEIRUT,
];