import Link from "next/link";
import type { Venture } from "@/data/ventures";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type VentureDetailProps = {
  venture: Venture;
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[4/3] flex-col items-center justify-center rounded-sm border border-dashed border-border bg-elevated px-6 text-center"
      aria-label={`${label} — image placeholder`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-muted/50"
        aria-hidden
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
        <path
          d="m5 17 5.5-5 3 2.5L16 11l3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm text-primary-light">Image coming soon</p>
    </div>
  );
}

export function VentureDetail({ venture }: VentureDetailProps) {
  const title = `${venture.name} — ${venture.tagline}`;

  return (
    <article className="border-b border-border bg-background">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-12">
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
            <p className="section-label mt-8">Our ventures</p>
            <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-primary-light">
              <span className="font-semibold text-primary">Location:</span>{" "}
              {venture.location}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <ImagePlaceholder label="Project gallery 1" />
            <ImagePlaceholder label="Project gallery 2" />
            <ImagePlaceholder label="Layout / master plan" />
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-14 max-w-3xl">
          <h2 className="font-display text-3xl font-medium text-primary sm:text-4xl">
            About the project
          </h2>
          <p className="mt-5 leading-relaxed text-primary-light">
            {venture.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.06}>
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

          <Reveal delay={0.1}>
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

        <Reveal delay={0.12} className="mt-16 rounded-sm border border-border bg-surface p-8 sm:p-10">
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
