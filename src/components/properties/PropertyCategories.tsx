import Link from "next/link";
import openPlotsImage from "@/assets/new.png";
import commercialImage from "@/assets/commercia.png";
import investmentImage from "@/assets/investment_2.png";
import landImage from "@/assets/land.png";
import residentialImage from "@/assets/residential.png";
import { OverlayImageCard } from "@/components/shared/OverlayImageCard";
import { Reveal } from "@/components/ui/Reveal";

const categories = [
  {
    label: "Residential",
    tagline: "Build the home you've always imagined.",
    description:
      "Residential opportunities selected with connectivity, surroundings and future development in mind.",
    cta: "Explore Residential",
    href: "/contact?interest=residential",
    image: residentialImage,
  },
  {
    label: "Open Plots",
    tagline: "Your land. Your plans. Your future.",
    description:
      "Thoughtfully positioned plotted opportunities for home builders and investors.",
    cta: "Explore Plots",
    href: "/contact?interest=plots",
    image: openPlotsImage,
  },
  {
    label: "Land",
    tagline: "Land selected with tomorrow in mind.",
    description:
      "Explore land opportunities across strategically identified growth corridors.",
    cta: "Explore Land",
    href: "/contact?interest=land",
    image: landImage,
  },
  {
    label: "Commercial",
    tagline: "Position your business where growth is happening.",
    description:
      "Commercial opportunities designed for businesses and investors seeking strategic locations.",
    cta: "Explore Commercial",
    href: "/contact?interest=commercial",
    image: commercialImage,
  },
  {
    label: "Investment Opportunities",
    tagline: "Don't just invest in property. Invest in potential.",
    description:
      "Explore opportunities selected with location, connectivity and future development in mind.",
    cta: "Explore Investments",
    href: "/contact?interest=investment",
    image: investmentImage,
    featured: true,
  },
];

export function PropertyCategories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal
              key={category.label}
              delay={index * 0.07}
              className={`h-full ${category.featured ? "lg:col-span-2" : ""}`}
            >
              <OverlayImageCard
                label={category.label}
                title={category.tagline}
                description={category.description}
                image={category.image}
                minHeightClass={
                  category.featured ? "min-h-[320px]" : "min-h-[300px]"
                }
                className="h-full"
                footer={
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/80"
                  >
                    {category.cta}
                    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                      <path
                        d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
