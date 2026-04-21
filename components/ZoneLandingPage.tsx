"use client";

import { useMemo, useState } from "react";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import ZoneCard from "@/components/zone/ZoneCard";
import PriceEstimator from "@/components/PriceEstimator";
import { ZoneSlug } from "@/types/zoneSlug";
import { ZoneService } from "@/services/zoneService";
import { ZoneViewModelMapper } from "@/viewModels/zoneViewModel";

type ZoneLandingPageProps = {
  slug: ZoneSlug;
  title: string;
  description: string;
};

export default function ZoneLandingPage({
  slug,
  title,
  description,
}: ZoneLandingPageProps) {
  const [destinationCity, setDestinationCity] = useState("");
  const [note, setNote] = useState("");
  const [pickupLink, setPickupLink] = useState("");

  const zone = ZoneService.getZoneBySlug(slug);

  const zoneViewModel = useMemo(() => {
    if (!zone) return null;
    return ZoneViewModelMapper.toViewModel(zone, {
      destinationCity: destinationCity.trim() || undefined,
      note: note.trim() || undefined,
      pickupLink: pickupLink || undefined,
    });
  }, [zone, destinationCity, note, pickupLink]);

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

  if (!zone || !zoneViewModel) {
    return (
      <LandingPageLayout title={title} description={description}>
        <p>Zone not found.</p>
      </LandingPageLayout>
    );
  }

  return (
    <LandingPageLayout title={title} description={description}>

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
            Pickup support
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Current location sharing
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Ride type
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Local and intercity taxi
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Availability
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Status shown before contact
          </p>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">

        {/* Trip details */}
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Trip details</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill in your route before opening WhatsApp.
              </p>
            </div>
            <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 sm:block">
              Fast request
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6">
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
                Destination city
              </label>
              <input
                type="text"
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
                placeholder="Example: Beirut"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-3 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Optional note
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Example: 2 passengers, luggage, airport drop-off"
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-3 focus:ring-sky-100"
              />
            </div>
          </div>
        </div>

        {/* Price estimator + WhatsApp card */}
        <div className="flex flex-col gap-5">
          <PriceEstimator defaultFromId={slug} />
          <ul className="p-0">
            <ZoneCard zone={zoneViewModel} />
          </ul>
        </div>
      </div>

    </LandingPageLayout>
  );
}
