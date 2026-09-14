import Image, { type StaticImageData } from "next/image";
import iconIdentify from "@/assets/1.png";
import iconEvaluate from "@/assets/2.png";
import iconVerify from "@/assets/3.png";
import iconDevelop from "@/assets/4.png";
import iconDeliver from "@/assets/5.png";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  num: string;
  title: string;
  text: string;
  icon: StaticImageData;
  /** Crop focus for icons whose subject sits off-centre */
  iconPosition?: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Identify",
    text: "We study emerging growth corridors and identify land parcels with strategic potential.",
    icon: iconIdentify,
  },
  {
    num: "02",
    title: "Evaluate",
    text: "Location, connectivity, infrastructure, development trends and surrounding growth are carefully considered.",
    icon: iconEvaluate,
  },
  {
    num: "03",
    title: "Verify",
    text: "Property documentation and relevant legal and regulatory aspects are reviewed through professional processes.",
    icon: iconVerify,
  },
  {
    num: "04",
    title: "Develop",
    text: "We transform selected opportunities into thoughtfully planned property offerings.",
    icon: iconDevelop,
  },
  {
    num: "05",
    title: "Deliver",
    text: "We support customers through the property journey with transparency, guidance and service.",
    icon: iconDeliver,
    iconPosition: "32% 45%",
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
              <li className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[6rem_11rem_1fr] sm:items-center sm:gap-8">
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-surface">
                  <Image
                    src={step.icon}
                    alt=""
                    fill
                    sizes="96px"
                    className="scale-125 object-cover"
                    style={{ objectPosition: step.iconPosition ?? "center" }}
                    aria-hidden
                  />
                </div>

                <div>
                  <span className="font-display text-3xl font-light text-accent/50 transition-colors group-hover:text-accent sm:text-4xl">
                    {step.num}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-primary">
                    {step.title}
                  </h3>
                </div>

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
