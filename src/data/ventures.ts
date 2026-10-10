export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  amenities: string[];
  locationHighlights: string[];
};

export const ventures: Venture[] = [
  {
    slug: "crown-villas",
    name: "The Crown Villas",
    tagline: "Luxury Gated Community",
    location: "Jalpally Main Road, near RGI Airport, Hyderabad",
    description:
      "On Infra Crown City is a posh modern gated community on Jalpally Main Road, very close to RGI Airport, Cargo Road, major highways, restaurants and everyday conveniences. Crown City offers commercial and residential plots at an affordable rate — space to build a peaceful home for a peaceful living life.",
    amenities: [
      "Gated community",
      "CCTV surveillance",
      "Drainage system",
      "24-hour security",
      "25 ft wide BT roads",
    ],
    locationHighlights: [
      "RGI Airport",
      "Infosys",
      "RCI Road",
      "Golf Club",
      "Raheja IT Park",
      "Apparel Park",
      "Aerospace Park",
      "Hardware Park",
      "Industrial Area",
      "GMR Township",
      "Novotel Hotel",
      "International schools",
    ],
  },
];

export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug);
}
