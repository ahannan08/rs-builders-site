"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { VentureGalleryImage } from "@/data/ventures";

type VentureDetailGalleryProps = {
  images: VentureGalleryImage[];
  ventureName: string;
};

export function VentureDetailGallery({
  images,
  ventureName,
}: VentureDetailGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count],
  );
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (count <= 1) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const timer = window.setInterval(next, 8000);
    return () => window.clearInterval(timer);
  }, [next, count]);

  if (count === 0) {
    return (
      <div className="flex aspect-[16/10] min-h-[280px] items-center justify-center rounded-xl border border-dashed border-border bg-elevated text-sm text-muted">
        Gallery images coming soon
      </div>
    );
  }

  return (
    <div className="venture-detail-gallery">
      <div className="relative overflow-hidden rounded-xl border border-border bg-elevated shadow-lg shadow-black/10">
        <div className="relative aspect-[16/10] w-full min-h-[min(52vw,520px)] sm:min-h-[400px] lg:min-h-[480px]">
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
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-cover"
                  priority={image.src === images[0]?.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          <span className="font-semibold text-primary">{index + 1}</span>
          <span className="text-primary-light"> / {count}</span>
          <span className="ml-2 hidden sm:inline">
            — {images[index]?.alt.replace(`${ventureName} — `, "")}
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex gap-1.5">
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
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:border-primary-light/30"
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
                aria-label="Next image"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:border-primary-light/30"
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
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}