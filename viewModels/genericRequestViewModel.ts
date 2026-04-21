import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppMessageService } from "@/services/whatsappMessageService";

export type GenericRequestInput = {
  fromLabel: string;
  toLabel: string;
  estimatedRange?: string;
  note?: string;
  pickupLink?: string;
  lang?: string;
};

export type GenericRequestViewModel = {
  whatsappMessage: string;
  whatsappUrl: string;
};

export class GenericRequestViewModelMapper {
  static toViewModel(input: GenericRequestInput): GenericRequestViewModel {
    const whatsappMessage = WhatsAppMessageService.buildGenericInquiry({
      fromLabel: input.fromLabel,
      toLabel: input.toLabel,
      estimatedRange: input.estimatedRange,
      note: input.note,
      pickupLink: input.pickupLink,
      lang: input.lang,
    });

    return {
      whatsappMessage,
      whatsappUrl: buildWhatsAppUrl(whatsappMessage),
    };
  }
}
