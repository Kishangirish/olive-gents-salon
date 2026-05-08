import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { branches, getBranch } from "@/data/branches";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBranch(slug);
  if (!b) return { title: "Branch" };
  return {
    title: b.name,
    description: `OLIVE Gents Salon ${b.name} — ${b.address}. ${b.hours}. Call ${b.phone}.`,
  };
}

export default async function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBranch(slug);
  if (!b) notFound();

  const others = branches.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="bg-ink">
        <section className="relative h-[80svh] min-h-[600px] w-full overflow-hidden">
          <Image src={b.hero} alt={b.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
          <div className="absolute inset-0 mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-16">
            <Link href="/#branches" className="label text-bone/70 hover:text-gold inline-flex items-center gap-2 mb-6">
              <span aria-hidden>←</span> All branches
            </Link>
            <p className="label text-gold mb-4">— {b.emirate}</p>
            <h1 className="display text-bone text-6xl md:text-8xl max-w-4xl">{b.name}</h1>
            <p className="text-bone/75 mt-6 max-w-xl leading-relaxed">{b.blurb}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label text-gold mb-5">Address</p>
              <p className="text-bone text-lg leading-relaxed">{b.address}</p>
              <a
                href={b.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label text-gold mt-5 inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Open in Maps <span aria-hidden>↗</span>
              </a>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-bone/10 pt-8">
                <div>
                  <p className="label text-boneDim mb-2">Hours</p>
                  <p className="text-bone">{b.hoursDetail}</p>
                </div>
                <div>
                  <p className="label text-boneDim mb-2">Phone</p>
                  <a href={`tel:${b.phoneHref}`} className="text-bone hover:text-gold">{b.phone}</a>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href={`https://wa.me/${b.whatsapp}`} variant="olive" external>
                  WhatsApp us
                </MagneticButton>
                <MagneticButton href={`tel:${b.phoneHref}`} variant="ghost">
                  Call now
                </MagneticButton>
                {b.freshaUrl && (
                  <MagneticButton href={b.freshaUrl} variant="ghost" external>
                    Book on Fresha
                  </MagneticButton>
                )}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <iframe
                title={`${b.name} on map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(b.mapsQuery)}&output=embed`}
                className="w-full aspect-[4/3] border border-bone/15 grayscale-[40%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-charcoal py-24 border-y border-bone/10">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="label text-gold mb-4">— Other rooms</p>
              <h2 className="display text-bone text-4xl md:text-5xl">Or try one of the others.</h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/branches/${o.slug}`}
                  className="group relative aspect-[4/3] overflow-hidden border border-bone/10"
                >
                  <Image src={o.hero} alt={o.name} fill sizes="33vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="label text-gold">{o.emirate}</p>
                    <p className="display text-bone text-2xl mt-2">{o.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
