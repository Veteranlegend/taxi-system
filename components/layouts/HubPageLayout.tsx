"use client";

import Image from "next/image";
import AppContainer from "@/components/ui/AppContainer";
import PageSection from "@/components/PageSection";
import ScrollSaveLink from "@/components/ui/ScrollSaveLink";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MESSAGES } from "@/constants/messages";
import { useLanguage } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

type HubPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  beforeSection?: ReactNode;
  heroSlot?: ReactNode;
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function HubPageLayout({
  title,
  description,
  children,
  beforeSection,
  heroSlot,
}: HubPageLayoutProps) {
  const { t, isArabic } = useLanguage();
  const defaultMsg = isArabic
    ? "مرحباً، أود الاستفسار عن خدمة التاكسي لديكم."
    : MESSAGES.DEFAULT_WHATSAPP_INQUIRY;
  const whatsappUrl = buildWhatsAppUrl(defaultMsg);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.22),_transparent_32%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f1f5f9)]">
      <AppContainer>

        {/* HERO */}
        <header className="relative mb-10 overflow-hidden rounded-[2rem] shadow-[0_16px_56px_rgba(15,23,42,0.18)]">
          <div className="relative min-h-[500px] flex items-end sm:min-h-[540px] lg:min-h-[580px]">
            <Image
              src="/images/alrawshe.jpeg"
              alt="Rawshe Rock, Beirut — Direct Taxi Lebanon"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 960px"
              quality={75}
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-slate-900/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {/* Lebanon map — real outline from mapsicon/djaiss, flag colors clipped inside */}
            <div className="absolute right-[4%] top-1/2 -translate-y-[50%] pointer-events-none hidden lg:block opacity-[0.65]">
              <svg
                viewBox="0 0 1024 1024"
                className="h-60 w-auto xl:h-72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="lbClip">
                    <g transform="translate(0,1024) scale(0.1,-0.1)">
                      <path d="M7474 10223 c-27 -13 -33 -24 -43 -71 -6 -30 -12 -87 -12 -126 -2 -127 -3 -128 -88 -145 -70 -13 -78 -13 -151 8 -61 18 -82 20 -99 12 -11 -6 -32 -9 -45 -5 -15 4 -36 -1 -54 -12 -29 -17 -31 -17 -77 10 -46 28 -47 28 -131 16 -72 -10 -88 -10 -107 3 -22 14 -74 19 -224 19 -29 0 -75 -8 -103 -17 -42 -14 -78 -16 -193 -13 -160 6 -251 28 -324 79 -32 23 -52 29 -92 29 -44 0 -51 -3 -51 -19 0 -11 21 -86 48 -168 l47 -148 -2 -160 c-2 -88 -8 -191 -14 -228 -11 -67 -12 -70 -56 -95 -25 -15 -70 -47 -101 -71 -32 -23 -70 -50 -87 -58 -16 -9 -65 -47 -108 -85 -104 -91 -138 -113 -227 -143 -66 -23 -90 -25 -205 -25 -71 1 -138 -1 -147 -5 -32 -13 -23 -72 17 -116 39 -43 40 -54 23 -129 -13 -55 -31 -74 -119 -120 -49 -26 -199 -126 -235 -158 -26 -22 -64 -94 -64 -121 0 -10 -15 -52 -34 -92 -18 -41 -41 -95 -50 -121 -20 -55 -42 -64 -121 -49 -39 7 -56 6 -80 -6 -38 -20 -45 -30 -45 -73 0 -27 -12 -50 -51 -99 l-52 -63 13 -82 c30 -186 30 -183 -46 -309 -55 -89 -72 -127 -86 -192 -16 -75 -16 -85 -1 -167 13 -67 21 -89 35 -94 15 -4 18 -16 18 -61 0 -49 4 -60 35 -94 l35 -39 -20 -51 c-12 -28 -25 -96 -30 -150 -9 -92 -13 -104 -60 -187 -44 -78 -50 -95 -50 -146 0 -56 2 -60 50 -113 35 -39 50 -63 50 -83 0 -25 -6 -30 -50 -45 -86 -29 -138 -109 -209 -328 -15 -43 -41 -91 -74 -134 -61 -79 -98 -93 -206 -81 -81 9 -298 10 -328 2 -34 -9 -31 -70 7 -137 34 -61 37 -95 20 -287 -17 -195 -35 -265 -88 -339 -68 -95 -91 -161 -92 -251 0 -93 -39 -221 -78 -254 -47 -40 -52 -48 -52 -80 0 -70 -20 -140 -49 -171 -66 -71 -86 -131 -110 -327 -7 -65 -16 -89 -53 -150 -28 -46 -51 -101 -63 -148 -18 -75 -109 -270 -206 -440 -58 -103 -145 -180 -202 -180 -42 0 -51 -10 -67 -80 -7 -30 -32 -101 -56 -158 -66 -152 -116 -337 -121 -452 l-5 -95 -87 -170 -86 -170 -49 -13 c-48 -14 -48 -14 -43 -49 4 -19 16 -54 28 -77 12 -22 29 -54 38 -71 25 -47 20 -202 -8 -287 -31 -92 -99 -180 -149 -191 -51 -11 -91 -60 -92 -113 0 -90 -5 -97 -129 -199 -105 -85 -119 -101 -133 -144 l-15 -49 61 -5 c33 -4 138 -9 231 -13 94 -4 193 -13 220 -20 45 -12 51 -11 60 4 6 9 23 29 38 44 l29 28 51 -26 c47 -24 57 -26 131 -19 43 4 109 16 144 27 51 16 79 18 129 13 l63 -7 0 -47 c0 -43 4 -51 50 -96 36 -36 50 -57 50 -77 l0 -28 98 0 c72 0 103 4 120 16 15 11 56 17 133 21 l110 6 16 40 c5 20 13 55 18 77 7 33 14 41 42 49 43 12 67 62 82 172 6 43 17 94 25 113 19 45 18 175 -2 283 l-16 88 27 47 c15 27 36 72 46 101 10 30 32 70 49 89 37 41 50 72 50 116 0 51 11 59 47 37 27 -16 32 -26 38 -74 7 -52 10 -57 54 -85 42 -26 107 -51 138 -51 8 0 10 16 6 52 l-5 53 64 34 c58 31 70 34 120 28 l55 -7 51 64 c45 56 58 66 105 80 63 18 72 27 81 81 5 24 20 53 39 72 29 31 36 33 96 33 62 0 73 4 186 66 143 78 189 119 211 188 27 85 102 211 137 231 18 10 82 51 142 91 61 40 133 82 161 93 40 17 61 36 102 91 29 38 81 91 116 117 36 26 68 54 71 62 3 8 8 47 12 87 5 69 4 76 -21 108 -27 36 -30 52 -20 105 5 25 11 31 33 31 14 0 54 9 88 19 35 11 86 22 115 25 33 4 88 24 145 53 82 42 94 52 108 86 9 22 34 60 55 86 33 39 40 55 40 89 0 36 -4 44 -29 56 -29 15 -82 77 -94 108 -3 10 -22 19 -49 23 -24 4 -63 18 -88 30 -145 75 -202 95 -274 95 -59 0 -76 4 -100 24 l-30 23 23 55 c19 48 29 59 80 87 81 46 101 89 101 216 l0 95 71 57 c61 50 78 72 125 161 l56 102 47 0 c66 0 96 33 122 134 11 42 40 114 66 161 l46 85 32 -20 c45 -28 113 -18 151 21 24 25 35 29 81 29 52 0 53 0 85 50 37 56 71 73 129 64 32 -5 44 -14 70 -55 24 -38 39 -51 67 -58 80 -20 108 -21 127 -6 11 8 29 15 40 15 13 0 31 18 50 48 17 26 45 54 63 64 32 15 37 15 85 -2 29 -10 78 -32 111 -49 32 -17 63 -31 70 -31 6 0 52 -16 101 -36 75 -30 107 -36 191 -41 l100 -6 57 38 57 38 0 68 0 67 -37 13 c-21 7 -54 30 -74 51 -35 38 -36 39 -125 45 -107 7 -130 20 -145 80 -11 42 -15 45 -85 78 -41 18 -77 40 -80 48 -3 9 11 36 32 64 20 26 65 107 100 178 70 147 108 194 276 349 67 62 112 112 120 132 9 26 18 34 42 36 30 3 31 5 34 56 3 55 11 61 57 43 15 -6 32 0 65 24 44 32 46 33 80 18 26 -11 62 -14 143 -11 l108 5 46 45 46 46 -2 69 c-2 83 17 135 78 208 22 27 41 57 41 65 0 16 80 58 151 80 32 9 37 16 43 48 3 20 6 48 6 62 0 20 11 31 57 55 57 30 58 31 101 131 40 90 48 103 76 111 26 7 31 14 34 44 3 32 -2 41 -49 83 -28 25 -55 46 -60 46 -5 0 -9 8 -9 18 0 10 -20 50 -45 90 -43 69 -45 76 -45 147 0 73 1 77 38 118 76 86 73 78 58 127 l-13 45 -96 29 c-102 31 -107 36 -107 112 0 19 -7 26 -31 31 -36 7 -48 29 -74 143 l-18 75 62 124 c76 151 76 165 -7 209 -31 16 -85 38 -118 47 -67 19 -84 38 -84 99 0 31 -5 35 -104 90 -98 56 -104 61 -125 110 -11 28 -28 74 -36 102 l-15 52 -208 4 c-198 4 -208 3 -242 -17 -81 -50 -72 -53 -125 41 -26 47 -44 88 -41 92 4 4 82 52 174 108 l167 100 0 141 c0 129 2 144 21 170 l21 28 54 -50 c57 -53 114 -84 128 -69 8 10 61 202 61 223 0 10 -21 11 -89 6 -82 -7 -93 -5 -144 18 -30 14 -79 32 -109 41 -45 13 -66 28 -125 89 -42 43 -74 86 -78 103 -16 72 -28 95 -55 109 -37 19 -106 18 -146 -2z" />
                    </g>
                  </clipPath>
                </defs>

                {/* Lebanese flag bands clipped to real Lebanon shape */}
                <g clipPath="url(#lbClip)">
                  <rect x="0" y="0"   width="1024" height="341" fill="#C8102E" />
                  <rect x="0" y="341" width="1024" height="341" fill="white"   />
                  <rect x="0" y="682" width="1024" height="342" fill="#C8102E" />
                </g>

                {/* Outline */}
                <g transform="translate(0,1024) scale(0.1,-0.1)">
                  <path
                    d="M7474 10223 c-27 -13 -33 -24 -43 -71 -6 -30 -12 -87 -12 -126 -2 -127 -3 -128 -88 -145 -70 -13 -78 -13 -151 8 -61 18 -82 20 -99 12 -11 -6 -32 -9 -45 -5 -15 4 -36 -1 -54 -12 -29 -17 -31 -17 -77 10 -46 28 -47 28 -131 16 -72 -10 -88 -10 -107 3 -22 14 -74 19 -224 19 -29 0 -75 -8 -103 -17 -42 -14 -78 -16 -193 -13 -160 6 -251 28 -324 79 -32 23 -52 29 -92 29 -44 0 -51 -3 -51 -19 0 -11 21 -86 48 -168 l47 -148 -2 -160 c-2 -88 -8 -191 -14 -228 -11 -67 -12 -70 -56 -95 -25 -15 -70 -47 -101 -71 -32 -23 -70 -50 -87 -58 -16 -9 -65 -47 -108 -85 -104 -91 -138 -113 -227 -143 -66 -23 -90 -25 -205 -25 -71 1 -138 -1 -147 -5 -32 -13 -23 -72 17 -116 39 -43 40 -54 23 -129 -13 -55 -31 -74 -119 -120 -49 -26 -199 -126 -235 -158 -26 -22 -64 -94 -64 -121 0 -10 -15 -52 -34 -92 -18 -41 -41 -95 -50 -121 -20 -55 -42 -64 -121 -49 -39 7 -56 6 -80 -6 -38 -20 -45 -30 -45 -73 0 -27 -12 -50 -51 -99 l-52 -63 13 -82 c30 -186 30 -183 -46 -309 -55 -89 -72 -127 -86 -192 -16 -75 -16 -85 -1 -167 13 -67 21 -89 35 -94 15 -4 18 -16 18 -61 0 -49 4 -60 35 -94 l35 -39 -20 -51 c-12 -28 -25 -96 -30 -150 -9 -92 -13 -104 -60 -187 -44 -78 -50 -95 -50 -146 0 -56 2 -60 50 -113 35 -39 50 -63 50 -83 0 -25 -6 -30 -50 -45 -86 -29 -138 -109 -209 -328 -15 -43 -41 -91 -74 -134 -61 -79 -98 -93 -206 -81 -81 9 -298 10 -328 2 -34 -9 -31 -70 7 -137 34 -61 37 -95 20 -287 -17 -195 -35 -265 -88 -339 -68 -95 -91 -161 -92 -251 0 -93 -39 -221 -78 -254 -47 -40 -52 -48 -52 -80 0 -70 -20 -140 -49 -171 -66 -71 -86 -131 -110 -327 -7 -65 -16 -89 -53 -150 -28 -46 -51 -101 -63 -148 -18 -75 -109 -270 -206 -440 -58 -103 -145 -180 -202 -180 -42 0 -51 -10 -67 -80 -7 -30 -32 -101 -56 -158 -66 -152 -116 -337 -121 -452 l-5 -95 -87 -170 -86 -170 -49 -13 c-48 -14 -48 -14 -43 -49 4 -19 16 -54 28 -77 12 -22 29 -54 38 -71 25 -47 20 -202 -8 -287 -31 -92 -99 -180 -149 -191 -51 -11 -91 -60 -92 -113 0 -90 -5 -97 -129 -199 -105 -85 -119 -101 -133 -144 l-15 -49 61 -5 c33 -4 138 -9 231 -13 94 -4 193 -13 220 -20 45 -12 51 -11 60 4 6 9 23 29 38 44 l29 28 51 -26 c47 -24 57 -26 131 -19 43 4 109 16 144 27 51 16 79 18 129 13 l63 -7 0 -47 c0 -43 4 -51 50 -96 36 -36 50 -57 50 -77 l0 -28 98 0 c72 0 103 4 120 16 15 11 56 17 133 21 l110 6 16 40 c5 20 13 55 18 77 7 33 14 41 42 49 43 12 67 62 82 172 6 43 17 94 25 113 19 45 18 175 -2 283 l-16 88 27 47 c15 27 36 72 46 101 10 30 32 70 49 89 37 41 50 72 50 116 0 51 11 59 47 37 27 -16 32 -26 38 -74 7 -52 10 -57 54 -85 42 -26 107 -51 138 -51 8 0 10 16 6 52 l-5 53 64 34 c58 31 70 34 120 28 l55 -7 51 64 c45 56 58 66 105 80 63 18 72 27 81 81 5 24 20 53 39 72 29 31 36 33 96 33 62 0 73 4 186 66 143 78 189 119 211 188 27 85 102 211 137 231 18 10 82 51 142 91 61 40 133 82 161 93 40 17 61 36 102 91 29 38 81 91 116 117 36 26 68 54 71 62 3 8 8 47 12 87 5 69 4 76 -21 108 -27 36 -30 52 -20 105 5 25 11 31 33 31 14 0 54 9 88 19 35 11 86 22 115 25 33 4 88 24 145 53 82 42 94 52 108 86 9 22 34 60 55 86 33 39 40 55 40 89 0 36 -4 44 -29 56 -29 15 -82 77 -94 108 -3 10 -22 19 -49 23 -24 4 -63 18 -88 30 -145 75 -202 95 -274 95 -59 0 -76 4 -100 24 l-30 23 23 55 c19 48 29 59 80 87 81 46 101 89 101 216 l0 95 71 57 c61 50 78 72 125 161 l56 102 47 0 c66 0 96 33 122 134 11 42 40 114 66 161 l46 85 32 -20 c45 -28 113 -18 151 21 24 25 35 29 81 29 52 0 53 0 85 50 37 56 71 73 129 64 32 -5 44 -14 70 -55 24 -38 39 -51 67 -58 80 -20 108 -21 127 -6 11 8 29 15 40 15 13 0 31 18 50 48 17 26 45 54 63 64 32 15 37 15 85 -2 29 -10 78 -32 111 -49 32 -17 63 -31 70 -31 6 0 52 -16 101 -36 75 -30 107 -36 191 -41 l100 -6 57 38 57 38 0 68 0 67 -37 13 c-21 7 -54 30 -74 51 -35 38 -36 39 -125 45 -107 7 -130 20 -145 80 -11 42 -15 45 -85 78 -41 18 -77 40 -80 48 -3 9 11 36 32 64 20 26 65 107 100 178 70 147 108 194 276 349 67 62 112 112 120 132 9 26 18 34 42 36 30 3 31 5 34 56 3 55 11 61 57 43 15 -6 32 0 65 24 44 32 46 33 80 18 26 -11 62 -14 143 -11 l108 5 46 45 46 46 -2 69 c-2 83 17 135 78 208 22 27 41 57 41 65 0 16 80 58 151 80 32 9 37 16 43 48 3 20 6 48 6 62 0 20 11 31 57 55 57 30 58 31 101 131 40 90 48 103 76 111 26 7 31 14 34 44 3 32 -2 41 -49 83 -28 25 -55 46 -60 46 -5 0 -9 8 -9 18 0 10 -20 50 -45 90 -43 69 -45 76 -45 147 0 73 1 77 38 118 76 86 73 78 58 127 l-13 45 -96 29 c-102 31 -107 36 -107 112 0 19 -7 26 -31 31 -36 7 -48 29 -74 143 l-18 75 62 124 c76 151 76 165 -7 209 -31 16 -85 38 -118 47 -67 19 -84 38 -84 99 0 31 -5 35 -104 90 -98 56 -104 61 -125 110 -11 28 -28 74 -36 102 l-15 52 -208 4 c-198 4 -208 3 -242 -17 -81 -50 -72 -53 -125 41 -26 47 -44 88 -41 92 4 4 82 52 174 108 l167 100 0 141 c0 129 2 144 21 170 l21 28 54 -50 c57 -53 114 -84 128 -69 8 10 61 202 61 223 0 10 -21 11 -89 6 -82 -7 -93 -5 -144 18 -30 14 -79 32 -109 41 -45 13 -66 28 -125 89 -42 43 -74 86 -78 103 -16 72 -28 95 -55 109 -37 19 -106 18 -146 -2z"
                    fill="none"
                    stroke="white"
                    strokeWidth="22"
                  />
                </g>
              </svg>
            </div>

            <div className="relative w-full p-7 sm:p-10 lg:p-14">
              <div className="max-w-2xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                  {t.bookViaWhatsApp}
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </div>

                <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {(() => {
                    const words = title.split(" ");
                    const last   = words[words.length - 1];
                    const taxi   = words[words.length - 2];
                    const prefix = words.slice(0, -2).join(" ");
                    return (
                      <>
                        {prefix}{" "}
                        <span
                          className="inline-block rounded-[0.12em] px-[0.22em] pb-[0.06em]"
                          style={{
                            backgroundColor: "#FBBF24",
                            color: "#1e293b",
                            border: "2.5px solid #d97706",
                            boxShadow: "0 0 18px rgba(251,191,36,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
                          }}
                        >
                          {taxi}
                        </span>
                        {" "}
                        <span
                          className="inline-block bg-clip-text text-transparent"
                          style={{ backgroundImage: "linear-gradient(to bottom, #C8102E 0%, #C8102E 33%, #ffffff 50%, #006633 67%, #006633 100%)" }}
                        >
                          {last}
                        </span>
                      </>
                    );
                  })()}
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-white sm:text-lg sm:leading-8 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {description}
                </p>

                <p className="mt-3 flex items-center gap-2 text-sm text-white/75">
                  <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto shrink-0">
                    {/* Taxi sign on roof */}
                    <rect x="12" y="0" width="12" height="5" rx="1.5" fill="#FBBF24"/>
                    <text x="18" y="4.2" textAnchor="middle" fontSize="3.2" fontWeight="900" fontFamily="Arial" fill="#0f172a">TAXI</text>
                    {/* Car body */}
                    <rect x="2" y="10" width="32" height="10" rx="2.5" fill="#FBBF24"/>
                    {/* Roof */}
                    <path d="M10 10 L13 5 L23 5 L26 10 Z" fill="#FBBF24"/>
                    {/* Windshield */}
                    <path d="M11.5 10 L14 6 L22 6 L24.5 10 Z" fill="#0f172a" opacity="0.35"/>
                    {/* Left wheel */}
                    <circle cx="9" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="9" cy="20" r="1.8" fill="#475569"/>
                    {/* Right wheel */}
                    <circle cx="27" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="27" cy="20" r="1.8" fill="#475569"/>
                    {/* Headlight */}
                    <rect x="2.5" y="13" width="4" height="2.5" rx="1" fill="#FEF08A"/>
                    {/* Taillight */}
                    <rect x="29.5" y="13" width="4" height="2.5" rx="1" fill="#FCA5A5"/>
                    {/* Door line */}
                    <line x1="18" y1="10.5" x2="18" y2="19.5" stroke="#d97706" strokeWidth="0.8"/>
                  </svg>
                  {isArabic
                    ? "مطار بيروت · بيروت · جبيل · البترون · طرابلس · وكل لبنان"
                    : "Beirut Airport · Beirut · Jbeil · Batroun · Tripoli · and all of Lebanon"}
                  <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto shrink-0">
                    <rect x="12" y="0" width="12" height="5" rx="1.5" fill="#FBBF24"/>
                    <text x="18" y="4.2" textAnchor="middle" fontSize="3.2" fontWeight="900" fontFamily="Arial" fill="#0f172a">TAXI</text>
                    <rect x="2" y="10" width="32" height="10" rx="2.5" fill="#FBBF24"/>
                    <path d="M10 10 L13 5 L23 5 L26 10 Z" fill="#FBBF24"/>
                    <path d="M11.5 10 L14 6 L22 6 L24.5 10 Z" fill="#0f172a" opacity="0.35"/>
                    <circle cx="9" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="9" cy="20" r="1.8" fill="#475569"/>
                    <circle cx="27" cy="20" r="3.5" fill="#1e293b"/>
                    <circle cx="27" cy="20" r="1.8" fill="#475569"/>
                    <rect x="2.5" y="13" width="4" height="2.5" rx="1" fill="#FEF08A"/>
                    <rect x="29.5" y="13" width="4" height="2.5" rx="1" fill="#FCA5A5"/>
                    <line x1="18" y1="10.5" x2="18" y2="19.5" stroke="#d97706" strokeWidth="0.8"/>
                  </svg>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#20bc5a] active:scale-95"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t.bookViaWhatsApp}
                  </a>
                  <ScrollSaveLink
                    href="/price-estimate"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    {t.getPriceEstimate}
                  </ScrollSaveLink>
                  <ScrollSaveLink
                    href="/beirut-airport-taxi"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-sky-500/30"
                  >
                    ✈ {isArabic ? "تاكسي المطار" : "Airport Taxi"}
                  </ScrollSaveLink>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href="tel:+96170452864"
                    dir="ltr"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    +961 70 452 864
                  </a>
                  <span className="text-white/60">·</span>
                  <span className="text-xs font-semibold text-white/90">{t.available24_7}</span>
                </div>

                {heroSlot ? (
                  <div className="mt-8">{heroSlot}</div>
                ) : (
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    {t.trustPills.map((label) => (
                      <span key={label} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                        {label}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </header>

        {beforeSection}

        <PageSection title={t.chooseServiceArea}>
          {children}
        </PageSection>

      </AppContainer>
    </div>
  );
}
