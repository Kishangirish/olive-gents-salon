import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { serviceCategories, formatPrice, PRICE_NOTE } from "@/data/services";

export const metadata: Metadata = {
  title: "Full Menu",
  description:
    "OLIVE Gents Salon — full service menu. Cuts, beards, shaves, color and treatments. Cuts from AED 20.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink pt-32 pb-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Reveal>
            <Link href="/" className="label text-boneDim hover:text-gold inline-flex items-center gap-2 mb-10">
              <span aria-hidden>←</span> Back home
            </Link>
            <p className="label text-gold mb-6">— The Menu</p>
            <h1 className="display text-bone text-6xl md:text-8xl">
              The full <span className="display-italic text-olive-light">menu.</span>
            </h1>
            <p className="text-bone/70 mt-8 max-w-xl leading-relaxed">{PRICE_NOTE}</p>
          </Reveal>

          <div className="mt-20 space-y-20">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.id} as="section" delay={i * 0.04}>
                <div className="grid md:grid-cols-12 gap-10">
                  <div className="md:col-span-4">
                    <p className="label text-gold mb-4">0{i + 1}</p>
                    <h2 className="display text-bone text-4xl md:text-5xl">{cat.title}</h2>
                    <p className="text-boneDim mt-3">{cat.caption}</p>
                  </div>
                  <ul className="md:col-span-8 divide-y divide-bone/10 border-t border-bone/10">
                    {cat.items.map((s) => (
                      <li key={s.name} className="py-5 flex items-start justify-between gap-6">
                        <div>
                          <p className="text-bone text-lg">{s.name}</p>
                          <p className="text-boneDim text-sm mt-1">{s.description}</p>
                          {s.duration && <p className="label text-boneDim mt-2">{s.duration}</p>}
                        </div>
                        <div className="label text-gold whitespace-nowrap text-right">
                          {formatPrice(s.price)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
