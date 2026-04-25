"use client";

import { useEffect } from "react";

export default function WhatsAppTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href") ?? "";
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        window.gtag?.("event", "conversion", {
          send_to: "AW-18109766079/499UCJvu2aIcEL-ztLtD",
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
