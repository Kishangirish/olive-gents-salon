"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCategories, formatPrice } from "@/data/services";
import { Reveal } from "./motion/Reveal";

export function Services() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const trackEl = track.current!;
      const distance = () => trackEl.scrollWidth - window.innerWidth + 80;
      gsap.to(trackEl, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative bg-ink py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal as="div" className="flex items-end justify-between gap-10 mb-16 md:mb-24 flex-wrap">
          <div>
            <p className="label text-gold/80 mb-5 flex items-center gap-3">
              <span className="block w-8 h-px bg-gold/60" />
              What We Offer
            </p>
            <h2 className="display text-bone text-5xl md:text-7xl leading-[0.95]">
              Transparent{" "}
              <span className="display-italic text-olive-light">Grooming</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-md text-bone/60 text-base leading-relaxed pb-2">
            Openly shared, clearly priced. Hair Rituals, Beard &amp; Skin, Color
            &amp; Treatment — every service, every rate. Cuts from AED 20.
          </p>
        </Reveal>
      </div>

      {/* Desktop: pinned horizontal scroller */}
      <div className="hidden md:block">
        <div ref={track} className="flex gap-8 pl-10 will-change-transform" style={{ width: "max-content" }}>
          {serviceCategories.map((cat, i) => (
            <article
              key={cat.id}
              className="relative w-[520px] h-[640px] shrink-0 bg-charcoal border border-bone/10 overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-700">
                <Image
                  src={cat.cover}
                  alt={cat.title}
                  fill
                  sizes="520px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              </div>
              <div className="relative z-10 h-full p-10 flex flex-col">
                <span className="label text-gold">0{i + 1}</span>
                <h3 className="display text-bone text-5xl mt-4">{cat.title}</h3>
                <p className="text-bone/60 mt-3">{cat.caption}</p>

                <div className="mt-auto space-y-3">
                  {cat.items.slice(0, 5).map((s) => (
                    <div
                      key={s.name}
                      className="flex items-baseline justify-between gap-4 border-t border-bone/10 pt-3"
                    >
                      <span className="text-bone/90">{s.name}</span>
                      <span className="label text-gold whitespace-nowrap">{formatPrice(s.price)}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-6 label text-bone hover:text-gold inline-flex items-center gap-2"
                >
                  Full menu <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden mt-4 px-6 space-y-6">
        {serviceCategories.map((cat, i) => (
          <Reveal key={cat.id} as="div" delay={i * 0.05}>
            <article className="relative h-[420px] bg-charcoal border border-bone/10 overflow-hidden">
              <Image src={cat.cover} alt={cat.title} fill sizes="100vw" className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative z-10 h-full p-7 flex flex-col">
                <span className="label text-gold">0{i + 1}</span>
                <h3 className="display text-bone text-4xl mt-3">{cat.title}</h3>
                <p className="text-bone/60 mt-2 text-sm">{cat.caption}</p>
                <div className="mt-auto space-y-2">
                  {cat.items.slice(0, 3).map((s) => (
                    <div
                      key={s.name}
                      className="flex items-baseline justify-between gap-3 border-t border-bone/10 pt-2 text-sm"
                    >
                      <span className="text-bone/90">{s.name}</span>
                      <span className="label text-gold whitespace-nowrap">{formatPrice(s.price)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <Link href="/services" className="label text-gold inline-flex items-center gap-2">
          Full menu <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
