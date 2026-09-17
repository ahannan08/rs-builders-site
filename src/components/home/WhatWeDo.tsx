import openPlotsImage from "@/assets/new.png";
import commercialImage from "@/assets/commercia.png";
import developmentImage from "@/assets/development.png";
import investmentImage from "@/assets/investment_2.png";
import landImage from "@/assets/land.png";
import residentialImage from "@/assets/residential.png";
import { Button } from "@/components/ui/Button";
import { OverlayImageCard } from "@/components/shared/OverlayImageCard";
import { Reveal } from "@/components/ui/Reveal";

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
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <OverlayImageCard
                title={item.title}
                description={item.description}
                image={item.image}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/properties">View Our Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
