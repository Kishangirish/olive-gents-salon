"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Branches", href: "/#branches" },
  { label: "The House", href: "/#house" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-bone/5" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="group" aria-label="Olive Gents Salon home">
          <Logo variant="nav" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-gold/40 text-gold label hover:bg-gold hover:text-ink transition-colors"
        >
          Book a chair
        </Link>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={clsx("block h-px w-7 bg-bone transition-transform", open && "translate-y-[7px] rotate-45")} />
          <span className={clsx("block h-px w-7 bg-bone transition-opacity", open && "opacity-0")} />
          <span className={clsx("block h-px w-7 bg-bone transition-transform", open && "-translate-y-[7px] -rotate-45")} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-bone/10 bg-ink/95 backdrop-blur"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-2xl text-bone"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-4 bg-gold text-ink label"
              >
                Book a chair
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
