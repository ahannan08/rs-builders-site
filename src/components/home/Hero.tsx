import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="section-label mb-4">Telangana · Land & Development</p>
          <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Dare to Dream.
          </h1>
          <p className="mt-4 font-display text-3xl font-medium leading-snug text-primary-light sm:text-4xl">
            We Find the Right Ground for Your Future.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-light">
            Strategic locations. Transparent documentation. Real opportunities.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-primary-light">
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
        </div>
        <div className="mt-16 hidden h-px max-w-xl bg-gradient-to-r from-accent via-muted to-transparent lg:block" />
      </div>
    </section>
  );
}
