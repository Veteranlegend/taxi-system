import Link from "next/link";

type WhatsAppCTAButtonProps = {
  href: string;
  label?: string;
};

export function WhatsAppCTAButton({
  href,
  label = "Send request on WhatsApp",
}: WhatsAppCTAButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.30)] transition hover:bg-[#22c55e] hover:shadow-[0_6px_20px_rgba(37,211,102,0.40)] active:scale-[0.98]"
    >
      {label}
    </Link>
  );
}
