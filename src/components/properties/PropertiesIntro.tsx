import Image from "next/image";
import { HeroVisualPanel } from "@/components/home/HeroVisualPanel";
import { RevealOnLoad } from "@/components/ui/Reveal";

export function PropertiesIntro() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block"
        aria-hidden
      >
        <Image
          src="/prop_banner.png"
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-background/20 via-background/55 to-background"
          aria-hidden
        />
      </div>

      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-20 xl:gap-14">
        <RevealOnLoad className="max-w-xl lg:max-w-none">
          <p className="section-label">Our property portfolio</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] tracking-tight text-primary sm:text-6xl">
            Find an Opportunity That Fits Your Future.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-light">
            Explore our portfolio across multiple real-estate categories.
          </p>
        </RevealOnLoad>

        <RevealOnLoad delay={0.12}>
          <div className="relative mt-10 lg:mt-0">
            <div
              className="pointer-events-none absolute -inset-4 overflow-hidden rounded-3xl lg:hidden"
              aria-hidden
            >
              <Image
                src="/prop_banner.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center opacity-35"
              />
            </div>
            <HeroVisualPanel />
          </div>
        </RevealOnLoad>
      </div>
    </section>
  );
}
