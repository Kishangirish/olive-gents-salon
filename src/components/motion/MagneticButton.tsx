"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "gold" | "ghost" | "olive";
  external?: boolean;
};

export function MagneticButton({ children, href, onClick, className, variant = "gold", external }: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.6 });

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.18);
    y.set((e.clientY - cy) * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = clsx(
    "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.78rem] uppercase tracking-widest2 font-medium transition-colors will-change-transform",
    variant === "gold" && "bg-gold text-ink hover:bg-bone",
    variant === "olive" && "bg-olive text-bone hover:bg-olive-light hover:text-ink",
    variant === "ghost" && "border border-bone/20 text-bone hover:border-gold hover:text-gold",
    className,
  );

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className={styles}>
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} onMouseMove={handleMove} onMouseLeave={reset} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
