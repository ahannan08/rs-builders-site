import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">RS Builders & Developers</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Strategic property opportunities across Telangana — built on trust,
            documentation and transparent processes.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-white/80">
          <Link href="/properties" className="hover:text-accent">
            Properties
          </Link>
          <Link href="/services" className="hover:text-accent">
            Services
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} RS Builders & Developers. All rights reserved.
      </div>
    </footer>
  );
}
