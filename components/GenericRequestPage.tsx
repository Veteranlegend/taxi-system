"use client";

import { useMemo, useState } from "react";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";
import { PriceEstimationService } from "@/services/priceEstimationService";
import { PriceEstimateViewModelMapper } from "@/viewModels/priceEstimateViewModel";
import { GenericRequestViewModelMapper } from "@/viewModels/genericRequestViewModel";

export default function GenericRequestPage() {
  const locations = PriceEstimationService.getLocations();

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
      PriceEstimationService.estimate(from, to)
    );
    const rVm = GenericRequestViewModelMapper.toViewModel({
      fromLabel: from.label,
      toLabel: to.label,
      estimatedRange: pVm.rangeLabel,
      note: note.trim() || undefined,
      pickupLink: pickupLink || undefined,
    });

    return { priceEstimateVm: pVm, requestVm: rVm };
  }, [fromId, toId, note, pickupLink]);

  return (
    <LandingPageLayout
      title="Request a Ride"
      description="Select your pickup and destination to get an approximate price, then send your request directly via WhatsApp."
    >
      {/* Info strip */}
      <div className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Booking method
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Direct WhatsApp contact
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Coverage
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            All of Lebanon
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Price estimate
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Shown before contacting
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Ride type
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Local, intercity, airport
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">

        {/* Left: trip details form */}
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Trip details</h2>
              <p className="mt-1 text-sm text-slate-500">
                Select your route to see a price and prepare your request.
              </p>
            </div>
            <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 sm:block">
              Any area
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                From
              </label>
              <select
                value={fromId}
                onChange={(e) => setFromId(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-3 focus:ring-sky-100"
              >
                <option value="">Select pickup location</option>
                {locations.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                To
              </label>
              <select
                value={toId}
                onChange={(e) => setToId(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-3 focus:ring-sky-100"
              >
                <option value="">Select destination</option>
                {locations
                  .filter((l) => l.id !== fromId)
                  .map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.label}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <button
                onClick={handleUseLocation}
                className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98]"
              >
                Use my current location
              </button>
              {pickupLink && (
                <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  Location added successfully.
                </div>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Optional note
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Example: 2 passengers, luggage, airport drop-off"
                rows={3}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-3 focus:ring-sky-100"
              />
            </div>
          </div>
        </div>

        {/* Right: estimate + WhatsApp */}
        <div>
          {!requestVm ? (
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-sm font-semibold text-slate-900">
                Price estimate &amp; request
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Select your pickup location and destination to see an
                approximate price range and prepare your WhatsApp message.
              </p>
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
                  <p className="mt-1.5 text-xs text-slate-400">
                    {priceEstimateVm.distanceLabel}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {priceEstimateVm.disclaimer}
                  </p>
                </div>
              )}

              {/* WhatsApp message preview */}
              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Your WhatsApp message
                </p>
                <div className="mt-2.5 max-h-28 overflow-y-auto rounded-xl bg-white px-3 py-2.5 shadow-sm">
                  <p className="whitespace-pre-line text-sm leading-6 text-slate-600">
                    {requestVm.whatsappMessage}
                  </p>
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
