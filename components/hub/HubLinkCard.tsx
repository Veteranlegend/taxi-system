import Link from "next/link";
import AppCard from "@/components/ui/AppCard";

type HubLinkCardProps = {
  title: string;
  href: string;
};

export default function HubLinkCard({ title, href }: HubLinkCardProps) {
  return (
    <li className="flex h-full list-none">
      <Link
        href={href}
        className="group flex h-full w-full flex-col rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-label={`Choose ${title} service area`}
      >
        <AppCard>
          <div className="flex flex-1 flex-col justify-between gap-5">

            {/* Header */}
            <div>
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Service area
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>

              <p className="mt-2.5 text-sm leading-7 text-slate-500">
                Choose this page if it best matches your pickup area or route,
                then continue with a direct WhatsApp taxi request.
              </p>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                Fast request
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                Direct WhatsApp
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                Easy start
              </span>
            </div>

            {/* CTA */}
            <div className="flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition group-hover:bg-sky-700">
              Choose area
            </div>

          </div>
        </AppCard>
      </Link>
    </li>
  );
}
