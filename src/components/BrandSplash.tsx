"use client";

import { Logo } from "./Logo";
import { Reveal } from "./motion/Reveal";

export function BrandSplash() {
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden grain">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Logo card */}
          <Reveal className="md:col-span-5 flex justify-center md:justify-start">
            <Logo variant="block" />
          </Reveal>

          {/* Tagline */}
          <Reveal delay={0.1} className="md:col-span-7 text-center md:text-left">
            <p className="label text-gold mb-6">— The promise</p>
            <h2 className="display text-bone text-6xl md:text-8xl leading-[0.92] tracking-[-0.025em]">
              Reinvent
              <br />
              <span className="display-italic text-olive-light">yourself.</span>
            </h2>
            <p className="text-bone/70 mt-8 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              An hour in the chair. A new line on the jaw. A clean fade, a fresh
              face — and a different man walks out the door. That&apos;s the work.
              That&apos;s the room. That&apos;s OLIVE.
            </p>
            <div className="mt-10 inline-flex items-center gap-4">
              <span className="block w-16 h-px bg-gold" />
              <span className="label text-boneDim">Five chairs · Open daily</span>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 hairline" />
    </section>
  );
}
