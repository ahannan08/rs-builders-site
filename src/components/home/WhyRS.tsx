import Image from "next/image";
import wowImage from "@/assets/wow.png";
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
    <section
      id="why-rs"
      className="relative scroll-mt-24 overflow-hidden border-y border-border py-20 lg:py-28"
    >
      <Image
        src={wowImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 text-white lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="section-label !text-white/75">Why RS Builders & Developers?</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              We Don&apos;t Just Look at Where a Property Is.
            </h2>
            <p className="mt-3 font-display text-3xl font-medium leading-tight text-white/85 sm:text-4xl">
              We Look at Where the Location Is Going.
            </p>
          </div>

          <div className="lg:pt-2">
            <p className="leading-relaxed text-white/85">
              A property&apos;s potential is influenced by more than its present
              surroundings.
            </p>
            <p className="mt-4 leading-relaxed text-white/85">
              Our approach focuses on identifying locations connected to the
              next phase of development — infrastructure, connectivity,
              industry, employment, residential expansion and urban growth.
            </p>
            <h3 className="mt-8 text-lg font-semibold">
              Strategic Location Selection
            </h3>
            <p className="mt-2 text-sm text-white/80">
              We evaluate locations based on factors such as:
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-sm border border-white/15 bg-black/35 p-6 backdrop-blur-sm sm:p-8 lg:mt-14">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {locationFactors.map((factor) => (
              <li
                key={factor}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                  aria-hidden
                />
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Button href="/about">Discover Our Approach</Button>
        </div>
      </div>
    </section>
  );
}
