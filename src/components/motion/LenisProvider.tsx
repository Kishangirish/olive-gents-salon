"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    // Dynamic import keeps Lenis out of the SSR bundle entirely
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const tickerCb = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCb);
      gsap.ticker.lagSmoothing(0);

      // Store cleanup on window so the effect cleanup can reach it
      (window as unknown as Record<string, unknown>).__lenisCleanup = () => {
        gsap.ticker.remove(tickerCb);
        lenis.destroy();
      };
    });

    return () => {
      const cleanup = (window as unknown as Record<string, unknown>).__lenisCleanup as (() => void) | undefined;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
