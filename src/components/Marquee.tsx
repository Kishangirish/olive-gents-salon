"use client";

const items = [
  "Reinvent Yourself",
  "Precision",
  "Craft",
  "Hospitality",
  "Hot Towel",
  "Five Chairs",
  "Open Daily · 9 to 11",
  "Walk-ins Welcome",
];

export function Marquee() {
  return (
    <div
      aria-hidden
      className="relative border-y border-bone/10 bg-charcoal py-8 overflow-hidden"
    >
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_40s_linear_infinite] will-change-transform">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="display text-4xl md:text-6xl text-bone/15 italic tracking-tight"
          >
            {it} <span className="text-gold/60 not-italic"> ✦ </span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
      `}</style>
    </div>
  );
}
