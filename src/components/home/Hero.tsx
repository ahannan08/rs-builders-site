import { Button } from "@/components/ui/Button";
import { HeroVisualPanel } from "@/components/home/HeroVisualPanel";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-24 xl:gap-14">
        <div className="max-w-xl animate-fade-up lg:max-w-none">
          <p className="section-label mb-4">Land & Development</p>
          <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-primary sm:text-6xl lg:text-6xl xl:text-7xl">
            Dare to Dream.
          </h1>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-primary-light sm:text-3xl xl:text-4xl">
            We Find the Right Ground for Your Future.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-primary-light">
            Strategic locations. Transparent documentation. Real opportunities.
          </p>
          <p className="mt-4 leading-relaxed text-primary-light">
            At RS Builders & Developers, we identify emerging growth corridors
            across Telangana and create property opportunities for families,
            home buyers and investors.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/properties">Explore Properties</Button>
            <Button href="/contact" variant="secondary">
              Talk to an Expert
            </Button>
          </div>
          <div className="mt-12 hidden h-px max-w-md bg-gradient-to-r from-accent via-muted to-transparent lg:block" />
        </div>

        <HeroVisualPanel />
      </div>
    </section>
  );
}
