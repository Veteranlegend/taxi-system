import Link from "next/link";
import AppCard from "@/components/ui/AppCard";

type HubLinkCardProps = {
  title: string;
  href: string;
};

export default function HubLinkCard({ title, href }: HubLinkCardProps) {
  return (
    <li className="list-none">
      <Link
        href={href}
        className="group block rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-label={`Choose ${title} service area`}
      >
        <AppCard>
          <div className="flex h-full flex-col justify-between gap-5 sm:gap-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-[11px]">
                  Service area
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 sm:mt-4 sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Choose this page if it best matches your pickup area or route,
                  then continue with a direct WhatsApp taxi request.
                </p>
              </div>

              <div className="hidden shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm md:block">
                Start here
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 sm:p-4">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                  Fast request
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                  Direct WhatsApp
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                  Quick booking
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-medium text-slate-500">
                Best match for your route
              </div>

              <div className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-sky-700 sm:self-auto">
                Choose area
              </div>
            </div>
          </div>
        </AppCard>
      </Link>
    </li>
  );
}