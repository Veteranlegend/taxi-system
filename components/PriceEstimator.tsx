"use client";

import { useMemo, useState } from "react";
import { PriceEstimationService } from "@/services/priceEstimationService";
import { PriceEstimateViewModelMapper } from "@/viewModels/priceEstimateViewModel";
import { useLanguage } from "@/contexts/LanguageContext";
import LocationSearch from "@/components/ui/LocationSearch";

type PriceEstimatorProps = {
  defaultFromId?: string;
  defaultToId?: string;
  continuePath?: string;
  onDestinationChange?: (label: string) => void;
};

export default function PriceEstimator({
  defaultFromId,
  defaultToId,
  onDestinationChange,
}: PriceEstimatorProps) {
  const locations = PriceEstimationService.getLocations();
  const [fromId, setFromId] = useState(defaultFromId ?? "");
  const [toId, setToId] = useState(defaultToId ?? "");
  const { t, lang } = useLanguage();

  const vm = useMemo(() => {
    if (!fromId || !toId || fromId === toId) return null;
    const from = PriceEstimationService.getLocationById(fromId);
    const to = PriceEstimationService.getLocationById(toId);
    if (!from || !to) return null;
    return PriceEstimateViewModelMapper.toViewModel(
      PriceEstimationService.estimate(from, to),
      lang
    );
  }, [fromId, toId, lang]);

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.18)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{t.priceEstimateTitle}</h2>
          <p className="mt-1 text-sm text-slate-500">{t.priceEstimateSubtitle}</p>
        </div>
        <div className="hidden rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 sm:block">
          {t.approximate}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t.from}</label>
          <LocationSearch
            value={fromId}
            onChange={(id) => setFromId(id)}
            locations={locations}
            placeholder={t.selectPickup}
            excludeId={toId}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t.to}</label>
          <LocationSearch
            value={toId}
            onChange={(id, label) => {
              setToId(id);
              onDestinationChange?.(label);
            }}
            locations={locations}
            placeholder={t.selectDestination}
            excludeId={fromId}
          />
        </div>
      </div>

      {vm && (
        <>
          <div className="mt-5 rounded-2xl border border-sky-200/80 bg-white px-4 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${vm.tripTypeBadgeStyle}`}>
                {vm.tripTypeLabel}
              </span>
              <p className="text-2xl font-bold tracking-tight text-slate-900">{vm.rangeLabel}</p>
            </div>
            <p className="mt-2 text-xs text-slate-500">{vm.distanceLabel}</p>
            <p className="mt-3 text-xs leading-5 text-slate-500">{vm.disclaimer}</p>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
            <p className="text-sm font-semibold text-slate-900">{t.prebookTitle}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{t.prebookDescription}</p>
            <div className="mt-3 flex justify-end rtl:justify-start">
              <a
                href="tel:+96170452864"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
              >
                {t.callToConfirm}
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
