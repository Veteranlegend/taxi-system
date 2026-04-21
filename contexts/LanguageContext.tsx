"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "@/translations/en";
import ar from "@/translations/ar";
import type { Translations } from "@/translations/en";

type Language = "en" | "ar";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
  isArabic: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const t = lang === "ar" ? ar : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isArabic: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
