"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type Props = {
  variant?: "nav" | "block" | "footer";
  className?: string;
};

/**
 * OLIVE brand mark.
 * Tries /logo.png first (drop the file there to use the real PNG),
 * falls back to /logo.svg (a typeset placeholder).
 */
export function Logo({ variant = "nav", className }: Props) {
  /**
   * Defaults to /logo.svg (the typeset placeholder using brand colours).
   * On mount, probes for /logo.png — if present, uses it automatically.
   * To use the real logo: drop the file at public/logo.png. No code change needed.
   */
  const [src, setSrc] = useState("/logo.svg");

  useEffect(() => {
    let cancelled = false;
    fetch("/logo.png", { method: "HEAD" })
      .then((r) => {
        if (!cancelled && r.ok) setSrc("/logo.png");
      })
      .catch(() => { /* keep svg */ });
    return () => { cancelled = true; };
  }, []);

  const handleError = () => {
    if (src !== "/logo.svg") setSrc("/logo.svg");
  };

  if (variant === "block") {
    return (
      <div className={clsx("inline-flex flex-col items-center", className)}>
        <div className="w-[260px] md:w-[340px] aspect-square bg-white p-6 shadow-[0_30px_120px_-20px_rgba(72,176,64,0.35)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="OLIVE Gents Salon"
            onError={handleError}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={clsx("inline-flex items-center gap-4", className)}>
        <div className="w-14 h-14 bg-white p-1.5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="OLIVE Gents Salon"
            onError={handleError}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className="display text-bone text-3xl tracking-[0.18em]">OLIVE</span>
          <span className="label text-boneDim mt-1">Gents · Salon · UAE</span>
        </div>
      </div>
    );
  }

  // nav variant
  return (
    <div className={clsx("inline-flex items-center gap-3", className)}>
      <div className="w-10 h-10 bg-white p-1 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="OLIVE Gents Salon"
          onError={handleError}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="display text-bone text-xl tracking-[0.18em]">OLIVE</span>
    </div>
  );
}
