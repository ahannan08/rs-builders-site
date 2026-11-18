import Link from "next/link";
import type { Venture, VentureGalleryImage } from "@/data/ventures";
import { VentureDetailGallery } from "@/components/properties/VentureDetailGallery";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type VentureDetailProps = {
  venture: Venture;
  images: VentureGalleryImage[];
};

export function VentureDetail({ venture, images }: VentureDetailProps) {
  const title = `${venture.name} — ${venture.tagline}`;

  return (
    <article className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-10">
        <Reveal>
          <Link
            href="/properties#ventures"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-colors hover:text-primary"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
              <path
                d="M10 3 5 8l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to ventures
          </Link>
        </Reveal>

        <Reveal delay={0.04} className="mt-8 max-w-3xl">
          <p className="section-label">Our ventures</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <dl className="mt-5 text-lg">
            <dt className="sr-only">Location</dt>
            <dd className="text-primary-light">
              <span className="font-semibold text-primary">Location</span>
              <span className="mx-2 text-muted" aria-hidden>
                ·
              </span>
              {venture.location}
            </dd>
          </dl>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <VentureDetailGallery images={images} ventureName={venture.name} />
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl border-t border-border px-6 py-14 lg:px-8 lg:py-20">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium text-primary sm:text-4xl">
            About the project
          </h2>
          <p className="mt-5 leading-relaxed text-primary-light">
            {venture.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl font-medium text-primary sm:text-3xl">
              Amenities
            </h2>
            <ul className="mt-6 space-y-3">
              {venture.amenities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-primary-light"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl font-medium text-primary sm:text-3xl">
              Location highlights
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {venture.locationHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-border bg-surface px-3 py-2 text-sm font-medium text-primary-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 rounded-sm border border-border bg-surface p-8 sm:p-10">
          <h2 className="font-display text-2xl font-medium text-primary">
            Interested in {venture.name}?
          </h2>
          <p className="mt-3 max-w-xl text-primary-light">
            Speak with our team for plot availability, layout details and site
            visit scheduling.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Talk to an Expert</Button>
            <Button href="/contact" variant="secondary">
              Book a Site Visit
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}