"use client";

import { useEffect } from "react";

export default function WhatsAppTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp://")
      ) {
        console.log("WhatsApp conversion fired");
        window.gtag?.("event", "conversion", {
          send_to: "AW-18109766079/499UCJvu2aIcEL-ztLtD",
        });
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
