import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">
            RS Builders
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
            & Developers
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-primary-light transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-light md:inline-flex"
        >
          Talk to an Expert
        </Link>
      </div>
    </header>
  );
}
