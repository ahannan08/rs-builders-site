import Image from "next/image";
import aboutBanner from "@/assets/about.png";

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden border-b border-border text-white">
      <Image
        src={aboutBanner}
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
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.25) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="animate-fade-up">
            <p className="section-label">About RS Builders & Developers</p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
              Building Trust Since 2018.
            </h1>
            <p className="mt-6 leading-relaxed text-white/75">
              RS Builders & Developers was founded with a simple belief:
            </p>
            <p className="mt-4 border-l-2 border-accent pl-5 font-display text-2xl leading-snug text-white sm:text-3xl">
              The right property begins with the right location, the right
              documentation and the right people behind it.
            </p>
          </div>

          <div className="lg:pt-6">
            <p className="leading-relaxed text-white/80">
              Since 2018, we have worked across Telangana to identify and
              develop property opportunities across residential, commercial,
              land and investment segments.
            </p>
            <p className="mt-4 leading-relaxed text-white/80">
              Today, our journey includes 6+ ventures and 500+ customers,
              supported by a growing team focused on responsible property
              development and transparent customer service.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Ventures
                </dt>
                <dd className="mt-2 font-display text-4xl font-semibold text-accent">
                  6+
                </dd>
              </div>
              <div className="rounded-sm border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Customers
                </dt>
                <dd className="mt-2 font-display text-4xl font-semibold text-accent">
                  500+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
