import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type Category = {
  label: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  featured?: boolean;
};

const categories: Category[] = [
  {
    label: "Residential",
    tagline: "Build the home you've always imagined.",
    description:
      "Residential opportunities selected with connectivity, surroundings and future development in mind.",
    cta: "Explore Residential",
    href: "/contact?interest=residential",
  },
  {
    label: "Open Plots",
    tagline: "Your land. Your plans. Your future.",
    description:
      "Thoughtfully positioned plotted opportunities for home builders and investors.",
    cta: "Explore Plots",
    href: "/contact?interest=plots",
  },
  {
    label: "Land",
    tagline: "Land selected with tomorrow in mind.",
    description:
      "Explore land opportunities across strategically identified growth corridors.",
    cta: "Explore Land",
    href: "/contact?interest=land",
  },
  {
    label: "Commercial",
    tagline: "Position your business where growth is happening.",
    description:
      "Commercial opportunities designed for businesses and investors seeking strategic locations.",
    cta: "Explore Commercial",
    href: "/contact?interest=commercial",
  },
  {
    label: "Investment Opportunities",
    tagline: "Don't just invest in property. Invest in potential.",
    description:
      "Explore opportunities selected with location, connectivity and future development in mind.",
    cta: "Explore Investments",
    href: "/contact?interest=investment",
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
              <article
                className={`flex h-full flex-col rounded-sm border p-8 transition-shadow duration-300 ${
                  category.featured
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface shadow-sm hover:shadow-md hover:shadow-primary/5"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    category.featured ? "text-accent" : "text-accent"
                  }`}
                >
                  {category.label}
                </p>
                <h3
                  className={`mt-4 font-display text-2xl font-semibold leading-snug ${
                    category.featured ? "text-white" : "text-primary"
                  }`}
                >
                  {category.tagline}
                </h3>
                <p
                  className={`mt-4 flex-1 text-sm leading-relaxed ${
                    category.featured ? "text-white/75" : "text-primary-light"
                  }`}
                >
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    category.featured
                      ? "text-accent hover:text-accent-hover"
                      : "text-primary hover:text-accent"
                  }`}
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
