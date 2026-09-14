import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Identify",
    text: "We study emerging growth corridors and identify land parcels with strategic potential.",
  },
  {
    num: "02",
    title: "Evaluate",
    text: "Location, connectivity, infrastructure, development trends and surrounding growth are carefully considered.",
  },
  {
    num: "03",
    title: "Verify",
    text: "Property documentation and relevant legal and regulatory aspects are reviewed through professional processes.",
  },
  {
    num: "04",
    title: "Develop",
    text: "We transform selected opportunities into thoughtfully planned property offerings.",
  },
  {
    num: "05",
    title: "Deliver",
    text: "We support customers through the property journey with transparency, guidance and service.",
  },
];

export function OurApproach() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="section-label">Our approach</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
          From Land to Opportunity.
        </h2>

        <ol className="mt-14 border-t border-border">
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.06}>
              <li className="group grid gap-3 border-b border-border py-8 sm:grid-cols-[auto_10rem_1fr] sm:items-baseline sm:gap-8">
                <span className="font-display text-3xl font-light text-accent/50 transition-colors group-hover:text-accent sm:text-4xl">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="max-w-2xl leading-relaxed text-primary-light">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
