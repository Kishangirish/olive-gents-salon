export type Branch = {
  slug: string;
  name: string;
  area: string;
  emirate: "Dubai" | "Ajman";
  address: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  hours: string;
  hoursDetail: string;
  mapsQuery: string;
  mapsUrl: string;
  freshaUrl?: string;
  instagram?: string;
  hero: string;
  blurb: string;
};

export const branches: Branch[] = [
  {
    slug: "dubailand-al-awazi",
    name: "Dubailand — Al Awazi",
    area: "Dubailand Residence Complex",
    emirate: "Dubai",
    address: "Shop 1, Al Awazi Residence, Next to Ajmal Sarah, Near Skycourts, Dubailand",
    phone: "+971 55 928 6613",
    phoneHref: "+971559286613",
    whatsapp: "971559286613",
    hours: "9 AM – 11 PM, daily",
    hoursDetail: "Open every day, 9:00 — 23:00",
    mapsQuery: "Olive Gents Salon Al Awazi Residence Skycourts Dubailand",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Olive+Gents+Salon+Al+Awazi+Residence+Skycourts+Dubailand",
    freshaUrl: "https://www.fresha.com/lvp/olive-gents-salon-dby-Mxbrz4",
    hero: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Our flagship room in the heart of Dubailand — quiet music, leather chairs, and the cleanest cuts in the neighbourhood.",
  },
  {
    slug: "dubailand-turtle-avenue",
    name: "Dubailand — Turtle Avenue",
    area: "DLRC, Skycourts Tower A",
    emirate: "Dubai",
    address: "Turtle Avenue, Shop 15, near Skycourts Tower A, Dubailand",
    phone: "+971 58 585 9038",
    phoneHref: "+971585859038",
    whatsapp: "971585859038",
    hours: "9 AM – 11 PM, daily",
    hoursDetail: "Open every day, 9:00 — 23:00",
    mapsQuery: "Olive Gents Salon Turtle Avenue Skycourts Dubailand",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Olive+Gents+Salon+Turtle+Avenue+Skycourts+Dubailand",
    freshaUrl: "https://www.fresha.com/lvp/olive-gents-salon-dlrc-dby-6QrYze",
    hero: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "A brighter, busier room — built for the morning regulars and the late-evening last-minute walk-ins.",
  },
  {
    slug: "majan-mbz-road",
    name: "Majan — Sheikh MBZ Road",
    area: "Jaleel Holding Building",
    emirate: "Dubai",
    address: "Jaleel Holding Building, Ground Floor, Shop 3, Sheikh Mohammed Bin Zayed Rd, Majan",
    phone: "+971 58 594 6940",
    phoneHref: "+971585946940",
    whatsapp: "971585946940",
    hours: "10 AM – 11 PM, daily",
    hoursDetail: "Open every day, 10:00 — 23:00",
    mapsQuery: "Olive Gents Salon Jaleel Holding Building Majan",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Olive+Gents+Salon+Jaleel+Holding+Building+Majan",
    freshaUrl: "https://www.fresha.com/lvp/olive-gents-salon-majan-shraa-lshykh-mhmd-bn-zyd-dby-8JlYQj",
    hero: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Roadside on the MBZ — easy parking, a long mirror, and the quickest hot-towel shave in Majan.",
  },
  {
    slug: "majan-wadi-al-safa",
    name: "Majan — Wadi Al Safa 3",
    area: "Hadaeq Mohammed Bin Rashid",
    emirate: "Dubai",
    address: "Hadaeq Mohammed Bin Rashid, 20 Street, Wadi Al Safa 3, Majan",
    phone: "+971 58 570 9396",
    phoneHref: "+971585709396",
    whatsapp: "971585709396",
    hours: "9 AM – 11 PM, daily",
    hoursDetail: "Open every day, 9:00 — 23:00",
    mapsQuery: "Olive Gents Salon Wadi Al Safa 3 Majan",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Olive+Gents+Salon+Wadi+Al+Safa+3+Majan",
    hero: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Tucked into the residences — the neighbourhood chair, where regulars know the staff by name.",
  },
  {
    slug: "ajman-emirates-city",
    name: "Ajman — Emirates City",
    area: "Emirates City Mall",
    emirate: "Ajman",
    address: "Emirates City Mall, Ground Floor, Ajman",
    phone: "+971 58 585 9037",
    phoneHref: "+971585859037",
    whatsapp: "971585859037",
    hours: "9 AM – 11 PM, daily",
    hoursDetail: "Open every day, 9:00 — 23:00",
    mapsQuery: "Olive Gents Salon Emirates City Mall Ajman",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Olive+Gents+Salon+Emirates+City+Mall+Ajman",
    instagram: "https://www.instagram.com/olivegentssalonajman/",
    hero: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Our first chair in Ajman — same room, same chairs, same craft, ten minutes off the Emirates Road.",
  },
];

export const getBranch = (slug: string) =>
  branches.find((b) => b.slug === slug);
