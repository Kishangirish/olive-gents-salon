import type { MetadataRoute } from "next";
import { branches } from "@/data/branches";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olivegentssalon.ae";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
    ...branches.map((b) => ({
      url: `${base}/branches/${b.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
