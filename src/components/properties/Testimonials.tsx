"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import cusImage from "@/assets/cus.png";

type Testimonial = {
  quote: string;
  name: string;
  rating: number;
};

/** Placeholder testimonials — replace with the customers' own words. */
const testimonials: Testimonial[] = [
  {
    quote:
      "Customer testimonial goes here — a few lines in the customer's own words about the location and why they chose RS Builders & Developers.",
    name: "Customer Name",
    rating: 5,
  },
  {
    quote:
      "Customer testimonial goes here — a few lines about the documentation process and how clearly everything was explained.",
    name: "Customer Name",
    rating: 5,
  },
  {
    quote:
      "Customer testimonial goes here — a few lines about the support received from enquiry through to registration.",
    name: "Customer Name",
    rating: 5,
  },
  {
    quote:
      "Customer testimonial goes here — a few lines about the value of the plot and confidence in the investment.",
    name: "Customer Name",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-primary" : "text-muted/40"}`}
          aria-hidden
        >
          <path
            d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  );
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  return (
    <section className="relative overflow-hidden border-y border-border py-20 lg:py-28">
      <Image
        src={cusImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/88 to-background/75"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="section-label">Customer trust</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              500+ Customers. 50+ Stories.
            </h2>
            <p className="mt-6 leading-relaxed text-primary-light">
              Real estate is built on relationships.
            </p>
          </div>

          <div
            className="relative min-w-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div>
              <div className="overflow-hidden rounded-sm border border-border bg-surface/95 shadow-sm backdrop-blur-sm">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {testimonials.map((testimonial, i) => (
                    <figure
                      key={i}
                      className="w-full shrink-0 p-8 sm:p-10"
                      aria-hidden={i !== index}
                    >
                      <Stars rating={testimonial.rating} />
                      <blockquote className="mt-5 font-display text-xl leading-snug text-primary sm:text-2xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-6 text-sm font-semibold text-primary-light">
                        — {testimonial.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial ${i + 1}`}
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
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:border-primary-light/30 hover:text-primary"
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
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface text-primary transition-colors hover:border-primary-light/30 hover:text-primary"
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
        </div>
      </div>
    </section>
  );
}
