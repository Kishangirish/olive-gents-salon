import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { CursorDot } from "@/components/motion/CursorDot";
import { branches } from "@/data/branches";
import { localBusinessJsonLd } from "@/lib/jsonld";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olivegentssalon.ae"),
  title: {
    default: "OLIVE Gents Salon — Reinvent Yourself · Dubai & Ajman",
    template: "%s · OLIVE Gents Salon",
  },
  description:
    "Reinvent yourself at OLIVE Gents Salon — five chairs across Dubailand, Majan, and Ajman. Cuts, beards, hot-towel shaves. Open every day 9 to 11.",
  openGraph: {
    title: "OLIVE Gents Salon — Reinvent Yourself",
    description:
      "Reinvent yourself. Five chairs, one craft. Cuts, beards, and hot-towel shaves across Dubailand, Majan, and Ajman.",
    type: "website",
    locale: "en_AE",
    siteName: "OLIVE Gents Salon",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased bg-ink text-bone min-h-screen">
        <LenisProvider>{children}</LenisProvider>
        <CursorDot />
        {branches.map((b) => (
          <script
            key={b.slug}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(b)) }}
          />
        ))}
      </body>
    </html>
  );
}
