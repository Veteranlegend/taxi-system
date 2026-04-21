import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import HtmlDir from "@/components/HtmlDir";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.directtaxilebanon.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Direct Taxi Lebanon — Airport Transfers, Intercity & Private Tours",
    template: "%s | Direct Taxi Lebanon",
  },
  description:
    "Professional taxi service across Lebanon. Book airport transfers, intercity rides, and private tours via WhatsApp. Available 24/7. Serving Beirut, Tripoli, Batroun and all of Lebanon.",
  keywords: [
    "taxi Lebanon",
    "taxi Beirut",
    "taxi Tripoli",
    "taxi Batroun",
    "airport transfer Lebanon",
    "Beirut airport taxi",
    "intercity taxi Lebanon",
    "private driver Lebanon",
    "WhatsApp taxi Lebanon",
    "taxi service Lebanon",
    "Lebanon transport",
  ],
  authors: [{ name: "Direct Taxi Lebanon" }],
  creator: "Direct Taxi Lebanon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Direct Taxi Lebanon",
    title: "Direct Taxi Lebanon — Airport Transfers, Intercity & Private Tours",
    description:
      "Professional taxi service across Lebanon. Book via WhatsApp — airport transfers, intercity rides, and private tours. Available 24/7.",
    images: [
      {
        url: "/images/hero-rawshe.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Taxi Lebanon — Professional taxi service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Taxi Lebanon — Airport Transfers, Intercity & Private Tours",
    description:
      "Professional taxi service across Lebanon. Book via WhatsApp — available 24/7.",
    images: ["/images/hero-rawshe.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18109766079"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-18109766079');` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <HtmlDir />
          <JsonLd />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <LanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
