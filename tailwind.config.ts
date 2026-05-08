import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        charcoal: "#141414",
        graphite: "#1F1F1F",
        bone: "#EDE7DA",
        boneDim: "#A39E92",
        olive: {
          DEFAULT: "#48B040",  /* logo brand green */
          deep: "#2C7028",
          light: "#72C468",
          muted: "#3A8A34",
        },
        gold: {
          DEFAULT: "#A08B3C",  /* logo warm brass-gold */
          deep: "#6E6028",
          light: "#C4AA5E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;
