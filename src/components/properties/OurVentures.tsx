import { TelanganaOutlineSvg } from "@/components/shared/TelanganaOutlineSvg";
import { ventureGalleries } from "@/data/ventures";
import { VentureCard } from "@/components/properties/VenturesCarousel";
import { Reveal } from "@/components/ui/Reveal";

export function OurVentures() {
  return (
    <section
      id="ventures"
      className="our-ventures relative isolate scroll-mt-24 overflow-hidden border-y border-border py-16 lg:py-24"
    >
      <div className="our-ventures-map" aria-hidden>
        <TelanganaOutlineSvg className="our-ventures-map__svg" />
      </div>

      <div className="relative z-[2] mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Our ventures</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            A Growing Portfolio Across Telangana.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:flex-wrap lg:items-start lg:gap-10">
          {ventureGalleries.map((gallery, i) => (
            <Reveal key={gallery.venture.slug} delay={i * 0.06} className="w-full lg:w-auto">
              <VentureCard venture={gallery.venture} images={gallery.images} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}