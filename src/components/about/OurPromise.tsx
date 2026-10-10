import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

type PromiseItem = {
  title: string;
  image: string | StaticImageData;
  icon: ReactNode;
  objectPosition?: string;
};

/** White icons for on-image labels (currentColor inherits from parent). */
const iconClass = "h-7 w-7 text-white";

const promises: PromiseItem[] = [
  {
    title: "Strategic Locations",
    image: "/loca.png",
    objectPosition: "50% 35%",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <path
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Transparent Processes",
    image: "/law.png",
    objectPosition: "50% 40%",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <circle
          cx="11"
          cy="11"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m16 16 5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Competitive Value",
    image: "/competative.png",
    objectPosition: "50% 40%",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <path
          d="M4 18V6M4 18h16M8 16V11M12 16V8M16 16v-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Customer Support",
    image: "/cus2.png",
    objectPosition: "50% 28%",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <path
          d="M4 11v3a3 3 0 0 0 3 3h1v3l3.5-2.5H16a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function PromiseCard({
  title,
  image,
  icon,
  objectPosition = "center",
}: {
  title: string;
  image: string | StaticImageData;
  icon: ReactNode;
  objectPosition?: string;
}) {
  return (
    <article className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
      <div className="absolute inset-0 overflow-hidden bg-neutral-800">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition }}
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
        <span
          className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-sm"
          aria-hidden
        >
          {icon}
        </span>
        <h3 className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
          {title}
        </h3>
      </div>
    </article>
  );
}

export function OurPromise() {
  return (
    <section className="bg-surface pb-20 pt-0 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Our promise</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Real Estate With a Clearer Perspective.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-light">
            We aim to make property buying simpler by bringing together:
          </p>
        </Reveal>

        <RevealStagger
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-4"
          stagger={0.08}
        >
          {promises.map((promise) => (
            <RevealItem key={promise.title} className="group h-full min-w-0">
              <PromiseCard
                title={promise.title}
                image={promise.image}
                icon={promise.icon}
                objectPosition={promise.objectPosition}
              />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal
          delay={0.1}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="/properties">Explore Properties</Button>
          <Button href="/contact" variant="secondary">
            Talk to an Expert
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
