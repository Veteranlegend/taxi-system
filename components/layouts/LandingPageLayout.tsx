"use client";

import Image from "next/image";
import AppContainer from "@/components/ui/AppContainer";
import BackButton from "@/components/ui/BackButton";
import PageSection from "@/components/PageSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

type LandingPageLayoutProps = {
  title: string;
  description: string;
  image?: string;
  children: ReactNode;
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function LandingPageLayout({
  title,
  description,
  image,
  children,
}: LandingPageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.18),_transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f1f5f9)]">
      <AppContainer>
        <div className="mb-4 sm:mb-5">
          <BackButton />
        </div>

        <header className="relative mb-10 overflow-hidden rounded-[2rem] shadow-[0_16px_48px_rgba(15,23,42,0.18)] sm:mb-12">
          <div className="relative min-h-[260px] flex items-end sm:min-h-[300px]">
            {image ? (
              <Image
                src={image}
                alt={`${title} — Direct Taxi Lebanon`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 960px"
                quality={75}
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-slate-900" />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="relative w-full p-7 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                {t.bookViaWhatsApp}
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>

              <p className="mt-3 max-w-xl text-[15px] leading-7 text-white/85 sm:text-base">
                {description}
              </p>
            </div>
          </div>
        </header>

        <PageSection>{children}</PageSection>
      </AppContainer>
    </div>
  );
}
