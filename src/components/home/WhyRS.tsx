import { Button } from "@/components/ui/Button";

const locationFactors = [
  "ORR connectivity",
  "Regional Ring Road and upcoming road infrastructure",
  "Airport connectivity",
  "Major highways",
  "Industrial corridors",
  "IT and business hubs",
  "Pharma and industrial zones",
  "Government infrastructure",
  "Upcoming development projects",
  "Educational institutions",
  "Healthcare facilities",
  "Existing and future residential growth",
];

export function WhyRS() {
  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label">Why RS Builders & Developers?</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              We Don&apos;t Just Look at Where a Property Is.
            </h2>
            <p className="mt-2 font-display text-2xl text-accent sm:text-3xl">
              We Look at Where the Location Is Going.
            </p>
            <p className="mt-6 leading-relaxed text-primary-light">
              A property&apos;s potential is influenced by more than its present
              surroundings.
            </p>
            <p className="mt-4 leading-relaxed text-primary-light">
              Our approach focuses on identifying locations connected to the
              next phase of development — infrastructure, connectivity,
              industry, employment, residential expansion and urban growth.
            </p>
            <h3 className="mt-10 text-lg font-semibold text-primary">
              Strategic Location Selection
            </h3>
            <p className="mt-2 text-sm text-primary-light">
              We evaluate locations based on factors such as:
            </p>
            <div className="mt-12">
              <Button href="/about">Discover Our Approach</Button>
            </div>
          </div>
          <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {locationFactors.map((factor) => (
                <li
                  key={factor}
                  className="flex items-start gap-2 text-sm text-primary-light"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
