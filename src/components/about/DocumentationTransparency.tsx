import { Reveal } from "@/components/ui/Reveal";

const checks = [
  "Title and ownership verification",
  "Previous/link document review",
  "Encumbrance-related checks",
  "Survey and boundary verification",
  "Land-use considerations",
  "Layout and applicable approvals",
  "Legal due diligence",
  "RERA compliance/registration where applicable",
  "Relevant government approvals",
];

export function DocumentationTransparency() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Documentation & transparency</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 rounded-sm border border-border bg-surface p-8 sm:p-10 lg:mt-12">
            <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {checks.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-3 text-base font-medium leading-snug text-primary sm:text-lg"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                    aria-hidden
                  >
                    <path
                      d="M3 8.5 L6.2 11.5 L13 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-sm border-l-2 border-primary-light bg-surface px-8 py-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              Our principle
            </p>
            <p className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
              Clear documentation. Clear communication. Clear decisions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
            All approvals, registrations and legal claims are subject to the
            applicable project and governing authority requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
