import { LocationMapLazy } from "@/components/about/LocationMapLazy";
import { Reveal } from "@/components/ui/Reveal";

export function LocationIntelligence() {
  return (
    <section className="border-t border-border bg-surface pb-0 pt-20 lg:pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Location intelligence</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            We Think Beyond Today&apos;s Map.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 pb-20 lg:pb-28">
          <LocationMapLazy />
        </Reveal>
      </div>
    </section>
  );
}
