"use client";

import Image from "next/image";
import { Parallax } from "./motion/Parallax";
import { Reveal } from "./motion/Reveal";

const stats = [
  { n: "5", label: "Chairs across UAE" },
  { n: "9–23", label: "Open every day" },
  { n: "20", label: "AED — a clean cut" },
  { n: "7", label: "Days a week" },
];

export function House() {
  return (
    <section id="house" className="relative bg-charcoal py-28 md:py-40 overflow-hidden grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <Reveal>
            <p className="label text-gold mb-6">— The House</p>
            <h2 className="display text-bone text-5xl md:text-6xl leading-[1.02]">
              A small idea, <br />
              <span className="display-italic text-olive-light">repeated well.</span>
            </h2>
            <p className="text-bone/70 mt-8 leading-relaxed max-w-md">
              OLIVE began with a single chair, a single mirror, and a stubborn
              belief that a haircut should feel like an hour off. Five rooms
              later — across Dubailand, Majan, and now Ajman — the only thing
              we&apos;ve scaled is the care.
            </p>
            <p className="text-bone/70 mt-4 leading-relaxed max-w-md">
              Disposable razors. Fresh towels. English-speaking reception.
              Coffee, if you want it. The rest is craft.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="border-t border-bone/15 pt-5">
                <div className="display text-gold text-4xl md:text-5xl">{s.n}</div>
                <div className="label text-boneDim mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          <Parallax offset={40} className="aspect-[3/4] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
              alt="Chair in a quiet barber room"
              fill
              sizes="(min-width: 768px) 30vw, 50vw"
              className="object-cover"
            />
          </Parallax>
          <Parallax offset={-40} className="aspect-[3/4] relative overflow-hidden mt-10 md:mt-20">
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
              alt="Razor and brush, in detail"
              fill
              sizes="(min-width: 768px) 30vw, 50vw"
              className="object-cover"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
