"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { Venture, VentureGalleryImage } from "@/data/ventures";

type VentureCardProps = {
  venture: Venture;
  images: VentureGalleryImage[];
};

export function VentureCard({ venture, images }: VentureCardProps) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const href = `/properties/${venture.slug}`;
  const count = images.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count],
  );
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (paused || count <= 1) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const timer = window.setInterval(next, 7000);
    return () => window.clearInterval(timer);
  }, [next, paused, count]);

  function goToDetail() {
    router.push(href);
  }

  function stopNav(event: React.MouseEvent) {
    event.stopPropagation();
  }

  if (count === 0) return null;

  const amenityPreview = venture.amenities.slice(0, 3);

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          goToDetail();
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="ventures-card group mx-auto w-full max-w-lg cursor-pointer rounded-xl border border-border bg-surface/95 shadow-lg shadow-black/8 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-primary-light/35 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`${venture.name} — ${venture.tagline}. Open project details.`}
    >
      <div className="overflow-hidden rounded-t-xl">
        <div className="relative aspect-[4/3] w-full bg-elevated">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((image) => (
              <div key={image.src} className="relative h-full w-full shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 512px) 512px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority={image.src === "/plot_1.png"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-primary sm:text-2xl">
          {venture.name}
          <span className="text-primary-light"> — {venture.tagline}</span>
        </h3>

        <dl className="mt-3 text-sm">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <dt className="shrink-0 font-medium text-muted">Location</dt>
            <dd className="text-primary-light">{venture.location}</dd>
          </div>
        </dl>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-primary-light">
          {venture.description}
        </p>

        {amenityPreview.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {amenityPreview.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-primary-light"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-light">
          View Details
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          >
            <path
              d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>

      <div
        className="flex items-center justify-between border-t border-border px-5 py-3 sm:px-6"
        onClick={stopNav}
        onKeyDown={(event) => event.stopPropagation()}
      >
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-muted"
              }`}
            />
          ))}
        </div>
        {count > 1 ? (
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-primary transition-colors hover:border-primary-light/30"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
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
              aria-label="Next image"
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-primary transition-colors hover:border-primary-light/30"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
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
        ) : null}
      </div>
    </article>
  );
}