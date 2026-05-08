"use client";

import { branches } from "@/data/branches";
import { Reveal } from "./motion/Reveal";
import { MagneticButton } from "./motion/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="label text-gold mb-6">— Book a chair</p>
          <h2 className="display text-bone text-5xl md:text-7xl">
            Pick a room. <br />
            <span className="display-italic text-olive-light">We&apos;ll keep the kettle on.</span>
          </h2>
          <p className="text-bone/70 mt-8 leading-relaxed">
            Walk-ins are welcome at every branch. To skip the wait, send a
            WhatsApp or call ahead — we&apos;ll hold a chair.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {branches.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.05}>
              <div className="bg-ink border border-bone/10 p-7 h-full flex flex-col">
                <p className="label text-boneDim">0{i + 1} · {b.emirate}</p>
                <h3 className="display text-bone text-2xl mt-2">{b.name}</h3>
                <p className="text-bone/65 text-sm mt-3 leading-relaxed">{b.address}</p>
                <p className="label text-gold mt-4">{b.hours}</p>
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  <MagneticButton
                    href={`https://wa.me/${b.whatsapp}`}
                    variant="olive"
                    external
                    className="!px-5 !py-3 !text-[0.7rem]"
                  >
                    WhatsApp
                  </MagneticButton>
                  <MagneticButton
                    href={`tel:${b.phoneHref}`}
                    variant="ghost"
                    className="!px-5 !py-3 !text-[0.7rem]"
                  >
                    Call
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
