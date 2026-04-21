"use client";

import { useEffect } from "react";

export default function ScrollRestorer() {
  useEffect(() => {
    const savedY = sessionStorage.getItem("homeScrollY");
    if (savedY) {
      sessionStorage.removeItem("homeScrollY");
      window.scrollTo({ top: parseInt(savedY), behavior: "instant" });
    }
  }, []);

  return null;
}
