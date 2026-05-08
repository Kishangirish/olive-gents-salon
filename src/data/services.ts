export type Service = {
  name: string;
  description: string;
  price: number | null; // AED — null = TBC pending owner
  duration?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  caption: string;
  cover: string;
  items: Service[];
};

export const PRICE_NOTE =
  "Indicative prices — full menu confirmed in salon. Haircut from AED 20.";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair",
    caption: "Cuts, fades, finishes.",
    cover:
      "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e3?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Men's Haircut", description: "Consultation, cut, wash, finish.", price: 20, duration: "30 min" },
      { name: "Kids' Haircut", description: "Under 12. Same care, smaller chair.", price: null, duration: "25 min" },
      { name: "Head Shave", description: "Razor close, hot towel, balm.", price: null, duration: "25 min" },
      { name: "Wash · Blow-dry · Style", description: "Reset between cuts.", price: null, duration: "20 min" },
    ],
  },
  {
    id: "beard",
    title: "Beard & Shave",
    caption: "From line-up to traditional razor.",
    cover:
      "https://images.unsplash.com/photo-1517163216873-6d3a306f0d75?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Beard Trim", description: "Shape, line, condition.", price: null, duration: "20 min" },
      { name: "Light Beard Trim", description: "Tidy without changing shape.", price: null, duration: "15 min" },
      { name: "Hot Towel Shave", description: "Pre-oil, lather, towel, balm.", price: null, duration: "30 min" },
      { name: "Traditional Shave", description: "Open-blade, the old way.", price: null, duration: "35 min" },
      { name: "Line Up", description: "Sharp edges between cuts.", price: null, duration: "10 min" },
      { name: "Contour Cleaning", description: "Neck, ears, brow detail.", price: null, duration: "15 min" },
      { name: "Beard Color", description: "Natural greys covered, soft fade.", price: null, duration: "30 min" },
    ],
  },
  {
    id: "color",
    title: "Color & Treatments",
    caption: "Tone, condition, restore.",
    cover:
      "https://images.unsplash.com/photo-1622286346003-c1f9b9c6b1e5?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Full Color", description: "Single-tone, scalp to tip.", price: null, duration: "60 min" },
      { name: "Highlights", description: "Subtle dimension, tailored.", price: null, duration: "75 min" },
      { name: "Hair Spa", description: "Deep-condition, scalp massage.", price: null, duration: "45 min" },
      { name: "Keratin Treatment", description: "Smooth, soften, calm frizz.", price: null, duration: "120 min" },
    ],
  },
  {
    id: "premium",
    title: "The Olive Experience",
    caption: "Combos, signature rituals.",
    cover:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Cut + Hot Towel Shave", description: "The classic pairing.", price: null, duration: "55 min" },
      { name: "Cut + Beard Trim", description: "Fresh head, fresh face.", price: null, duration: "45 min" },
      { name: "Full Service", description: "Cut, shave, spa, finish.", price: null, duration: "90 min" },
    ],
  },
];

export const formatPrice = (p: number | null) =>
  p === null ? "Confirm in salon" : `AED ${p}`;
