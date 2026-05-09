"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    alt: "Barber at work — close crop",
    label: "Precision Sculpting",
    caption: "Every line, every edge — deliberate.",
    span: "col-span-2 row-span-2",
    size: "(min-width: 768px) 40vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    alt: "Hot towel shave preparation",
    label: "Luxury Hot Towel",
    caption: "Steam-opened, blade-sharp.",
    span: "col-span-1 row-span-1",
    size: "(min-width: 768px) 20vw, 50vw",
  },
  {
    src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?auto=format&fit=crop&w=900&q=80",
    alt: "Hair styling tools laid out",
    label: "Hair Therapy",
    caption: "Scalp care, colour, treatment.",
    span: "col-span-1 row-span-1",
    size: "(min-width: 768px) 20vw, 50vw",
  },
];

export function House() {
  const reduce = useReducedMotion();

  return (
    <section id="house" className="relative bg-charcoal py-28 md:py-40 overflow-hidden grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Section header — Stitch style */}
        <Reveal className="mb-16 md:mb-20">
          <p className="label text-gold/80 mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-gold/60" />
            Our Work
          </p>
          <h2 className="display text-bone text-5xl md:text-7xl leading-[0.95]">
            Crafted{" "}
            <span className="display-italic text-olive-light">Masterpieces</span>
          </h2>
          <p className="text-bone/60 mt-5 max-w-xl leading-relaxed">
            We don&apos;t just cut hair — we create looks tailored to you. Modern luxury
            and traditional barbering techniques, seamlessly blended.
          </p>
        </Reveal>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {gallery.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2 aspect-[16/9] md:aspect-[4/3]" : "aspect-[4/3] md:aspect-square"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.size}
                className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="display text-bone text-2xl md:text-3xl">{item.label}</p>
                <p className="label text-bone/60 mt-1">{item.caption}</p>
              </div>
              {/* Green accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-olive scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 mt-16 border border-bone/10">
          {[
            { n: "5", label: "Chairs across UAE" },
            { n: "4.9", label: "Average rating" },
            { n: "AED 20", label: "Starting price" },
            { n: "9–11", label: "Open every day" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-charcoal px-8 py-8">
              <div className="display text-olive-light text-4xl md:text-5xl">{s.n}</div>
              <div className="label text-boneDim mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
