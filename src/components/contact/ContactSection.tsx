"use client";

import { useState } from "react";

const interests = [
  "Residential",
  "Plots",
  "Land",
  "Commercial",
  "Investment",
] as const;

type Interest = (typeof interests)[number];

const inputBase =
  "peer w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-primary transition-all placeholder:text-transparent focus:border-primary-light focus:bg-elevated focus:outline-none focus:ring-4 focus:ring-black/5";

const floatingLabel =
  "pointer-events-none absolute left-4 top-3.5 text-sm text-muted transition-all peer-focus:-translate-y-6 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary-light peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-primary-light";

export function ContactSection() {
  const [interest, setInterest] = useState<Interest | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send to an email service (Resend / Formspree) once credentials are available.
    setSubmitted(true);
  }

  return (
    <section className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start lg:gap-16">
          <div>
            <p className="section-label">Ready to find your next property?</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              Your Next Opportunity Could Start With One Conversation.
            </h2>
            <p className="mt-6 leading-relaxed text-primary-light">
              Whether you&apos;re buying your first home, searching for land,
              exploring a commercial opportunity or planning your next
              investment, our team is ready to help.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Strategic locations across Telangana",
                "Documentation reviewed before you commit",
                "Guidance from enquiry through to registration",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-primary-light"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                      <path
                        d="M3 8.5 6.2 11.5 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/40 to-transparent"
              aria-hidden
            />
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-primary">
                Tell Us What You&apos;re Looking For.
              </h3>
              <p className="mt-2 text-sm text-primary-light">
                We usually respond within one business day.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-background p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                      <path
                        d="M5 13l4 4L19 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="mt-4 font-display text-xl font-semibold text-primary">
                    Thank you — we have your details.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-primary-light">
                    Our team will reach out shortly regarding your enquiry.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Name"
                      className={inputBase}
                    />
                    <label htmlFor="name" className={floatingLabel}>
                      Name
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Phone Number"
                        className={inputBase}
                      />
                      <label htmlFor="phone" className={floatingLabel}>
                        Phone Number
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        className={inputBase}
                      />
                      <label htmlFor="email" className={floatingLabel}>
                        Email
                      </label>
                    </div>
                  </div>

                  <fieldset>
                    <legend className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-light">
                      Property Interest
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((option) => {
                        const selected = interest === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setInterest(option)}
                            aria-pressed={selected}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                              selected
                                ? "border-primary bg-elevated text-primary shadow-sm"
                                : "border-border bg-background text-primary-light hover:border-primary-light/30 hover:text-primary"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="interest" value={interest ?? ""} />
                  </fieldset>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Message"
                      className={`${inputBase} resize-y`}
                    />
                    <label htmlFor="message" className={floatingLabel}>
                      Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-button px-6 py-3.5 text-sm font-semibold text-on-button shadow-lg shadow-black/15 transition-all hover:bg-button-hover"
                  >
                    Submit
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      <path
                        d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <p className="text-xs leading-relaxed text-muted">
                    By submitting, you agree to be contacted about property
                    opportunities. We never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
