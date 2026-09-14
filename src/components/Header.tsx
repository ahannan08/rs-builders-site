"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  active
                    ? "font-semibold text-accent"
                    : "text-primary-light hover:text-accent"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
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
