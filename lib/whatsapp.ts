const WHATSAPP_BASE_URL = "https://wa.me";

const PHONE_NUMBER = "4527184800"; 
// Replace with your real number later (Lebanon format without +)

export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);

  return `${WHATSAPP_BASE_URL}/${PHONE_NUMBER}?text=${encodedMessage}`;
}