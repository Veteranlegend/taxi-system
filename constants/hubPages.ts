import { ROUTES } from "@/constants/routes";

export type HubPage = {
  title: string;
  href: string;
};

export const HUB_PAGES: HubPage[] = [
  {
    title: "Tripoli Taxi",
    href: ROUTES.TRIPOLI_TAXI,
  },
  {
    title: "Batroun Taxi",
    href: ROUTES.BATROUN_TAXI,
  },
  {
    title: "Beirut Taxi",
    href: ROUTES.BEIRUT_TAXI,
  },
  {
    title: "Airport Transfer North Lebanon",
    href: ROUTES.AIRPORT_TRANSFER_NORTH_LEBANON,
  },
];