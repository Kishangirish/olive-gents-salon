"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./motion/MagneticButton";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-image", { scale: 1.15, duration: 2.2 })
        .from(".hero-eyebrow", { y: 24, opacity: 0, duration: 1 }, 0.2)
        .from(".hero-line .line-inner", { yPercent: 110, duration: 1.4, stagger: 0.1 }, 0.35)
        .from(".hero-sub", { opacity: 0, y: 16, duration: 1 }, 1.1)
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.9 }, 1.25)
        .from(".hero-meta", { opacity: 0, duration: 0.9 }, 1.4);

      // Parallax on the hero image as you scroll
      gsap.to(".hero-image", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] w-full overflow-hidden grain"
    >
      <div className="absolute inset-0">
        <div className="hero-image absolute inset-0 will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2400&q=80"
            alt="A craftsman barber at work"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col justify-between">
        <div>
          <p className="hero-eyebrow label text-gold mb-8">
            Est. UAE · Five chairs across Dubai & Ajman
          </p>

          <h1 className="display text-bone text-[18vw] md:text-[12rem] leading-[0.88] tracking-[-0.035em]">
            <span className="hero-line block overflow-hidden">
              <span className="line-inner block">Reinvent</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="line-inner block italic font-light text-olive-light">
                Yourself.
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-10 max-w-md text-bone/80 text-base md:text-lg leading-relaxed">
            <span className="block display-italic text-gold text-xl md:text-2xl mb-3">
              A clean cut, a quiet hour, a familiar chair.
            </span>
            OLIVE Gents Salon — five rooms across Dubai and Ajman, run on
            craft, hot towels, and the small details.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/#contact" variant="gold">
              Book a chair
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton href="/#services" variant="ghost">
              View services
            </MagneticButton>
          </div>
        </div>

        <div className="hero-meta mt-16 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4 text-bone/60">
            <span className="block w-10 h-px bg-gold" />
            <span className="label">Scroll</span>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-2 label text-bone/70">
            <span>Dubailand · ×2</span>
            <span>Majan · ×2</span>
            <span>Ajman · ×1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
