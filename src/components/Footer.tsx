import Link from "next/link";
import { siteContact } from "@/data/contact";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/shared/ContactChannelIcon";

const explore = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Why RS", href: "/#why-rs" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { label: "Residential", href: "/properties" },
  { label: "Plots", href: "/properties" },
  { label: "Land", href: "/properties" },
  { label: "Commercial", href: "/properties" },
  { label: "Investments", href: "/properties" },
];

const socials = [
  {
    label: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
    icon: <PhoneIcon />,
    external: false,
  },
  {
    label: "WhatsApp",
    href: siteContact.whatsappHref,
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: siteContact.email,
    href: `mailto:${siteContact.email}`,
    icon: <EmailIcon />,
    external: false,
  },
  {
    label: "Instagram",
    href: siteContact.instagramHref,
    icon: <InstagramIcon />,
    external: true,
  },
  {
    label: "Facebook",
    href: siteContact.facebookHref,
    icon: <FacebookIcon />,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-primary">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <p className="font-display text-2xl font-semibold leading-tight">
              RS Builders & Developers
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-light">
              Dare to Dream
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-light">
              Building opportunities. Creating possibilities.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary-light transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted">
              Categories
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary-light transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-start gap-2.5 text-primary-light transition-colors hover:text-primary"
                  >
                    <span className="mt-0.5 shrink-0 text-primary">
                      {item.icon}
                    </span>
                    <span className="min-w-0 break-all">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-primary-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} RS Builders & Developers. All Rights
            Reserved.
          </p>
          <p>
            <a
              href={siteContact.phoneHref}
              className="transition-colors hover:text-primary"
            >
              {siteContact.phoneDisplay}
            </a>
            <span className="mx-2 text-border">|</span>
            <a
              href={`mailto:${siteContact.email}`}
              className="transition-colors hover:text-primary"
            >
              {siteContact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}