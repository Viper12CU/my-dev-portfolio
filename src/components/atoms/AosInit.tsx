"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const AOS = (await import("aos")).default;
      if (cancelled) return;
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
      AOS.refresh();
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const refresh = async () => {
      const AOS = (await import("aos")).default;
      AOS.refresh();
    };

    refresh();
  }, [pathname]);

  return null;
}
