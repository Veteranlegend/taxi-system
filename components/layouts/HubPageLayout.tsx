"use client";

import Image from "next/image";
import AppContainer from "@/components/ui/AppContainer";
import PageSection from "@/components/PageSection";
import ScrollSaveLink from "@/components/ui/ScrollSaveLink";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MESSAGES } from "@/constants/messages";
import { useLanguage } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

type HubPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function HubPageLayout({
  title,
  description,
  children,
}: HubPageLayoutProps) {
  const { t, isArabic } = useLanguage();
  const defaultMsg = isArabic
    ? "مرحباً، أود الاستفسار عن خدمة التاكسي لديكم."
    : MESSAGES.DEFAULT_WHATSAPP_INQUIRY;
  const whatsappUrl = buildWhatsAppUrl(defaultMsg);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.22),_transparent_32%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f1f5f9)]">
      <AppContainer>

        {/* HERO */}
        <header className="relative mb-10 overflow-hidden rounded-[2rem] shadow-[0_16px_56px_rgba(15,23,42,0.18)]">
          <div className="relative min-h-[500px] flex items-end sm:min-h-[540px] lg:min-h-[580px]">
            <Image
              src="/images/alrawshe.jpeg"
              alt="Rawshe Rock, Beirut — Direct Taxi Lebanon"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 960px"
              quality={75}
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-slate-900/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="relative w-full p-7 sm:p-10 lg:p-14">
              <div className="max-w-2xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                  {t.bookViaWhatsApp}
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </div>

                <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-white via-white to-amber-300 bg-clip-text text-transparent">
                  {title}
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-white sm:text-lg sm:leading-8 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {description}
                </p>

                <p className="mt-3 flex items-center gap-2 text-sm text-white/75">
                  <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto shrink-0">
                    {/* Taxi sign on roof */}
                    <rect x="12" y="0" width="12" height="5" rx="1.5" fill="#FBBF24"/>
                    <text x="18" y="4.2" textAnchor="middle" fontSize="3.2" fontWeight="900" fontFamily="Arial" fill="#0f172a">TAXI</text>
                    {/* Car body */}
                    <rect x="2" y="10" width="32" height="10" rx="2.5" fill="#FBBF24"/>
                    {/* Roof */}
                    <path d="M10 10 L13 5 L23 5 L26 10 Z" fill="#FBBF24"/>
                    {/* Windshield */}
                    <path d="M11.5 10 L14 6 L22 6 L24.5 10 Z" fill="#0f172a" opacity="0.35"/>
                    {/* Left wheel */}
                    <circle cx="9" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="9" cy="20" r="1.8" fill="#475569"/>
                    {/* Right wheel */}
                    <circle cx="27" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="27" cy="20" r="1.8" fill="#475569"/>
                    {/* Headlight */}
                    <rect x="2.5" y="13" width="4" height="2.5" rx="1" fill="#FEF08A"/>
                    {/* Taillight */}
                    <rect x="29.5" y="13" width="4" height="2.5" rx="1" fill="#FCA5A5"/>
                    {/* Door line */}
                    <line x1="18" y1="10.5" x2="18" y2="19.5" stroke="#d97706" strokeWidth="0.8"/>
                  </svg>
                  {isArabic
                    ? "بيروت · جبيل · البترون · طرابلس · وكل لبنان"
                    : "Beirut · Jbeil · Batroun · Tripoli · and all of Lebanon"}
                  <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto shrink-0">
                    <rect x="12" y="0" width="12" height="5" rx="1.5" fill="#FBBF24"/>
                    <text x="18" y="4.2" textAnchor="middle" fontSize="3.2" fontWeight="900" fontFamily="Arial" fill="#0f172a">TAXI</text>
                    <rect x="2" y="10" width="32" height="10" rx="2.5" fill="#FBBF24"/>
                    <path d="M10 10 L13 5 L23 5 L26 10 Z" fill="#FBBF24"/>
                    <path d="M11.5 10 L14 6 L22 6 L24.5 10 Z" fill="#0f172a" opacity="0.35"/>
                    <circle cx="9" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="9" cy="20" r="1.8" fill="#475569"/>
                    <circle cx="27" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="27" cy="20" r="1.8" fill="#475569"/>
                    <rect x="2.5" y="13" width="4" height="2.5" rx="1" fill="#FEF08A"/>
                    <rect x="29.5" y="13" width="4" height="2.5" rx="1" fill="#FCA5A5"/>
                    <line x1="18" y1="10.5" x2="18" y2="19.5" stroke="#d97706" strokeWidth="0.8"/>
                  </svg>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#20bc5a] active:scale-95"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t.bookViaWhatsApp}
                  </a>
                  <ScrollSaveLink
                    href="/price-estimate"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    {t.getPriceEstimate}
                  </ScrollSaveLink>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href="tel:+96170452864"
                    dir="ltr"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    +961 70 452 864
                  </a>
                  <span className="text-white/60">·</span>
                  <span className="text-xs font-semibold text-white/90">{t.available24_7}</span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-2">
                  {t.trustPills.map((label) => (
                    <span key={label} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                      {label}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </header>

        <PageSection title={t.chooseServiceArea}>
          {children}
        </PageSection>

      </AppContainer>
    </div>
  );
}
