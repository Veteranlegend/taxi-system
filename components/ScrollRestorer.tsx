"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Keyed scroll positions per path
const sk = (path: string) => `__sx:${path}`;

// Persists through React Strict Mode's cleanup-remount cycle (unlike a useRef).
// Set on popstate, cleared only after scroll is successfully achieved.
const POP_FLAG = "__sx_pop__";

export default function ScrollRestorer() {
  const pathname = usePathname();

  // ── Global setup ─────────────────────────────────────────────────────────
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Save scroll at the moment navigation starts — before Next.js transitions
    // the page and resets scroll. At this point window.scrollY is still correct.
    const origPush = history.pushState;
    history.pushState = function (...args: Parameters<typeof history.pushState>) {
      sessionStorage.setItem(sk(location.pathname), String(Math.round(window.scrollY)));
      return origPush.apply(history, args);
    };

    // Mark that the next pathname change is a back/forward navigation.
    const onPop = () => sessionStorage.setItem(POP_FLAG, "1");
    window.addEventListener("popstate", onPop);

    return () => {
      history.pushState = origPush;
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  // ── Live save (backup) ────────────────────────────────────────────────────
  // Captures pathname at registration time. After pushState fires, location.pathname
  // is already the new path — so this guard prevents overwriting the old path's
  // saved scroll with 0 during the transition's scroll-to-top.
  useEffect(() => {
    const path = pathname;
    const save = () => {
      if (location.pathname === path) {
        sessionStorage.setItem(sk(path), String(Math.round(window.scrollY)));
      }
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [pathname]);

  // ── Restore ───────────────────────────────────────────────────────────────
  // Uses sessionStorage flag instead of useRef so it survives Strict Mode's
  // cleanup-remount cycle. Flag is cleared only after scroll is achieved,
  // allowing the remounted effect to continue the restoration.
  useEffect(() => {
    if (sessionStorage.getItem(POP_FLAG) !== "1") return;

    const y = parseInt(sessionStorage.getItem(sk(pathname)) ?? "0", 10);
    if (!y) {
      sessionStorage.removeItem(POP_FLAG);
      return;
    }

    let rafId: number;
    let attempts = 0;

    const tryScroll = () => {
      window.scrollTo({ top: y, behavior: "instant" });
      if (Math.abs(window.scrollY - y) > 2 && attempts++ < 30) {
        rafId = requestAnimationFrame(tryScroll);
      } else {
        // Clear the flag only after scroll is confirmed — not at effect start.
        // This lets Strict Mode's second run also find the flag and participate.
        sessionStorage.removeItem(POP_FLAG);
      }
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
