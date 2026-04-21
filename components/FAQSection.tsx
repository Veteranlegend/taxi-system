"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left rtl:text-right"
      >
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M8 3v10M3 8h10" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-48 pb-5" : "max-h-0"}`}>
        <p className="text-sm leading-6 text-slate-500">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {t.faqLabel}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {t.faqTitle}
        </h2>
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-white px-5 sm:px-7">
        {t.faqItems.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}
