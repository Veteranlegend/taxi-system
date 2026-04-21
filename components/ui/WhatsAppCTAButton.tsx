"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type WhatsAppCTAButtonProps = {
  href: string;
  label?: string;
};

export function WhatsAppCTAButton({ href, label }: WhatsAppCTAButtonProps) {
  const { t } = useLanguage();
  const buttonLabel = label ?? t.sendRequestOnWhatsApp;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.30)] transition hover:bg-[#22c55e] hover:shadow-[0_6px_20px_rgba(37,211,102,0.40)] active:scale-[0.98]"
    >
      {buttonLabel}
    </Link>
  );
}
