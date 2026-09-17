const pillars = [
  {
    num: "01",
    title: "Location",
    text: "We look for strategically positioned land parcels in emerging development corridors.",
  },
  {
    num: "02",
    title: "Documentation",
    text: "We place strong emphasis on proper documentation, verification and professional due diligence.",
  },
  {
    num: "03",
    title: "Transparency",
    text: "Clear information and a straightforward process from enquiry to property ownership.",
  },
  {
    num: "04",
    title: "Value",
    text: "We focus on bringing customers well-positioned opportunities at competitive price points.",
  },
];

export function OurDifference() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="section-label">Our difference</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
          Four Things We Don&apos;t Compromise On.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <article
              key={item.num}
              className="flex flex-col bg-surface p-8 lg:p-10"
            >
              <span className="font-display text-5xl font-light text-white/35">
                {item.num}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-light">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
