export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  amenities: string[];
  locationHighlights: string[];
};

export type VentureGalleryImage = {
  src: string;
  alt: string;
};

export type VentureGallery = {
  venture: Venture;
  images: VentureGalleryImage[];
};

/** Venture cards on the properties page — add more entries as projects go live. */
export const ventureGalleries: VentureGallery[] = [
  {
    venture: {
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
    images: [
      {
        src: "/plot_1.png",
        alt: "The Crown Villas — aerial view of the plotted development",
      },
      {
        src: "/plot_2.png",
        alt: "The Crown Villas — layout and approach roads",
      },
      {
        src: "/plot_3.png",
        alt: "The Crown Villas — site and surroundings",
      },
    ],
  },
];

export const ventures: Venture[] = ventureGalleries.map((g) => g.venture);

export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug);
}

export function getVentureGalleryBySlug(
  slug: string,
): VentureGallery | undefined {
  return ventureGalleries.find((g) => g.venture.slug === slug);
}
