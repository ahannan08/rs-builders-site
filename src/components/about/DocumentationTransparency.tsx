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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="section-label">Documentation & transparency</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              Your Confidence Starts With Clear Documentation.
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="leading-relaxed text-primary-light">
              Real estate is a major decision. We believe customers deserve
              clarity before they commit.
            </p>
            <p className="mt-4 leading-relaxed text-primary-light">
              Our property evaluation process focuses on appropriate
              documentation and professional verification, including relevant
              checks such as:
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-sm border border-border bg-surface p-6 sm:p-8 lg:mt-14">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-primary-light"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-light"
                  aria-hidden
                >
                  <path
                    d="M3 8.5 L6.2 11.5 L13 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-sm border-l-2 border-primary-light bg-surface px-8 py-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Our principle
          </p>
          <p className="mt-3 font-display text-2xl leading-snug text-primary sm:text-3xl">
            Clear documentation. Clear communication. Clear decisions.
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
          All approvals, registrations and legal claims are subject to the
          applicable project and governing authority requirements.
        </p>
      </div>
    </section>
  );
}
