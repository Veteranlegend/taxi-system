"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <button
      onClick={() => setLang(isArabic ? "en" : "ar")}
      className="fixed top-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-md backdrop-blur-sm transition hover:border-slate-300 hover:shadow-lg active:scale-95"
      aria-label="Toggle language"
    >
      <span className="text-base leading-none">{isArabic ? "🇬🇧" : "🇱🇧"}</span>
      {isArabic ? "English" : "عربي"}
    </button>
  );
}
