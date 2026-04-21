import Link from "next/link";
import HubPageLayout from "@/components/layouts/HubPageLayout";
import HubLinkCard from "@/components/hub/HubLinkCard";
import OtherAreasCard from "@/components/hub/OtherAreasCard";
import { ZONE_PAGE_LIST } from "@/constants/zonePages";

export default function HomePage() {
  return (
    <HubPageLayout
      title="Direct Taxi Lebanon"
      description="Fast WhatsApp taxi requests for airport transfers, intercity rides, and local pickups across Lebanon. Choose the service area that best matches your route and continue in a simple, direct booking flow."
    >
      {/* TRUST CARDS */}
      <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-5 py-5 shadow-sm backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Direct booking
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            WhatsApp-first contact
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Send your request through a simple and familiar WhatsApp flow.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-5 py-5 shadow-sm backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Flexible coverage
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            Airport, intercity, and local rides
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Built for transport across Lebanon, including major routes and airport transfers.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-5 py-5 shadow-sm backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Better coordination
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            Easy location sharing
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Share your location to make pickup faster and more accurate.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-5 py-5 shadow-sm backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Easy start
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            Choose your route area
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Start with the service page that best fits your trip, then continue your request.
          </p>
        </div>
      </div>

      {/* NEW PREMIUM SECTION */}
      <div className="mb-10 rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Private driver experience
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Explore Lebanon with a trusted and experienced local driver
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              With more than 15 years of experience in the taxi and transport field, you can book not only a ride,
              but a full-day or multi-day private driver service. Discover beautiful places across Lebanon,
              from north to south, with flexible planning and local knowledge.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Ideal for:
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Tourists exploring Lebanon</li>
              <li>• Full-day private trips</li>
              <li>• Custom travel routes</li>
              <li>• Reliable and trusted local guidance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="mb-10 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur sm:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              How it works
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Choose your route or pickup area, then continue in WhatsApp
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Open the page that best matches your trip, add destination details,
              include a note if needed, and send your request directly through WhatsApp.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Best for:
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Airport transfers and planned rides</li>
              <li>• Intercity travel across major routes</li>
              <li>• Fast and direct booking</li>
              <li>• Simple and reliable communication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PRICE ESTIMATE ENTRY */}
      <div className="mb-5 rounded-2xl border border-sky-200/80 bg-sky-50/60 p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-slate-900">
              Upfront price estimate
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-500">
              Get an approximate price range before contacting, so you know
              what to expect.
            </p>
          </div>
          <div className="hidden rounded-full border border-sky-200 bg-sky-100/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600 sm:block">
            Free tool
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            href="/price-estimate"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
          >
            Check price →
          </Link>
        </div>
      </div>

      {/* SERVICE AREAS */}
      <p className="mb-4 text-[13px] text-slate-400">
        We cover trips across Lebanon — choose the area closest to your location.
      </p>
      <ul className="grid items-stretch gap-5 p-0 sm:grid-cols-2">
        {ZONE_PAGE_LIST.map((page) => (
          <HubLinkCard key={page.href} title={page.title} href={page.href} />
        ))}
        <OtherAreasCard />
      </ul>
    </HubPageLayout>
  );
}