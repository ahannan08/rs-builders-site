"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import rsLogo from "@/assets/rs_logo.jpg";

const nav = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="relative sticky top-0 z-50 border-b border-border bg-nav/95 backdrop-blur-md">
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

        <button
          type="button"
          className="p-1 text-primary md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden
          >
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[4.75rem] z-40 bg-black/25 md:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            id={menuId}
            className="absolute left-0 right-0 top-full z-50 border-b border-border bg-nav/98 backdrop-blur-md md:hidden"
            aria-label="Mobile"
          >
            <ul className="mx-auto max-w-6xl px-6 py-3 lg:px-8">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3.5 text-base transition-colors ${
                        active
                          ? "font-semibold text-primary"
                          : "text-primary-light hover:text-primary"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="border-t border-border pt-3 pb-1">
                <Link
                  href="/contact"
                  className="block py-3.5 text-base font-semibold text-primary"
                  onClick={closeMenu}
                >
                  Talk to an Expert
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
