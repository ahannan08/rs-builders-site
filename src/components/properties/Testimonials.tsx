"use client";

import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const GOLD = "#c9a227";

type Testimonial = {
  quote: string;
  name: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Good talks, clear communication, and a strong network you can rely on.",
    name: "Abid Hussain",
    rating: 5,
  },
  {
    quote:
      "Clear guidance from the founder — solid plans and exciting ventures.",
    name: "Zain",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5"
          style={{ color: i < rating ? GOLD : "rgba(255,255,255,0.2)" }}
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
    <section className="testimonials-gold relative overflow-hidden border-y border-[#c9a227]/20 bg-[#0a0a0b] py-12 text-white lg:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 120% at 0% 50%, rgba(201, 162, 39, 0.12), transparent 55%), radial-gradient(ellipse 60% 80% at 100% 30%, rgba(201, 162, 39, 0.08), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#c9a227]/50 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          <Reveal className="shrink-0 lg:max-w-xs lg:py-1">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0"
                style={{ backgroundColor: GOLD }}
                aria-hidden
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a227]">
                Customer trust
              </p>
            </div>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              Words from our buyers
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Honest conversations, clear updates, and support you can count on
              — from first enquiry to registration.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0 flex-1">
            <div
              className="flex min-h-[9.5rem] flex-col lg:min-h-[10.5rem]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex-1 overflow-hidden rounded-xl border border-[#c9a227]/25 bg-black/40 shadow-[inset_0_1px_0_rgba(201,162,39,0.15)]">
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {testimonials.map((testimonial, i) => (
                    <figure
                      key={testimonial.name}
                      className="flex w-full shrink-0 flex-col justify-center px-6 py-6 sm:px-8 sm:py-7"
                      aria-hidden={i !== index}
                    >
                      <Stars rating={testimonial.rating} />
                      <blockquote className="mt-3 font-display text-lg leading-snug text-white/95 sm:text-xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <figcaption
                        className="mt-3 text-sm font-semibold"
                        style={{ color: "rgba(201, 162, 39, 0.85)" }}
                      >
                        — {testimonial.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial ${i + 1}`}
                      aria-current={i === index}
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: i === index ? "1.5rem" : "0.25rem",
                        backgroundColor:
                          i === index ? GOLD : "rgba(201, 162, 39, 0.35)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#c9a227]/30 text-[#c9a227] transition-colors hover:border-[#c9a227]/60 hover:bg-[#c9a227]/10"
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
                    className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#c9a227]/30 text-[#c9a227] transition-colors hover:border-[#c9a227]/60 hover:bg-[#c9a227]/10"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}