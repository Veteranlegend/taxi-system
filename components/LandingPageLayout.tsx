import AppContainer from "@/components/ui/AppContainer";
import PageSection from "@/components/PageSection";
import { ReactNode } from "react";

type LandingPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function LandingPageLayout({
  title,
  description,
  children,
}: LandingPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <AppContainer>
        <header className="mb-10 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Reliable Taxi Service
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>
        </header>

        <PageSection title="Service Details">{children}</PageSection>
      </AppContainer>
    </div>
  );
}