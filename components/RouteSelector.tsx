"use client";

import { useMemo, useState } from "react";
import { LocationService } from "@/services/locationService";
import { GenericRequestViewModelMapper } from "@/viewModels/genericRequestViewModel";
import { useLanguage } from "@/contexts/LanguageContext";
import LocationSearch from "@/components/ui/LocationSearch";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";

type RouteSelectorProps = {
  defaultFromId?: string;
  defaultToId?: string;
  onDestinationChange?: (label: string) => void;
  /** Render a WhatsApp request button once a full route is selected. */
  withRequestCta?: boolean;
};

export default function RouteSelector({
  defaultFromId,
  defaultToId,
  onDestinationChange,
  withRequestCta = false,
}: RouteSelectorProps) {
  const locations = LocationService.getLocations();
  const [fromId, setFromId] = useState(defaultFromId ?? "");
  const [toId, setToId] = useState(defaultToId ?? "");
  const { t, lang } = useLanguage();

  const route = useMemo(() => {
    if (!fromId || !toId || fromId === toId) return null;
    const from = LocationService.getLocationById(fromId);
    const to = LocationService.getLocationById(toId);
    if (!from || !to) return null;
    return { from, to };
  }, [fromId, toId]);

  const requestVm = useMemo(() => {
    if (!withRequestCta || !route) return null;
    const isAr = lang === "ar";
    return GenericRequestViewModelMapper.toViewModel({
      fromLabel: isAr ? route.from.labelAr : route.from.label,
      toLabel: isAr ? route.to.labelAr : route.to.label,
      lang,
    });
  }, [withRequestCta, route, lang]);

  return (
    <div className="rounded-[1.75rem] border border-white/30 bg-white/55 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:p-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{t.routeSelectorTitle}</h2>
        <p className="mt-1 text-sm text-slate-500">{t.routeSelectorSubtitle}</p>
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

      {route && (
        <>
          {requestVm && (
            <div className="mt-5">
              <WhatsAppCTAButton href={requestVm.whatsappUrl} />
            </div>
          )}

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
