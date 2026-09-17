"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import rsLogo from "@/assets/rs_logo.jpg";

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
    <header className="sticky top-0 z-50 border-b border-border bg-nav/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0">
            <Image
              src={rsLogo}
              alt="RS Builders & Developers logo"
              fill
              sizes="44px"
              priority
              className="object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-tight text-primary">
              RS Builders
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-light">
              & Developers
            </span>
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
                    ? "font-semibold text-primary"
                    : "text-primary-light hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
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
          className="hidden rounded-sm border border-black bg-button px-4 py-2 text-xs font-semibold uppercase tracking-wider text-on-button transition-colors hover:bg-button-hover md:inline-flex"
        >
          Talk to an Expert
        </Link>
      </div>
    </header>
  );
}
