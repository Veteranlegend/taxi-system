import { ROUTES } from "@/constants/routes";
import { ZONE_SLUGS } from "@/constants/zones";
import { ZoneSlug } from "@/types/zoneSlug";

export type ZonePageDefinition = {
  title: string;
  description: string;
  href: string;
  slug: ZoneSlug;
  image?: string;
  gradient: string;
};

export const ZONE_PAGES = {
  TRIPOLI: {
    title: "Tripoli Taxi",
    description: "Taxi service information for Tripoli.",
    href: ROUTES.TRIPOLI_TAXI,
    slug: ZONE_SLUGS.TRIPOLI,
    image: "/images/tripoli-citadel.jpg",
    gradient: "from-teal-500 via-cyan-600 to-blue-700",
  },
  BATROUN: {
    title: "Batroun Taxi",
    description: "Taxi service information for Batroun.",
    href: ROUTES.BATROUN_TAXI,
    slug: ZONE_SLUGS.BATROUN,
    image: "/images/batroun.jpg",
    gradient: "from-sky-300 via-blue-500 to-indigo-600",
  },
  BEIRUT: {
    title: "Beirut Taxi",
    description: "Taxi service information for Beirut.",
    href: ROUTES.BEIRUT_TAXI,
    slug: ZONE_SLUGS.BEIRUT,
    image: "/images/beirut.jpg",
    gradient: "from-amber-400 via-orange-500 to-red-600",
  },
} as const satisfies Record<string, ZonePageDefinition>;

export const BEIRUT_AIRPORT_PAGE: ZonePageDefinition = {
  title: "Beirut Airport Taxi",
  description: "Fast airport pickups and drop-offs. Book via WhatsApp — available 24/7.",
  href: ROUTES.BEIRUT_AIRPORT_TAXI,
  slug: "beirut" as ZoneSlug,
  image: "/images/beirut.jpg",
  gradient: "from-sky-500 via-blue-600 to-indigo-700",
};

export const ZONE_PAGE_LIST: ZonePageDefinition[] = [
  ZONE_PAGES.TRIPOLI,
  ZONE_PAGES.BATROUN,
  ZONE_PAGES.BEIRUT,
  BEIRUT_AIRPORT_PAGE,
];