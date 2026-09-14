import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type Status = "Completed" | "Ongoing" | "Upcoming";

type Venture = {
  name: string;
  location: string;
  type: string;
  status: Status;
};

/** Placeholder venture data — replace names, locations and types with the real ventures. */
const ventures: Venture[] = [
  {
    name: "RS Venture 01",
    location: "Location, Telangana",
    type: "Open Plots",
    status: "Completed",
  },
  {
    name: "RS Venture 02",
    location: "Location, Telangana",
    type: "Residential",
    status: "Ongoing",
  },
];

const statusStyles: Record<Status, string> = {
  Completed: "border-border bg-background text-primary-light",
  Ongoing: "border-accent/40 bg-accent/10 text-accent",
  Upcoming: "border-primary/25 bg-primary/10 text-primary",
};

export function OurVentures() {
  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="section-label">Our ventures</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
          A Growing Portfolio Across Telangana.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ventures.map((venture, index) => (
            <Reveal key={venture.name} delay={index * 0.05} className="h-full">
              <article className="flex h-full flex-col rounded-sm border border-border bg-background p-7 transition-colors duration-300 hover:border-accent/35">
                <span
                  className={`self-start rounded-sm border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${statusStyles[venture.status]}`}
                >
                  {venture.status}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">
                  {venture.name}
                </h3>
                <dl className="mt-4 flex-1 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-muted">Location</dt>
                    <dd className="text-primary-light">{venture.location}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted">Type</dt>
                    <dd className="text-primary-light">{venture.type}</dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  View Details
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
