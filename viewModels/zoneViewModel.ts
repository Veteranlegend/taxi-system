import { SERVICES } from "@/constants/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ZoneService } from "@/services/zoneService";
import { WhatsAppMessageService } from "@/services/whatsappMessageService";
import { Zone } from "@/types/zone";

export type ZoneInquiryInput = {
  destinationCity?: string;
  note?: string;
  pickupLink?: string;
};

export type ZoneViewModel = {
  id: number;
  name: string;
  availabilityMessage: string;
  isAvailable: boolean;
  showContactFallback: boolean;
  supportsLocal: boolean;
  supportsAirport: boolean;
  whatsappMessage: string;
  whatsappUrl: string;
};

export class ZoneViewModelMapper {
  static toViewModel(zone: Zone, input?: ZoneInquiryInput): ZoneViewModel {
    const whatsappMessage = WhatsAppMessageService.buildZoneInquiry(
      zone.slug,
      SERVICES.LOCAL,
      {
        destinationCity: input?.destinationCity,
        note: input?.note,
        pickupLink: input?.pickupLink,
      }
    );

    return {
      id: zone.id,
      name: zone.name,
      availabilityMessage: ZoneService.getAvailabilityMessage(zone.slug),
      isAvailable: ZoneService.shouldShowAvailableBadge(zone.slug),
      showContactFallback: ZoneService.shouldShowContactFallback(zone.slug),
      supportsLocal: ZoneService.shouldShowService(zone.slug, SERVICES.LOCAL),
      supportsAirport: ZoneService.shouldShowService(zone.slug, SERVICES.AIRPORT),
      whatsappMessage,
      whatsappUrl: buildWhatsAppUrl(whatsappMessage),
    };
  }
}