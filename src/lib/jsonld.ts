import type { Branch } from "@/data/branches";

export function localBusinessJsonLd(b: Branch) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: `OLIVE Gents Salon — ${b.name}`,
    image: b.hero,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: b.emirate,
      addressCountry: "AE",
    },
    telephone: b.phone,
    openingHours: "Mo-Su 09:00-23:00",
    url: `https://olivegentssalon.ae/branches/${b.slug}`,
    sameAs: [b.instagram, b.freshaUrl].filter(Boolean),
  };
}
