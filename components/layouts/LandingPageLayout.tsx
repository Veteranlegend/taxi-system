import AppContainer from "@/components/ui/AppContainer";
import BackButton from "@/components/ui/BackButton";
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.18),_transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f1f5f9)]">
      <AppContainer>
        <div className="mb-4 sm:mb-5">
          <BackButton />
        </div>

        <header className="relative mb-10 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] backdrop-blur sm:mb-12 sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-50/70 to-transparent" />
          <div className="absolute -right-10 top-6 h-36 w-36 rounded-full bg-sky-100/25 blur-3xl" />
          <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-slate-100/50 blur-3xl" />

          <div className="relative">
            <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-[11px] sm:tracking-[0.22em]">
              Book via WhatsApp
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              {description}
            </p>
          </div>
        </header>

        <PageSection title="Service Details">{children}</PageSection>
      </AppContainer>
    </div>
  );
}
