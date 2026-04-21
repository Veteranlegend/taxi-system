"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OtherAreasCard() {
  const router = useRouter();
  const { t } = useLanguage();

  const handleClick = () => {
    sessionStorage.setItem("homeScrollY", String(window.scrollY));
    router.push("/request");
  };

  return (
    <li className="flex h-full list-none">
      <button
        onClick={handleClick}
        className="group flex h-full w-full flex-col rounded-3xl text-left rtl:text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-label={t.requestFromLocation}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-sky-200/80 bg-sky-50/50 shadow-sm transition hover:shadow-md sm:rounded-[1.75rem]">

          {/* Image banner */}
          <div className="relative h-44 w-full shrink-0 overflow-hidden">
            <Image
              src="/images/lebanon-other.jpg"
              alt="Qadisha Valley, Lebanon"
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between gap-5 p-4 sm:p-6">

            <div>
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-100/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600">
                {t.allOfLebanon}
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {t.otherAreas}
              </h3>

              <p className="mt-2.5 text-sm leading-7 text-slate-500">
                {t.otherAreasDescription}
              </p>
            </div>

            <div className="flex w-full items-center justify-center rounded-2xl bg-sky-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition group-hover:bg-sky-800">
              {t.requestFromLocation}
            </div>

          </div>
        </div>
      </button>
    </li>
  );
}
