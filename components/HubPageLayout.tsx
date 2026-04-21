import AppContainer from "@/components/ui/AppContainer";
import PageSection from "@/components/PageSection";
import { ReactNode } from "react";

type HubPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function HubPageLayout({
  title,
  description,
  children,
}: HubPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.20),_transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f1f5f9)]">
      <AppContainer>
        <header className="relative mb-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur sm:mb-12 sm:rounded-[2rem] sm:p-7 lg:mb-14 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-100/55 via-sky-50/20 to-transparent sm:h-28" />
          <div className="absolute -right-16 top-8 h-36 w-36 rounded-full bg-sky-100/25 blur-3xl sm:h-44 sm:w-44" />
          <div className="absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-slate-100/55 blur-3xl sm:h-36 sm:w-36" />

          <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 sm:px-4 sm:text-[11px] sm:tracking-[0.22em]">
                Direct booking via WhatsApp
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:mt-6 sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-10 max-w-2xl text-[15px] leading-8 text-slate-600 sm:mt-10 sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                  Private driver tours
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Fast response
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Airport transfers
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Intercity rides
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Easy pickup coordination
                </div>
              </div>
            </div>

            <div className="mt-2 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/60 p-4 sm:mt-0 sm:rounded-[1.75rem] sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                  Why customers choose this
                </p>

                <div className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700 sm:text-[11px]">
                  Simple flow
                </div>
              </div>

              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Clear starting point
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Choose the service area that best matches your trip so your request is clearer from the start.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Direct communication
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Continue through WhatsApp for a familiar, quick, and low-friction booking experience.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Better pickup accuracy
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Share your location when needed to make pickup coordination faster and easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <PageSection title="Choose Your Service Area">
          {children}
        </PageSection>
      </AppContainer>
    </div>
  );
}