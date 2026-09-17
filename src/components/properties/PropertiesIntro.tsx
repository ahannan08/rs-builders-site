import { HeroVisualPanel } from "@/components/home/HeroVisualPanel";

export function PropertiesIntro() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-20 xl:gap-14">
        <div className="max-w-xl animate-fade-up lg:max-w-none">
          <p className="section-label">Our property portfolio</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] tracking-tight text-primary sm:text-6xl">
            Find an Opportunity That Fits Your Future.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-light">
            Explore our portfolio across multiple real-estate categories.
          </p>
        </div>

        <HeroVisualPanel />
      </div>
    </section>
  );
}
