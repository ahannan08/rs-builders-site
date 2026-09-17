import Image from "next/image";
import bannerImage from "@/assets/banner.png";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden border-b border-border sm:min-h-[580px] lg:min-h-[640px]">
      <Image
        src={bannerImage}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center"
        aria-hidden
      />

      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/40"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[520px] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[580px] lg:min-h-[640px] lg:px-8 lg:py-20">
        <div className="animate-fade-up">
          <p className="section-label mb-4 text-primary-light">Land & Development</p>
          <h1 className="font-display text-5xl font-medium leading-[1.08] tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Dare to Dream.
          </h1>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-primary sm:text-3xl lg:text-4xl">
            We Find the Right Ground for Your Future.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-light">
            Strategic locations. Transparent documentation. Real opportunities.
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-light/90">
            At RS Builders & Developers, we identify emerging growth corridors
            across Telangana and create property opportunities for families,
            home buyers and investors.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/properties">Explore Properties</Button>
            <Button href="/contact" variant="secondary">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
