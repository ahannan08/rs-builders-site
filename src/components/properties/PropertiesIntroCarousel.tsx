"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Venture } from "@/data/ventures";

type PropertiesIntroCarouselProps = {
  venture: Venture;
  ventureImage: string;
  brandBannerSrc?: string;
};

export function PropertiesIntroCarousel({
  venture,
  ventureImage,
  brandBannerSrc = "/prop_banner.png",
}: PropertiesIntroCarouselProps) {
  const [index, setIndex] = useState(0);
  const slideCount = 2;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slideCount),
    [slideCount],
  );
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const timer = window.setInterval(next, 8000);
    return () => window.clearInterval(timer);
  }, [next]);

  const slideMinH =
    "min-h-[min(105vw,620px)] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[min(72vh,720px)] xl:min-h-[760px]";

  return (
    <div className="relative w-full overflow-hidden border-b border-border">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <article className={`relative w-full shrink-0 ${slideMinH}`}>
          <Image
            src={ventureImage}
            alt={`${venture.name} — featured plot`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20"
            aria-hidden
          />
          <div
            className={`relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-20 ${slideMinH}`}
          >
            <div className="max-w-xl text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                Featured venture
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {venture.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-white/90">
                {venture.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {venture.location}. Gated community plots near RGI Airport and
                emerging growth corridors.
              </p>
              <Link
                href={`/properties/${venture.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
              >
                View project details
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
            </div>
          </div>
        </article>

        <article className={`relative w-full shrink-0 ${slideMinH}`}>
          <Image
            src={brandBannerSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/55 to-transparent"
            aria-hidden
          />
          <div
            className={`relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-20 ${slideMinH}`}
          >
            <div className="max-w-xl">
              <p className="section-label">Our property portfolio</p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Find an Opportunity That Fits Your Future.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-light">
                Explore our portfolio across multiple real-estate categories.
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent pb-5 pt-20">
        <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
          <div className="flex gap-2">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={
                  i === 0 ? "Featured venture slide" : "Portfolio slide"
                }
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface text-primary shadow-sm transition-colors hover:border-primary-light/30"
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
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface text-primary shadow-sm transition-colors hover:border-primary-light/30"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                <path
                  d="M6 3l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}