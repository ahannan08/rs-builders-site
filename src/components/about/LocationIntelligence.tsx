import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Connectivity",
    items: ["Highways", "ORR", "RRR", "Airport"],
  },
  {
    title: "Infrastructure",
    items: ["Government projects", "Roads", "Urban expansion"],
  },
  {
    title: "Economic Growth",
    items: ["IT hubs", "Industrial corridors", "Pharma zones", "Business centres"],
  },
  {
    title: "Social Infrastructure",
    items: ["Schools", "Hospitals", "Residential communities"],
  },
];

export function LocationIntelligence() {
  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="section-label">Location intelligence</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              We Think Beyond Today&apos;s Map.
            </h2>
            <p className="mt-6 leading-relaxed text-primary-light">
              Our locations are selected with an eye on the future.
            </p>
            <p className="mt-4 leading-relaxed text-primary-light">
              We look for areas influenced by:
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-sm border border-border bg-background p-6">
                  <h3 className="font-display text-lg font-semibold text-primary">
                    {pillar.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-primary-light"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-sm border border-border bg-elevated px-8 py-10 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            The idea is simple
          </p>
          <p className="mt-4 font-display text-2xl leading-snug text-primary sm:text-3xl">
            Find where development is moving.
            <br />
            Identify the opportunity early.
            <br />
            <span className="text-accent">Build for the future.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
