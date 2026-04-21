"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BackButton() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => router.push("/")}
      className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 py-2 pl-3 pr-5 rtl:pl-5 rtl:pr-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(15,23,42,0.18)] transition hover:bg-slate-700 hover:shadow-[0_4px_18px_rgba(15,23,42,0.28)] active:scale-[0.97]"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white/25">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0"
        >
          <path d="M10 3L5 8l5 5" />
        </svg>
      </span>
      {t.backToAllAreas}
    </button>
  );
}
