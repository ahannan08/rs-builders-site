import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Open Plots",
    description:
      "Strategically located plotted developments for those looking to build their dream home or invest for the future.",
    icon: (
      <path
        d="M4 20h16M6 16V8l6-4 6 4v8M10 20v-4h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    title: "Land Development",
    description:
      "Identifying promising land parcels and transforming them into thoughtfully planned property opportunities.",
    icon: (
      <path
        d="M3 18l4-6 4 3 5-8 5 11H3z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    title: "Residential",
    description:
      "Property opportunities designed around the needs of individuals and families.",
    icon: (
      <>
        <path d="M12 3L4 10v9h16v-9L12 3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M9 19v-5h6v5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: "Commercial",
    description:
      "Strategically positioned commercial opportunities for businesses and investors.",
    icon: (
      <path
        d="M5 20V6l7-3 7 3v14M9 20v-6h6v6M9 10h2M13 10h2M9 14h2M13 14h2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    title: "Land",
    description:
      "Selected land parcels in locations with strong connectivity and development potential.",
    icon: (
      <path
        d="M4 18h16M6 14l3-8 4 6 3-4 4 6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    title: "Investment Opportunities",
    description:
      "Real-estate opportunities for investors looking beyond today's market and towards tomorrow's growth.",
    icon: (
      <path
        d="M4 16l4-8 4 4 4-6 4 10H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
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
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-sm border border-border bg-surface p-8 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-background text-accent transition-colors group-hover:bg-accent/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-light">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/properties">View Our Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
