import { MESSAGES } from "@/constants/messages";
import { ZoneService } from "@/services/zoneService";
import { SupportedService } from "@/types/service";
import { ZoneSlug } from "@/types/zoneSlug";

type ZoneInquiryOptions = {
  destinationCity?: string;
  note?: string;
  pickupLink?: string;
  lang?: string;
};

export type GenericInquiryOptions = {
  fromLabel: string;
  toLabel: string;
  estimatedRange?: string;
  note?: string;
  pickupLink?: string;
  lang?: string;
};

export class WhatsAppMessageService {
  static buildZoneInquiry(
    slug: ZoneSlug,
    service: SupportedService,
    options?: ZoneInquiryOptions
  ): string {
    const zone = ZoneService.getZoneBySlug(slug);
    const isAr = options?.lang === "ar";

    if (!zone) {
      return isAr
        ? "مرحباً، أود الاستفسار عن خدمة التاكسي لديكم."
        : MESSAGES.DEFAULT_WHATSAPP_INQUIRY;
    }

    const destinationLine = options?.destinationCity
      ? isAr
        ? `\nالوجهة: ${options.destinationCity}`
        : `\nDestination city: ${options.destinationCity}`
      : "";

    const noteLine = options?.note
      ? isAr
        ? `\nملاحظة: ${options.note}`
        : `\nNote: ${options.note}`
      : "";

    const pickupLinkLine = options?.pickupLink
      ? isAr
        ? `\nموقع الاستلام: ${options.pickupLink}`
        : `\nPickup location: ${options.pickupLink}`
      : "";

    if (!ZoneService.isZoneActive(slug)) {
      return isAr
        ? `مرحباً، أود الاستفسار عن توفر التاكسي.\n\nمدينة الاستلام: ${zone.name}` +
            pickupLinkLine +
            destinationLine +
            noteLine
        : `Hi, I would like to ask about taxi availability.\n\nPickup city: ${zone.name}` +
            pickupLinkLine +
            destinationLine +
            noteLine;
    }

    return isAr
      ? `مرحباً، أحتاج إلى خدمة تاكسي.\n\nمدينة الاستلام: ${zone.name}` +
          pickupLinkLine +
          destinationLine +
          noteLine
      : `Hi, I need a ${service} taxi service.\n\nPickup city: ${zone.name}` +
          pickupLinkLine +
          destinationLine +
          noteLine;
  }

  static buildGenericInquiry(options: GenericInquiryOptions): string {
    const isAr = options.lang === "ar";

    const pickupLinkLine = options.pickupLink
      ? isAr
        ? `\nموقع الاستلام: ${options.pickupLink}`
        : `\nPickup location: ${options.pickupLink}`
      : "";

    const estimateLine = options.estimatedRange
      ? isAr
        ? `\nالسعر المقدر: ${options.estimatedRange}`
        : `\nEstimated price: ${options.estimatedRange}`
      : "";

    const noteLine = options.note
      ? isAr
        ? `\nملاحظة: ${options.note}`
        : `\nNote: ${options.note}`
      : "";

    return isAr
      ? `مرحباً، أود طلب تاكسي.\n\nمن: ${options.fromLabel}` +
          pickupLinkLine +
          `\nإلى: ${options.toLabel}` +
          estimateLine +
          noteLine
      : `Hi, I would like to request a taxi.\n\nFrom: ${options.fromLabel}` +
          pickupLinkLine +
          `\nTo: ${options.toLabel}` +
          estimateLine +
          noteLine;
  }
}
