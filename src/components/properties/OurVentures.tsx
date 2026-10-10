import Link from "next/link";
import { ventures } from "@/data/ventures";
import { Reveal } from "@/components/ui/Reveal";

export function OurVentures() {
  const venture = ventures[0];

  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-y border-border bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Our ventures</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            A Growing Portfolio Across Telangana.
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-14 max-w-xl">
          <article className="flex flex-col rounded-sm border border-border bg-background p-7 transition-colors duration-300 hover:border-primary-light/25">
            <h3 className="font-display text-xl font-semibold text-primary sm:text-2xl">
              {venture.name} — {venture.tagline}
            </h3>
            <dl className="mt-5 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                <dt className="shrink-0 font-medium text-muted">Location</dt>
                <dd className="text-primary-light">{venture.location}</dd>
              </div>
            </dl>
            <Link
              href={`/properties/${venture.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              View Details
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                <path
                  d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
