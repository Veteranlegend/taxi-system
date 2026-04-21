"use client";

import { useMemo, useState } from "react";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import PriceEstimator from "@/components/PriceEstimator";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";
import { ZoneSlug } from "@/types/zoneSlug";
import { ZoneService } from "@/services/zoneService";
import { ZoneViewModelMapper } from "@/viewModels/zoneViewModel";
import { useLanguage } from "@/contexts/LanguageContext";

type ZoneLandingPageProps = {
  slug: ZoneSlug;
  title: string;
  description: string;
  image?: string;
};

export default function ZoneLandingPage({
  slug,
  title,
  description,
  image,
}: ZoneLandingPageProps) {
  const [destinationCity, setDestinationCity] = useState("");
  const [note, setNote] = useState("");
  const [pickupLink, setPickupLink] = useState("");
  const { t, lang } = useLanguage();

  const zone = ZoneService.getZoneBySlug(slug);

  const zoneViewModel = useMemo(() => {
    if (!zone) return null;
    return ZoneViewModelMapper.toViewModel(zone, {
      destinationCity: destinationCity.trim() || undefined,
      note: note.trim() || undefined,
      pickupLink: pickupLink || undefined,
      lang,
    });
  }, [zone, destinationCity, note, pickupLink, lang]);

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported on your device.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPickupLink(`https://www.google.com/maps?q=${latitude},${longitude}`);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  const translatedTitle = t.zoneTitles[slug] || title;
  const translatedDescription = t.zoneDescriptions[slug] || description;

  if (!zone || !zoneViewModel) {
    return (
      <LandingPageLayout title={translatedTitle} description={translatedDescription}>
        <p>Zone not found.</p>
      </LandingPageLayout>
    );
  }

  return (
    <LandingPageLayout title={translatedTitle} description={translatedDescription} image={image}>
      <div className="grid gap-5 lg:grid-cols-2">

        {/* Price estimator */}
        <PriceEstimator
          defaultFromId={slug}
          onDestinationChange={(label) => setDestinationCity(label)}
        />

        {/* Booking card */}
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:p-7">
          <div className="flex flex-col gap-5">

            {/* 1. Message preview + integrated note */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="px-4 pt-4 pb-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.yourWhatsappMessage}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                  {zoneViewModel.whatsappMessage}
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

            {/* 2. Location sharing */}
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {t.shareLocation}
                  <span className="ms-1.5 text-xs font-normal text-slate-500">{t.recommended}</span>
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {t.helpsDriver}
                </p>
              </div>
              <button
                onClick={handleUseLocation}
                className={`shrink-0 rounded-xl px-4 py-2 text-xs font-semibold transition active:scale-95 ${
                  pickupLink
                    ? "bg-emerald-500 text-white"
                    : "bg-sky-700 text-white hover:bg-sky-800"
                }`}
              >
                {pickupLink ? t.locationAdded : t.share}
              </button>
            </div>

            {/* 3. WhatsApp CTA */}
            <WhatsAppCTAButton href={zoneViewModel.whatsappUrl} />
          </div>
        </div>

      </div>
    </LandingPageLayout>
  );
}
