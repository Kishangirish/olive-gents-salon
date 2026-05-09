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
        .from(".hero-line .line-inner", { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.35)
        .from(".hero-sub", { opacity: 0, y: 16, duration: 1 }, 1.1)
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.9 }, 1.25)
        .from(".hero-rating", { opacity: 0, scale: 0.85, duration: 0.8 }, 1.4)
        .from(".hero-meta", { opacity: 0, duration: 0.9 }, 1.5);

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
      {/* Background image */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-40 md:pt-52 pb-24 min-h-[100svh] flex flex-col justify-between">
        <div>
          {/* Eyebrow */}
          <p className="hero-eyebrow label text-gold/90 mb-10 flex items-center gap-3">
            <span className="block w-8 h-px bg-gold/60" />
            A Grooming Experience
          </p>

          {/* Headline — Stitch style */}
          <h1 className="display leading-[0.92] tracking-[-0.02em]">
            <span className="hero-line block overflow-hidden">
              <span className="line-inner block text-bone text-[11vw] md:text-[7rem] lg:text-[8rem]">
                The Art of
              </span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="line-inner block display-italic text-olive-light text-[13vw] md:text-[8.5rem] lg:text-[10rem]">
                Meticulous
              </span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="line-inner block text-bone text-[11vw] md:text-[7rem] lg:text-[8rem]">
                Grooming.
              </span>
            </span>
          </h1>

          {/* Sub */}
          <p className="hero-sub mt-10 max-w-md text-bone/70 text-base md:text-lg leading-relaxed">
            Elevate your appearance with experienced barbers who understand
            the modern gentleman. Five chairs across Dubai &amp; Ajman — open every day.
          </p>

          {/* CTAs — pill style from Stitch */}
          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/#contact" variant="olive-pill">
              Schedule Your Ritual
            </MagneticButton>
            <MagneticButton href="/#services" variant="ghost-pill">
              View Our Gallery
            </MagneticButton>
          </div>

          {/* Rating badge */}
          <div className="hero-rating mt-10 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="label text-bone/90 text-xs">4.9/5 · Client Rated</span>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="hero-meta mt-16 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4 text-bone/50">
            <span className="block w-10 h-px bg-gold/50" />
            <span className="label text-xs">Scroll to explore</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 label text-bone/60 text-xs">
            <span>Dubailand · ×2</span>
            <span>Majan · ×2</span>
            <span>Ajman · ×1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
