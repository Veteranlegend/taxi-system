import AppBadge from "@/components/ui/AppBadge";
import { WhatsAppCTAButton } from "@/components/ui/WhatsAppCTAButton";
import { ZoneViewModel } from "@/viewModels/zoneViewModel";

type ZoneCardProps = {
  zone: ZoneViewModel;
};

export default function ZoneCard({ zone }: ZoneCardProps) {
  return (
    <li className="list-none">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.07)] sm:p-6">

        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">{zone.name}</h3>
          <AppBadge
            label={zone.isAvailable ? "Available" : "Unavailable"}
            isActive={zone.isAvailable}
          />
        </div>
        <p className="mt-1 text-sm text-slate-500">{zone.availabilityMessage}</p>

        {/* Service capabilities */}
        <div className="mt-4 flex gap-2">
          <div className={`flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 ${!zone.supportsLocal ? "opacity-40" : ""}`}>
            <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${zone.supportsLocal ? "bg-emerald-500" : "bg-slate-300"}`} />
            <span className="text-sm text-slate-700">Local rides</span>
          </div>
          <div className={`flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 ${!zone.supportsAirport ? "opacity-40" : ""}`}>
            <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${zone.supportsAirport ? "bg-emerald-500" : "bg-slate-300"}`} />
            <span className="text-sm text-slate-700">Airport transfers</span>
          </div>
        </div>

        {/* Message preview */}
        <div className="mt-4 rounded-2xl bg-slate-50 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Your WhatsApp message
          </p>
          <p className="mt-2 max-h-24 overflow-y-auto whitespace-pre-line text-sm leading-6 text-slate-600">
            {zone.whatsappMessage}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-5">
          <WhatsAppCTAButton href={zone.whatsappUrl} />
        </div>
      </div>
    </li>
  );
}
