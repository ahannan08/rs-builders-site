import { Button } from "@/components/ui/Button";

export function FeaturedMessage() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white lg:py-32">
      <div
        className="absolute inset-0 opacity-20 hero-grid invert"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="section-label text-accent">Featured message</p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          Property Is More Than Land.
        </h2>
        <p className="mt-3 font-display text-2xl text-white/80 sm:text-3xl">
          It&apos;s a Decision About Your Future.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Whether you are buying your first property, looking for a place to
          build your home or exploring your next investment, RS Builders &
          Developers helps you make that decision with greater clarity and
          confidence.
        </p>
        <div className="mt-10">
          <Button
            href="/properties"
            className="!bg-accent !text-white hover:!bg-accent-hover"
          >
            Find Your Opportunity
          </Button>
        </div>
      </div>
    </section>
  );
}
