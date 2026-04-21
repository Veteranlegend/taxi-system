import { MESSAGES } from "@/constants/messages";
import { ZoneService } from "@/services/zoneService";
import { SupportedService } from "@/types/service";
import { ZoneSlug } from "@/types/zoneSlug";

type ZoneInquiryOptions = {
  destinationCity?: string;
  note?: string;
  pickupLink?: string;
};

export type GenericInquiryOptions = {
  fromLabel: string;
  toLabel: string;
  estimatedRange?: string;
  note?: string;
  pickupLink?: string;
};

export class WhatsAppMessageService {
  static buildZoneInquiry(
    slug: ZoneSlug,
    service: SupportedService,
    options?: ZoneInquiryOptions
  ): string {
    const zone = ZoneService.getZoneBySlug(slug);

    if (!zone) {
      return MESSAGES.DEFAULT_WHATSAPP_INQUIRY;
    }

    const destinationLine = options?.destinationCity
      ? `\nDestination city: ${options.destinationCity}`
      : "";

    const noteLine = options?.note ? `\nNote: ${options.note}` : "";

    const pickupLinkLine = options?.pickupLink
      ? `\nPickup location: ${options.pickupLink}`
      : "";

    if (!ZoneService.isZoneActive(slug)) {
      return (
        `Hi, I would like to ask about taxi availability.\n\n` +
        `Pickup city: ${zone.name}` +
        pickupLinkLine +
        destinationLine +
        noteLine
      );
    }

    return (
      `Hi, I need a ${service} taxi service.\n\n` +
      `Pickup city: ${zone.name}` +
      pickupLinkLine +
      destinationLine +
      noteLine
    );
  }

  static buildGenericInquiry(options: GenericInquiryOptions): string {
    const pickupLinkLine = options.pickupLink
      ? `\nPickup location: ${options.pickupLink}`
      : "";

    const estimateLine = options.estimatedRange
      ? `\nEstimated price: ${options.estimatedRange}`
      : "";

    const noteLine = options.note ? `\nNote: ${options.note}` : "";

    return (
      `Hi, I would like to request a taxi.\n\n` +
      `From: ${options.fromLabel}` +
      pickupLinkLine +
      `\nTo: ${options.toLabel}` +
      estimateLine +
      noteLine
    );
  }
}
