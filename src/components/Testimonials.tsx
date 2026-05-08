"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";

const quotes = [
  {
    body: "I drive past three salons to get to OLIVE. The cut is the cut, but the hour itself is the reason I come back.",
    author: "Faisal R.",
    branch: "Majan regular",
  },
  {
    body: "Sharp fade, hot towel, an actual conversation if I want it. Twenty dirhams. There&apos;s nothing like it in Dubailand.",
    author: "Ahmed K.",
    branch: "Dubailand",
  },
  {
    body: "Took my son for his first haircut here. They handed him a lollipop and the apron, and made it feel like a small ceremony.",
    author: "Mohammed A.",
    branch: "Ajman",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <Reveal>
          <p className="label text-gold mb-10">— What gentlemen say</p>
        </Reveal>
        <div className="relative min-h-[260px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="display text-bone text-3xl md:text-5xl leading-[1.15] tracking-[-0.01em]"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${quotes[i].body}&rdquo;` }}
              />
              <footer className="mt-10 label text-boneDim">
                <span className="text-bone/90">{quotes[i].author}</span>
                <span className="mx-3 text-gold">·</span>
                <span>{quotes[i].branch}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-12 inline-flex items-center gap-3">
          {quotes.map((_, n) => (
            <button
              key={n}
              aria-label={`Show quote ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-px transition-all ${n === i ? "w-12 bg-gold" : "w-6 bg-bone/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
