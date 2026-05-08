import Link from "next/link";
import { branches } from "@/data/branches";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-bone/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo variant="footer" />
          <p className="display-italic text-olive-light text-2xl mt-6">
            Reinvent yourself.
          </p>
          <p className="text-bone/65 mt-6 max-w-sm leading-relaxed">
            Five rooms across Dubai and Ajman. Open every day, 9 to 11. The
            cut is the cut — the hour is the reason.
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="label text-gold mb-5">Branches</p>
          <ul className="space-y-3">
            {branches.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/branches/${b.slug}`}
                  className="text-bone/80 hover:text-gold transition-colors text-sm"
                >
                  {b.name}
                </Link>
                <span className="text-boneDim text-sm"> · {b.phone}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label text-gold mb-5">Visit</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services" className="text-bone/80 hover:text-gold">Full menu</Link></li>
            <li><Link href="/#branches" className="text-bone/80 hover:text-gold">Find a chair</Link></li>
            <li><Link href="/#contact" className="text-bone/80 hover:text-gold">Book ahead</Link></li>
            <li>
              <a
                href="https://www.instagram.com/olivegentssalonajman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/80 hover:text-gold"
              >
                Instagram ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4 label text-boneDim">
          <span>© {new Date().getFullYear()} OLIVE Gents Salon</span>
          <span>Made with care · UAE</span>
        </div>
      </div>
    </footer>
  );
}
