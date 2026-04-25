"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

type HubLinkCardProps = {
  title: string;
  href: string;
  image?: string;
  gradient?: string;
};

export default function HubLinkCard({
  title,
  href,
  image,
  gradient = "from-slate-400 to-slate-600",
}: HubLinkCardProps) {
  const router = useRouter();
  const { t } = useLanguage();

  const handleClick = () => {
    sessionStorage.setItem("homeScrollY", String(window.scrollY));
    router.push(href);
  };

  return (
    <li className="flex h-full list-none">
      <button
        onClick={handleClick}
        className="group flex h-full w-full flex-col rounded-[1.5rem] text-left rtl:text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:rounded-[1.75rem]"
        aria-label={`${t.chooseArea} — ${title}`}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:rounded-[1.75rem]">

          {/* Image / Gradient banner */}
          <div className="relative h-44 w-full shrink-0 overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={`${title} cityscape`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            ) : (
              <div className={`h-full w-full bg-gradient-to-br ${gradient}`} />
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between gap-5 p-4 sm:p-6">

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>

              <p className="mt-2.5 text-sm leading-7 text-slate-500">
                {t.cardDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                {t.fastRequest}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                {t.directWhatsApp}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                {t.easyStart}
              </span>
            </div>

            <div className="flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition group-hover:bg-sky-700">
              {t.chooseArea}
            </div>

          </div>
        </div>
      </button>
    </li>
  );
}
