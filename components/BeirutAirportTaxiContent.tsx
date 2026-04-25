"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function BeirutAirportTaxiContent() {
  const { t } = useLanguage();

  const generalWhatsAppUrl = buildWhatsAppUrl(t.airportGeneralMessage);

  return (
    <LandingPageLayout
      title={t.airportPageTitle}
      description={t.airportPageDescription}
      image="/images/beirut.jpg"
    >
      <div className="space-y-10">

        {/* Benefits */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.airportBenefitsLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.airportBenefits.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
              >
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular routes */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.airportRoutesLabel}
          </p>
          <div className="space-y-3">
            {t.airportRoutes.map(({ from, to, message }) => {
              const routeUrl = buildWhatsAppUrl(message);
              return (
                <div
                  key={to}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-900">{from}</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-sm font-semibold text-slate-900">{to}</span>
                  </div>
                  <a
                    href={routeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22c55e] active:scale-95"
                  >
                    {t.airportBookRoute}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA block */}
        <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-7 text-center">
          <p className="text-lg font-bold text-slate-900">{t.airportCtaTitle}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{t.airportCtaBody}</p>
          <div className="mt-5">
            <WhatsAppCTAButton href={generalWhatsAppUrl} label={t.airportBookNow} />
          </div>
        </div>

      </div>
    </LandingPageLayout>
  );
}
