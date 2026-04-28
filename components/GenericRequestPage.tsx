"use client";

import { useMemo, useState } from "react";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";
import { PriceEstimationService } from "@/services/priceEstimationService";
import { PriceEstimateViewModelMapper } from "@/viewModels/priceEstimateViewModel";
import { GenericRequestViewModelMapper } from "@/viewModels/genericRequestViewModel";
import { useLanguage } from "@/contexts/LanguageContext";
import LocationSearch from "@/components/ui/LocationSearch";

export default function GenericRequestPage() {
  const locations = PriceEstimationService.getLocations();
  const { t, lang } = useLanguage();

  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [note, setNote] = useState("");
  const [pickupLink, setPickupLink] = useState("");

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

  const { priceEstimateVm, requestVm } = useMemo(() => {
    if (!fromId || !toId || fromId === toId) {
      return { priceEstimateVm: null, requestVm: null };
    }
    const from = PriceEstimationService.getLocationById(fromId);
    const to = PriceEstimationService.getLocationById(toId);
    if (!from || !to) return { priceEstimateVm: null, requestVm: null };

    const pVm = PriceEstimateViewModelMapper.toViewModel(
      PriceEstimationService.estimate(from, to),
      lang
    );
    const rVm = GenericRequestViewModelMapper.toViewModel({
      fromLabel: from.label,
      toLabel: to.label,
      estimatedRange: pVm.rangeLabel,
      note: note.trim() || undefined,
      pickupLink: pickupLink || undefined,
      lang,
    });

    return { priceEstimateVm: pVm, requestVm: rVm };
  }, [fromId, toId, note, pickupLink]);

  return (
    <LandingPageLayout
      title={t.requestTitle}
      description={t.requestDescription}
      image="/images/lebanon-other.jpg"
    >
      {/* Trust bar */}
      <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        {t.trustBarItems.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {item}
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">

        {/* Left: trip details form */}
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{t.tripDetails}</h2>
              <p className="mt-1 text-sm text-slate-500">
                {t.tripDetailsSubtitle}
              </p>
            </div>
            <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 sm:block">
              {t.anyArea}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">{t.from}</label>
              <LocationSearch
                value={fromId}
                onChange={(id) => setFromId(id)}
                locations={locations}
                placeholder={t.selectPickupLocation}
                excludeId={toId}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">{t.to}</label>
              <LocationSearch
                value={toId}
                onChange={(id) => setToId(id)}
                locations={locations}
                placeholder={t.selectDestinationOption}
                excludeId={fromId}
              />
            </div>

            {/* Location — compact inline */}
            <div className="flex items-start justify-between gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3.5">
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

          </div>
        </div>

        {/* Right: estimate + WhatsApp */}
        <div>
          {!requestVm ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-dashed border-slate-200 bg-white/60 p-10 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-slate-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">{t.selectRouteTitle}</p>
                <p className="mt-1 text-sm text-slate-500">{t.selectRouteDescription}</p>
              </div>
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.07)] sm:p-6">

              {/* Price estimate */}
              {priceEstimateVm && (
                <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${priceEstimateVm.tripTypeBadgeStyle}`}
                    >
                      {priceEstimateVm.tripTypeLabel}
                    </span>
                    <p className="text-2xl font-bold tracking-tight text-slate-900">
                      {priceEstimateVm.rangeLabel}
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {priceEstimateVm.distanceLabel}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {priceEstimateVm.disclaimer}
                  </p>
                </div>
              )}

              {/* Message preview + integrated note */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="px-4 pt-4 pb-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t.yourWhatsappMessage}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {requestVm.whatsappMessage}
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

              {/* CTA */}
              <div className="mt-5">
                <WhatsAppCTAButton href={requestVm.whatsappUrl} />
              </div>
            </div>
          )}
        </div>

      </div>
    </LandingPageLayout>
  );
}
