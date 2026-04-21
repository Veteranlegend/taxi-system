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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.22),_transparent_32%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f1f5f9)]">
      <AppContainer>
        <header className="relative mb-14 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-sky-100/70 via-white/10 to-slate-100/70" />
          <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-sky-100/30 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-slate-100/60 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                Direct booking via WhatsApp
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:mt-5 sm:text-lg">
                {description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Fast response
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Airport transfers
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Intercity rides
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Easy pickup coordination
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  Pre-book trips
                </div>
              </div>

              <a
                href="/price-estimate"
                className="mt-5 block rounded-2xl border border-sky-200/80 bg-sky-50/60 p-4 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <p className="text-sm font-semibold text-slate-900">
                  Plan your trip in advance
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  Get a price estimate and schedule your ride ahead of time.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-sky-700 px-3 py-1.5 text-xs font-semibold text-white">
                  Check price →
                </span>
              </a>

              <div className="mt-5 inline-flex items-start gap-3 rounded-xl bg-emerald-800 px-4 py-3 shadow-md">
                <span className="mt-px flex-shrink-0 text-sm leading-none text-emerald-300">✦</span>
                <div>
                  <p className="text-sm font-semibold leading-snug text-white">
                    Private driver &amp; guided tours across Lebanon
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-emerald-200">
                    15+ years experience · Full-day &amp; multi-day trips · Local knowledge
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/90 bg-white/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Why customers choose this
                </p>

                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  Simple flow
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Clear starting point
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Choose the service area that best matches your trip so your request is clearer from the start.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Direct communication
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Continue through WhatsApp for a familiar, quick, and low-friction booking experience.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Better pickup accuracy
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Share your location when needed to make pickup coordination faster and easier.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Upfront price estimate
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Get an approximate price range before contacting, so you know what to expect.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a
                      href="/price-estimate"
                      className="inline-flex items-center gap-1 rounded-full bg-sky-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-800"
                    >
                      Check price →
                    </a>
                  </div>
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