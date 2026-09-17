import { Button } from "@/components/ui/Button";

const promises = [
  "Strategic Locations",
  "Professional Due Diligence",
  "Transparent Processes",
  "Competitive Value",
  "Customer Support",
];

export function OurPromise() {
  return (
    <section className="border-t border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="section-label">Our promise</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
          Real Estate With a Clearer Perspective.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-primary-light">
          We aim to make property buying simpler by bringing together:
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {promises.map((promise, index) => (
            <div
              key={promise}
              className="flex h-full flex-col justify-between bg-background p-6 lg:p-7"
            >
              <span className="font-display text-3xl font-light text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-primary">
                {promise}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/properties">Explore Properties</Button>
          <Button href="/contact" variant="secondary">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
}
