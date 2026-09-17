import Image from "next/image";
import plotAerial from "@/assets/plot.png";
import { Button } from "@/components/ui/Button";

export function FeaturedMessage() {
  return (
    <section className="relative overflow-hidden bg-background py-24 text-white lg:py-32">
      <Image
        src={plotAerial}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 60% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="section-label">Featured message</p>
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
            className="!bg-button !text-primary hover:!bg-button-hover"
          >
            Find Your Opportunity
          </Button>
        </div>
      </div>
    </section>
  );
}
