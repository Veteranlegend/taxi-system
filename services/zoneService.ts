import { zones } from "@/config/zones";
import { MESSAGES } from "@/constants/messages";
import { SupportedService } from "@/types/service";
import { Zone } from "@/types/zone";
import { ZoneSlug } from "@/types/zoneSlug";

export class ZoneService {
  static getAllZones(): Zone[] {
    return zones;
  }

  static getZoneBySlug(slug: ZoneSlug): Zone | undefined {
    return zones.find((zone) => zone.slug === slug);
  }

  static getZonesByService(service: SupportedService): Zone[] {
    return zones.filter((zone) => zone.supportedServices.includes(service));
  }

  static isZoneActive(slug: ZoneSlug): boolean {
    const zone = this.getZoneBySlug(slug);
    return zone?.isActive ?? false;
  }

  static canPickup(slug: ZoneSlug): boolean {
    const zone = this.getZoneBySlug(slug);
    return zone?.acceptPickup ?? false;
  }

  static canDropoff(slug: ZoneSlug): boolean {
    const zone = this.getZoneBySlug(slug);
    return zone?.acceptDropoff ?? false;
  }

  static supportsService(slug: ZoneSlug, service: SupportedService): boolean {
    const zone = this.getZoneBySlug(slug);
    return zone?.supportedServices.includes(service) ?? false;
  }

  static shouldShowAvailableBadge(slug: ZoneSlug): boolean {
    return this.isZoneActive(slug);
  }

  static shouldShowContactFallback(slug: ZoneSlug): boolean {
    return !this.isZoneActive(slug);
  }

  static shouldShowService(slug: ZoneSlug, service: SupportedService): boolean {
    return this.isZoneActive(slug) && this.supportsService(slug, service);
  }

  static getAvailabilityMessage(slug: ZoneSlug): string {
    const zone = this.getZoneBySlug(slug);

    if (!zone) {
      return MESSAGES.ZONE_NOT_FOUND;
    }

    if (!zone.isActive) {
      return `Taxi service is currently not available in ${zone.name}.`;
    }

    return `Taxi service is available in ${zone.name}.`;
  }
}