import Link from "next/link";
import openPlotsImage from "@/assets/new.png";
import commercialImage from "@/assets/commercia.png";
import developmentImage from "@/assets/development.png";
import investmentImage from "@/assets/investment_2.png";
import landImage from "@/assets/land.png";
import residentialImage from "@/assets/residential.png";
import { WhatWeDoMapBackground } from "@/components/home/WhatWeDoMapBackground";
import { Button } from "@/components/ui/Button";
import { OverlayImageCard } from "@/components/shared/OverlayImageCard";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

const services = [
  {
    title: "Open Plots",
    description:
      "Strategically located plotted developments for those looking to build their dream home or invest for the future.",
    image: openPlotsImage,
  },
  {
    title: "Land Development",
    description:
      "Identifying promising land parcels and transforming them into thoughtfully planned property opportunities.",
    image: developmentImage,
  },
  {
    title: "Residential",
    description:
      "Property opportunities designed around the needs of individuals and families.",
    image: residentialImage,
  },
  {
    title: "Commercial",
    description:
      "Strategically positioned commercial opportunities for businesses and investors.",
    image: commercialImage,
  },
  {
    title: "Land",
    description:
      "Selected land parcels in locations with strong connectivity and development potential.",
    image: landImage,
  },
  {
    title: "Investment Opportunities",
    description:
      "Real-estate opportunities for investors looking beyond today's market and towards tomorrow's growth.",
    image: investmentImage,
  },
];

export function WhatWeDo() {
  return (
    <section className="what-we-do relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      <WhatWeDoMapBackground />

      <div className="relative z-[2] mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal y={20}>
          <div className="max-w-2xl">
            <p className="section-label">What we do</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              Real Estate, Built Around Your Future.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-light">
              From finding the right land to creating residential and commercial
              opportunities, RS Builders & Developers works across multiple
              segments of real estate.
            </p>
          </div>
        </Reveal>

        <RevealStagger
          className="what-we-do__grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.07}
        >
          {services.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <Link
                href="/properties"
                className="block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <OverlayImageCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  interactive
                  minHeightClass="min-h-[280px] sm:min-h-[300px]"
                  className="h-full"
                />
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.08} y={16} className="mt-10">
          <Button href="/properties">View Our Portfolio</Button>
        </Reveal>
      </div>
    </section>
  );
}