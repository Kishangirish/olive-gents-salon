"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { branches } from "@/data/branches";
import { Reveal } from "./motion/Reveal";

export function Branches() {
  const reduce = useReducedMotion();

  return (
    <section id="branches" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="flex items-end justify-between gap-10 mb-16 md:mb-24 flex-wrap">
          <div>
            <p className="label text-gold mb-6">— Five Chairs</p>
            <h2 className="display text-bone text-5xl md:text-7xl max-w-3xl">
              Find the room <br />
              <span className="display-italic text-olive-light">closest to you.</span>
            </h2>
          </div>
          <p className="max-w-sm text-bone/60 leading-relaxed">
            Two chairs in Dubailand, two in Majan, one in Ajman. Same craft, same
            chair, same hot towel — pick the one nearest your morning.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="group relative bg-charcoal border border-bone/10 overflow-hidden"
            >
              <Link href={`/branches/${b.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={b.hero}
                    alt={b.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="block w-8 h-px bg-gold" />
                    <span className="label text-gold">0{i + 1}</span>
                  </div>
                  <div className="absolute top-5 right-5">
                    <span className="label text-bone/80">{b.emirate}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="display text-bone text-3xl">{b.name}</h3>
                  <p className="text-boneDim text-sm mt-1">{b.area}</p>
                  <p className="text-bone/70 text-sm mt-4 leading-relaxed line-clamp-3">{b.address}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-bone/10 pt-4">
                    <span className="label text-bone/60">{b.hours}</span>
                    <span className="label text-gold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      View <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
