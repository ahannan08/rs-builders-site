const stats = [
  { value: "8+", label: "Years", sub: "Experience" },
  { value: "8+", label: "Ventures", sub: null },
  { value: "500+", label: "Customers", sub: null },
  { value: "50+", label: "Customer Testimonials", sub: null },
];

export function TrustBar() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <p className="text-center font-display text-xl text-white/90 sm:text-2xl">
          Built on Trust.{" "}
          <span className="text-accent">Driven by Opportunity.</span>
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl font-semibold text-accent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/90">
                {stat.label}
              </p>
              {stat.sub && (
                <p className="text-xs uppercase tracking-wider text-white/50">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
