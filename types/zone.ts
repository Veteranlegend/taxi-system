import { SupportedService } from "@/types/service";
import { ZoneSlug } from "@/types/zoneSlug";

export type Zone = {
  id: number;
  slug: ZoneSlug;
  name: string;
  isActive: boolean;
  acceptPickup: boolean;
  acceptDropoff: boolean;
  supportedServices: SupportedService[];
};