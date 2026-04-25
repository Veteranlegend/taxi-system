"use client";

import { useState, useMemo } from "react";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import PriceEstimator from "@/components/PriceEstimator";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function BeirutAirportTaxiContent() {
  const { t, isArabic } = useLanguage();
  const [note, setNote] = useState("");
  const [pickupLink, setPickupLink] = useState("");
  const [destinationCity, setDestinationCity] = useState("");

  const whatsappMessage = useMemo(() => {
    const base = t.airportGeneralMessage;
    const dest = destinationCity ? (isArabic ? ` — الوجهة: ${destinationCity}` : ` — Destination: ${destinationCity}`) : "";
    const notePart = note.trim() ? `\n${note.trim()}` : "";
    const locationPart = pickupLink ? `\n📍 ${pickupLink}` : "";
    return `${base}${dest}${notePart}${locationPart}`;
  }, [t.airportGeneralMessage, destinationCity, note, pickupLink, isArabic]);

  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  const handleUseLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setPickupLink(`https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`),
      () => alert("Unable to retrieve your location.")
    );
  };

  return (
    <LandingPageLayout
      title={t.airportPageTitle}
      description={t.airportPageDescription}
      image="/images/airport.jpg"
    >
      <div className="space-y-10">

        {/* Price estimator + booking card */}
        <div className="grid gap-5 lg:grid-cols-2">

          <PriceEstimator
            defaultFromId="airport"
            onDestinationChange={(label) => setDestinationCity(label)}
          />

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="flex flex-col gap-5">

              {/* Message preview + note */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="px-4 pt-4 pb-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t.yourWhatsappMessage}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {whatsappMessage}
                  </p>
                </div>
                <div className="border-t border-slate-200 bg-white">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={t.addNote}
                    rows={2}
                    className="w-full resize-none bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Location sharing */}
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {t.shareLocation}
                    <span className="ms-1.5 text-xs font-normal text-slate-500">{t.recommended}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{t.helpsDriver}</p>
                </div>
                <button
                  onClick={handleUseLocation}
                  className={`shrink-0 rounded-xl px-4 py-2 text-xs font-semibold transition active:scale-95 ${
                    pickupLink ? "bg-emerald-500 text-white" : "bg-sky-700 text-white hover:bg-sky-800"
                  }`}
                >
                  {pickupLink ? t.locationAdded : t.share}
                </button>
              </div>

              {/* WhatsApp CTA */}
              <WhatsAppCTAButton href={whatsappUrl} label={t.airportBookNow} />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.airportBenefitsLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.airportBenefits.map(({ title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
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
            {t.airportRoutes.map(({ from, to, message }) => (
              <div key={to} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-slate-900">{from}</span>
                  <span className="text-slate-400">{isArabic ? "←" : "→"}</span>
                  <span className="text-sm font-semibold text-slate-900">{to}</span>
                </div>
                <a
                  href={buildWhatsAppUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22c55e] active:scale-95"
                >
                  {t.airportBookRoute}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-7 text-center">
          <p className="text-lg font-bold text-slate-900">{t.airportCtaTitle}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{t.airportCtaBody}</p>
          <div className="mt-5">
            <WhatsAppCTAButton href={whatsappUrl} label={t.airportBookNow} />
          </div>
        </div>

      </div>
    </LandingPageLayout>
  );
}
